export const createActivity = (elements) =>
  Array.from(elements)
    // Filter out stuff that has an id
    .filter(({ id }) => id)
    .reduce((activity, { id, value }) => {
      return {
        // Spread out whatever is in  'activity' each time
        ...activity,
        [id]: value,
      };
    }, {});
