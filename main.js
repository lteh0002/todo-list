(()=>{"use strict";const e=document.querySelector(".add-task-button"),t=document.querySelector("#add-task-input"),n=document.querySelector(".list-content"),d=document.querySelector(".allButton"),c=document.querySelector(".todayButton");d.addEventListener("click",(function(){const e=document.querySelector(".list-content");e.replaceChildren();const t=document.createElement("p");t.textContent="Hi is this working",e.appendChild(t)})),c.addEventListener("click",(function(){const e=document.querySelector(".list-content");e.replaceChildren();const t=document.createElement("p");t.textContent="Hi this is showing today taskg",e.appendChild(t)})),e.addEventListener("click",(e=>{let d=t.value;e.preventDefault(),t.value="",function(e){const t=document.createElement("div");t.classList.add("task-container"),n.appendChild(t);const d=document.createElement("input");d.classList.add("task-text"),d.type="text",d.value=e,d.readOnly=!0,t.appendChild(d);const c=document.createElement("div");c.classList.add("actions");const i=document.createElement("button");i.classList.add("edit"),i.innerText="Edit";const o=document.createElement("button");o.classList.add("delete"),o.innerText="Delete",c.appendChild(i),c.appendChild(o),t.appendChild(c),i.addEventListener("click",(e=>{"edit"==i.innerText.toLowerCase()?(i.innerText="Save",d.removeAttribute("readonly")):(i.innerText="Edit",d.setAttribute("readonly","readonly"),""===d.value&&n.removeChild(t))})),o.addEventListener("click",(e=>{n.removeChild(t)}))}(d)}))})();