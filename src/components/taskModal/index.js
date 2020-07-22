import React from "react";
import Modal from "react-modal";
import { ModalStyle, CreateButtonStyled } from "./styles";

//store
import taskStore from "../../stores/taskStore";

const TaskModal = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    taskStore.addTask(event.target.name.value);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <h3 style={{ textAlign: "center" }}>Add A New Task</h3>
          <div className="form-group row">
            <div className="col-12">
              <label>Task</label>
              <input
                type="text"
                required
                className="form-control"
                name="name"
              />
            </div>
          </div>
          <CreateButtonStyled className="btn float-right">
            Add
          </CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default TaskModal;
