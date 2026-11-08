// Section 13 — the pure half of the form exercise (the DOM half is in web/)

// values: { code, title, department, credits }
// Complete when every field has non-blank text and credits is a whole number 1–6.
export function isComplete(values) {
  const credits = Number(values.credits);

  return (
    Object.values(values).every((value) => value.trim() !== "") &&
    Number.isInteger(credits) &&
    credits >= 1 &&
    credits <= 6
  );
}

// Turn form values into a course object with a fresh id.
export function toCourse(values, nextId) {
  return {
    id: nextId(),
    code: values.code.trim().toUpperCase(),
    title: values.title.trim(),
    department: values.department.trim(),
    description: null,
    credits: Number(values.credits),
    capacity: 60,
    seatsLeft: 60,
  };
}