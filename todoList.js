let doc = document;
let toDos = doc.getElementById("toDos");
let addButton = doc.getElementById("addButton");
let input = doc.querySelector("input");
let killButton = doc.getElementById("killButton");
let count = doc.querySelector("h1");

document.addEventListener("click", function() {
  let list = document.querySelectorAll("li");
  let numberOfNotDoneThings = 0;
  for (let i = 0; i < list.length; i ++) {
    let span = list[i].querySelector("span");
    if (span.getAttribute("class") === "notDone") {
      numberOfNotDoneThings += 1;
    }

  }
  count.innerText = "todos: " + numberOfNotDoneThings;
})

document.addEventListener("keydown", function(e) {
  if(e.keyCode === 13) {addItem()}
});

addButton.addEventListener("click", addItem);

function addItem() {
  if (!(input.value === "")) {
    let value = input.value;
    input.value = "";
    let li = doc.createElement("li");
    let span = doc.createElement("span");
    let doneButton = doc.createElement("button");
    doneButton.addEventListener("click", function(e) {
      let item = e.target.parentNode.querySelector("span");
      let notDone = item.getAttribute("class") === "notDone";
      if (notDone) {
        item.setAttribute("class", "done")
      } else {
        item.setAttribute("class", "notDone")
      }
    })
    li.appendChild(span);
    li.appendChild(doneButton);
    span.innerText = value;
    span.setAttribute("class", "notDone")
    doneButton.textContent = "Done";
    toDos.appendChild(li);
  };
};

killButton.onclick = function() {
  let areYouSure = confirm("Delete all done items?");
  if (areYouSure) {
    let list = document.querySelectorAll("li");
    for (let i = 0; i < list.length; i ++) {
      let span = list[i].querySelector("span");
      if (span.getAttribute("class") === "done") {
        list[i].parentNode.removeChild(list[i]);
      }
    }
  }
}
