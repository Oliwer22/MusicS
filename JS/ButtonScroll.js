window.addEventListener('scroll', function() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    if (scrollTop > clientHeight / 2) {
        document.querySelector('.scrolltop').style.display = 'block';
    } else {
        document.querySelector('.scrolltop').style.display = 'none';
    }
});
document.querySelector('.scrolltop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});