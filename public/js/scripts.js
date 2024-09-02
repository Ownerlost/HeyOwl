// scripts.js

// Function to handle form submission
function handleFormSubmission(formId, callback) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            callback(new FormData(form));
        });
    }
}

// Example usage: Handle login form submission
handleFormSubmission('login-form', function(formData) {
    fetch('/api/auth/login', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/user/profile';
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// Example usage: Handle registration form submission
handleFormSubmission('register-form', function(formData) {
    fetch('/api/auth/register', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/auth/login';
        } else {
            alert(data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// Example usage: Handle test submission
function handleTestSubmission() {
    const testForm = document.getElementById('test-form');
    if (testForm) {
        testForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(testForm);
            fetch('/api/test/submit', {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = '/test/result';
                } else {
                    alert(data.message);
                }
            })
            .catch(error => console.error('Error:', error));
        });
    }
}

// Initialize test form submission handling
handleTestSubmission();

// Example usage: Navigation Menu Toggle for Mobile
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
}

// Example usage: Fetch and display notifications
function fetchNotifications() {
    fetch('/api/notifications')
    .then(response => response.json())
    .then(data => {
        const notificationsContainer = document.getElementById('notifications-container');
        if (notificationsContainer) {
            notificationsContainer.innerHTML = data.notifications.map(notification => `
                <div class="notification">
                    <p>${notification.message}</p>
                </div>
            `).join('');
        }
    })
    .catch(error => console.error('Error fetching notifications:', error));
}

// Initialize notifications fetching
fetchNotifications();
