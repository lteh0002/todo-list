import { add } from "date-fns"
import { task } from "./createTask"
import { addTask } from "./addTask"
export { allTask }
export { inputTask }

const form = document.querySelector("#add-task-form")
const addTaskBtn = document.querySelector("#add-task-button")
const addTaskInput = document.querySelector("#add-task-input")
const addTaskDueDate = document.querySelector("#add-task-date")
const addTaskPriority = document.querySelector("#priority")
const listContent = document.querySelector(".list")
let taskValue = ''
let allTask = []

function inputTask() {
    addTaskBtn.addEventListener("click", (e) => {
        e.preventDefault()
        taskValue = addTaskInput.value;
        let taskDueDate = addTaskDueDate.value
        let taskPriority = addTaskPriority.value
        const userTask = new task(taskValue, taskDueDate, taskPriority)
        allTask.push(userTask)
        clearTaskbar()
        addTask()
    })
}

function clearTaskbar () {
    form.reset();
}