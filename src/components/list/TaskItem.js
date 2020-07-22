import React, { useState } from "react";
import { IconContext } from "react-icons";
import { DeleteTaskButtonStyled } from "../buttons/styles";

//Styles
import {
  TaskBorder,
  GrCheckboxStyled,
  GrCheckboxSelectedStyled,
} from "./styles";

//store
import taskStore from "../../stores/taskStore";

const TaskItem = ({ task }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <TaskBorder>
        <div className="row">
          <checkButton
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => taskStore.handleUpdate(task)}
          >
            {hover ? (
              <IconContext.Provider
                value={{
                  color: "blue",
                  size: "3em",
                  className: "global-class-name",
                }}
              >
                <GrCheckboxSelectedStyled />
              </IconContext.Provider>
            ) : (
              <IconContext.Provider
                value={{ size: "3em", className: "global-class-name" }}
              >
                <GrCheckboxStyled />
              </IconContext.Provider>
            )}
          </checkButton>
          <h2>{task.name}</h2>
          <DeleteTaskButtonStyled onClick={() => taskStore.handleDelete(task)}>
            Delete
          </DeleteTaskButtonStyled>
        </div>
      </TaskBorder>
    </>
  );
};

export default TaskItem;
