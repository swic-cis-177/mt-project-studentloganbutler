import { addTableRow, addActivity } from "./lib.js";

const form = document.querySelector("form");

const render = (elements) => {
  addActivity(elements);
};

const Data = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Send over the elements that was just submitted
  const formData = addTableRow(event.target.elements);

  Data.push(addTableRow(event.target.elements));
  render(formData);
});
