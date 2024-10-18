
// let poorDadRichDad = new Book('poorDadRichDad', 'robert Kiyosaki');
// let sorcererStone = new Book('HarryPotter1', 'JK Rowling');
// let gobletOfFire = new Book('HarryPotter2', 'JK Rowling');
const myLibrary = [];

const myShelf = document.querySelector(".myShelf");

const addBook = document.querySelector('button');

const bookName = document.querySelector('#name');

//data attribute for remove button association
let bookNumber;

//add reference to remove buttons 
// let removeBtnList = document.querySelectorAll('.remove');
// const removeBtn = document.querySelector(`[data-identifier = ${CSS.escape(myLibrary.length)}]`);

function Book(title, author, pageCount, readOrNot){
  this.title = title,
  this.author = author,
  this.pageCount = pageCount,
  this.readOrNot = readOrNot,
  this.identifier = myLibrary.length + 1,
  // this.bookIndex = myLibrary.length,
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
  //display each book 
  
    let newListItem = document.createElement('li');
    let itemCancelBtn = document.createElement('button');
    let read = document.createElement('span');
    let readButton = document.createElement('button');
    let boolean = () => {
      if (newBook.readOrNot === 'Y') {
        return true;
      }else {
        return false;
      }
    }
    console.log(boolean())

    newListItem.textContent = `${newBook.title} by ${newBook.author}, it has ${newBook.pageCount} pages.`;
    read.textContent = newBook.readOrNot;
    newListItem.dataset.identifier = myLibrary.length;
    itemCancelBtn.textContent = 'Remove';
    itemCancelBtn.classList.add('remove');
    itemCancelBtn.dataset.identifier = myLibrary.length;
    readButton.textContent = (boolean()) ? 'I have read it' : "I haven't read it";
    readButton.classList.add('status');
    myShelf.appendChild(newListItem);
    newListItem.appendChild(read);
    newListItem.appendChild(itemCancelBtn);
    newListItem.appendChild(readButton);
    let itemId = newListItem.getAttribute('data-identifier');
    
  
  itemCancelBtn.addEventListener('click', (e) => {
    console.log(`number ${itemId} remove button pressed`);
    myShelf.removeChild(newListItem);
    const libraryIndex = itemId - 1;
    for (let i = myLibrary.length - 1; i >= 0; --i){
      console.log(myLibrary[i].identifier);
      console.log(itemId);
      if (myLibrary[i].identifier == itemId){
        myLibrary.splice(i, 1);
      }
    }
  })

  readButton.addEventListener('click', () => {
    if (readButton.textContent === 'I have read it'){
      readButton.textContent = "I haven't read it";
    } else {
      readButton.textContent = 'I have read it';
    }
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

// function submitBookDetails(title, author, pageCount, readOrNot) {
//   let newBookAdded = new Book(title, author, pageCount, readOrNot);
//   addBookToLibrary(newBookAdded);
//   // return newBookAdded;
// }


function submitBookDetails() {
  let popupNode = document.querySelector('#popup');
  let bookTitle = document.querySelector('#name');
  let author = document.querySelector('#author');
  let pageCount = document.querySelector('#pageCount');
  let readOrNot = document.querySelector('#readOrNot');
  
  if (bookTitle.value){
    let newBookAdded = new Book(bookTitle.value, author.value, pageCount.value, readOrNot.value);
    addBookToLibrary(newBookAdded);
    displayBook(newBookAdded);
    

    bookTitle.value = '';
    author.value = '';
    pageCount.value = '';
    readOrNot.value = '';
    popupNode.classList.remove('active');
  }

}

// let submit = submitBookDetails();
document.querySelector('.submit-btn').addEventListener('click', submitBookDetails);

let removeBtnList = document.querySelectorAll('.remove');

