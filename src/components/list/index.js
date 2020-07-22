import React from "react";

//store
import taskStore from "../../stores/taskStore";

//Components
import TaskItem from "./TaskItem";

//Styles
import { ListWrapper, StyledDiv } from "./styles";
import { observer } from "mobx-react";

const TaskList = () => {
  const todoItem = taskStore.tasks
    .filter((task) => task.done === false)
    .map((task) => <TaskItem task={task} key={task.id} />);

  const doneItem = taskStore.tasks
    .filter((task) => task.done === true)
    .map((task) => <TaskItem task={task} key={task.id} />);

  return (
    <StyledDiv>
      <h3>ToDo :</h3>
      <ListWrapper>{todoItem}</ListWrapper>
      <h3>Done :</h3>
      <ListWrapper>{doneItem}</ListWrapper>
    </StyledDiv>
  );
};

export default observer(TaskList);
