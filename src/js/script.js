{
  'use strict';

  const select = {
    templateOf: {
      booksList: '#template-book',
    },
    containerOf: {
      bookList: '.books-list',
    },
    class: {
      favouriteBook: 'favorite',
    },
    book: {
      bookImage: ''
    },
  };

  const templates = {
    booksList: Handlebars.compile(document.querySelector(select.templateOf.booksList).innerHTML),
  };

  const menuContainer = document.querySelector(select.containerOf.bookList);
  const allBooks = [];
  const favouriteBooks = [];

  const render = function() {
    for(let book of dataSource.books){
      const generatedHTML = templates.booksList(book);

      const element = utils.createDOMFromHTML(generatedHTML);

      menuContainer.appendChild(element);
      allBooks.push(element);
    }
  };

  const initActions = function(){
    for(let book of allBooks){
      const bookCover = book.querySelector('.book__image');
      console.log(bookCover);

      bookCover.addEventListener('dblclick', function(event){
        event.preventDefault();
        const id = bookCover.getAttribute('.data-id');

        if(!bookCover.classList.contains(select.class.favouriteBook)){
          favouriteBooks.push(id);
          bookCover.classList.add(select.class.favouriteBook);
        } else {
          favouriteBooks.splice(favouriteBooks.indexOf(id));
          bookCover.classList.remove(select.class.favouriteBook);
        }

      });
    }
  };

  render();
  initActions();
}
