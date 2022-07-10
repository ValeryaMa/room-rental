document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll',() => {
    let menuLi = document.querySelector('.menu__item')
    let nav = document.querySelector('.nav')
    let scrollDistance = window.scrollY

    //console.log(scrollDistance)
    if(scrollDistance > 100) {
      nav.classList.add('nav-on')

  } else if (scrollDistance < 50) {
      nav.classList.remove('nav-on')
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log('entry.isIntersecting', entry.target.id);
            document.querySelectorAll('li.menu__item').forEach((link) => {
                if (link.getAttribute('name') === entry.target.id){
                    link.classList.add('menu__item_active');
                } else{
                    link.classList.remove('menu__item_active');
                }
                
            });
        }
    });
}, {
    threshold: 0.7,
});

document.querySelectorAll('.section').forEach((section) =>{
    observer.observe(section)
});

});

