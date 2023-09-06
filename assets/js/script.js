    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.closeBtn');
    const  navUl = document.querySelector('nav ul')

    menuBtn.addEventListener('click' , ()=> {
      navUl.style.right= '0'
      navUl.style.display= 'flex'
    })
    closeBtn.addEventListener('click' , ()=> {
        navUl.style.right= '-100%'
        // navUl.style.display= 'none'

    })
