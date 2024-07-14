import SitemapGenerator from 'sitemap-generator';

// Set NODE_TLS_REJECT_UNAUTHORIZED to '1' to enable strict certificate validation
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';

// Create a new instance of SitemapGenerator
const generator = SitemapGenerator('https://admax-tech-solutions.vercel.app', {
  stripQuerystring: false,  // Optionally keep query parameters in URLs
 // Specify the output path for the sitemap XML file
});

// Event listener for when sitemap generation is complete
generator.on('done', () => {
  console.log('Sitemap generated successfully!');
});

// Event listener for errors during sitemap generation
generator.on('error', (error) => {
  console.error('Error generating sitemap:', error);
});

// Start the crawler to begin generating the sitemap
generator.start();