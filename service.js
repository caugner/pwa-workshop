if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

window.addEventListener('beforeinstallprompt', function(event) {
    event.userChoice.then(function (choiceResult) {
        if (choiceResult.outcome == 'dismissed') {
            console.log('User cancelled home screen install');
        } else {
            console.log('User added to home screen');
        }
    })
});