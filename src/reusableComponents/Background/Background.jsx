import { StyledDots, StyledSpinach } from "./Background.styled"

export const Background = ({noDots= false}) => {
    return <>
       {!noDots && <StyledDots />} 
        <StyledSpinach/>
    </>
}