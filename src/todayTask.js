import { add } from "date-fns"
import { allTask } from "./inputTask"
export {todayClick}

let newAllTask = allTask
const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const listContent = document.querySelector('.list')
function todayClick() {
    todayTask.addEventListener("click", () => {
        inbox.classList.remove('active')
        todayTask.classList.add('active')
        listContent.replaceChildren()
        console.log(newAllTask)
    })
}
