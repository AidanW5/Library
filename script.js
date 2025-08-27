const form = document.getElementById("form");

form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    //Get form info
    const author = document.getElementById('author_input').value;
    const title = document.getElementById('book_title').value;
    const pages = document.getElementById('total_pages').value;
    const read = document.getElementById('readtf').value;

    //Capitalize read variable
    const read2 = read.charAt(0).toUpperCase() + read.slice(1);
    
    //Create New Book Object
    newBook = {
        "Author": author,
        "Title": title,
        "Pages": pages,
        "Read": read2
    };
    
    //Delete Submit button
    document.getElementById('submit_btn').remove();

    //Get book cover a-tags
    const coverSource = document.getElementById('book_cover');

    //Add open book button
    const openBtn = document.createElement('button');
    openBtn.classList.add('openButton');
    openBtn.innerHTML = "Open Book";

    form.insertBefore(openBtn, coverSource);

    //Make button open book
    openBtn.addEventListener('click', function openBook() {
        //Change and style background image
        form.style.backgroundImage = "url(../images/engin-akyurt-IZj7vckPGiw-unsplash.jpg)";
        form.style.height = "560px";
        form.style.width = "525px";
        form.style.marginLeft = "37%";
        form.style.alignItems = "normal";

        //Function to clear form
        function removeAllChildNodes(parent) {
            while(parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
        }

        removeAllChildNodes(form)

        //Put book info in open book
        form.innerHTML = `
        <div id="author_div">
            <p>Author:</p>
            <p id="newbook_author">${newBook.Author}</p>
        </div>
        <div>
            <p>Title:</p>
            <p id="newbook_title">${newBook.Title}</p>
        </div>
        <div>
            <p>Pages:</p>
            <p id="newbook_page">${newBook.Pages}</p>
        </div>
        <div>
            <p>Have you read the book?</p>
            <p id="newbook_read">${newBook.Read}</p>
        </div>
        <div id="open_book">
            <a href="https://unsplash.com/@enginakyurt?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">engin akyurt</a> on 
            <a href="https://unsplash.com/photos/white-book-with-blue-pen-IZj7vckPGiw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
        </div>`
    });
})