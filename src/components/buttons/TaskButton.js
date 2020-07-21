import React from "react";
import { NewTaskButtonStyled } from "./styles";

const TaskButton = ({ openModal }) => {
  return (
    <div>
      <NewTaskButtonStyled onClick={openModal}>New Task</NewTaskButtonStyled>
    </div>
  );
};

export default TaskButton;
