document.addEventListener("DOMContentLoaded", function (event) {
    //do work

    // Get the video
    var video = document.getElementById("start-sq");

    // Get the button
    var search = document.getElementById("search");

    var text = document.getElementById("text")

    search.addEventListener("click", getCity);

    function getCity() {
        var search_box_city = document.getElementById("city").value;
        console.log("Searching for: " + search_box_city);

    }

    //document.getElementById("bar1").style.animation = "audiomover" + (Math.random() * 100) + "s infinite";

    // window.addEventListener("scroll", fadeIn);


    // function fadeIn() {
    //     var textPosition = text.getBoundingClientRect().top;
    //     var windowHeight = window.innerHeight;
    //     if (windowHeight > textPosition) {
    //         console.log("remove")
    //         text.classList.remove("push-left");
    //         // image.classList.remove("push-right");
    //     } else {
    //         text.classList.add("push-left");
    //         // image.classList.add("push-right");
    //     }
    // }

    const inViewport = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
        });
    };

    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

    // Attach observer to every [data-inviewport] element:
    const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
    ELs_inViewport.forEach(EL => {
        Obs.observe(EL, obsOptions);
    });
});