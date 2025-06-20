document.getElementById('surveyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Collect form data
    const formData = new FormData(this);
    const data = {};
    
    // Handle regular form fields
    for (let [key, value] of formData.entries()) {
        if (key === 'investment-type') {
            // Handle checkboxes
            if (!data[key]) {
                data[key] = [];
            }
            data[key].push(value);
        } else {
            data[key] = value;
        }
    }
    
    // Display results
    alert('Survey submitted successfully!\n\nForm Data:\n' + JSON.stringify(data, null, 2));
    
    // Reset form
    this.reset();
});
