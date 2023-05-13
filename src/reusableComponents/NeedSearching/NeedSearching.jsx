import React from 'react';
import pictureDesktop from '../../images/Search/vegetables-desktop.png';
import pictureDesktop2x from '../../images/Search/vegetables-desktop@2x.png';
import pictureTabl from '../../images/Search/vegetables-tablet.png';
import pictureTabl2x from '../../images/Search/vegetables-tablet@2x.png';
import pictureMob from '../../images/Search/vegetables-mob.png';
import pictureMob2x from '../../images/Search/vegetables-mob@2x.png';
import { Text, Wrapp } from './NeedSearching.styled';

export default function NeedSearching({text}) {
  return (
    <Wrapp>
      <picture>
        {/* desktop */}
        <source
          srcSet={`${pictureDesktop} 1x, ${pictureDesktop2x} 2x`}
          media="(min-width: 1440px)"
          type="image/png"
        />

        {/* tablet */}
        <source
          srcSet={`${pictureTabl} 1x, ${pictureTabl2x} 2x`}
          media="(min-width: 768px)"
          type="image/png"
        />

        {/* mobile */}
        <source
          srcSet={`${pictureMob} 1x, ${pictureMob2x} 2x`}
          media="(max-width: 767px)"
          type="image/png"
        />
        <img src={pictureMob} alt="Try looking else" />
      </picture>
      <Text>{text}</Text>
    </Wrapp>
  );
}
