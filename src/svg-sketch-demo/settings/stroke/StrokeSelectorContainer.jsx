import React from 'react';
import LineWidthSelector from './lineWidthSelector'
import LineTypeSelector from './lineTypeSelector'
import styled from 'styled-components'

const StrokeSelectorContainer = (props) => {

    const handleLineWidthUpdate = (width) => {
        props.updateLineWidthSetting(width)
    }

    const handleLineTypeUpdate = (type) => {
        props.updateLineTypeSetting(type)
    }

    return(
        <StrokeSelectorWrapper>
            <div>Line Width</div>
            <div className='line-width'>
                <LineWidthSelector handleChange={handleLineWidthUpdate} lineWidth={props.settings.lineWidth}/>
            </div>
            <div>Line Type</div>
            <div className="line-type">
                <LineTypeSelector handleUpdate={handleLineTypeUpdate} lineType={props.settings.lineType}/>
            </div>
        </StrokeSelectorWrapper>
    )
}

export default StrokeSelectorContainer

const StrokeSelectorWrapper = styled.div`
    padding: 5px;
    margin: 0 0 0 0;
    border-radius: 10px;
    background:  hsl(207, 25%, 20%);
    overflow: auto;
`;