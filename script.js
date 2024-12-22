// Save form data to localStorage
function saveFormData(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    const formData = {};
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        formData[input.id] = input.value;
    });
    
    localStorage.setItem(formId, JSON.stringify(formData));
    console.log(`Saved data for ${formId}:`, formData); // Debug log
}

// Load form data from localStorage
function loadFormData(formId) {
    const savedData = localStorage.getItem(formId);
    if (savedData) {
        const formData = JSON.parse(savedData);
        const form = document.getElementById(formId);
        if (!form) return;
        
        Object.keys(formData).forEach(key => {
            const input = form.querySelector(`#${key}`);
            if (input) {
                input.value = formData[key];
            }
        });
    }
}

// Clear all form data
function clearAllData() {
    if (confirm('Are you sure you want to clear all your progress? This cannot be undone.')) {
        localStorage.clear();
        window.location.reload();
    }
}

// Create navigation sidebar
function createNavigation() {
    const navHtml = `
        <div class="nav-section">
            <div class="nav-header">BUSINESS IDEA JOURNAL</div>
            <a href="index.html" class="nav-link">Home</a>
        </div>
        
        <div class="nav-section">
            <div class="nav-header">DEVELOPMENT STEPS</div>
            <a href="step1.html" class="nav-link">
                <span class="step-number">1</span>
                Identify Problem
            </a>
            <a href="step2.html" class="nav-link">
                <span class="step-number">2</span>
                Brainstorm Ideas
            </a>
            <a href="step3.html" class="nav-link">
                <span class="step-number">3</span>
                Understand Customer
            </a>
            <a href="step4.html" class="nav-link">
                <span class="step-number">4</span>
                Define Value Proposition
            </a>
            <a href="step5.html" class="nav-link">
                <span class="step-number">5</span>
                Test Solution
            </a>
            <a href="step6.html" class="nav-link">
                <span class="step-number">6</span>
                Business Plan
            </a>
            <a href="step7.html" class="nav-link">
                <span class="step-number">7</span>
                Practice Pitch
            </a>
            <a href="step8.html" class="nav-link">
                <span class="step-number">8</span>
                Deliver Pitch
            </a>
        </div>

        <div class="nav-section">
            <div class="nav-header">SUMMARY</div>
            <a href="summary.html" class="nav-link">View Full Summary</a>
        </div>
    `;

    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.innerHTML = navHtml;
    }
}

// Add active class to current page in navigation
function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Auto-save functionality for forms
function setupFormAutoSave() {
    const form = document.querySelector('form');
    if (form) {
        const formId = form.id;
        loadFormData(formId);
        
        form.addEventListener('input', () => {
            saveFormData(formId);
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    updateActiveNavLink();
    setupFormAutoSave();
});