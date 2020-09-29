   function contact()
    {
        let name = document.querySelector('#name').value;
        alert('I will reach out to you shortly at ' + name + '.');
        if (name === '') {
            alert('I did not get anything. Please enter in again.')
        }
    }
    alert('Serious inquieries only.')