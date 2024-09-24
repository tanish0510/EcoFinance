function calculateGreenScore(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const energyUsage = parseFloat(document.getElementById('energyUsage').value);
    const wasteProduction = parseFloat(document.getElementById('wasteProduction').value);
    const waterConservation = parseFloat(document.getElementById('waterConservation').value);

    // Calculate the Green Score
    const score = (waterConservation * 2) - (energyUsage * 0.5) - (wasteProduction * 0.3);

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Your Green Score is: <strong>${score.toFixed(2)}</strong>`;
}