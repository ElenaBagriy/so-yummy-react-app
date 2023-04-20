import { StyledTitle } from "./ManePageTitle.styled"

export const MainPageTitle = ({title, color = 'title'}) => {
    return <StyledTitle color={color}>{title}</StyledTitle>
}