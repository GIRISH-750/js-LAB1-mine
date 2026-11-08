// Section 04 — Functions are values

// Turn a course into exactly what a card on screen needs.
export const toCardView = (course) => ({
  id: course.id,
  heading: `${course.code} · ${course.title}`,
  meta: `${course.credits} credits · ${course.department}`,
  isFull: course.seatsLeft === 0,
});

// One button per course.
// Each onClick must be a function that calls onAdd later.
export function buildButtons(courses, onAdd) {
  return courses.map((course) => ({
    label: `Add ${course.code}`,
    onClick: () => onAdd(course.id),
  }));
}