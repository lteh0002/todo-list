(()=>{"use strict";function e(e,t,n){this.task=e,this.dueDate=t,this.priority=n}const t=document.querySelector(".list");let n;const d=document.querySelector("#add-task-form"),c=document.querySelector("#add-task-button"),a=document.querySelector("#add-task-input"),r=document.querySelector("#add-task-date"),l=document.querySelector("#priority");document.querySelector(".list");let i="",o=[];c.addEventListener("click",(c=>{c.preventDefault(),i=a.value;let s=r.value,u=l.value;const m=new e(i,s,u);o.push(m),d.reset(),function(){const e=document.createElement("div");e.classList.add("task");const d=document.createElement("div");d.classList.add("task_el"),e.appendChild(d);const c=document.createElement("input");c.classList.add("text"),c.type="text",c.value=o[o.length-1].task,c.readOnly=!0,d.appendChild(c);const a=document.createElement("div");a.classList.add("taskaction");const r=document.createElement("button");r.innerText="Edit",r.classList.add("editBtn");const l=document.createElement("button");l.innerText="Delete",l.classList.add("deleteBtn"),a.appendChild(r),a.appendChild(l),d.appendChild(a),t.appendChild(d),function(e,t){e.addEventListener("click",(n=>{"edit"===e.innerText.toLowerCase()?(e.innerText="Save",t.readOnly=!1,t.focus()):"save"===e.innerText.toLowerCase()&&(function(){let e=document.querySelectorAll(".editBtn");e.forEach((t=>{t.addEventListener("click",(t=>{let n=Array.from(e).indexOf(t.target),d=document.querySelectorAll(".text");o[n].task=d[n].value}))}))}(),e.innerText="Edit",t.readOnly="true")}))}(r,c),function(e){let d=document.querySelectorAll(".deleteBtn");d.forEach((e=>{e.addEventListener("click",(e=>(n=Array.from(d).indexOf(e.target),n)))})),e.addEventListener("click",(function(){o.splice(n,1),t.removeChild(this.parentNode.parentNode)}))}(l)}()}))})();