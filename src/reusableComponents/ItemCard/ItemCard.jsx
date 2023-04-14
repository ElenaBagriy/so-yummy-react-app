

import { useNavigate } from "react-router-dom";
import { CheckedIcon, Icon, LikeButton, Link, PictureTitle } from "./ItemCard.styled";
import { Checkbox, Tooltip } from "@mui/material";
import { useState } from "react";
import { RecipesAPI } from "services/api/API";

export const ItemCard = ({item}) => {

    const { title, _id, preview, favorite } = item;

    const [isFavorite, setIsFavorite] = useState(favorite);

    const navigate = useNavigate();
    const addToFavorite = () => {
        //     setIsLoading(true);
     
      async function toggleFavorite(id) {
            try {
                const { favorite } = await RecipesAPI.toggleFavoriteRecipesById(id);
                setIsFavorite(favorite);
            } catch (error) {
                // return alert('Something went wrong!')///Прописать ошибку
            } finally {
                // setIsLoading(false);
            }
        }
      toggleFavorite(_id);
  };

    const onLinkClick = (e) => {
        if (e.target.classList.contains('PrivateSwitchBase-input')) {
            return;
        };
        navigate(`/recipe/${_id}`)

    }

  return (
      <Link onClick={onLinkClick}>
          
          <img src={preview} alt={title} />
          <PictureTitle><p>{title}</p></PictureTitle>

          <Tooltip title="Add to favorite">
              <LikeButton id={_id} onClick={addToFavorite}>
                  <Checkbox label='Add to favorite' checked={isFavorite} icon={<Icon />} checkedIcon={<CheckedIcon />} />
              </LikeButton>
          </Tooltip>

    </Link>
  );
};
