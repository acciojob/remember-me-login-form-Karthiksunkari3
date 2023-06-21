   const form = document.getElementById('loginForm');
    const checkbox = document.getElementById('checkbox');
    const submitBtn = document.getElementById('submit');
    const existingBtn = document.getElementById('existing');


if (localStorage.getItem('username') && localStorage.getItem('password')) {
      submitBtn.insertAdjacentHTML('afterend', '<button id="existing">Login as existing user</button>');
      existingBtn.addEventListener('click', loginAsExistingUser);
    }

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert('Logged in as ' + username);
    });

    function loginAsExistingUser() {
      const savedUsername = localStorage.getItem('username');
      alert('Logged in as ' + savedUsername);
    }