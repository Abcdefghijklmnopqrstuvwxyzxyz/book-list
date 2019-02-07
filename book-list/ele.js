(function(){
    class BookItem extends HTMLElement
    {
        constructor()
        {
            super();
            this.attachShadow({mode: "open"});
        }

        connectedCallback()
        {
            //console.log("Connected");
            this.attributeChangedCallback();
        }

        adoptedCallback()
        {
            //console.log("AdoptedCallback");
        }

        attributeChangedCallback()
        {
            //console.log("Attribute changed");
            var shadow = this.shadowRoot;
            var node = document.importNode(document.getElementById('book-list-temp').content, true);
            if(!this.hasAttribute('title')) console.warn("No Title Specified!");
            else
            {
                var title = this.getAttribute('title');
                //console.log(node.querySelector('span'));
                node.querySelector('.book-title').innerText = title;
                if(this.hasAttribute('isbn'))
                {
                    var isbn = this.getAttribute('isbn');
                    node.querySelector('.book-isbn').innerText = isbn;
                    new EAN13(node.querySelector('.book-barcode'), isbn);
                }
                var btn = node.querySelector('.book-btn-delete');
                //console.log(btn);
                btn.addEventListener(
                    'click',
                    e => {
                        this.parentNode.parentNode.removeChild(this.parentNode);
                    }
                );
                shadow.appendChild(node);
            }
        }
    }

    customElements.define('book-item', BookItem);
})();