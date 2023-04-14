
// import { toast } from 'react-toastify';
// import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';

import { useNavigate } from "react-router-dom";
import { CheckedIcon, Icon, LikeButton, Link, PictureTitle } from "./ItemCard.styled";
import { Checkbox, Tooltip } from "@mui/material";
import { useState } from "react";
import { RecipesAPI } from "services/api/API";

export const ItemCard = ({item}) => {

    const { title, _id, preview, favorite
        //   image,
        //   altText,
        //   text,
        //   favorite,
        //   like,
        //   toogle,
        //   id,
        //   allData = [],
        //   setAllData = () => {},
        //   popularity,
    } = item;

//   const maxTextLength = 26;

    const [isFavorite, setIsFavorite] = useState(favorite);

    const navigate = useNavigate();

//   const [isLoadFavorite, setIsLoadFavorite] = useState(false);
//   const [motivation, setMotivation] = useState('');

  
    const addToFavorite = () => {
        //     setIsLoading(true);
     
      async function toggleFavorite(id) {
            try {
                const { favorite } = await RecipesAPI.toggleFavoriteRecipesById(id);
                setIsFavorite(favorite);
                //         favorite && toast.success(`Added to Favorite!`);
                //         !favorite && toast.info(`Removed from Favorite!`);
                //         setMotivation(motivation);
            } catch (error) {
                // return alert('Something went wrong!')///Прописать ошибку
            } finally {
                // setIsLoading(false);
            }
        }
      toggleFavorite(_id);
  };

//   const shortText =
//     text.length < maxTextLength
//       ? text
//       : text.substr(0, maxTextLength).replace(/\s+\S*$/, '') + '...';

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


      {/* {motivation === '10' && <MotivatingModal option={3} />}
      <div className={css.cardContainer}>

        <button
          onMouseOver={text.length < maxTextLength ? null : toogle}
          className={css.textContainer}
          onClick={text.length < maxTextLength ? null : toogle}
        >
        </button>
 */}
    </Link>
  );
};
