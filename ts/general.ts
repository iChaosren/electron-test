const remote = require('electron').remote;
const main = remote.require('./main.js');

$('.close-window').click(() => {
    window.close();
});

$('.maximize-window').click(() => {
    main.maximizeWindow();
});

$('.minimize-window').click(() => {
    main.minimizeWindow();
})

$('.open-panel').click(() => {
    $('.left-panel').slideToggle();
});
