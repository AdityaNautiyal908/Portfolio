function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active")
}

document.addEventListener('DOMContentLoaded', function(){
    var selectors = [
        '.hero .hero-blue',
        '.hero .hero-yellow',
        '.logos .track',
        '.skills .holder-blue',
        '.work-experience .jobs article',
        '.bento .bento-item',
        'footer .container'
    ];
    var targets = document.querySelectorAll(selectors.join(','));
    targets.forEach(function(el){ el.classList.add('reveal'); });

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        targets.forEach(function(el){ el.classList.add('visible'); });
        return;
    }

    var observer = new IntersectionObserver(function(entries, obs){
        entries.forEach(function(entry){
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

    targets.forEach(function(el){ observer.observe(el); });
});
