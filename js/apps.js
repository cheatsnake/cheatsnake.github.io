const wrapper = document.querySelector('.apps__wrapper');

const appList = [
    {name: 'Mind Math', descr: 'An improved application for training oral counting.', img: 'images/apps/mindMath.jpg', appLink: 'https://cheatsnake.github.io/MindMath', gitLink: 'MindMath'},
    {name: 'Textnote app', descr: 'Online application for notes. Simple interface, cross-platform, cloud storage.', img: 'images/apps/Textnote.jpg', appLink: 'https://cheatsnake.github.io/PromoTextnote', gitLink: 'Textnote'},
    {name: 'Typing Race', descr: 'An application for training and checking the speed of typing on the keyboard.', img: 'images/apps/typingRace.jpg', appLink: 'https://cheatsnake.github.io/TypingRace', gitLink: 'TypingRace'},
    {name: 'Simple Auth', descr: 'A simple authorization and registration simulator..', img: 'images/apps/simpleAuth.jpg', appLink: 'https://cheatsnake.github.io/SimpleAuth', gitLink: 'SimpleAuth'},
    {name: 'Math trainer', descr: 'A simple application for training oral counting.', img: 'images/apps/mathTrainer.jpg', appLink: 'https://cheatsnake.github.io/MathTrainer', gitLink: 'MathTrainer'},
]

const element = (name, gitLink, appLink, descr, img) => {
    return `
    <div class="apps__item">
    <img src="${img}" alt="" class="apps__item__img">
    <div class="apps__item__title">${name}</div>
    <div class="apps__item__descr">${descr}</div>
    <div class="apps__item__btns">
        <a href="${appLink}" target="_blank" class="btn btn_open-app">Open app</a>
        <a href="https://github.com/cheatsnake/${gitLink}" target="_blank" class="btn btn_github">View on GitHub</a>
    </div>
    </div>
    `
}

function upload() {
    appList.forEach(item => {
        wrapper.insertAdjacentHTML('beforeend', element(item.name, item.gitLink, item.appLink, item.descr, item.img));
    })
}

upload();

