export {inboxClick}
import { addTask } from "./inputTask"
import { allTask } from "./inputTask"
import { todayClick } from "./todayTask"
import { weeklyClick } from "./weeklyTask"

const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const weeklyTask = document.querySelector('.this-week')
const listContent = document.querySelector('.list')
function inboxClick() {
    inbox.addEventListener("click", () => {
        listContent.replaceChildren()
        inbox.classList.add('active')
        weeklyTask.classList.remove('active')
        todayTask.classList.remove('active')
        addTask(allTask)
    })
}