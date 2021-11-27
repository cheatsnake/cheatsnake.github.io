const wrapper = document.querySelector('.apps__wrapper');

const appList = [
    {name: 'Classify', descr: 'An open source project for enrypting text messages.', img: 'images/apps/classify.jpg', appLink: 'https://classify-web.herokuapp.com', gitLink: 'classify'},
    {name: 'xColors API', descr: 'A free API for generating and converting colors.', img: 'images/apps/xcolors-api.jpg', appLink: 'https://x-colors.herokuapp.com', gitLink: 'xColors-api'},
    {name: 'xMath API', descr: 'Free and simple API for getting random mathematical expressions.', img: 'images/apps/xmath-api.jpg', appLink: 'https://x-math.herokuapp.com', gitLink: 'xMath-api'},
    {name: 'Twitter Post', descr: 'Fake tool for simulation of sending posts on Twitter.', img: 'images/apps/twitterPosts.jpg', appLink: 'https://cheatsnake.github.io/TwitterPosts', gitLink: 'TwitterPosts'},
    {name: 'Interval Timer', descr: 'A pocket timer with settings for the number of rounds, training time and rest.', img: 'images/apps/timer.jpg', appLink: 'https://cheatsnake.github.io/IntervalTimer', gitLink: 'IntervalTimer'},
    {name: 'NodeJS Scrapper', descr: 'Simple scraper build with Puppeteer & Cheerio to get data.', img: 'images/apps/nodejsScrapper.jpg', appLink: 'https://github.com/cheatsnake/nodejs-scraper', gitLink: 'nodejs-scraper'},
    {name: 'Pocket Dictionary', descr: 'An online dictionary app that uses a free API for interpreting words.', img: 'images/apps/pocketDictionary.jpg', appLink: 'https://cheatsnake.github.io/PocketDictionary', gitLink: 'PocketDictionary'},
    {name: 'Date Counter', descr: 'A tool to calculate how many time are left until a certain date.', img: 'images/apps/dateCounter.jpg', appLink: 'https://cheatsnake.github.io/DateCounter', gitLink: 'DateCounter'},
    {name: 'Text Analyzer', descr: 'A web tool for analyzing symbolic data in text.', img: 'images/apps/textAnalyzer.jpg', appLink: 'https://cheatsnake.github.io/TextAnalyzer', gitLink: 'TextAnalyzer'},
    {name: 'NS Converter', descr: 'A tool for converting numbers to various number systems.', img: 'images/apps/NSConverter.jpg', appLink: 'https://cheatsnake.github.io/NSConverter', gitLink: 'NSConverter'},
    {name: 'HEX Generator', descr: 'Lightweight & fast tool to generate random color in hexadecimal number.', img: 'images/apps/hexGenerator.jpg', appLink: 'https://cheatsnake.github.io/HEXGenerator', gitLink: 'HEXGenerator'},
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
