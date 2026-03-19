// Tên bộ nhớ đệm (Cache)
const CACHE_NAME = 'lms-app-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
  // Nếu thầy có style.css hay script.js thì thêm vào đây nhé
];

// Sự kiện Cài đặt (Install) - Lưu các file cơ bản vào bộ nhớ máy
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Sự kiện Fetch - Giúp App vẫn mở được ngay cả khi mất mạng
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
