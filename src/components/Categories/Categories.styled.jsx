import { Tabs } from "@mui/material";
import styled from "styled-components";

export const Section = styled.main`
    position: relative;
`

export const StyledTabs = styled(Tabs)`
  margin-top: 50px;
  padding-left: 19px;
  border-bottom: 1px solid ${props => props.theme.border.grey};

  .MuiTabs-flexContainer {
    gap: 8px;

    @media screen and (min-width: 768px) {
        gap: 35px;
    };

    @media screen and (min-width: 1280px) {
        margin-top: 100px;
        padding-left: 31px;
    };
  };

  .MuiTab-textColorPrimary {
    min-height: auto;
    min-width: auto;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1;
    text-transform: capitalize;
    padding: 10px 10px 32px;
    color: ${props => props.theme.text.grey};

    @media screen and (min-width: 768px) {
        font-size: 18px;
        padding: 10px 10px 28px;
    };
    
    &.Mui-selected {
        color: ${props => props.theme.colors.green};
    };
  };
  
  .MuiTabs-indicator {
    background-color: ${props => props.theme.colors.green};
  };
`

