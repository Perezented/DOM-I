const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navigation = document.getElementsByTagName("a");
navigation[0].textContent = "Services";
navigation[1].textContent = "Products";
navigation[2].textContent = "Vision";
navigation[3].textContent = "Features";
navigation[4].textContent = "About";
navigation[5].textContent = "Contact";

let heading1 = document.querySelector("h1");
heading1.textContent = siteContent["cta"]["h1"];

let domButton = document.querySelector(["button"]);
domButton.textContent = siteContent["cta"]["button"];

let codeCircle = document.getElementById("cta-img");
codeCircle.setAttribute("src", siteContent["cta"]["img-src"]);

let featuresH4 = document.querySelector("h4:first-child");
featuresH4.textContent = "Features";

let featuresContent = document.querySelector(["p"]);
featuresContent.textContent = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelectorAll(".top-content h4");
aboutH4[1].textContent = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelectorAll(".main-content p");
aboutP[1].textContent = siteContent["main-content"]["about-content"];

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let bottomH4 = document.querySelectorAll(".bottom-content h4");
let bottomP = document.querySelectorAll(".bottom-content p");

bottomH4[0].textContent = siteContent["main-content"]["services-h4"];
bottomH4[1].textContent = siteContent["main-content"]["product-h4"];
bottomH4[2].textContent = siteContent["main-content"]["vision-h4"];

bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact h4");
contact.textContent = siteContent["contact"]["contact-h4"];

let contactInfo = document.querySelectorAll(".contact p");
contactInfo[0].textContent = siteContent["contact"]["address"];
contactInfo[1].textContent = siteContent["contact"]["phone"];
contactInfo[2].textContent = siteContent["contact"]["email"];

let footerArea = document.querySelector("footer p");
footerArea.textContent = siteContent["footer"]["copyright"];
