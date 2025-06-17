document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    const destinationSelect = document.getElementById('destination');
    const dateInput = document.getElementById('date');
    const passengerCountInput = document.getElementById('passenger-count');
    const confirmationMessage = document.getElementById('confirmation-message');

    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const destination = destinationSelect.value;
        const date = dateInput.value;
        const passengerCount = passengerCountInput.value;

        if (validateForm(destination, date, passengerCount)) {
            displayConfirmation(destination, date, passengerCount);
            bookingForm.reset();
        }
    });

    function validateForm(destination, date, passengerCount) {
        if (!destination || !date || !passengerCount) {
            alert('Please fill in all fields.');
            return false;
        }
        if (isNaN(passengerCount) || passengerCount <= 0) {
            alert('Please enter a valid number of passengers.');
            return false;
        }
        return true;
    }

    function displayConfirmation(destination, date, passengerCount) {
        confirmationMessage.innerHTML = `
            <h3>Booking Confirmation</h3>
            <p>Destination: ${destination}</p>
            <p>Date: ${date}</p>
            <p>Number of Passengers: ${passengerCount}</p>
        `;
        confirmationMessage.style.display = 'block';
    }
});