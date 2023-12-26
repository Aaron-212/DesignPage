// Navigation Bar animation

const scrolltllarge = new gsap.timeline();
scrolltllarge.fromTo(".wrapper",
    {
        height: "96px",
        maxWidth: "800px"
    },
    {
        height: "64px",
        maxWidth: "960px"
    },
).fromTo("#navbar",
    {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderBottomColor: "rgba(128, 128, 128, 0)",
    },
    {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomColor: "rgba(128, 128, 128, 1)",
    },
    '<'
).fromTo("#navbar a",
    { fontSize: "16.00px" },
    { fontSize: "12.00px" },
    '<'
)

scrolltrlarge = ScrollTrigger.create({
    trigger: ".wrapper",
    start: 0,
    end: 64,
    animation: scrolltllarge,
    scrub: 0.5,
    repeat: -1,
})

const scrolltlsmall = new gsap.timeline();
scrolltlsmall.fromTo(".wrapper",
    {
        height: "240px",
        gap: "10px"
    },
    {
        height: "64px",
        gap: "0px"
    },
).fromTo("#navbar",
    {
        backgroundColor: "rgba(0, 0, 0, 0)",
        borderBottomColor: "rgba(128, 128, 128, 0)",
    },
    {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomColor: "rgba(128, 128, 128, 1)",
    },
    '<'
).fromTo("#navbar a",
    {
        fontSize: "16.00px",
        opacity: 1
    },
    {
        fontSize: "12.00px",
        opacity: 0
    },
    '<'
)

scrolltrsmall = ScrollTrigger.create({
    trigger: ".wrapper",
    start: 0,
    end: 128,
    animation: scrolltlsmall,
    scrub: 0.5,
    repeat: -1,
})


window.onresize = function (event) {
    if (screen.width >= 640) {
        scrolltrlarge.enable();
        scrolltrsmall.disable();
    } else {
        scrolltrlarge.disable();
        scrolltrsmall.enable();
    }
};



// Sample Text
var container = document.getElementById("container");

for (var re = 0; re < 3; re++) {
    for (var i = 0; i <= 10; i++) {
        var testTemplate = `Font Size is ${10 + i / 5}`;
        var test = document.createElement("p");
        test.classList.add("test");
        test.innerHTML = testTemplate;
        test.style.fontSize = (10 + i / 5) + "px";
        container.appendChild(test);
    }
}
