function searchBooks() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.querySelectorAll(".card");

    books.forEach(book => {
        book.style.display = book.innerText.toLowerCase().includes(input)
            ? "block" : "none";
    });
}

function logIn() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user.trim() === "" || pass.trim() === "") {
        alert("Please complete all fields!");
    } else {
        alert("Welcome, " + user + "!");
    }
}

function changeChapter(page) {
    window.location.href = page;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

document.addEventListener("DOMContentLoaded", function() {
    let search = document.getElementById("search");

    if (search) {
        search.addEventListener("input", searchBooks);
    }

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });
});