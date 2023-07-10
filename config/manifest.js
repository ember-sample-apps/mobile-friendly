'use strict';

module.exports = function (/* environment, appConfig */) {
  // See https://zonkyio.github.io/ember-web-app for a list of
  // supported properties

  return {
    name: 'Mobile Friendly',
    short_name: 'Mobile Friendly',
    description:
      'Sample app to showcase a way to implement a web and native experience for users',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '../images//icons/icon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-72x72.png',
        sizes: '72x72',
        type: 'image/png',
        targets: ['favicon'],
      },
      {
        src: '../images//icons/icon-96x96.png',
        sizes: '96x96',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-128x128.png',
        sizes: '128x128',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-384x384.png',
        sizes: '284x284',
        type: 'image/png',
      },
      {
        src: '../images//icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    ms: {
      tileColor: '#fff',
    },
  };
};
