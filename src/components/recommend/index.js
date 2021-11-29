import React from "react"
import Card from "./Card"

const Cards = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map(card => {
        return <Card {...card} key={card.id} />
      })}
    </div>
  )
}

export default Cards
