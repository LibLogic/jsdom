const wmf = document.querySelector("#book-list li:nth-child(2) .name");
//console.log(wmf);

var books = document.querySelector("#book-list li .name");
//console.log(books);

books = document.querySelectorAll("#book-list li .name");
console.log(books);

//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
books.forEach(function(book){
    console.log(book);
})