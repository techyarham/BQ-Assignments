const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username");
const cardContainer = document.getElementById("main-card");

searchBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    getGitHubUserInfo(username);
  } else {
    alert("Please enter a GitHub username");
  }
});

async function getGitHubUserInfo(username) {
  try {
    console.log("Fetching for:", username); // ✅ moved here
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      alert("User not found!");
      cardContainer.classList.add("d-none");
      return;
    }

    const data = await res.json();

    // Update card
    document.getElementById("pfp").src = data.avatar_url;
    document.getElementById("name").textContent = data.name || "No name";
    document.getElementById("login").textContent = data.login;
    document.getElementById("bio").textContent = data.bio || "No bio provided.";
    document.getElementById("followers").textContent = data.followers;
    document.getElementById("following").textContent = data.following;
    document.getElementById("repos").textContent = data.public_repos;
    document.getElementById("github-link").href = data.html_url;

    cardContainer.classList.remove("d-none");
  } catch (err) {
    alert("Something went wrong!");
    console.error(err);
  }
}