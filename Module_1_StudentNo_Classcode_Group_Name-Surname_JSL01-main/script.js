function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = /^pet_\d{4}[A-Za-z]+$/; // Placeholder for validation result

        if (result.test(input)) {
            document.getElementById('result').innerText = "Valid Syntax"; 
        } else {
            document.getElementById('result').innerText = "Invalid Syntax";
    }
            
}


