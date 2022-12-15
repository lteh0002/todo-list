import { addDays, format, parseISO } from "date-fns"
import { allTask, addTask } from "./inputTask"
export { weeklyClick }

const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const weeklyTask = document.querySelector('.this-week')
const listContent = document.querySelector('.list')
const todayDate = format(new Date(), 'yyyy-MM-dd')
const newWeekDate = addDays(parseISO(format(new Date(), 'yyyy-MM-dd' )), 7)
const weekDate = format(newWeekDate, 'yyyy-MM-dd' )
let newWeekTask

function weeklyClick() {
    weeklyTask.addEventListener("click", () => {
        listContent.replaceChildren()
        inbox.classList.remove('active')
        todayTask.classList.remove('active')
        weeklyTask.classList.add('active')
        newWeekTask = allTask.filter(task => {
            for (let i = 0; i < allTask.length; i++) {
                if (task.dueDate < weekDate) {
                    return true
                } else {
                    return false
                }
            }
        })
        addTask(newWeekTask)
    })
}
