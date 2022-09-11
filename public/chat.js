"use strict";

const socket = io("http://localhost:3000");
//const socket = io(
//"https://stream-server-hennaeko.norwayeast.cloudapp.azure.com"
//);

const roomNumber = document.querySelector("#roomName");

document.querySelector("#msg-input").addEventListener("submit", (event) => {
  event.preventDefault();
  const inp = document.getElementById("message");
  socket.emit("chat message", inp.value);
  inp.value = "";
});

document.querySelector("#join").addEventListener("submit", (event) => {
  event.preventDefault();
  const username = document.getElementById("username");
  const room = document.querySelector('input[name="room"]:checked').value;
  socket.emit("join", username.value, room);
  username.value = "";
  document.querySelector("#join").style.display = "none";
  document.querySelector("#msg-input").style.display = "";
  document.querySelector("#log-out").style.display = "";
  document.querySelector("#messages").style.display = "";
  roomName.innerHTML = "Olet huoneessa " + room;
});

socket.on("chat message", (msg, username) => {
  const item = document.createElement("li");
  item.classList.add(
    "bg-purple-200",
    "py-2",
    "px-3",
    "rounded-lg",
    "text-white",
    "w-fit",
    "m-5",
    "border-ctm-darklila"
  );
  item.innerHTML = username + ": " + msg;
  document.getElementById("messages").appendChild(item);
});

document.querySelector("#log-out").addEventListener("click", (event) => {
  event.preventDefault();
  socket.emit("leave");
  messages.innerHTML = "";
  location.reload();
  return false;
});

socket.on("response", (msg) => {
  console.log(msg);
});
