const form = document.getElementById("form");

form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    //Get form info
    const author = document.getElementById('author_input').value;
    const title = document.getElementById('book_title').value;
    const pages = document.getElementById('total_pages').value;
    const read = document.getElementById('readtf').value;

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

        //Remove input and add text
        form.getElementsByTagName('label').remove();
        form.getElementsByTagName('input').remove();
    });
})