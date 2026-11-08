
// Sections 12–13 exercise: the "Add a course" form, built by hand with the DOM.

// Finish src/s11-catalog.js (departments) and src/s13-forms.js first.

import { courses } from "../data/courses.js";
import { departments } from "../src/s11-catalog.js";
import { isComplete, toCourse } from "../src/s13-forms.js";

// Step 1 — select the elements.
const form = document.querySelector("#add-course");

const fields = [...form.querySelectorAll("input, select")];
const submit = form.querySelector('button[type="submit"]');
const departmentSelect = form.querySelector('select[name="department"]');

const list = document.querySelector("#course-list");
const count = document.querySelector("#count");
const status = document.querySelector("#status");

// A closure that hands out ids after the catalogue's last one (20).
const nextId = (() => {
  let last = 20;
  return () => ++last;
})();

// Step 2 — fill the department dropdown from the data.
departmentSelect.append(
  ...departments(courses).map((name) => new Option(name, name))
);

// Step 3 — read every field into one object.
function readForm() {
  return fields.reduce(
    (values, field) => ({ ...values, [field.name]: field.value }),
    {}
  );
}

// Step 4 — enable the button only when the form is complete.
form.addEventListener("input", () => {
  submit.disabled = !isComplete(readForm());
});

// Initially keep the button disabled if the form is incomplete.
submit.disabled = !isComplete(readForm());

// Step 6 — create one list item per course.
function renderItem(course) {
  const item = document.createElement("li");
  item.className = "item";

  const label = document.createElement("span");
  label.textContent = `${course.code} · ${course.title} · ${course.credits} cr`;

  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Remove";

  item.append(label, remove);

  // Clicking the item toggles its selection.
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
  });

  // Remove the item without triggering the selection handler.
  remove.addEventListener("click", (event) => {
    event.stopPropagation();
    item.remove();
    count.textContent = list.children.length;
  });

  return item;
}

// Step 5 — handle form submission.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const course = toCourse(readForm(), nextId);

  // 1. Add the course to the list.
  list.append(renderItem(course));

  // 2. Update the count.
  count.textContent = list.children.length;

  // 3. Show the success message.
  status.textContent = `Added ${course.code}`;

  // 4. Clear the form.
  form.reset();

  // 5. Disable the button again.
  submit.disabled = true;
});
