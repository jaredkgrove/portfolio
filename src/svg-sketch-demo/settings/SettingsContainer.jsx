import React, {useState} from 'react';
import ColorSelectorContainer from './color/ColorSelectorContainer'
import StrokeSelectorContainer from './stroke/StrokeSelectorContainer'
import styled from 'styled-components'


const SettingsContainer = ({settings, updateLineColorSetting, updateFillColorSetting, updateLineWidthSetting, updateLineTypeSetting}) => {
    const [settingsVisible, setSettingsVisible] = React.useState(true);

    const handleHamburgerClick = () => {
        setSettingsVisible(!settingsVisible)
    }

    const handleLineColorChange = ({h = settings.lineColor.h, s = settings.lineColor.s, l = settings.lineColor.l}) => {
        updateLineColorSetting(h, s, l)
    }

    const handleFillColorChange = ({h = settings.fillColor.h, s = settings.fillColor.s, l = settings.fillColor.l}) => {
        updateFillColorSetting(h, s, l)
    }

    return(
        <>
        <SettingsWrapper open={settingsVisible}>
            <ColorSelectorContainer color={settings.lineColor} handleUpdate={handleLineColorChange} text='Line Color'/>
            <ColorSelectorContainer color={settings.fillColor} handleUpdate={handleFillColorChange} text='Fill Color'/>
            <StrokeSelectorContainer settings={settings} updateLineWidthSetting={updateLineWidthSetting} updateLineTypeSetting={updateLineTypeSetting}/>    
        </SettingsWrapper>
        <MenuButton className='hamburger' onClick={handleHamburgerClick} open={settingsVisible}>
            <div ></div>
            <div ></div>
        </MenuButton>
        </>
    )
}

export default SettingsContainer

const SettingsWrapper = styled.div`
    font-size: 12px;
    position: absolute;
    left:0px;
    top:0px;
    width: 200px; 
    height: 100%;
    display: flex;
    flex-direction: column;

    > * {
        max-height: 33%;

    }
    background:  hsl(207, 25%, 40%);
    color: white;
    ${props => {if(!props.open) return 'display: none;'}}
`;

const MenuButton = styled.div`
    position: absolute;
    left: ${props => props.open ? '200px':'0px'};
    top:0px;
    padding: ${props => props.open ? '24px 16px':'16px'};
    
    background:  hsl(207, 25%, 40%);
    :hover{
        > div {
            background: white;
        }
    }
    > div {
        width: 25px;
        height: 4px;
        background: black;
    }
    > :nth-child(1) {
        transform: rotate(${props => props.open ? '-45':'45'}deg);
    }
    > :nth-child(2) {
        margin-top: ${props => props.open ? '-4px':'12px'};
        transform: rotate(${props => props.open ? '45':'-45'}deg);
    }


`