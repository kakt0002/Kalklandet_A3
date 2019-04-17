        var burgerknap = document.querySelector('.burgerknap');
        var mobilmenu = document.querySelector('nav');
        burgerknap.addEventListener("click", function () {
            if (mobilmenu.style.display == 'none' || mobilmenu.style.display == '') {
                mobilmenu.style.display = 'flex';
            } else {
                mobilmenu.style.display = 'none';
            }
        });
