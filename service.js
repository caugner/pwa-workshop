if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
}

let btnAdd = document.getElementById('add-button');
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function(event) {
    event.preventDefault();
    deferredPrompt = event;
    btnAdd.style.display = 'block';
    
    btnAdd.addEventListener('click', function(event) {
        btnAdd.style.display = 'none';
        deferredPrompt.prompt();
        deferredPrompt.userChoice
        .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }
            deferredPrompt = null;
        });
    });
});
