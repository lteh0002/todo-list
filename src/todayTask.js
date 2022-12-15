import { add, format } from "date-fns"
import { addTask, allTask } from "./inputTask"
export { todayClick }

let newTodayTask
const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const listContent = document.querySelector('.list')
const weeklyTask = document.querySelector('.this-week')
const todayDate = format(new Date(), 'yyyy-MM-dd')
function todayClick() {
    todayTask.addEventListener("click", () => {
        listContent.replaceChildren()
        todayTask.classList.add('active')
        inbox.classList.remove('active')
        weeklyTask.classList.remove('active')
        newTodayTask = allTask.filter(task => {
            for (let i = 0; i < allTask.length; i++) {
                return task.dueDate === todayDate 
            }
        })
        if (newTodayTask.length === 0) {
            return
        } else {
            addTask(newTodayTask)
        }
    })
}

