import { decorate, observable } from "mobx";
import axios from "axios";

class TaskStore {
  tasks = [];

  getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/");
      this.tasks = res.data;
    } catch (error) {
      console.error("TaskStore -> getData -> error", error);
    }
  };

  addTask = async (newTaskName) => {
    try {
      const res = await axios.post("http://localhost:8000/", {
        name: newTaskName,
      });
      this.tasks.push(res.data);
    } catch (error) {
      console.error("TaskStore -> addTask -> error", error);
    }
  };

  handleUpdate = async (task) => {
    try {
      await axios.put(`http://localhost:8000/${task.id}`);
      task.done = !task.done;
    } catch (error) {
      console.error("TaskStore -> handleUpdate-> error", error);
    }
  };
  handleDelete = async (task) => {
    try {
      await axios.put(`http://localhost:8000/delete/${task.id}`);
      this.tasks = this.tasks.filter((tasks) => tasks.id !== task.id);
    } catch (error) {
      console.error("TaskStore -> handleDelete -> error", error);
    }
  };
}

decorate(TaskStore, { tasks: observable });

const taskStore = new TaskStore();
taskStore.getData();
export default taskStore;
