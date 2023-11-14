document.getElementById('burger-btn').addEventListener('click', function() {
    var menu = document.querySelector('.burger-content');
    var computedStyle = window.getComputedStyle(menu);
    if (computedStyle.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
});
