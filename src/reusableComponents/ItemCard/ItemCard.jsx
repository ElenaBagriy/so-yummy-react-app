<<<<<<< Updated upstream

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
=======
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import {
//   patchRecipeFavoriteById,
//   patchRecipeLikeById,
// } from 'services/api/recipesAPI';
// import css from './DishCard.module.css';
// import { ReactComponent as FavoriteIco } from './fav.svg';
// import { ReactComponent as LikeIco } from './like.svg';
// import { toast } from 'react-toastify';
// import MotivatingModal from 'reusableComponents/MotivatingModal/MotivatingModal';

import { NavLink } from "react-router-dom";
import { Link } from "./ItemCard.styled";

export const ItemCard = ({item}) => {

    const { title, _id, preview
        //   image,
        //   altText,
        //   text,
        //   favorite,
        //   like,
        //   toogle,
        //   isShow,
        //   id,
        //   allData = [],
        //   setAllData = () => {},
        //   popularity,
    } = item;

//   const maxTextLength = 26;
//   const [isLike, setIsLike] = useState(like);
//   const [isFavorite, setIsFavorite] = useState(favorite);

//   const [isLoadFavorite, setIsLoadFavorite] = useState(false);
//   const [isLoadLike, setIsLoadLike] = useState(false);
//   const [motivation, setMotivation] = useState('');
//   const [popular, setPopular] = useState(popularity);

//   const addToFavorite = () => {
//     setIsLoadFavorite(true);

//     patchRecipeFavoriteById(id)
//       .then(({ favorite, popularity, motivation }) => {
//         setIsLoadFavorite(false);
//         const changeData = allData.map(item => {
//           if (item._id === id) {
//             return { ...item, favorite };
//           }
//           return item;
//         });
//         setAllData(changeData);
//         setPopular(popularity);
//         setIsFavorite(favorite);
//         setMotivation(motivation);
//         favorite && toast.success(`Added to Favorite!`);
//         !favorite && toast.info(`Removed from Favorite!`);
//       })
//       .catch(() => setIsLoadFavorite(false));
//   };

//   const addLike = () => {
//     setIsLoadLike(true);
//     patchRecipeLikeById(id)
//       .then(({ like, popularity }) => {
//         setIsLoadLike(false);

//         const changeData = allData.map(item => {
//           if (item._id === id) {
//             return { ...item, like };
//           }
//           return item;
//         });
//         setAllData(changeData);
//         setPopular(popularity);

//         setIsLike(like);
//       })
//       .catch(() => setIsLoadLike(false));
//   };

//   const favFeel =
//     favorite || isFavorite ? 'var(--secondaryGreenColor)' : 'none';
//   const likeFeel = like || isLike ? 'var(--secondaryGreenColor)' : 'none';
//   const shortText =
//     text.length < maxTextLength
//       ? text
//       : text.substr(0, maxTextLength).replace(/\s+\S*$/, '') + '...';
>>>>>>> Stashed changes

  return (
      <Link onClick={onLinkClick}>
          
          <img src={preview} alt={title} />
<<<<<<< Updated upstream
          <PictureTitle><p>{title}</p></PictureTitle>

          <Tooltip title="Add to favorite">
              <LikeButton id={_id} onClick={addToFavorite}>
                  <Checkbox label='Add to favorite' checked={isFavorite} icon={<Icon />} checkedIcon={<CheckedIcon />} />
              </LikeButton>
          </Tooltip>

=======
          <p>{title}</p>
      {/* {motivation === '10' && <MotivatingModal option={3} />}
      <div className={css.cardContainer}>
        <Link to={`/recipe/${id}`}>
          <img src={image} alt={altText} className={css.image} />
        </Link>
        <button
          onMouseOver={text.length < maxTextLength ? null : toogle}
          className={css.textContainer}
          onClick={text.length < maxTextLength ? null : toogle}
        >
          {isShow ? text : shortText}
        </button>
        <button
          className={css.btnFav}
          type="button"
          onClick={() => {
            if (isLoadFavorite) return;
            addToFavorite();
          }}
        >
          <FavoriteIco className={css.favIco} fill={favFeel} />
        </button>
        <button
          className={css.btnLike}
          type="button"
          onClick={() => {
            if (isLoadLike) return;
            addLike();
          }}
        >
          <LikeIco className={css.likeIco} fill={likeFeel} />
        </button>
        <p className={css.popularity}>{popular}</p> */}
      {/* </div> */}
>>>>>>> Stashed changes
    </Link>
  );
};
