import { useEffect } from 'react';
import { createPortal } from "react-dom";
import { Backdrop, CloseButton, Content, Text, Modal, AccentText, Icon } from './MotivatingModal.styled';
import SVG from '../../images/svg/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const MotivatingModal = ({ option, onClose }) => {
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    const handleOverlayClick = event => {
        if (event.target === event.currentTarget) {
            onClose()
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
                            <AccentText>Wow!</AccentText> You have added the first recipe to your favorites!
                        </Text>
                );
            default:
                return null;
        }
    };
    
    return createPortal(
            <Backdrop onClick={handleOverlayClick}>
            <Modal content={option}>
                <Content>
                    {getContent()}
                    <CloseButton onClick={onClose}>
                        <Icon><use href={`${SVG}#icon-x`} /></Icon>
                    </CloseButton>
                </Content>
                </Modal>
        </Backdrop>
    , modalRoot);
};