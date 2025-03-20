import aCourse from "./course.mjs";

document.addEventListener("DOMContentLoaded", function () {
  aCourse.init(); // Call the init function when the DOM is loaded
});

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.changeEnrollment(sectionNum, false);
});

