export function allTasks() {
    const content = document.querySelector(".list-content")

    const test = document.createElement("p")
    test.textContent = "Hi is this working"
    content.appendChild(test)
}