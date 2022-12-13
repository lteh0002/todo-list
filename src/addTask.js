export { addTask }
import { allTask } from "./inputTask"

const listContent = document.querySelector(".list")
let deleteBtnNumber
let editBtnNumber

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

    buttonEditFunction(task_edit_el,task_input_el, task_date_el)
    deleteFunction(task_delete_el)
    
}

function buttonEditFunction (task_edit_el, task_input_el, task_date_el) {
    task_edit_el.addEventListener('click', (e) => {
        if (task_edit_el.innerText.toLowerCase() === 'edit') {
            task_edit_el.innerText = "Save"
            task_input_el.readOnly = false
            task_date_el.readOnly = false
            task_input_el.focus()
        } else if (task_edit_el.innerText.toLowerCase() === 'save') {
            editObjectProperty(task_edit_el)
            task_edit_el.innerText = "Edit"
            task_input_el.readOnly = true
            task_date_el.readOnly = true
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

function editObjectProperty(task_edit_el) {
    let allEditBtn = document.querySelectorAll('.editBtn')
    allEditBtn.forEach(btn => {
        btn.addEventListener("click", (e) => {
            let editBtnNumber = Array.from(allEditBtn).indexOf(e.target)
            return editBtnNumber
        })
    })
    
    task_edit_el.addEventListener("click", function() {
        let allTextInput = document.querySelectorAll('.text')
        let allDateInput = document.querySelectorAll('.taskDate')
        allTask[editBtnNumber].task = allTextInput[editBtnNumber].value
        // allTask[editBtnNumber].dueDate = allDateInput[editBtnNumber].value
    })
}
