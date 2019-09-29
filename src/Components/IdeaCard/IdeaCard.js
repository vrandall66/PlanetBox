import React from 'react';

const IdeaCard = ({cardInfo}) => {

  return (
    <div>
      <h3>Name: {cardInfo.name}</h3>
      <p>Terrain: {cardInfo.terrain}</p>
    </div>
  )
}

export default IdeaCard;