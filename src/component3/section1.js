import React, { useState } from "react";
import Card from "./cards";
// import Data from "../components2/data.json";

function Section1({ lane, laneIndex }) {
  // console.log("lane", lane);
  const [section, setSection] = useState(lane);
  const [cards, setCards] = useState(section.cards);
  const [cardName, setCardName] = useState("");
  const [sectionIndex, setSectionIndex] = useState(laneIndex);

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
    // console.log("cardName", cardName);
  };

  const addCard = function () {
    if (cardName) {
      let newCard = {
        id: "Card2",
        title: `${cardName}`,
        description: "Add description...",
      };
      setCards([...cards, newCard]);
    }

    // console.log("cards",cards)
    setCardName("");
  };

  return (
    <div
      className="p-1 m-1 mb-4 border border-danger rounded text-center "
      style={{ height: "100%", backgroundColor: "#E6E6E6" }}
    >
      <h3 className="my-4">{section.title}</h3>
      {cards.map((card, cardIndex) => {
        return (
        <Card props={card} />
        
        );
        
      })}
      {/* New Card Adding Section */}
      <div className="mt-2">
        <input type="text" value={cardName} onChange={handleCardNameChange} />
        <button className="btn btn-success" onClick={() => addCard()}>
          Add List
        </button>
      </div>
    </div>
  );
}

export default Section1;
