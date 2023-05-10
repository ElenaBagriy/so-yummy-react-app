import { PlayerStyled, PlayerWrapper } from './Player.styled';

export const Player = ({ url, src }) => {

    return url && <PlayerWrapper>
        <PlayerStyled
            url={url}
            light={<img src={src} alt='Thumbnail' width={'100%'}/>}
            width='100%'
            height='100%'
        />
    </PlayerWrapper>
};
