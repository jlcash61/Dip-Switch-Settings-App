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

    // Add spaces between each bit
    const spacedBinaryString = reversedBinaryString.split('').join(' ');

    resultDiv.textContent = `Dip Switch Settings: ${spacedBinaryString}`;
}
