function validateSyntax() {
    let input = document.getElementById('petInput').value;
    let result = /^pet_\d{4}[A-Za-z]+$/; // Placeholder for validation result

        if (result.test(input)) {
            document.getElementById('result').innerText = "Valid Syntax";
            document.getElementById('result').classList.remove("invalid");
            document.getElementById('result').classList.add("valid"); 
        } else {
            document.getElementById('result').innerText = "Invalid Syntax";
            document.getElementById('result').classList.remove("valid");
            document.getElementById('result').classList.add("invalid");
    }
            
}


