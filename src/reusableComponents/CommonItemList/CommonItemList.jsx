import { ItemCard } from "reusableComponents/ItemCard/ItemCard"
import { Item, List } from "./CommonItemList.styled"

export const CommonItemList = ({list }) => {
    return <List>
        {list.map(item =>
            <Item key={item._id}>
                <ItemCard item={item} />
            </Item>)}
    </List>
}