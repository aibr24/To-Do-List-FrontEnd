import React, { useState } from "react";
import "./App.css";
import TaskModal from "./components/taskModal";
import TaskButton from "./components/buttons/TaskButton";
import TaskList from "./components/list";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Your To-Do List
      </h1>
      <TaskButton openModal={openModal} />
      <TaskModal isOpen={isOpen} closeModal={closeModal} />
      <TaskList />
    </>
  );
}

export default App;
