

import { NavLink } from "react-router-dom";
import { Link } from "./ItemCard.styled";

export const ItemCard = ({item}) => {

    const { title, _id, preview} = item;

  return (
      <Link to={`/recipe/${_id}`}>
          <img src={preview} alt={title} />
          <p>{title}</p>

    </Link>
  );
};
