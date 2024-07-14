import SitemapGenerator from 'sitemap-generator';

// Create generator
const generator = SitemapGenerator('https://admax-tech-solutions.vercel.app', {
  stripQuerystring: false,
  filepath: './public/sitemap.xml'  // Specify the output path
});

// Register event listeners
generator.on('done', () => {
  console.log('Sitemap generated!');
});

// Start the crawler
generator.start();
