// Section 07 — this

// A class that keeps its own list.
// add() works even when passed around as a callback.

export class PlannerList {
  constructor(owner) {
    this.owner = owner;
    this.ids = [];
  }

  add = (id) => {
    this.ids.push(id);
  };

  describe() {
    return `${this.owner} has ${this.ids.length} course(s) planned`;
  }
}