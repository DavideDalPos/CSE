// General settings for the whole website.
export default {
  name: 'Center for Systematic Entomology',
  // Public address of the website, no trailing slash (used for Google Scholar,
  // the RSS feed, the sitemap and link previews)
  url: 'https://centerforsystematicentomology.org',
  description:
    'The Center for Systematic Entomology (CSE) is a non-profit society advancing the systematics of insects and other arthropods since 1985 — publisher of Insecta Mundi.',
  // Image used when a page is shared (email, Slack, social media)
  shareImage: '/images/web/hero-plate.webp',

  // Visit counter (GoatCounter, free, no cookies).
  // 1. Create a site at https://www.goatcounter.com  → you choose a code, e.g. "cse"
  // 2. Put that code here. Leave '' to switch the counter off.
  // 3. To show the total number of visits in the footer, also tick
  //    "Allow adding visitor counts on your website" in GoatCounter's settings
  //    and set showVisits: true.
  goatcounter: '',
  showVisits: false
}
