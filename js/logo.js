document.addEventListener('DOMContentLoaded', function() {
    var ab_logo1 = new Walkway({
        selector: '.ab_logo1',
        duration: 700,
        easing:'easeInQuint'
    });
    var ab_logo2 = new Walkway({
        selector: '.ab_logo2',
        duration: 300,
        easing:'easeOutQuint'
    });
    ab_logo1.draw(function(){ab_logo2.draw();});
});