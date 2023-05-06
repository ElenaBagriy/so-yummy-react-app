import { useEffect, useState } from 'react';
import { createPortal } from "react-dom";

import { Backdrop, CloseButton, Content, Text, Modal, AccentText, Icon } from './MotivatingModal.styled';
import { useMediaQuery } from '@mui/material';
import SVG from '../../images/svg/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const MotivatingModal = ({ option }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [deviceType, setDeviceType] = useState('');

    const mobile = useMediaQuery('(max-width: 767px)');
    const tablet = useMediaQuery('(min-width: 768px)');
    const desktop = useMediaQuery('(min-width: 1280px)');

     useEffect(() => {
        if (mobile) { setDeviceType('mobile') };
        if (tablet) { setDeviceType('tablet') };
        if (desktop) { setDeviceType('desktop') };
        
     }, [mobile, tablet, desktop, deviceType]);
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                // onClose()
                handleClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    
    const handleClose = () => {
        // onClose()
        setIsVisible(false);
    };

    const handleOverlayClick = event => {
        if (event.target === event.currentTarget) {
            handleClose();
            // onClose()
        }
    };

    const getContent = () => {
        switch (option) {
            case 1:
                return (
                    <Text>
                        <AccentText>Wow!</AccentText> You have created your first shopping list!
                    </Text>
                );
            case 2:
                return (
                        <Text>
                            <AccentText>Wow!</AccentText> You have been using the application for
                            <AccentText> 100 </AccentText>
                            days!
                        </Text>
                );
            case 3:
                return (
                        <Text>
                            <AccentText>Wow!</AccentText> You have added 10 recipes to your
                            favorites!
                        </Text>
                );
            case 4:
                return (
                        <Text>
                            <AccentText>Wow!</AccentText> You have created your first recipe!
                        </Text>
                );
            default:
                return null;
        }
    };
    
    return isVisible && createPortal(
            <Backdrop onClick={handleOverlayClick}>
            <Modal content={option}>
                <Content>
                    {getContent()}
                    <CloseButton onClick={handleClose}>
                        <Icon><use href={`${SVG}#icon-x`} /></Icon>
                    </CloseButton>
                </Content>
                </Modal>
        </Backdrop>
    , modalRoot);
};