self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  clients.claim();
});

// Handle notification click
self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(clients.matchAll({type:'window'}).then(list => {
    if (list.length === 0) return clients.openWindow('/');
    return list[0].focus();
  }));
});
