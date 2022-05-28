"use strict";
let promptNumber;
while (true) {
  promptNumber = Number(prompt("Enter Number"));
  if (promptNumber > 0 && Number.isInteger(promptNumber)) {
    // throw new TypeError(`${promptNumber} is invalid value`);
    break;
  }
}

const numFun = function (number) {
  let result = 0;
  for (let i = 0; i <= number; i++) {
    result += i;
  }
  return result;
};
console.log(numFun(promptNumber));

class Book {
  constructor(writer, title, year, publishingHouse) {
    this.writer = writer;
    this.title = title;
    this.year = year;
    this.publishingHouse = publishingHouse;
  }
  get year() {
    return this._year;
  }
  set year(year) {
    const date = new Date().getFullYear();
    if (year <= date) {
      this._year = year;
    } else {
      throw new RangeError("Invalid year");
    }
  }
}

class EBook extends Book {
  constructor(writer, title, year, publishingHouse, format, eNum) {
    super(writer, title, year, publishingHouse);
    this.format = format;
    this.eNum = eNum;
  }
}

const book1 = new Book(1, 2, 3, 4);
const book2 = new EBook(1, 2, 3, 4, 5 ,6);
console.log(book2);
