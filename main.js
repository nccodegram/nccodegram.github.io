//  Execute script after page load

window.onload = function digital_fn() {
    // Toggle Button
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event) {
        collapse.classList.toggle('active')
    })
}