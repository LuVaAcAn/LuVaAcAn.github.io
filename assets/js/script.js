document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navList = document.querySelector('.nav_list ul');

    window.addEventListener('scroll', function() {
        // Get the distance scrolled from the top of the page
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        
        // Calculate the amount to move the circles container
        var moveAmount = scrollTop * 0.3; // Adjust the multiplier to control the speed of movement
        
        // Apply the transform with smooth transition to the circles container
        document.querySelector('.circles-container').style.transition = 'transform 0.3s ease-in-out'; // Adjust the transition duration and timing function as needed
        document.querySelector('.circles-container').style.transform = 'translateY(' + moveAmount + 'px)';
    });
    
    mobileMenu.addEventListener('click', toggleNavList);

    function toggleNavList() {
        if (navList.style.display === 'flex') {
            hideNavList();
        } else {
            showNavList();
        }
    }

    function showNavList() {
        navList.style.display = 'flex';
        setTimeout(() => {
            navList.style.opacity = 1;
        }, 10);
    }

    function hideNavList() {
        navList.style.opacity = 0;
        setTimeout(() => {
            navList.style.display = 'none';
        }, 125);
    }

    function applyTransformations() {
        const mpabt = document.getElementById('mpabt');
        const bdbabt1 = document.getElementById('bdbabt1');
        const bdbabt2 = document.getElementById('bdbabt2');
        const bdbabt3 = document.getElementById('bdbabt3');

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

    // Smooth scrolling function
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 30px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        scrollToTopBtn.style.display = (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) ? "block" : "none";
    }

});