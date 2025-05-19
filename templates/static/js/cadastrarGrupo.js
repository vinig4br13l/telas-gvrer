const users = ["Gabriel Vinícius", "William Mattson", "Marlison Soares", "Mauro Caynan"];
      const searchInput = document.getElementById('searchInput');
      const suggestionsBox = document.getElementById('suggestionsBox');
      const userList = document.getElementById('userList');
  
      searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionsBox.innerHTML = '';
  
        if (query.length > 0) {
          const filtered = users.filter(name => name.toLowerCase().includes(query));
          filtered.forEach(user => {
            const div = document.createElement('div');
            div.textContent = user;
            div.onclick = () => addUser(user);
            suggestionsBox.appendChild(div);
          });
        }
      });
  
      function addUser(user) {
        const li = document.createElement('li');
        li.textContent = user;
        userList.appendChild(li);
        searchInput.value = '';
        suggestionsBox.innerHTML = '';
      }