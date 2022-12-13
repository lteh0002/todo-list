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
let deleteBtnNumber
let editBtnNumber
let priorityNumber

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
    task_input_el.value = allTask[(allTask.length - 1)].task
    task_input_el.readOnly = true

    task_content_el.appendChild(task_input_el)

    const task_date_el = document.createElement('input')
    task_date_el.classList.add('taskDate')
    task_date_el.type = 'date'
    task_date_el.value = allTask[(allTask.length - 1)].dueDate
    task_date_el.readOnly = true
    task_content_el.appendChild(task_date_el)

    const task_priority_el = document.createElement('select')
    task_priority_el.classList.add('selection')
    const priorityPlaceholder = document.createElement('option')
    const priority1 = document.createElement('option')
    priority1.classList.add('prio')
    const priority2 = document.createElement('option')
    priority2.classList.add('prio')
    const priority3 = document.createElement('option')
    priority3.classList.add('prio')

    priority1.value = "High"
    priority1.text = "High"
    priority2.value = "Medium"
    priority2.text = "Medium"
    priority3.value = "Low"
    priority3.text = "Low"

    priorityPlaceholder.text = allTask[(allTask.length - 1)].priority
    if (priorityPlaceholder.text === "High") {
        priority1.selected
    } else if (priorityPlaceholder.text === "Medium") {
        priority2.selected
    } else if (priorityPlaceholder.text === "Medium") {
        priority3.selected
    }
   
    task_priority_el.add(priority1, null)
    task_priority_el.add(priority2, null)
    task_priority_el.add(priority3, null)

    task_priority_el.classList.add('taskPriority')
    task_priority_el.value = allTask[(allTask.length - 1)].priority
    task_priority_el.disabled = true
    task_content_el.appendChild(task_priority_el)

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

    buttonEditFunction(task_edit_el,task_input_el,task_date_el, task_priority_el, priorityPlaceholder)
    editProperty()
    deleteFunction(task_delete_el)
    
}

function buttonEditFunction (task_edit_el, task_input_el, task_date_el, task_priority_el, priorityPlaceholder) {
    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() === 'edit') {
            task_edit_el.innerText = "Save"
            task_input_el.readOnly = false
            task_date_el.readOnly = false
            task_priority_el.disabled = false
            priorityPlaceholder.text = ""
            task_input_el.focus()
        } else if (task_edit_el.innerText.toLowerCase() === 'save') {
            task_edit_el.innerText = "Edit"
            task_input_el.readOnly = true
            task_date_el.readOnly = true
            task_priority_el.disabled = true
            console.log(allTask)
        }
    })
}

function deleteFunction(task_delete_el) {
        let allDeleteBtn = document.querySelectorAll('.deleteBtn')
        allDeleteBtn.forEach(btn => {
            btn.addEventListener("click", (e) => {
                deleteBtnNumber = Array.from(allDeleteBtn).indexOf(e.target)
                return deleteBtnNumber
            })
        })

        task_delete_el.addEventListener("click", function () {
            allTask.splice(deleteBtnNumber, 1)
            listContent.removeChild(this.parentNode.parentNode)
        })
}

function editProperty() {
    let allEditBtn = document.querySelectorAll('.editBtn')
    allEditBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let editBtnNumber = Array.from(allEditBtn).indexOf(e.target)
            editTextProperty(editBtnNumber)
            editDateProperty(editBtnNumber)
            editPriorityProperty(editBtnNumber)
        })
    })
}

function editTextProperty(number) {
    let allInput = document.querySelectorAll('.text')
    allTask[number].task = allInput[number].value
}

function editDateProperty(number) {
    let allDate = document.querySelectorAll('.taskDate')
    allTask[number].dueDate = allDate[number].value
}

function editPriorityProperty(number) {
   let addPriority = document.querySelector('.selection')
   allTask[number].priority = addPriority.value
}

function clearTaskbar () {
    form.reset();
}