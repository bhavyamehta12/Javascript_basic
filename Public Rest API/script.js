const loadingElement = document.getElementById("loading");
const postsContainer = document.getElementById("posts");
const errorElement = document.getElementById("error");
const noResultsElement = document.getElementById("noResults");

const input = document.getElementById("input_area");
const searchButton = document.getElementById("searchButton");
const refreshButton = document.getElementById("refreshButton");

let postsData = [];


async function fetchData() {

    loadingElement.style.display = "block";
    errorElement.textContent = "";
    noResultsElement.textContent = "";

    try {

        const res = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();

        postsData = data.filter(post => post.id <= 10);

        loadingElement.style.display = "none";

        displayPosts(postsData);

    } catch (error) {

        loadingElement.style.display = "none";

        errorElement.textContent =
            "Failed to load posts. Please try again.";

        console.error("Error fetching data:", error);
    }
}


function displayPosts(posts) {

    postsContainer.innerHTML = "";

    if (posts.length === 0) {

        noResultsElement.textContent = "No results found.";

        return;
    }

    noResultsElement.textContent = "";

    posts.forEach(post => {

        const postElement = document.createElement("div");

        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        `;

        postsContainer.appendChild(postElement);
    });
}


searchButton.addEventListener("click", () => {

    const searchValue = input.value.toLowerCase().trim();

    const result = postsData.filter(post =>
        post.title.toLowerCase().includes(searchValue)
    );

    displayPosts(result);
});


refreshButton.addEventListener("click", () => {

    input.value = "";

    fetchData();
});


fetchData();