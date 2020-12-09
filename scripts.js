import { addTableRow, addActivity } from "./lib.js";

const form = document.querySelector("form");

const render = (elements) => {
  addActivity(elements);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Send over the elements that was just submitted
  const formData = addTableRow(event.target.elements);

  addActivity.push(addTableRow(event.target.elements));
  render(formData);
});
