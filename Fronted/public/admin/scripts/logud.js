document.getElementById('logud').addEventListener('click', () => {
    if (confirm('vil du logge af?')) {
        localStorage.clear();
        window.location.replace("index.html");
    }
})