// Section 11 — The array toolkit for UIs

import { toCardView } from "./s04-functions.js";
import { byField } from "./s05-higher-order.js";

// Courses in one department. Case-insensitive.
export function byDepartment(courses, department) {
  return courses.filter(
    (course) =>
      course.department.toLowerCase() === department.toLowerCase()
  );
}

// Courses that still have seats.
export function openOnly(courses) {
  return courses.filter((course) => course.seatsLeft > 0);
}

// Case-insensitive match on code OR title. A blank query returns everything.
export function searchCourses(courses, query) {
  const text = query.trim().toLowerCase();

  return courses.filter(
    (course) =>
      course.code.toLowerCase().includes(text) ||
      course.title.toLowerCase().includes(text)
  );
}

// The course with this code (case-insensitive), or undefined.
export function findByCode(courses, code) {
  return courses.find(
    (course) => course.code.toLowerCase() === code.toLowerCase()
  );
}

// Sum of credits.
export function totalCredits(courses) {
  return courses.reduce((sum, course) => sum + course.credits, 0);
}

// { "Computer Science": 5, "Electronics": 4, ... }
export function countByDepartment(courses) {
  return courses.reduce((counts, course) => {
    counts[course.department] = (counts[course.department] ?? 0) + 1;
    return counts;
  }, {});
}

// Unique department names, sorted A→Z.
export function departments(courses) {
  return [...new Set(courses.map((course) => course.department))].sort();
}

// A sorted COPY. The input must not change. Reuse byField from section 05.
export function sortedBy(courses, field) {
  throw new Error("TODO");
}

// Is at least one course full?
export function anyFull(courses) {
  return courses.some((course) => course.seatsLeft === 0);
}

// Does every course have at least n seats?
export function allHaveSeats(courses, n = 1) {
  return courses.every((course) => course.seatsLeft >= n);
}

// The cards a department page shows: that department, open courses only,
// sorted by code, turned into card views. One chain.
export function courseCards(courses, department) {
  return byDepartment(courses, department)
    .filter((course) => course.seatsLeft > 0)
    .sort(byField("code"))
    .map(toCardView);
}

// Planner ids → the course objects, in planner order. Unknown ids are skipped.
export function plannerCourses(planner, courses) {
  throw new Error("TODO");
}

// Total credits of the planned courses.
export function plannerCredits(planner, courses) {
  throw new Error("TODO");
}

// Can this course be added? It must exist, have a seat, not already be in
// the planner, and keep the total within the limit (24 by default).
export function canAdd(planner, courses, courseId, limit = 24) {
  throw new Error("TODO");
}