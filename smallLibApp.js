const myLibrary = [];

const myShelf = document.querySelector(".myShelf");

const addBook = document.querySelector('button');

const bookName = document.querySelector('#name');

function Book(title, author, pageCount, readOrNot){
  this.title = title,
  this.author = author,
  this.pageCount = pageCount,
  this.readOrNot = readOrNot,
  readStatus = () => {
    if (readOrNot) {
      return 'read already'
    } else {
      return 'not read yet'
    }
  } ,
  infoReport = () => {
    console.log( `${title} by ${author}, ${pageCount} pages, ${readStatus()}`)
  }

}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);

}

function displayBook(newBook) {
  //display all the test entries for books
  // library.forEach((eachBook) => {
  //   // console.log(eachBook);
  //   let newListItem = document.createElement('li');
  //   newListItem.textContent = `${eachBook.title} by ${eachBook.author}`
  //   myShelf.appendChild(newListItem);
  // })
  //display each book 
  let newListItem = document.createElement('li');
  newListItem.textContent = `${newBook.title} by ${newBook.author}`
  myShelf.appendChild(newListItem);
}
 

// let poorDadRichDad = new Book('poorDadRichDad', 'robert Kiyosaki');
// let sorcererStone = new Book('HarryPotter1', 'JK Rowling');
// let gobletOfFire = new Book('HarryPotter2', 'JK Rowling');


//create a popup modal
function createPopup(id){
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector('.overlay');
  let closeBtn = popupNode.querySelector('.close-btn');
  // let submitBtn = popupNode.querySelector('.submit-btn');

  function openPopup(){
    popupNode.classList.add('active')
  }
  function closePopup(){
    popupNode.classList.remove('active')
  }
  overlay.addEventListener('click', closePopup)
  closeBtn.addEventListener('click', closePopup)
  return openPopup;
}

let popup = createPopup('#popup');
document.querySelector('#open-popup').addEventListener('click', popup);

// function submitBookDetails(title, author, pageCount, readOrNot) {
//   let newBookAdded = new Book(title, author, pageCount, readOrNot);
//   addBookToLibrary(newBookAdded);
//   // return newBookAdded;
// }

function submitBookDetails() {
  


  let bookTitle = document.querySelector('#name');
  if (bookTitle.value){
    let newBookAdded = new Book(bookTitle.value);
    addBookToLibrary(newBookAdded);
    displayBook(newBookAdded);
  }
  
  //need to close modal on clicking submit
}


// console.log(bookTitle);

// let submit = submitBookDetails();
document.querySelector('.submit-btn').addEventListener('click', submitBookDetails);