const inputBox = document.getElementById("input-box");
let listContainer = document.querySelector(".list-container");
const button = document.getElementById("add-button");

inputBox.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    if (inputBox.value === "") {
      alert("You must write somthing!");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      inputBox.value = "";
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      saveData();
    }
  }
});
button.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You must write somthing!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("listdata", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("listdata");
}
showData();
