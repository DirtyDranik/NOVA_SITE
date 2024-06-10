// Скролл
function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        }
    });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll(".clients__head");
for (let elm of elements) {
    observer.observe(elm);
}

let elements2 = document.querySelectorAll(".clients__blockTop");
for (let elm of elements2) {
    observer.observe(elm);
}

let elements3 = document.querySelectorAll(".clients__blockBot");
for (let elm of elements3) {
    observer.observe(elm);
}

let elements4 = document.querySelectorAll(".clients__buttons");
for (let elm of elements4) {
    observer.observe(elm);
}

let elements5 = document.querySelectorAll(".why-h2");
for (let elm of elements5) {
    observer.observe(elm);
}

let elements6 = document.querySelectorAll(".why1");
for (let elm of elements6) {
    observer.observe(elm);
}

let elements7 = document.querySelectorAll(".why2");
for (let elm of elements7) {
    observer.observe(elm);
}

let elements8 = document.querySelectorAll(".why3");
for (let elm of elements8) {
    observer.observe(elm);
}

let elements9 = document.querySelectorAll(".contact-h2");
for (let elm of elements9) {
    observer.observe(elm);
}

let elements10 = document.querySelectorAll(".contact__content");
for (let elm of elements10) {
    observer.observe(elm);
}

let elements11 = document.querySelectorAll(".footerForJs");
for (let elm of elements11) {
    observer.observe(elm);
}
