import { allTasks } from "./alltask";
import { todayTask } from "./todaytask";
import { addTask } from "./addTask";

const allButton = document.querySelector(".allButton")
const todayButton = document.querySelector(".todayButton")
allButton.addEventListener("click", allTasks)
todayButton.addEventListener("click", todayTask)

addTask()