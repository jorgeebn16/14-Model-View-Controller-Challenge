async function signupFormHandler(event) {
    event.preventDefault();


    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password.value>=8) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            alert("User Signup Successful");


            document.location.replace('/dashboard');

        } else { if (password.value<8) {
            //alert(response.statusText);
            alert("Password do not meet minimun requirements of 8 Characters. Please try using a new Password");
        }
        }
    }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);