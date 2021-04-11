const bg = document.querySelector('.background-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5 ;

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    bg.style.transform = `translate3d(-${mouseX/5}%, -${mouseY/5}%, 0)`;
});

maxheight = 0;
tabs = jQuery('.tab-content .tab-pane');
jQuery.each(tabs, function() {
    this.classList.add("active"); /* make all visible */
    maxheight = (this.clientHeight > maxheight ? this.clientHeight : maxheight);
    if (!jQuery(this).hasClass("show")) {
        this.classList.remove("active"); /* hide again */
    }
});
jQuery.each(tabs, function() {
    jQuery(this).height(maxheight);
});
