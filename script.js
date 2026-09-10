const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}

const form = document.querySelector('#contact-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    name: document.querySelector('#name').value,
    email: document.querySelector('#email').value,
    subject: document.querySelector('#subject').value,
    message: document.querySelector('#message').value
  };

  try {
    const response = await fetch('https://script.google.com/macros/s/AKfycbxywOMsbDn1WWtsx_33xWTuAWQ1PGscKBR0d1ykiKnlUhVv6NWyYc03I-eTRf-HTJ2_/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    if (result.result === 'success') {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Submission Error:', error);
  }
});