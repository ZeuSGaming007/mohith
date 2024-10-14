document.addEventListener("DOMContentLoaded", () => {
    const aboutUsBtn = document.getElementById('about-us-btn');
    const aboutUsSection = document.getElementById('about-us');

    // Function to hide all sections
    const hideAllSections = () => {
        document.querySelectorAll('.services, #about-us').forEach(section => {
            section.style.display = 'none';
        });
    };

    // Event listener for About Us button
    aboutUsBtn.addEventListener('click', () => {
        hideAllSections();
        aboutUsSection.style.display = 'block'; // Show About Us section
    });

    // Event listener for Karnataka One button
    const karnatakaOneBtn = document.getElementById('karnataka-one-btn');
    karnatakaOneBtn.addEventListener('click', () => {
        hideAllSections();
        document.getElementById('karnataka-one').style.display = 'block'; // Show Karnataka One services
    });

    // Event listener for Door Step button
    const doorStepBtn = document.getElementById('door-step-btn');
    doorStepBtn.addEventListener('click', () => {
        hideAllSections();
        document.getElementById('door-step').style.display = 'block'; // Show Door Step services
    });

    // Event listener for Central and State Online Services button
    const centralStateBtn = document.getElementById('central-state-btn');
    centralStateBtn.addEventListener('click', () => {
        hideAllSections();
        document.getElementById('central-state').style.display = 'block'; // Show Central and State Online Services
    });

    // Event listener for VA Associates button
    const vaAssociatesBtn = document.getElementById('va-associates-btn');
    vaAssociatesBtn.addEventListener('click', () => {
        hideAllSections();
        document.getElementById('va-associates').style.display = 'block'; // Show VA Associates services
    });

    // Event listener for XYZ button
    const xyzBtn = document.getElementById('xyz-btn');
    xyzBtn.addEventListener('click', () => {
        hideAllSections();
        document.getElementById('xyz').style.display = 'block'; // Show XYZ services
    });

   