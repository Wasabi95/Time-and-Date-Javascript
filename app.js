/*
function getTime() {
  let x = (document.getElementById("demo").innerHTML = Date());
}
*/

document.getElementById("demo").onclick = function changeContent() {
  document.getElementById("demo").textContent = Date();
  document.getElementById("demo").style = "color: blue; font-size: 70px;";

  document.getElementById("color").style = "background-color: purple";
  document.getElementById("time").style = "color: yellow; font-size: 180px;";
  document.getElementById("paragraph").style = "display: none";
};
