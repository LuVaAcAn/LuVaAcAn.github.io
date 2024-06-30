document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const circlesContainer = document.querySelector('.circles-container');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav_list ul');
    const mpabt = document.getElementById('mpabt');
    const bdbabt1 = document.getElementById('bdbabt1');
    const bdbabt2 = document.getElementById('bdbabt2');
    const bdbabt3 = document.getElementById('bdbabt3');
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const cvDownloadBtn = document.getElementById("cv-download");

    body.style.overflowX = 'hidden';

    function disableScroll() {
        const SBLOB = document.getElementById('s_blob');
        if (SBLOB) {
            SBLOB.style.zIndex = (window.innerWidth < 768) ? '' : '991';
        }
    }

    function enableScroll() {
        body.style.overflow = '';
        const SBLOB = document.getElementById('s_blob');
        if (SBLOB) {
            SBLOB.style.zIndex = '';
        }
    }

    disableScroll();
    setTimeout(enableScroll, 700);

    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var moveAmount = scrollTop * 0.3;
        circlesContainer.style.transition = 'transform 0.3s ease-in-out';
        circlesContainer.style.transform = 'translateY(' + moveAmount + 'px)';
    });
    
    mobileMenu.addEventListener('click', toggleNavList);

    function toggleNavList() {
        navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
        setTimeout(() => {
            navList.style.opacity = (navList.style.display === 'flex') ? 1 : 0;
        }, 10);
    }

    function applyTransformations() {
        if (window.innerWidth < 768) {
            mpabt.addEventListener('mouseenter', function() {
                setTransform(bdbabt1, 'translateX(20px) translateY(130px) rotate(25deg)');
                setTransform(bdbabt2, 'translateX(100px) translateY(90px)');
                setTransform(bdbabt3, 'translateX(200px) translateY(90px) scaleX(-1)');
            });
            mpabt.addEventListener('mouseleave', function() {
                setTransform(bdbabt1, 'translateX(60px) translateY(150px)');
                setTransform(bdbabt2, 'translateX(100px) translateY(150px)');
                setTransform(bdbabt3, 'translateX(180px) translateY(150px) scaleX(-1)');
            });
        } else if (window.innerWidth > 769) {
            mpabt.addEventListener('mouseenter', function() {
                setTransform(bdbabt1, 'translateX(-255px) translateY(435px) rotate(12deg) scale(1.8)');
                setFilter(bdbabt1, 'contrast(150%)');
                setTransform(bdbabt2, 'translateX(-25px) translateY(340px) scale(2)');
                setFilter(bdbabt2, 'contrast(200%)');
                setTransform(bdbabt3, 'translateX(200px) translateY(320px) rotate(-12deg) scaleX(-1) scale(1.8)');
                setFilter(bdbabt3, 'contrast(150%)');
            });
            mpabt.addEventListener('mouseleave', function() {
                setTransform(bdbabt1, 'translateX(-190px) translateY(500px)');
                setTransform(bdbabt2, 'translateX(-40px) translateY(420px)');
                setTransform(bdbabt3, 'translateX(180px) translateY(450px) scaleX(-1)');
            });
        }
    }

    function setTransform(element, transformation) {
        element.style.transform = transformation;
    }

    function setFilter(element, filter) {
        element.style.filter = filter;
    }

    document.getElementById('mpabt').addEventListener('mouseenter', applyTransformations);
    document.getElementById('mpabt').addEventListener('mouseleave', applyTransformations);
    applyTransformations();
    window.addEventListener('resize', applyTransformations);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            scrollToTopBtn.style.opacity = 1;
            scrollToTopBtn.style.display = "flex"; 
        } else {
            scrollToTopBtn.style.opacity = 0;
            setTimeout(function() {
                scrollToTopBtn.style.display = "none";
            }, 300);
        }
        if(window.innerWidth > 769){
            cvDownloadBtn.style.opacity = 1;
            cvDownloadBtn.style.bottom = (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) ? "10%" : "20%";
        }
        if(window.innerWidth < 768){
            cvDownloadBtn.style.opacity = (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) ? 1 : 0;
        }
    }

    /*Animacion de entradas*/
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }else{
                entry.target.classList.remove('show');
            }
        });
    });

    document.querySelectorAll('.hidden, .hidden1').forEach((el) => observer.observe(el));

    const observerright = new IntersectionObserver((entries) => {
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                entry.target.classList.add('showright');
            }else{
                entry.target.classList.remove('showright');
            }
        });
    });

    document.querySelectorAll('.hiddenright').forEach((el) => observerright.observe(el));

    const observerleft = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('showleft');
            } else {
                entry.target.classList.remove('showleft');
            }
        });
    });

    document.querySelectorAll('.hiddenleft').forEach((el) => observerleft.observe(el));
});