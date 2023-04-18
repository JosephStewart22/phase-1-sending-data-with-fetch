function submitData(person, personsEmail) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify({ 
            name: person,
            email: personsEmail,
        }),
    })
        .then(resp => resp.json())
        .then(function(json) {
            document.body.innerHTML = json.id;
        })
        .catch(error => {
            document.body.innerHTML = error.message;
        })
    }