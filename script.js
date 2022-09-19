
$(function(){
    $(window).scroll(function(){

        if(this.scrollY > 20){
            $('nav').addClass("sticky");
        }else{
            $('nav').removeClass("sticky");
        }


        if(this.scrollY > 500){
             $('.scroll-up').addClass("show")
        }else{
            $('.scroll-up').removeClass("show")
        }
    })

    // scroll top
    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0})
    })

    // scroll down
    $(".btn").click(function() {
        $('html').animate({scrollTop: $('.contact').offset().top
        },500);
    })
    $('nav .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('nav .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
})

function sub(){
    alert("Thank you : )");
  }

const scriptURL = 'https://script.google.com/macros/s/AKfycbwtM3hc3eovAn2dNBMcnyjiMoMKubQXoy8MR-0_YLp4uiglkOye5gt5De1jkCuZP4pD/exec'
    const form = document.forms['contact-us']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })
