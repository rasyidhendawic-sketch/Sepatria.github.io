document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'sepatria2025') {
        alert('Login berhasil! Selamat datang di SEPATRIA 10.4');
        window.location.href = 'homepage.html';
    } else {
        alert('Username atau password salah!');
    }
});
