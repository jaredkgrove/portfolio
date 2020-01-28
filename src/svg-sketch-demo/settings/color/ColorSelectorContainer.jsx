import React from 'react';

import HueSelector from './HueSelector'
import SaturationLightnessSelector from './SaturationLightnessSelector'
import styled from 'styled-components'

const ColorSelectorContainer = (props) => {


    return(
        <ColorSelectorWrapper>
            <div style={{flexBasis:'10px'}}>{props.text}</div>
            <SaturationLightnessSelector initColor={props.color} handleChange={props.handleUpdate}/>
            <HueSelector handleChange={props.handleUpdate} initHue={props.color.h}/>
        </ColorSelectorWrapper>
    )
}


export default ColorSelectorContainer

const ColorSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 10px;
    background:  hsl(207, 25%, 20%);
`;