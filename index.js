


const submitData = (nameString, emailString) => {
    let formData = {
        name: nameString,
        email: emailString,
    };

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
            .then(object => {
                console.log(object)
                let IdNumber = object.id;
                let h2 = document.createElement('h2');
                h2.textContent = IdNumber;
                document.querySelector('body').appendChild(h2);
            })

                .catch(error => {
                    alert("An error has occured");
                    console.log(error.message);
                    let h3 = document.createElement('h3');
                    h3.textContent = "request to http://localhost:3000/users failed, reason: Unauthorized Access";
                    document.querySelector('body').appendChild(h3);
                });
};