function calculateAge() {
    // Get the input value (birthdate)
    var birthdate = document.getElementById('birthDate').value;

    // Check if a birthdate is selected
    if (birthdate !== '') {
        // Calculate the age
        var today = new Date();
        var birthdateDate = new Date(birthdate);
        var age = today.getFullYear() - birthdateDate.getFullYear();

        // Check if birthday has occurred this year
        if (today.getMonth() < birthdateDate.getMonth() || (today.getMonth() === birthdateDate.getMonth() && today.getDate() < birthdateDate.getDate())) {
            age--;
        }

        // Display the result
        document.getElementById('result').innerText = 'Your age is: ' + age + ' years.';
    } else {
        alert('Please select a birthdate.');
    }
}
