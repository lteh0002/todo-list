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

    const task_action_el = document.createElement('div')
    task_action_el.classList.add('taskaction')

    const task_edit_el = document.createElement('button')
    task_edit_el.innerText = 'Edit'
    task_edit_el.classList.add('editBtn')

    const task_delete_el = document.createElement('button')
    task_delete_el.innerText = 'Delete'
    task_delete_el.classList.add('deleteBtn')

    task_action_el.appendChild(task_edit_el)
    task_action_el.appendChild(task_delete_el)
    task_content_el.appendChild(task_action_el)

    listContent.appendChild(task_content_el)

    buttonEditFunction(task_edit_el,task_input_el)
    deleteFunction(task_delete_el)
    
}

function buttonEditFunction (task_edit_el, task_input_el) {
    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() === 'edit') {
            task_edit_el.innerText = "Save"
            task_input_el.readOnly = false
            task_input_el.focus()
        } else if (task_edit_el.innerText.toLowerCase() === 'save') {
            editObjectProperty()
            task_edit_el.innerText = "Edit"
            task_input_el.readOnly = "true"
        }
    })
}

function deleteFunction(task_delete_el) {
        let allDeleteBtn = document.querySelectorAll('.deleteBtn')
        allDeleteBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                let deleteBtnNumber = Array.from(allDeleteBtn).indexOf(e.target)
                allTask.splice(deleteBtnNumber,1)
                console.log(allTask)
            })
        })
}



function editObjectProperty() {
    let allEditBtn = document.querySelectorAll('.editBtn')
    allEditBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let editBtnNumber = Array.from(allEditBtn).indexOf(e.target)
            let allInput = document.querySelectorAll('.text')
            allTask[editBtnNumber].task = allInput[editBtnNumber].value
        })
    })
}


function clearTaskbar () {
    form.reset();
}