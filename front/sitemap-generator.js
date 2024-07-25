require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
  });
  
  const path = require('path');
  const Sitemap = require('react-router-sitemap').default;
  const router = require('./src/routes').default; // Adjust the path to your routes file
  
  function generateSitemap() {
    const hostname = 'http://crrhab.agrinet.tn/';
    const dest = path.resolve('./public', 'sitemap.xml');
  
    return (
      new Sitemap(router)
        .build(hostname)
        .save(dest)
    );
  }
  
  generateSitemap();
  