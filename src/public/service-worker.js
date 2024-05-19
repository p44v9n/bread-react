self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // Add caching logic here
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  // Add activation logic here
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});