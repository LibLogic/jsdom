var books = document.querySelectorAll("#book-list li .name");

books.forEach(function(book){
    book.textContent += " (book title)";
})

const bookList = document.querySelector("#book-list");
bookList.innerHTML += '<p>This is how you add HTML</p>';

//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
