
// Get elements for the modal and form
const orderModal = document.getElementById('order-modal');
const orderOnlineBtn = document.querySelector('.cta-btn[href="#order-section"]'); // Updated to use the right button
const closeModalBtn = document.getElementById('close-modal');
const orderForm = document.getElementById('orderForm');

// Function to open the modal
function openModal() {
  orderModal.style.display = 'block'; // Show the modal
}

// Function to close the modal
function closeModal() {
  orderModal.style.display = 'none'; // Hide the modal
}

// Function to handle order submission
function handleOrder(event) {
  event.preventDefault(); // Prevent the form from submitting

  const burgerType = document.getElementById('burgerType').value;
  const location = document.getElementById('location').value;
  let price;

  // Determine the price based on burger type
  switch (burgerType) {
    case "Cheeseburger":
      price = 5;
      break;
    case "Veggie Burger":
      price = 4;
      break;
    case "Bacon Burger":
      price = 6;
      break;
    case "Chicken Burger":
      price = 5.5;
      break;
    default:
      price = 0;
  }

  // Confirm the order
  const confirmationMessage = `You ordered a ${burgerType} for $${price}. Delivery location: ${location}.`;
  alert(confirmationMessage);

  // Close the modal after confirming the order
  closeModal();
}

// Event listeners
orderOnlineBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default link behavior
  openModal(); // Open the modal
});

closeModalBtn.addEventListener('click', closeModal); // Close modal on button click

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === orderModal) {
    closeModal();
  }
});

// Add event listener for order form submission
orderForm.addEventListener('submit', handleOrder); // Handle order submission

