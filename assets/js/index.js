document.getElementById('my-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let isValid = true; 

    clearErrorMessages();

    const firstname = document.getElementById('firstname');
    if (firstname.value.trim() === '') {
      showError('firstname-error', 'First Name is required');
      isValid = false;
    }
  

    const lastname = document.getElementById('lastname');
    if (lastname.value.trim() === '') {
      showError('lastname-error', 'Last Name is required');
      isValid = false;
    }
  

    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
    if (email.value.trim() === '') {
      showError('email-error', 'Email is required');
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      showError('email-error', 'Email is not valid');
      isValid = false;
    }
  
  
    // Validate Message
    const msg = document.getElementById('msg');
    if (msg.value.trim() === '') {
      showError('msg-error', 'Message is required');
      isValid = false;
    }
  
    // Validate Checkbox
    const gridCheck = document.getElementById('gridCheck');
    if (!gridCheck.checked) {
      showError('gridCheck-error', 'To submit this form, please consent to being contacted');
      isValid = false;
    }
  

    if (isValid) {
      alert('Form is valid! Submitting...');

    }

    // Validate Radio Button Group (Query Type)
        const queryRadios = document.querySelectorAll('input[name="query"]');
        console.log(queryRadios);
        let querySelected = false;
        queryRadios.forEach((radio) => {
        if (radio.checked) {
            querySelected = true;
        }
        });
        if (!querySelected) {
        showError('query-error', 'You must select the Query Type');
        isValid = false;
        }


  });

  function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
  }
  

  function clearErrorMessages() {
    document.querySelectorAll('span').forEach(function(span) {
      span.textContent = '';
    });
  }

  document.querySelectorAll('input, textarea').forEach(function(element) {
    element.addEventListener('keyup', function() {
      clearErrorMessages(); 
    });



    document.querySelectorAll('.gap-2').forEach(function(element) {
        element.classList.remove('gap-2');
        element.classList.add('py-4');
    });



  });
  