let student={
    name: "lucifer",
    div: "va",
    class: "10th"
};
console.log(student.name);
let newElem = document.createElement("p");
newElem.textContent = "jumaka joom";
console.log(newElem);
document.getElementById("container").appendChild(newElem);
console.log(newElem.container);
let tasks = [];
function addTask (name) {
let task = { text: name, done: false }; tasks.push (task); showTasks ();}
function showTasks() {
let list = document.getElementById("list");
list.innerHTML = ""
for (let i = 0; i < tasks.length; i++){
let li = document.createElement("li"); 
li.textContent= tasks[i].text ;
list.appendChild(li);
}
}
