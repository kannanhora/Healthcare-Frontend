function showTab(index) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-button');
    
    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
    
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
AOS.init({
    duration: 1000,
    once: true
});

document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-content");
    const message = document.getElementById("dynamic-message");

    // Define messages for each tab
    const messages = [
        "🚀 Explore the onboarding experience tailored just for you!",
        "💡 Get therapy tracking and specialist assistance at your fingertips.",
        "📊 Analyze health reports and get personalized insights."
    ];

    function showTab(index) {
        // Hide all content and remove active class
        contents.forEach((content) => content.classList.remove("active"));
        tabs.forEach((tab) => tab.classList.remove("active"));

        // Show the selected content and mark tab as active
        contents[index].classList.add("active");
        tabs[index].classList.add("active");

        // Add fade-out effect before updating message
        message.style.opacity = 0;
        setTimeout(() => {
            message.textContent = messages[index];
            message.style.opacity = 1;
        }, 300); // Delay to match the transition
    }

    // Attach event listeners
    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            showTab(index);
        });
    });
});
