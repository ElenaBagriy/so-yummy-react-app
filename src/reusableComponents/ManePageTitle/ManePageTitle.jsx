import { StyledTitle } from "./ManePageTitle.styled"

export const MainPageTitle = ({title, color = 'title', isLink = false}) => {
    return <StyledTitle color={color} isLink={isLink}>{title}</StyledTitle>
}