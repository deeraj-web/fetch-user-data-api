function fetchUsers() {
  const container = document.getElementById("userContainer");
  container.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(users => {
      container.innerHTML = "";
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      container.innerHTML = `<p class="error">Failed to fetch user data. Please try again later.</p>`;
      console.error("Error fetching users:", error);
    });
}

// Fetch users when page loads
window.onload = fetchUsers;
