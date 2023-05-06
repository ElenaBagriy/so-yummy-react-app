import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipesAPI } from "services/api/API";
import { toast } from 'react-toastify';
import { Checkbox, Tooltip, Typography } from "@mui/material";
import { CheckedIcon, Icon, LikeButton, Link, PictureTitle, StyledPopover } from "./ItemCard.styled";

import defaultImage from '../../images/commonImages/defaultImage@2x.png';
import { MotivatingModal } from "reusableComponents/MotivatingModal/MotivatingModal";

export const ItemCard = ({item}) => {
    const { title, _id, preview, favorite } = item;
    // const [isModalOpen, setIsModalOpen] = useState(false);


    const [isFavorite, setIsFavorite] = useState(favorite);
    const [anchorEl, setAnchorEl] = useState(null);
    const [motivation, setMotivation] = useState(null);
    const navigate = useNavigate();

    const maxTextLength = 22;
    const shortTitle = title.length < maxTextLength ? title : title.substr(0, maxTextLength).replace(/\s+\S*$/, '') + '...';

    const addToFavorite = () => {
        async function toggleFavorite(id) {
            try {
                const { favorite } = await RecipesAPI.toggleFavoriteRecipesById(id);
                setIsFavorite(favorite);

                favorite && toast.success(`Added to Favorite!`);
                setMotivation(1);
                // setIsModalOpen(true)
                !favorite && toast.info(`Removed from Favorite!`);
            } catch (error) {
                return toast.error(`Something went wrong! Please, try again`);
            };
        };
        toggleFavorite(_id);
    };

    // const onCloseModal = () => {
    //     setIsModalOpen(false);
    // }
    
    const onLinkClick = (e) => {
        if (e.target.classList.contains('PrivateSwitchBase-input')) {
            return;
        };
        navigate(`/recipe/${_id}`)
    };
 
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.target);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);  
    
  return ( <>
          {motivation && <MotivatingModal option={motivation}/>}
      <Link onClick={onLinkClick}>
          <img src={preview ? preview : defaultImage} alt={title} />
          <PictureTitle
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => title.length < maxTextLength ? null : handlePopoverOpen(event)}
              onMouseLeave={handlePopoverClose}>
              {shortTitle}
              <StyledPopover
                  id="mouse-over-popover"
                  sx={{ pointerEvents: 'none' }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
                  transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
              >
                  <Typography sx={{ p: 1 }}>{title}</Typography>
              </StyledPopover>
          </PictureTitle>
          <Tooltip title="Add to favorite" placement="right-start">
              <LikeButton id={_id} onClick={addToFavorite}>
                  <Checkbox label='Add to favorite' checked={isFavorite} icon={<Icon />} checkedIcon={<CheckedIcon />} />
              </LikeButton>
          </Tooltip>
      </Link>
      </>
  );
};
