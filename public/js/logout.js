async function logout() {
    console.log('clicked!');
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(response.statusText);
    };
};

document.getElementById('logout-btn').addEventListener('click', logout);