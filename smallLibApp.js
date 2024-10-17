
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
    newListItem.textContent = `${newBook.title} by ${newBook.author}`
    newListItem.dataset.identifier = myLibrary.length;
    itemCancelBtn.textContent = 'Remove';
    itemCancelBtn.classList.add('remove');
    itemCancelBtn.dataset.identifier = myLibrary.length;
    myShelf.appendChild(newListItem);
    newListItem.appendChild(itemCancelBtn);
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
  
  if (bookTitle.value){
    let newBookAdded = new Book(bookTitle.value);
    addBookToLibrary(newBookAdded);
    displayBook(newBookAdded);
    

    bookTitle.value = '';
    popupNode.classList.remove('active');
  }

}

// let submit = submitBookDetails();
document.querySelector('.submit-btn').addEventListener('click', submitBookDetails);

let removeBtnList = document.querySelectorAll('.remove');

