function log(msg) {
  document.getElementById("output").innerHTML += `<p>${msg}</p>`;
}

// onclick
document.getElementById("clickBtn").onclick = function (evt) {
  log("onclick triggered");
  log("type: " + evt.type);
  log("target: " + evt.target.tagName);
};

// ondblclick
document.getElementById("dblClickBtn").ondblclick = function (evt) {
  log("ondblclick triggered");
  log("type: " + evt.type);
};

// addEventListener
const box = document.getElementById("box");

function boxHandler(evt) {
  log("addEventListener executed");
  log("type: " + evt.type);
  log("target: " + evt.target.id);
}

box.addEventListener("click", boxHandler);

// removeEventListener example
setTimeout(() => {
  box.removeEventListener("click", boxHandler);
  log("removeEventListener: click removed after 5 seconds");
}, 5000);
