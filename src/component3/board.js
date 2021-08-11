import React, { useState } from "react";
import Section1 from "./section1";
import Data from "./data.json";

function Board() {
  const [taskData, setTaskData] = useState(Data.lanes); //all the data
  const [taskNameInput, setTaskNameInput] = useState("");

  const handleChange = (event) => {
    setTaskNameInput(event.target.value);

    // console.log(taskNameInput)
  };

  const addTask = () => {
    if (taskNameInput) {
      let newLane = {
        id: "",
        title: `${taskNameInput}`,
        cards: [],
      };
      setTaskData([...taskData, newLane]);
      console.log("taskData", taskData);
      setTaskNameInput("");
    }
  };

  return (
    <div >
      <h1 className="text-center text-light" >Trello</h1>
      <div className="d-flex m-2 p-2  flex-wrap ">
        {taskData.map((lane, laneIndex) => {
          // console.log(lane)
          return <Section1 lane={lane} laneIndex={laneIndex} />;
        })}

        {/* New Task Adding Section */}

        <div
          className="border bg-light rounded p-1 m-1 text-center text-"
          style={{ height: "fit-content" }}
        >
          <h4>Add New Task</h4>
          <input
            type="text"
            onChange={handleChange}
            value={taskNameInput}
            placeholder="Enter new task title"
          />

          <button className="btn btn-primary m-1" onClick={addTask}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
