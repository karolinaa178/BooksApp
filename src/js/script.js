{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    containerOf: {
      bookList: '.books-list',
      filters: '.filters',
    },
    class: {
      favouriteBook: 'favorite',
    },

  };

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };

  const menuContainer = document.querySelector(select.containerOf.bookList);
  //const filterWrapper = document.querySelector(select.wrpper.filters);
  const allBooks = [];
  const favouriteBooks = [];
  //const filters = [];

  const render = function() {
    for(let book of dataSource.books){
      const generatedHTML = templates.bookTemplate(book);

      const element = utils.createDOMFromHTML(generatedHTML);

      menuContainer.appendChild(element);
      allBooks.push(element);
    }
  };

  const initActions = function(){
    menuContainer.addEventListener('dblclick', function(event){
      event.preventDefault;
      const clickedElement = event.target;
      //console.log(clickedElement);
      //console.log(clickedElement.classList.contains('.book__image'));

      if(clickedElement.classList.contains('.book__image')){
        const id = clickedElement.getAttribute('data-id');
        if(!clickedElement.classList.contains(select.class.favouriteBook)){
          favouriteBooks.push(id);
          clickedElement.classList.add(select.class.favouriteBook);
        } else {
          favouriteBooks.splice(favouriteBooks.indexOf(id), 1);
          clickedElement.classList.remove(select.class.favouriteBook);
        }
      }
    });
    /*for(let book of allBooks){
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
      }); */

    //  filterWrapper.addEventListener('click', function(event){
    //  if(clickedElement.tagName === 'INPUT' && clickedElement.type === 'checkbox' && clickedElement.name === 'filter' )
    // });
  };


  render();
  initActions();
}
