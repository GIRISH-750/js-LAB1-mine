// Section 10 — Immutable updates (the planner)

// A planner is an array of course ids, e.g. [4, 10, 18].

// Add an id. If it is already there, return the SAME array.
export function addToPlanner(planner, courseId) {
  return planner.includes(courseId)
    ? planner
    : [...planner, courseId];
}

// Remove an id. If it is not there, return the SAME array.
export function removeFromPlanner(planner, courseId) {
  return planner.includes(courseId)
    ? planner.filter((id) => id !== courseId)
    : planner;
}

// Return a new course object with some fields changed.
export function updateCourse(course, changes) {
  return {
    ...course,
    ...changes,
  };
}

// Return a new list where the matching course has one fewer seat.
export function takeSeat(courses, courseId) {
  const target = courses.find((course) => course.id === courseId);

  if (!target || target.seatsLeft === 0) {
    return courses;
  }

  return courses.map((course) =>
    course.id === courseId
      ? { ...course, seatsLeft: course.seatsLeft - 1 }
      : course
  );
}