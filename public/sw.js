let cacheData = 'appV1';

const cacheAsset = [
    '/',
    '/about',
    '/contact',
    '/categories',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
    'https://code.jquery.com/jquery-3.3.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
    'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
    '/static/js/bundle.js',
    '//static/js/vendors~main.chunk.js',
    '/static/js/main.chunk.js',
    '/sw.js',
    'https://use.fontawesome.com/releases/v5.15.2/webfonts/fa-solid-900.woff2',
    'https://use.fontawesome.com/releases/v5.15.2/css/all.css',
    '/manifest.json',
    '/favicon.ico',
    '/logo192.png',
    '/main.058ac16e3829052b5f4e.hot-update.js',
    '/058ac16e3829052b5f4e.hot-update.json',
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'
]
this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            return cache.addAll(cacheAsset)
        }).catch((err) => {
            console.log('err: ', err)
        })
    )
})
this.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request)
                    .catch(() => caches.match(cacheAsset))
            })
    )
})

// Activate the SW
this.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(cacheData);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});