// Inject shared footer from footer.html into any page with a placeholder element
document.addEventListener('DOMContentLoaded', () => {
    const placeholders = document.querySelectorAll('[data-include-footer]');
    if (placeholders.length === 0) return;

    fetch('footer.html')
        .then(response => response.text())
        .then(html => {
            placeholders.forEach(container => {
                container.innerHTML = html;
            });
        })
        .catch(() => {
            // Fail silently; page still works without injected footer
        });
});
