let doc = document;
let ul = doc.querySelector("ul");
let addButton = doc.getElementById("addButton");
let input = doc.querySelector("input");
let killButton = doc.getElementById("killButton");
let count = doc.querySelector("h1");
let todos = {};


addButton.addEventListener("click", addItem)

function addItem() {
  if (input.value === "") { return };
  todos[input.value] = {done: false};
  updateHTML(input.value);
  input.value = "";
};

function updateHTML(value) {
  let li = doc.createElement("li");
  let span = doc.createElement("span");
  let doneButton = doc.createElement("button");

  doneButton.addEventListener("click", function(e) {
    updateDONE(e);
  });

  li.appendChild(span);
  li.appendChild(doneButton);
  span.innerText = value;
  doneButton.textContent = "Done";
  ul.insertBefore(li, ul.querySelector("li"));

  let numberOfTTD = 0;
  for (let i in todos) { numberOfTTD++ }
  count.textContent = "to dos: " + numberOfTTD;
};

function updateDONE(e) {
  let span = e.target.parentNode.querySelector("span");
  let value = span.innerText;
  todos[value].done = !(todos[value].done);
  if (todos[value].done) {
    span.style = "text-decoration-line: line-through";
  } else {
    span.style = "text-decoration-line: none";
  }
}


killButton.onclick = function() {
  let areYouSure = confirm("Delete all done items?");
  if (!(areYouSure)) { return }
  for (let e in todos) {
    if (todos[e].done) {
      delete todos[e]
      updatedeleted(e);
    }
  };
}

function updatedeleted(e) {
  let things = ul.querySelectorAll('li');
  for (let i = 0; i < things.length; i++) {
    let span = things[i].querySelector('span')
    if (e == span.textContent) {
      ul.removeChild(things[i]);
    }
  }

  let numberOfTTD = 0;
  for (let i in todos) { numberOfTTD++ }
  count.textContent = "to dos: " + numberOfTTD;
}
