document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset previous validation states
    resetValidation();

    // Get form elements
    const productName = document.getElementById('productName');
    const productDescription = document.getElementById('productDescription');
    const productQuantity = document.getElementById('productQuantity');
    const productPrice = document.getElementById('productPrice');
    const successMessage = document.getElementById('successMessage');

    let isValid = true;

    // Validate each field
    if (!productName.value.trim()) {
        markAsInvalid(productName);
        isValid = false;
    }

    if (!productDescription.value.trim()) {
        markAsInvalid(productDescription);
        isValid = false;
    }

    if (!productQuantity.value.trim()) {
        markAsInvalid(productQuantity);
        isValid = false;
    }

    if (!productPrice.value.trim()) {
        markAsInvalid(productPrice);
        isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
        successMessage.classList.remove('d-none');
        // Here you would typically submit the form data to a server
        // For this example, we're just showing the success message
    }
});

function markAsInvalid(element) {
    element.classList.add('is-invalid');

    // Add red dot to the label
    const label = document.querySelector(`label[for="${element.id}"]`);
    if (!label.querySelector('.error-dot')) {
        const dot = document.createElement('span');
        dot.className = 'error-dot';
        label.appendChild(dot);
    }
}

function resetValidation() {
    // Remove invalid class from all inputs
    document.querySelectorAll('.form-control').forEach(input => {
        input.classList.remove('is-invalid');
    });

    // Remove all error dots
    document.querySelectorAll('.error-dot').forEach(dot => {
        dot.remove();
    });

    // Hide success message
    document.getElementById('successMessage').classList.add('d-none');
}