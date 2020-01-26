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
                                <SettingsContainer settings={settings} updateFillColorSetting={updateFillColor} updateLineColorSetting={updateLineColor} updateLineWidthSetting={updateLineWidth} updateLineTypeSetting={updateLineType}/>

                <SketchContainer settings={settings} />
            </EditViewWrapper>
        )
}



export default EditView

const EditViewWrapper = styled.div`
    left: 0px;
    background: green;
    height: 100%;
`;
