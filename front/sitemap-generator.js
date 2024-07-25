import 'babel-register';
import path from 'path';
import { default as Sitemap } from 'react-router-sitemap';
import { default as router } from './src/routes'; // Adjust the path to your routes file

function generateSitemap() {
  const hostname = 'http://crrhab.agrinet.tn/';
  const dest = path.resolve('./public', 'sitemap.xml');

  return new Sitemap(router)
    .build(hostname)
    .save(dest);
}

generateSitemap();
