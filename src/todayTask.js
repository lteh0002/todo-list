import { add, format } from "date-fns"
import { task } from "./createTask"
import { addTask, allTask } from "./inputTask"
export { todayClick }

let newTodayTask
const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const listContent = document.querySelector('.list')
let obj
const todayDate = format(new Date(), 'yyyy-MM-dd')
function todayClick() {
    todayTask.addEventListener("click", () => {
        inbox.classList.remove('active')
        todayTask.classList.add('active')
        listContent.replaceChildren()
        newTodayTask = allTask.filter(task => {
            for (let i = 0; i < allTask.length; i++) {
                return task.dueDate === todayDate 
            }
        })
        addTask(newTodayTask)
    })
}

