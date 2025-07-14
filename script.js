const kingBoocksEl = document.getElementById("king-books")
const loaderEl = document.getElementById("loader")
const tableEl = document.getElementById("table")

tableEl.classList.add("hide")
loaderEl.classList.add("show")

fetch('https://stephen-king-api.onrender.com/api/books')
.then(res => res.json())
.then((data) => {

    tableEl.classList.remove("hide")
    loaderEl.classList.remove("show")

    data.data.forEach(boock => {
        kingBoocksEl.insertAdjacentHTML("beforeend",
            `<tr data-bookid = "${boock.id}">
                <td>${boock.Title}</td>
                <td>${boock.Year}</td>
                <td>${boock.Publisher}</td>
                <td>${boock.ISBN}</td>
                <td>${boock.Pages}</td>
                <td>${boock.Notes[0] ? boock.Notes.join(' '):'No notes'}</td>
            </tr>`)

    })
})
.catch(error => console.log(error))


kingBoocksEl.addEventListener("click", e => {
    console.log(e.target.parentElement.dataset.bookid);
    const bid = e.target.parentElement.dataset.bookid
    fetch('https://stephen-king-api.onrender.com/api/book/'+bid)
    .then(res => res.json())
    .then((data) => console.log(data))
    .then((err) => console.log(err));
})