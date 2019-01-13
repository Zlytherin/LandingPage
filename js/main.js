const header = $('#header');
const wrapper = $('#wrapper');
const myWorld = $('#myWorld');
const equal = $('#equal');
const code = $('#code');
const colon = $('#colon');
 
const margin = `${header.outerHeight() + 10}px`;
wrapper.css('marginTop', margin);

const showHeroText = (element, content, delay) => {
    if (content === "") 
        return;
    let currText = element.text();
    element.text(currText + content[0]);
    content = content.slice(1);
    setTimeout(() => showHeroText(element, content, delay), delay);
}

setTimeout(() => showHeroText(myWorld, "myWorld", 500),0);
setTimeout(() => showHeroText(equal, " = ", 500), 4000);
setTimeout(() => showHeroText(code, "code", 500), 5800);
setTimeout(() => colon.text(';'), 8000)
