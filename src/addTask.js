import { add } from "date-fns"
import { task } from "./createTask"
export { addTask }

const form = document.querySelector("#add-task-form")
const addTaskBtn = document.querySelector("#add-task-button")
const addTaskInput = document.querySelector("#add-task-input")
const addTaskDueDate = document.querySelector("#add-task-date")
const addTaskPriority = document.querySelector("#priority")
let allTask = []

function addTask() {
    addTaskBtn.addEventListener("click", (e) => {
        e.preventDefault()
        let taskValue = addTaskInput.value;
        let taskDueDate = addTaskDueDate.value
        let taskPriority = addTaskPriority.value
        const userTask = new task(taskValue, taskDueDate, taskPriority)
        allTask.push(userTask)
        clearTaskbar()
    })
}

function clearTaskbar () {
    form.reset();
}