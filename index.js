// Navigation Bar animation
const tl = gsap.timeline();

tl.fromTo(".wrapper",
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
        backdropFilter:" blur(0px)",
    },
    {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomColor: "rgba(128, 128, 128, 1)",
        backdropFilter:" blur(50px)",
    },
    '<'
).fromTo("#navbar a",
    { fontSize: "16.00px" },
    { fontSize: "12.00px" },
    '<'
)

ScrollTrigger.create({
    trigger: ".wrapper",
    start: 0,
    end: 64,
    animation: tl,
    scrub: 0.5,
    repeat: -1,
})

// Sample Text
var container = document.getElementById("container");

for (var re = 0; re < 3; re++) {
    for (var i = 0; i <= 10; i++) {
        var testTemplate = `Font Size is ${10 + i/5}`;
        var test = document.createElement("p");
        test.classList.add("test");
        test.innerHTML = testTemplate;
        test.style.fontSize = (10 + i/5) + "px";
        container.appendChild(test);
    }
}
