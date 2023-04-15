import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 28px;
    flex-wrap: wrap;

    @media screen and (min-width: 768px) {
        gap: 32px;
    };

    @media screen and (min-width: 1280px) {
        column-gap: 14px;
        row-gap: 100px;
    }
`;

export const Item = styled.li`
    position: relative;
    width: 343px;
    height: 323px;
    border-radius: 8px;
    overflow: hidden;

    @media screen and (min-width: 768px) {
        width: calc((100% - 32px) / 2);
    };

    @media screen and (min-width: 1280px) {
        width: calc((100% - 14px) / 4);
    }
`