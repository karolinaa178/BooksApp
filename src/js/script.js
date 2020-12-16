{
  'use strict';

  const select = {
    templateOf: {
      booksList: '#template-book',
    },
    containerOf: {
      bookList: '.books-list',
    },
  };

  const templates = {
    booksList: Handlebars.compile(document.querySelector(select.templateOf.booksList).innerHTML),
  };

  const menuContainer = document.querySelector(select.containerOf.bookList);
  const allBooks = [];

  const render = function() {
    for(let book of dataSource.books){
      const generatedHTML = templates.booksList(book);

      const element = utils.createDOMFromHTML(generatedHTML);

      menuContainer.appendChild(element);
      allBooks.push(element);
    }
  };

  render();
}
