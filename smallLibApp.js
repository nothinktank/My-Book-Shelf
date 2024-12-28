
// let poorDadRichDad = new Book('poorDadRichDad', 'robert Kiyosaki');
// let sorcererStone = new Book('HarryPotter1', 'JK Rowling');
// let gobletOfFire = new Book('HarryPotter2', 'JK Rowling');

// const myLibrary = [];

const myShelf = document.querySelector(".myShelf");

const addBook = document.querySelector('button');

const bookName = document.querySelector('#name');

//data attribute for remove button association
let bookNumber;

//add reference to remove buttons 
// let removeBtnList = document.querySelectorAll('.remove');
// const removeBtn = document.querySelector(`[data-identifier = ${CSS.escape(myLibrary.length)}]`);

//function that creates a new book object
// function Book(title, author, pageCount, readOrNot){
//   this.title = title,
//   this.author = author,
//   this.pageCount = pageCount,
//   this.readOrNot = readOrNot,
//   this.identifier = myLibrary.length + 1,
//   // this.bookIndex = myLibrary.length,
//   readStatus = () => {
//     if (readOrNot) {
//       return 'read already'
//     } else {
//       return 'not read yet'
//     }
//   } ,
//   infoReport = () => {
//     console.log( `${title} by ${author}, ${pageCount} pages, ${readStatus()}`)
//   }

// }



//class that creates a new book object

class Book {

  constructor (title, author, pageCount, readOrNot) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readOrNot = readOrNot;
    // this.identifier = myLibrary.length + 1;
  }
  addBook (title, author, pageCount, readOrNot){
    this.myLibrary.push({title, author, pageCount, readOrNot});
  }

  // getBookList () {
  //   return this.myLibrary;
  // }

  readStatus = () => {
    if (readOrNot) {
      return 'read already'
    } else {
      return 'not read yet'
    }
  }
  // infoReport = () => {
  //   console.log( `${title} by ${author}, ${pageCount} pages, ${readStatus()}`)
  // }
}
//i should use getter and setter for the book array in the class above

//class that manages the book collection array

class Library {
  constructor() {
    this.library = [];
    this.newBook = this.newBook.bind(this);
  }
  //create a new book and save it in the collection
  newBook() {
    let popupNode = document.querySelector('#popup');
    let bookTitle = document.querySelector('#name');
    let author = document.querySelector('#author');
    let pageCount = document.querySelector('#pageCount');
    let readOrNot = document.querySelector('#readOrNot');

    // if (bookTitle.value) {
      let nb = new Book(bookTitle.value, author.value, pageCount.value, readOrNot.value);
      this.library.push(nb);
    // }
    bookTitle.value = '';
    author.value = '';
    pageCount.value = '';
    readOrNot.value = '';
    popupNode.classList.remove('active');
    // return nb;
  }
}

// function submitBookDetails() {
//   //create a new instance of Book class if none is created
//   // if (!newLibrary) {
//   //   let newLibrary = new Book();
//   // }

//   let popupNode = document.querySelector('#popup');
//   let bookTitle = document.querySelector('#name');
//   let author = document.querySelector('#author');
//   let pageCount = document.querySelector('#pageCount');
//   let readOrNot = document.querySelector('#readOrNot');
  
//   if (bookTitle.value){
//     newLibrary.addBook(bookTitle.value, author.value, pageCount.value, readOrNot.value)
//     // let newBookAdded = new Book(bookTitle.value, author.value, pageCount.value, readOrNot.value);
//     // addBookToLibrary(newBookAdded);
//     displayBook(newBookAdded);
    

//     bookTitle.value = '';
//     author.value = '';
//     pageCount.value = '';
//     readOrNot.value = '';
//     popupNode.classList.remove('active');
//   }
// }
//initialize a new book array and add new book 
let newLibrary = new Library();
document.querySelector('.submit-btn').addEventListener('click', newLibrary.newBook);

// function addBookToLibrary(newBook) {
//   myLibrary.push(newBook);
  
// }


function displayBook(newBook) {
  //display each book 
  
    let newListItem = document.createElement('li');
    let itemCancelBtn = document.createElement('button');
    let read = document.createElement('div');
    let readButton = document.createElement('button');
    let boolean = () => {
      if (newBook.readOrNot === 'Y') {
        return true;
      }else {
        return false;
      }
    }
    // console.log(boolean())

    newListItem.textContent = `${newBook.title} by ${newBook.author}, it has ${newBook.pageCount} pages.`;
    read.textContent = (boolean()) ? "Read it" : "Still need to read this";
    newListItem.dataset.identifier = myLibrary.length;
    itemCancelBtn.textContent = 'Remove';
    itemCancelBtn.classList.add('remove');
    itemCancelBtn.dataset.identifier = myLibrary.length;
    readButton.textContent = (boolean()) ? "I haven't read it"  : 'I have read it';
    readButton.classList.add('status');
    myShelf.appendChild(newListItem);
    newListItem.appendChild(read);
    newListItem.appendChild(itemCancelBtn);
    newListItem.appendChild(readButton);
    let itemId = newListItem.getAttribute('data-identifier');
    let objectIndex = myLibrary.indexOf(newBook);
    
    // console.log(objectIndex);

  itemCancelBtn.addEventListener('click', (e) => {
    console.log(`number ${itemId} remove button pressed`);
    myLibrary.splice(objectIndex, 1);
    myShelf.removeChild(newListItem);
    
    //loop to check for the correct object item in the array
    // for (let i = myLibrary.length - 1; i >= 0; --i){
    //   // console.log(myLibrary[i].identifier);
    //   // console.log(itemId);
    //   if (myLibrary[i].identifier == itemId){
    //     myLibrary.splice(i, 1);
    //   }
    // }
  })

  readButton.addEventListener('click', () => {
    let newObjectIndex = myLibrary.indexOf(newBook);
    if (readButton.textContent === 'I have read it'){
            myLibrary[newObjectIndex].readOrNot = 'Y'
            readButton.textContent = "I haven't read it";
            read.textContent = 'Read it';
            
          } else {
            myLibrary[newObjectIndex].readOrNot = 'N'
            readButton.textContent = 'I have read it';
            read.textContent = 'Still Need to read it';
            
          }

    // for (let i = myLibrary.length - 1; i >= 0; --i){
    //   if (myLibrary[i].identifier == itemId){
    //     if (readButton.textContent === 'I have read it'){
    //       readButton.textContent = "I haven't read it";
    //       read.textContent = 'Read it';
    //       myLibrary[i].readOrNot = 'Y'
    //     } else {
    //       readButton.textContent = 'I have read it';
    //       read.textContent = 'Still Need to read it';
    //       myLibrary[i].readOrNot = 'N'
    //     }
    //   }
    // }


  } )
  
}
 


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

let removeBtnList = document.querySelectorAll('.remove');

