document.addEventListener('DOMContentLoaded', function() {
  const submitBtn = document.querySelector('.submitBTN');
  submitBtn.addEventListener('click', submitForm);

  function submitForm() {
    const firstNameInput = document.querySelector('.firstName');
    const lastNameInput = document.querySelector('.lastName');
    const addressInput = document.querySelector('.address');
    const telephoneInput = document.querySelector('.telephone');
    const emailInput = document.querySelector('.email');

    const participantName = firstNameInput.value;
    const schoolName = lastNameInput.value;
    const address = addressInput.value;
    const phoneNumber = telephoneInput.value;
    const email = emailInput.value;

    const createdDate = new Date().toISOString();

    const formData = {
      participantName,
      schoolName,
      address,
      phoneNumber,
      email,
      createdDate,
    };

    const headers = {
      'Content-Type': 'application/json',
      withCredentials: true,
    };

    axios.post('https://trenova-training-participants-data-api-3ccr.vercel.app/api/auth/signup', formData, { headers })
      .then(function(response) {
        console.log(response.data);
        alert('data sent');
        // Handle the response as needed
      })
      .catch(function(error) {
        console.error(error);
        // Handle the error as needed
      });
  }
});
