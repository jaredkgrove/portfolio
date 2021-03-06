import React from 'react';
import styled from 'styled-components'

 const LineTypeSelector = (props) => {

    const handleClick = (value) => {
        props.handleUpdate(value)
    }

    const isCurrentSetting = value => {
        return value === props.lineType
    }

    return (
        <LineTypeWrapper>
            <LineTypeSvg  selected={isCurrentSetting('Circle')} onClick={() => handleClick('Circle')} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="hsl(207, 20%, 80%)" stroke="hsl(207, 20%, 25%)" strokeWidth="10"/>
            </LineTypeSvg>
            <LineTypeSvg selected={isCurrentSetting('Line')} onClick={() => handleClick('Line')} viewBox="0 0 100 100">
                <line x1="10" y1="10" x2="90" y2="90" stroke="hsl(207, 20%, 25%)" strokeWidth="10" />
            </LineTypeSvg> 
            <LineTypeSvg selected={isCurrentSetting('Rectangle')} onClick={() => handleClick('Rectangle')} viewBox="0 0 100 100">
                <rect x="10" y="15" width="80" height="70" fill="hsl(207, 20%, 80%)" stroke="hsl(207, 20%, 25%)" strokeWidth="10" />
            </LineTypeSvg>
            <LineTypeSvg selected={isCurrentSetting('Polyline')} onClick={() => handleClick('Polyline')} viewBox="0 0 100 100">
                <polyline points="5 4, 6 7, 7 10, 8 13, 9 16, 10 18, 11 20, 12 23, 13 25, 14 27, 15 29, 16 30, 17 32, 18 34, 19 35, 20 36, 21 38, 22 39, 23 40, 24 41, 25 42, 26 43, 27 44, 28 45, 29 45, 30 46, 31 47, 32 47, 33 48, 34 48, 35 48, 36 49, 37 49, 38 49, 39 49, 40 50, 41 50, 42 50, 43 50, 44 50, 45 50, 46 50, 47 50, 48 50, 49 50, 50 50, 51 50, 52 50, 53 50, 54 50, 55 50, 56 50, 57 50, 58 50, 59 50, 60 51, 61 51, 62 51, 63 51, 64 51, 65 52, 66 52, 67 52, 68 53, 69 53, 70 54, 71 55, 72 55, 73 56, 74 57, 75 58, 76 59, 77 60, 78 61, 79 62, 80 63, 81 65, 82 66, 83 68, 84 70, 85 71, 86 73, 87 75, 88 77, 89 80, 90 82, 91 84, 92 87, 93 90, 94 93, 95 96" stroke="hsl(207, 20%, 25%)" strokeWidth="10" fill="transparent"></polyline>
            </LineTypeSvg>
        </LineTypeWrapper>
    )
 }

 export default LineTypeSelector

 const LineTypeWrapper = styled.div`
    

`;

const LineTypeSvg = styled.svg`
    float: left;
    width: 23%;
    border: none;
    outline: none;
    margin: 1%; 
    background: white;
    opacity: ${props => props.selected ? 0.5:1};
`;



