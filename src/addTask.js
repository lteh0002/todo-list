import { add } from "date-fns"
import { task } from "./createTask"
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

function addTask() {
    const task_el = document.createElement('div')
    task_el.classList.add('task')

    const task_content_el = document.createElement('div')
    task_content_el.classList.add('task_el')

    task_el.appendChild(task_content_el)

    const task_input_el = document.createElement('input')
    task_input_el.classList.add('text')
    task_input_el.type = 'text'
    task_input_el.value = taskValue
    task_input_el.readOnly = true

    task_content_el.appendChild(task_input_el)

    listContent.appendChild(task_content_el)
    
}

function clearTaskbar () {
    form.reset();
}