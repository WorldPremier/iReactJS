const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
// Destructuring
const book = getBook(1);
book;

// const title = book.title;
// const author = book.author;
// author;

const {
  title,
  author,
  pages,
  publicationDate,
  reviews,
  genres,
  hasMovieAdaptation,
} = book;
console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// modern way: called destructuring, meaning its taking the data from the array then assigning it to the genre index to be called.
// spread looks like this ...addAnyName which allows to include everything else from the array that hasn't been included.
const [primaryGenre, secondaryGenre, ...allGenres] = genres;
console.log(primaryGenre, secondaryGenre, allGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  // Adding a new property
  moviePublicationDate: "2001-12-19",
  // Overwritting an existing property
  pages: 1210,
};
updatedBook;

////////////////////////BREAKING DOWN DIFFERENT FORMS OF ARRAY FUNCTIONS AS SAMPLES////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
// arraw functions declarative                                                                     /
// function getYear(str) {                                                                         /
//   return str.split("-")[0];                                                                     /
// }                                                                                               /

// console.log(getYear(publicationDate));

// prettier extension wraps the str function to prevent errs and reminder                          /
// developer can add multiple property. Process to return something                    /
// (str, a, b) => str.split("-")[0];                                                               /
// const getYear = (str) => str.split("-")[0]; // function expression                              /

// const getYear = (str) => {                                                                      /
//   return str.split("-")[0]; // more then one line require keyword return                        /
// };                                                                                              /
// //////////////////////////////////////////////////////////////////////////////////////////////////

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

// template literal
const summary = `${title}, a ${pages}-page long book was written by ${author} and published on ${
  // It takes the array value then it splits it based on the value passed on to be split, resulting in an array, then we take first index at 0
  publicationDate.split("-")[0]
  // publicationDate
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// Ternaries
const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";
pagesRange;
console.log(`The book has ${pagesRange} pages`);

// Truethy short circuiting and Logical operators, the good the bad and the buggy
console.log(true && "some string");
console.log(false && "some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, underfined,
console.log("Jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "some string");
console.log(false || "Some string"); // using || falsy to set default values

// Nullish coalescing operator(Introduced ECMAScript2020) set by standard inovation, works similar to OR operator when setting its value.
console.log(book.translations.spanish.split("anillos")[0]);

//
const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// Edge case scenario... bug🐛 can be encounter when setting its value that is falsy.
console.log(book.reviews.librarything.reviewsCount);
const countIncorrectly = book.reviews.librarything.reviewsCount || "no data";
countIncorrectly;

// Solution
const count = book.reviews.librarything.reviewsCount ?? "no data";

// Other core samples
const setNull = null;
const emptyText = "";
const someRandomNumber = 42;

const valA = setNull ?? "default to A"; // Returns "default to A"
const valB = emptyText ?? "default to B"; // Returns "" (empty string is not null or undefined)
const valC = someRandomNumber ?? 0; // Returns 42

console.log(valA);
console.log(valB);
console.log(valC);

function calculateReviews(book) {
  const goodReads = book.reviews?.goodreads?.reviewsCount;
  // since book's reviewCount is undefined then passing optional chaining to next latter up will prevent any false positives.
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodReads + librarything;
}
console.log(calculateReviews(book));

//**********************************************************PART TWO ARRAY MANIPULATION******************************************************************************* */
const books = getBooks();
// books;

// Quick flashback, map will spit out the same length array and return with new functionality embeded.
// const i = [1, 2, 3, 4, 5].map((el) => el * 2);
// console.log(i);

// Return title and author from array that does not include other objects.
// const titles = books.map((book) => book.title);
// titles;

// const genres = books.map((book) => book.genres);
// genres;

// const dataBook = books.map((book) => ({
//   titles: book.title,
//   author: book.author,
// }));
// console.log(dataBook);

const getPages = books.map((book) => ({
  pages: book.pages,
}));
// getPages;

// Filters
const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooks;

// const longBooks = books
//   .filter((book) => book.pages < 500)
//   .filter((book) => book.hasMovieAdaptation);
// longBooks;

// reducers and accumulators
const addAllPages = books.reduce((acc, book) => acc + book.pages, 0);
addAllPages;
// 3-7 = -4

// Sorting, slicing its copy to output new chronological array based on ascending order.
const arr = [2, 5, 7, 9, 4];
const arrContainer = arr.slice().sort((a, b) => a - b);
arrContainer;
arr;

const sortingAllPages = books.slice().sort((a, b) => a.pages - b.pages);
sortingAllPages;
const newBook = {
  id: 6,
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// Adding to an array
const addBookToOriginBK = [...books, newBook];
addBookToOriginBK;

// Deleting book index object from array
const booksAfterDel = addBookToOriginBK.filter((book) => book.id !== 3);
// booksAfterDel;

// update an array
const bookUpdate = booksAfterDel.map((book) =>
  book.id === 1 ? { ...book, pages: 1210 } : book
);
bookUpdate;
