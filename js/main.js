const header = $('#header');
const wrapper = $('#wrapper');
const myWorld = $('#myWorld');
const equal = $('#equal');
const code = $('#code');
const colon = $('#colon');
const progList = $('#prog-list');
const markList = $('#mark-list');
const libList = $('#lib-list');
const fireList = $('#fire-list')
 
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

const removeFocus = () => {
    progList.slideUp();
    markList.slideUp();
    libList.slideUp();
    fireList.slideUp();
    $('#prog').removeClass('active');
    $('#mark').removeClass('active');
    $('#lib').removeClass('active');
    $('#fire').removeClass('active');
}

removeFocus();

$('#prog').on('click', () => {
    removeFocus();
    if (!progList.is(':visible')) {
        $('#prog').addClass('active');
        progList.slideDown();
    }
});
$('#mark').on('click', () => {
    removeFocus();
    if (!markList.is(':visible')) {
        $('#mark').addClass('active');
        markList.slideDown();
    }
});
$('#lib').on('click', () => {
    removeFocus();
    if (!libList.is(':visible')) {
        $('#lib').addClass('active');
        libList.slideDown();
    }
});
$('#fire').on('click', () => {
    removeFocus();
    if (!fireList.is(':visible')) {
        $('#fire').addClass('active');
        fireList.slideDown();
    }
});
