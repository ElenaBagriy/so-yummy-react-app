import ReactPlayer from "react-player";
import styled from "styled-components";

export const PlayerWrapper = styled.div`
    position: relative;
    display: block;
    overflow: hidden;
    border-radius: 8px;
    width: 343px;
    height: 250px;

    @media screen and (min-width: 768px) {
        min-width: 433px;
        height: 332px;
    }
`;

export const PlayerStyled = styled(ReactPlayer)`
    position: absolute;
    top: 0;
    left: 0;
`