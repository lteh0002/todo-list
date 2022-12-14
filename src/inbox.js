export {inboxClick}

const inbox = document.querySelector('.inbox')
const todayTask = document.querySelector('.today')
const listContent = document.querySelector('.list')
function inboxClick() {
    inbox.addEventListener("click", () => {
        inbox.classList.add('active')
        todayTask.classList.remove('active')
        listContent.replaceChildren()
    })
}