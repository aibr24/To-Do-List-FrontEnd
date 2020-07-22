import React from "react";

//store
import taskStore from "../../stores/taskStore";

//Components
import TaskItem from "./TaskItem";

//Styles
import { ListWrapper } from "./styles";
import { observer } from "mobx-react";

const TaskList = () => {
  const taskItem = taskStore.tasks.map((task) => (
    <TaskItem task={task} key={task.id} />
  ));

  return (
    <div>
      <ListWrapper>{taskItem}</ListWrapper>
    </div>
  );
};

export default observer(TaskList);
