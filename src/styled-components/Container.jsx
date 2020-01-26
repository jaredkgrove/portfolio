import '../App.css';
import styled from 'styled-components'

const Container = styled.div`
    padding-left: calc((100vw - 960px) / 2);
    padding-right: calc((100vw - 960px) / 2);
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
    ${props => {
        if (props.fullScreen) return 'height: 100vh;'
    }}
`;

export default Container