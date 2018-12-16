const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if (e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//add books
const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //Create needed elements
    var li = document.createElement('li');
    var bookName = document.createElement('span');
    var deleteBtn = document.createElement('span');
    
    //Add content to elements
    bookName.textContent = value;
    deleteBtn.textContent = 'delete'
    
    //Create DOM structure and append it to the UL
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
})






//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
