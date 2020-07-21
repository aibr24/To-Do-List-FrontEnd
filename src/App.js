import React, { useState } from "react";
import "./App.css";
import TaskModal from "./components/taskModal";
import TaskButton from "./components/buttons/TaskButton";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <TaskButton openModal={openModal} />
      <TaskModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
}

export default App;
