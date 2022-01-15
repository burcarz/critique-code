async function logout() {
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

window.onload = function() {
    document.querySelector('#logout-btn').addEventListener('click', logout);
};