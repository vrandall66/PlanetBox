import React from 'react';

const IdeaCard = ({cardInfo, handleDelete}) => {

  return (
    <div>
      <h3>Name: {cardInfo.name}</h3>
      <p>Terrain: {cardInfo.terrain}</p>
      <button
      onClick={() => handleDelete(cardInfo.name)}
      >Delete</button>
    </div>
  )
}

export default IdeaCard;