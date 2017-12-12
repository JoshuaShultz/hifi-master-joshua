(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.querySelector('.loginForm');

        form.onsubmit = () => {
            const data = JSON.stringify({
                'username': form.username.value,
                'password': form.password.value
            });

            fetch('http://localhost:1337/login', {
                'method': 'POST',
                'headers': {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Content-Length': data.length
                },
                'mode': 'cors',
                'cache': 'default',
                'body': data
            })
                .then((result) => {
                    if (result.status == 200) {
                        return result.json()
                    } else {
                        throw new Error("Forkerte oplysninger");
                    }
                })
                .then((data) => {
                    localStorage.setItem('token', data.AccessToken);
                    localStorage.setItem('userid', data.ID);
                    //document.getElementById('status').innerHTML = "Du er logget ind"; // kan også hentes fra localStorage
                    window.location.replace("admin/index.html");
                })
                .catch((err) => {
                    console.log(err);
                });

            return false;
        };
    });
})();
