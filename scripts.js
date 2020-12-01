import { createActivity } from "./lib.js";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Send over the elements that was just submitted
  const formData = createActivity(event.target.elements);
});
