import { nanoid } from 'nanoid'

export const timeGenerator = (min, max) => {
    const timeArray = [];
    for (let i = min; i <= max; i += 5) {
      timeArray.push({
      value: `${i} min`,
      label: `${i} min`,
      id: nanoid(),
    });
    }
    return timeArray;
  };