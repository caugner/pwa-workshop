self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting());

    caches.open('my-cache').then(cache => {
        cache.addAll([
          '/',
          'index.html',
          'bundle.css',
          'bundle.js',
          'manifest.json',
          'players.json',
          'assets/players/ousmane-dembele.jpeg',
          'assets/players/ngolo-kante.jpeg',
          'assets/players/steven-nzonzi.jpeg',
          'assets/players/djibril-sidibe.jpeg',
          'assets/players/alphonse-areola.jpeg',
          'assets/players/olivier-giroud.jpeg',
          'assets/players/presnel-kimpembe.jpeg',
          'assets/players/raphael-varane.jpeg',
          'assets/players/lucas-hernandez.jpeg',
          'assets/players/nabil-fekir.jpeg',
          'assets/players/blaise-matuidi.jpeg',
          'assets/players/florian-thauvin.jpeg',
          'assets/players/benjamin-pavard.jpeg',
          'assets/players/adil-rami.jpeg',
          'assets/players/kylian-mbappe.jpeg',
          'assets/players/benjamin-mendy.jpeg',
          'assets/players/paul-pogba.jpeg',
          'assets/players/corentin-tolisso.jpeg',
          'assets/players/steve-mandanda.jpeg',
          'assets/players/thomas-lemar.jpeg',
          'assets/players/hugo-lloris.jpeg',
          'assets/players/samuel-umtiti.jpeg',
          'assets/players/antoine-griezmann.jpeg',
        ])
    })
});

self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
})

self.addEventListener('fetch', function (event) {
    event.respondWith(
      caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});

