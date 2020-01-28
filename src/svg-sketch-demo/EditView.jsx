import React, {useState} from 'react';
import SketchContainer from './SketchContainer';
import SettingsContainer from './settings/SettingsContainer'
import styled from 'styled-components'

const EditView = () => {
        const [settings, setSettings] = useState({lineColor:{h: 0, s: 100, l:50}, lineWidth: '4', lineType: 'Line', fillColor:{h: 0, s: 100, l:50}});
        const updateFillColor= (hue, saturation, light) => setSettings({...settings, fillColor: {h: hue, s: saturation, l: light}})
        const updateLineColor= (hue, saturation, light) => setSettings({...settings, lineColor: {h: hue, s: saturation, l: light}})

        const updateLineType= (type) => setSettings({...settings, lineType: type})

        const updateLineWidth = (width) => setSettings({...settings, lineWidth: width})

        return(
            <EditViewWrapper>
                <SketchContainer settings={settings} />
                <SettingsContainer settings={settings} updateFillColorSetting={updateFillColor} updateLineColorSetting={updateLineColor} updateLineWidthSetting={updateLineWidth} updateLineTypeSetting={updateLineType}/>
            </EditViewWrapper>
        )
}



export default EditView

const EditViewWrapper = styled.div`
    position: relative;
    left: 0px;
    height: 100%;
    width: 100%;
`;
