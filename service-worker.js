self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', function(event) {
    if (/\.jpe?g$/.test(event.request.url)) {
        event.respondWith(
            fetch('/assets/players/steve-mandanda.jpeg').then(function(responseFetch) {
                return responseFetch;
            })
        )
    } else {
        event.respondWith(
            fetch(event.request).then(function(responseFetch) {
                return responseFetch;
            })
        )
    }

});
