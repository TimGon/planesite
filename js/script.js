$(document).ready(function(){
    // slider

    $('.slider').slick({
        arrows: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // plugin date
    $('.form__date').datepicker({});
    
    $('button.main__btn').on('click', function() {
        $('main__choose').toggleClass(".-active")
        $('form__content').toggleClass(".is-active");

    })
    
    // Open subnav
    $('.header__map').click(function () {
        let top = $('.header__subnav').offset().top;
        if(top == -545){
            header = $('.header__subnav').offset({top:top+593});
        }
        else{
            header.offset({top:top-593});
        }
    })

        // Implementation of "Issuance of an air ticket"
        const tabItems = Array.from(document.querySelectorAll('.main__btn'))
        const contentItems = Array.from(document.querySelectorAll('.form__content'))

        const clearActiveClass = (element, className = 'is-active') => {
        element.find(item => item.classList.remove(`${ className }`))
            document.querySelector('.form__cb').style.display='block';
            contentItems[1].style.display="none";
            contentItems[2].style.display="none";
        }

        const setActiveClass = (element, index, className = 'is-active') => {
        element[index].classList.add(`${ className }`)
            if(element[index]==element[1] || element[index]==element[2] ) {
                document.querySelector('.form__cb').style.display='none';
            }
            if(element[index]==element[0]) contentItems[0].style.display="flex";

            if(element[index]==element[1]){
                contentItems[1].style.display="flex"; 
                contentItems[0].style.display="none";
            } 

            if(element[index]==element[2]) {
                contentItems[0].style.display="none";
                contentItems[2].style.display="flex";
            
            }
            if(element[index]==contentItems[3]){
                contentItems[0].style.display="flex";
                contentItems[1].style.display="flex";
                contentItems[2].style.display="flex";
            }
        }

        const checkoutTabs = (item, index) => {
        item.addEventListener('click', () => {
            
            clearActiveClass(tabItems)
            clearActiveClass(contentItems)
            
            setActiveClass(tabItems, index)
            setActiveClass(contentItems, index)
            
        })
        }

        tabItems.forEach(checkoutTabs)
})
