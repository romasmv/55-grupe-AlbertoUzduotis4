const kingBoocksEl = document.getElementById("king-books")

fetch('https://stephen-king-api.onrender.com/api/books')
.then(res => res.json())
.then((data) => {
    data.data.forEach(boock => {
        kingBoocksEl.insertAdjacentHTML("beforeend",
            `<tr>
                <td>${boock.Title}</td>
                <td>${boock.Year}</td>
                <td>${boock.Publisher}</td>
                <td>${boock.ISBN}</td>
                <td>${boock.Pages}</td>
                <td>${boock.Notes[0]}</td>
            </tr>`)

    })
})
.catch(error => console.log(error))