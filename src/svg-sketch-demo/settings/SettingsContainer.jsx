import React from 'react';
import ColorSelectorContainer from './color/ColorSelectorContainer'
import StrokeSelectorContainer from './stroke/StrokeSelectorContainer'
import styled from 'styled-components'


const SettingsContainer = ({settings, updateLineColorSetting, updateFillColorSetting, updateLineWidthSetting, updateLineTypeSetting}) => {

    const handleLineColorChange = ({h = settings.lineColor.h, s = settings.lineColor.s, l = settings.lineColor.l}) => {
        updateLineColorSetting(h, s, l)
    }

    const handleFillColorChange = ({h = settings.fillColor.h, s = settings.fillColor.s, l = settings.fillColor.l}) => {
        updateFillColorSetting(h, s, l)
    }

    return(
        <SettingsWrapper>
            <ColorSelectorContainer color={settings.lineColor} handleUpdate={handleLineColorChange} text='Line Color'/>
            <ColorSelectorContainer color={settings.fillColor} handleUpdate={handleFillColorChange} text='Fill Color'/>
            <StrokeSelectorContainer settings={settings} updateLineWidthSetting={updateLineWidthSetting} updateLineTypeSetting={updateLineTypeSetting}/>    
        </SettingsWrapper>
    )
}

export default SettingsContainer

const SettingsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    > * {
        flex-basis: 0;
        flex-grow: 1;
    }
`;