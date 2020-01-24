import React, { useRef, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'

function IntroCanvas() {
    const can = useRef(null)
    let ctx = null
    let canvasLineArray = []

    let canvasWidth = null
    let canvasHeight = null
    useEffect(() => {
        if(can.current){
            ctx = can.current.getContext('2d')
            drawBackground()
        }
        return () => {
            ctx = null
        };
    }, [can.current]);

    const drawBackground = () => {
        canvasWidth = can.current.clientWidth
        canvasHeight = can.current.clientHeight
        can.current.width = canvasWidth
        can.current.height = canvasHeight
        let currentY = 0
        let lineWidth = 10
        let color = 'hsl(60,60%,60%)'
        do {
            if(currentY % 20 === 0){
                canvasLineArray.push(new CanvasLine(0 - Math.random()*5000, currentY, lineWidth, color))
            }else{
                canvasLineArray.push(new CanvasLine(canvasWidth + Math.random()*5000, currentY, lineWidth, color))
            }
            currentY += lineWidth
        } while (currentY < canvasHeight);
        // for (let i = 0; i < 100; i++) {
        //     canvasLineArray.push(new CanvasLine(Math.random() * canvasWidth, Math.random() * canvasHeight))
        // }
        // canvasLineArray.push(new CanvasLine(0 - Math.random()*1000, Math.random() * canvasHeight, lineWidth, color))
        animate()
    }


    const animate = () => {
        requestAnimationFrame(animate)
        ctx.clearRect(0,0, canvasWidth, canvasHeight);
        canvasLineArray.forEach((canvasLine) => canvasLine.draw(ctx, canvasWidth, canvasHeight))
    }
    return (    
        <CoolCanvas ref={can} />
    );
}

export default IntroCanvas;

const CoolCanvas = styled.canvas`
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100vh;
    width: 100vw;
    background:grey;
`;


function CanvasLine(x, y, lineWidth, color){
    this.x1 = x;
    this.y1 = y;
    this.lineWidth = lineWidth;
    this.length = 0
    this.color = color
};
   
CanvasLine.prototype.draw = function(ctx, maxX, maxY) {
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);

    if(this.x1 <= 0){
        ctx.lineTo(this.x1 + this.length, this.y1);
    }else{
        ctx.lineTo(this.x1 - this.length, this.y1);
    }

    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.stroke();

    if(this.length - Math.abs(this.x1) > maxX || this.y1 > maxY){
        
    }else{
        this.length += 50
    }
};
   