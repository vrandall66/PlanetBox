import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard'

const IdeasContainer = ({ideas, handleDelete}) => {
  const displayCards = ideas.map((idea, index) => {
    return <IdeaCard cardInfo={idea} handleDelete={handleDelete} key={index}/>
  })
  return (
    <section>
      {displayCards}
    </section>
  )
}

export default IdeasContainer;