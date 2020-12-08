const tbody = document.querySelector("tbody");
const template = document.querySelector("template");

const createActivity = (elements) =>
  Array.from(elements)
    .filter(({ id }) => id)
    .reduce(
      (formInfo, { id, value }) => ({
        ...formInfo,
        [id]: value,
      }),
      {}
    );

export const addTableRow = (elements) => ({
  ...createActivity(elements),
});

export const addActivity = (elements) => {
  // For each thing that is in data (object)...
  elements.forEach(
    (
      // Destructure (pull out) the 🔑s that we want
      { name, email, questions }
    ) => {
      // Take all of the content in the template tags and copy it
      const newActivityRow = template.content.cloneNode(true);

      // Make sure to get all 3 tds (not just 1)
      const newActivityTDs = newActivityRow.querySelector("td");

      // The first td will keep the id
      newActivityTDs[0].textContent = name;
      newActivityTDs[1].textContent = email;
      newActivityTDs[2].textContent = questions;

      // Add the new row inside the tbody
      tbody.appendChild(newActivityRow);
    }
  );
};
