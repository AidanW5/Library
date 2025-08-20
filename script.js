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

    //Add open book button
    const openBtn = document.createElement('button');
    const btnText = document.getElementsByTagName('button').innerHTML = "Open Book";

    form.append(openBtn)
})