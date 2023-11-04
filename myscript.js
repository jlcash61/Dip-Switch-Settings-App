function calculateDipSwitch() {
    const addressInput = document.getElementById("addressInput");
    const resultDiv = document.getElementById("result");

    const address = parseInt(addressInput.value);
    if (isNaN(address)) {
        resultDiv.textContent = "Invalid input. Please enter a valid number.";
        return;
    }

     // Convert the address to binary (8 bits) with LSB on the left and reverse it
    const binaryString = address.toString(2);
    const reversedBinaryString = binaryString.split("").reverse().join("").padEnd(8, "0");

    resultDiv.textContent = `Dip Switch Settings: ${reversedBinaryString}`;

    if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
    });
}

}
