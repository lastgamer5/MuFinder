const form = document.getElementById('audioForm');
const inputFile = document.getElementById('inputfile');
const fileNameDisplay = document.getElementById('fileName');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');
const removeButton = document.getElementById('removeFile');

// Display file name and show remove button when a file is chosen
inputFile.addEventListener('change', function() {
  const fileName = inputFile.files.length ? inputFile.files[0].name : 'No file chosen';
  fileNameDisplay.textContent = fileName;
  errorMessage.textContent = ''; // Clear any previous error message
  if (inputFile.files.length) {
    removeButton.style.display = 'inline-block';
  }
});

// Remove file and reset form elements
removeButton.addEventListener('click', function() {
  inputFile.value = ''; // Clear the file input
  fileNameDisplay.textContent = 'No file chosen'; // Reset file name display
  removeButton.style.display = 'none'; // Hide the remove button
});

// Validate form on submit
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting
  successMessage.textContent = ''; // Clear previous success message

  if (inputFile.files.length === 0) {
    errorMessage.textContent = 'No audio file found';
    errorMessage.style.color = 'red';
    setTimeout(() => {
      errorMessage.textContent = ''; // Clear the error message after 5 seconds
    }, 3000);
  } else {
    errorMessage.textContent = ''; // Clear error message if a file is selected
    successMessage.textContent = 'Thank you for trying out this new experimental website, however this feature is still in progress';
    successMessage.style.color = 'green';
    setTimeout(() => {
      successMessage.textContent = ''; // Clear the success message after 5 seconds
    }, 5000);
  }
});
 // Allow video files as audio input on mobile
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      inputFile.accept = 'audio/*,video/*'; // Allow both audio and video files
    }