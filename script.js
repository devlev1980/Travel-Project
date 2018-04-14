// Sidenav

const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav,{})

const slider = document.querySelector('.slider');
M.Slider.init(slider,{
    indicators:false,
    height:500,
    transition: 500,
    interval: 6000
});
const autoComplete = document.querySelector('.autocomplete');
M.Autocomplete.init(autoComplete,{
    data:{
        "Kiev":null,
        "Chernihiv":null,
        "Ternopol":null,
        "Lvov":null,
        "Cherkassy":null,
        "Odessa":null,
        "Brovary":null,
        "Dnepr":null,
        "Kharkov":null,
        "Kamenez-Podolsk":null,
        "Donetzk":null,
    }
});
const materailBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materailBox,{});

const spy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(spy,{})