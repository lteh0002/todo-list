(()=>{"use strict";function e(e,t,d){this.task=e,this.dueDate=t,this.priority=d}const t=document.querySelector("#add-task-form"),d=document.querySelector("#add-task-button"),a=document.querySelector("#add-task-input"),n=document.querySelector("#add-task-date"),c=document.querySelector("#priority"),s=document.querySelector(".list");let u="",l=[];d.addEventListener("click",(d=>{d.preventDefault(),u=a.value;let o=n.value,r=c.value;const i=new e(u,o,r);l.push(i),t.reset(),function(){const e=document.createElement("div");e.classList.add("task");const t=document.createElement("div");t.classList.add("task_el"),e.appendChild(t);const d=document.createElement("input");d.classList.add("text"),d.type="text",d.value=u,d.readOnly=!0,t.appendChild(d),s.appendChild(t)}()}))})();