// function menu(){
//   console.log(document.getElementById('menu').addEventListener('click', showNav))
// }

function showNav() {
  var nav = document.getElementById('nav')
  if (nav.style.display === "none") {
    nav.style.display = "flex";
  }else {
    nav.style.display = "none"
  }
}
function showAbout() {
  var aboutme = document.getElementById('aboutme')
  if (aboutme.style.display === "none") {
    aboutme.style.display = "flex";
  }else {
    aboutme.style.display = "none"
  }
}
function showl2l() {
  var aboutme = document.getElementById('learn2learn')
  if (aboutme.style.display === "none") {
    aboutme.style.display = "block";
  }else {
    aboutme.style.display = "none"
  }
}
function showGoalSetting() {
  var aboutme = document.getElementById('goalsetting')
  if (aboutme.style.display === "none") {
    aboutme.style.display = "block";
  }else {
    aboutme.style.display = "none"
  }
}
function showAttendMeetups() {
  var aboutme = document.getElementById('attendmeetups')
  if (aboutme.style.display === "none") {
    aboutme.style.display = "block";
  }else {
    aboutme.style.display = "none"
  }
}
// console.log(document.getElementById('aboutme'));
