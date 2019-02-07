'use strict';
(function(){
    var isbnRe = /978[0-9]{10}/;

    document.querySelector('#book-add').addEventListener(
        'click',
        e => {
            var name = document.getElementById('book-name').value;
            var isbn = document.getElementById('book-isbn').value;
            if(name.length == 0) alert("书名为空！");
            else if(isbn.length == 0) alert("isbn为空！");
            else
            {
                var ul = document.getElementById('book-list');
                var li = document.createElement('li');
                var bookItem = document.createElement('book-item');
                bookItem.setAttribute('title', name);
                bookItem.setAttribute('isbn', isbn);
                li.appendChild(bookItem);
                ul.appendChild(li);
            }
        }
    );

})();