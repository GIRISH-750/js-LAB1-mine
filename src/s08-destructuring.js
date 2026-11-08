// Section 08 — Destructuring, spread, rest, computed keys

// Destructure in the parameter list. credits defaults to 3 when missing.
export function describeCourse({ code, title, credits = 3 }) {
  return `${code}: ${title} (${credits} cr)`;
}

// Return a NEW form object with one field changed.
export function updateField(form, name, value) {
  return {
    ...form,
    [name]: value,
  };
}

// Return a NEW object without one key.
export function withoutField(obj, key) {
  const { [key]: removed, ...rest } = obj;
  return rest;
}

// Return [first, rest].
export function firstAndRest(list) {
  const [first, ...rest] = list;
  return [first, rest];
}