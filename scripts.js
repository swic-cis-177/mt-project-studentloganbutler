import { addTableRow, addActivity } from "./lib.js";

/**
 * TODO:
 * What's supposed to happen:
 * 1) Allow the user to input data with their name, email, and additional questions.
 * 2) Have a button that allows the user to submit the data.
 * 3) When the data is submitted, add that data to the table in a new row.
 */

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
