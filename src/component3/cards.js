import React, { useState } from "react";

function Cards(props) {
  const [cardInfo, setCardInfo] = useState(props);
  const [description, setDescription] = useState("");

  const discriptionChange = (event) => {
    setDescription(event.target.value);
    // setCardInfo(newCardInfo);
  };

  const addDescription = () => {
    // console.log("cardInfo", cardInfo);

    if (description) {
      let newCardInfo = { ...cardInfo };
      newCardInfo.props.description = description;
      console.log("newCardInfo", newCardInfo);

      setCardInfo(newCardInfo);
      setDescription("");
    }
  };

  return (
    <div
      className="m-1 text-center mt-4 border rounded border-danger bg-light"
      style={{ maxWidth: "260px" }}
    >
      <div class="media text-justify  border  rounded-top bg-white pt-3">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s-kN_razst5S7d0slKsZqwHaHw%26pid%3DApi&f=1"
          class="media-object mx-3 "
          style={{ width: "60px", height: "60px" }}
        />
        <div class="media-body">
          <h4 class="media-heading ">{cardInfo.props.title}</h4>
          <p className="text-sm-left">{cardInfo.props.description}</p>
        </div>
      </div>
      <div className="border m-1">
        <textarea
          type="text"
          value={description}
          className="btn border-secondary mt-0 bg-white"
          rows="auto"
          // cols="23"

          placeholder="Add description..."
          onChange={discriptionChange}
          style={{ width: "83%" }}
        />
        <button
          className="btn btn-outline-info btn-sm mt-4 bg-info text-white"
          onClick={addDescription}
        >
          add
        </button>
      </div>
      {/* <hr/> */}
      {/* <h4>{cardInfo.props.title}</h4>
      <p>{cardInfo.props.description}</p> */}
    </div>
  );
}

export default Cards;
