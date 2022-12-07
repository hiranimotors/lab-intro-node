class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    const sumOfItems = this.items.reduce((a, c) => a + c, 0);
    return sumOfItems;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;

const oddNumbers = new SortedList();

oddNumbers.add(5);
oddNumbers.add(57);
oddNumbers.add(543);
oddNumbers.add(99);

console.log(oddNumbers.items);
console.log(oddNumbers);
