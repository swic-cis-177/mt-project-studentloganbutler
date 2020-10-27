const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {};
  for (let i = 0; i <= 2; i += 1) {
    formData[event.target.elements[i].id] = event.target.elements;
  }

  console.log(formData);
});
