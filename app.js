const bookList = document.querySelector('#book-list')

console.log('The next sibling is"', bookList.nextSibling);
console.log('The next sibling is"', bookList.nextElementSibling);

console.log('The previous sibling is"', bookList.previousSibling);
console.log('The previous sibling is"', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too cool for everyone else!';

//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
