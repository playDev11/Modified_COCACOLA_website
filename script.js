var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl.to("#coke",{
    top: "120%",
    left: "10%",
    rotate: "0deg"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left: "23%"
}, 'orange')
tl.to("#orange",{
    width: "15%",
    top:"160%",
    right: "10%"
}, 'orange')
tl.to("#leaf",{
    top:"110%",
    rotate: "130deg",
    left: "70%"
}, 'orange')
tl.to("#leaf2",{
    top:"110%",
    rotate: "130deg",
    left: "0%"
}, 'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-100%",
    top: "110%"
}, 'ca')
tl2.from("#cocacola",{
    rotate: "-90deg",
    top: "100%",
    left: "-100%",
}, 'ca')

tl2.from(".lemon2",{
    rotate: "90deg",
    left: "100%",
    top: "110%"
}, 'ca')
tl2.from("#pepsi",{
    rotate: "90deg",
    top: "110%",
    left: "100%",
}, 'ca')

tl2.to("#orange-cut",{
    width:"18%",
    left: "42%",
    top: "190%"
}, 'ca')
tl2.to("#coke",{
    width:"15%",
    top: "200%",
    left: "43%",
}, 'ca')
document.addEventListener('DOMContentLoaded', function () {
  var navbar = document.getElementById('navbar')
  var sections = document.querySelectorAll('.two')

  window.addEventListener('scroll', function () {
    var currentScroll = window.pageYOffset

    sections.forEach(function (section) {
      if (section.offsetTop <= currentScroll + navbar.offsetHeight) {
        navbar.classList.add('navbar-black')
      } else {
        navbar.classList.remove('navbar-black')
      }
    })
  })
});

$(document).ready(function () {
    $("a").on("click", function (event) {

        if (this.hash !== "") {
            
            event.preventDefault();
            
            
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                }
            );
        } 
    });
});
