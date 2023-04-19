import React from 'react'
import imgUrl from '../../images/Search/needSearching@1x.png';

export default function NeedSearching() {
  return (
    <div>
        <img src={imgUrl} alt="Try looking else" />
        <p>Try looking for something else...</p>
    </div>
  )
}
