import React, {useState} from 'react';
import SketchContainer from './SketchContainer';
import SettingsContainer from './settings/SettingsContainer'
import styled from 'styled-components'

const EditView = () => {
        const [settings, setSettings] = useState({lineColor:{h: 0, s: 100, l:50}, lineWidth: '4', lineType: 'Line', fillColor:{h: 0, s: 100, l:50}});
        const updateFillColor= (hue, saturation, light) => setSettings({...settings, fillColor: {h: hue, s: saturation, l: light}})
        const updateLineColor= (hue, saturation, light) => setSettings({...settings, lineColor: {h: hue, s: saturation, l: light}})

        const updateLineWidth = (type) => setSettings({...settings, lineType: type})

        const updateLineType = (width) => setSettings({...settings, lineWidth: width})

        return(
            <EditViewWrapper>
                <SketchContainer settings={settings} />
                <SettingsContainer settings={settings} updateFillColorSetting={updateFillColor} updateLineColorSetting={updateLineColor} updateLineWidthSetting={updateLineWidth} updateLineTypeSetting={updateLineType}/>
            </EditViewWrapper>
        )
}



export default EditView

const EditViewWrapper = styled.div`
    position: absolute;
    top: 8vh;
    width: 100vw
    left: 0px;
`;
