import React from 'react';
import IdeaCard from '../IdeaCard/IdeaCard'

const IdeasContainer = ({ideas}) => {
  const displayCards = ideas.map((idea, index) => {
    return <IdeaCard cardInfo={idea} key={index}/>
  })
  return (
    <section>
      {displayCards}
    </section>
  )
}

export default IdeasContainer;