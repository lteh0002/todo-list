export function todayTask() {
    const content = document.querySelector(".list-content")
    content.replaceChildren()
    
    const test = document.createElement("p")
    test.textContent = "Hi this is showing today taskg"
    content.appendChild(test)
}