const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click",function()
{
    document.body.classList.toggle("dark");
});

fetch("https://api.github.com/users/DHARAN-I-DHARAN")
    .then(response => response.json())
    .then(data => {
        document.getElementById("gh-username").textContent = data.login;
        document.getElementById("gh-repos").textContent = data.public_repos;
        document.getElementById("gh-followers").textContent = data.followers;
        document.getElementById("gh-following").textContent = data.following;
        document.getElementById("gh-bio").textContent = data.bio;
    })
    .catch(error => {
        console.log("Error fetching GitHub data:",error);
    });