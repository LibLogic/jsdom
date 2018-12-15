const list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if (e.target.className === 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})

//https://www.youtube.com/watch?v=FIORjGvT0kk&list=PL4cUxeGkcC9gfoKa5la9dsdCNpuey2s-V&index=1
