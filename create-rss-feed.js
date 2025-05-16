const fs = require('fs');
const events = require('./src/js/event.js');

function createRssFeed(items) {
  const rssItems = items.map((item, index) => `
    <item>
      <title>${item.name || 'No title' }</title>
      <link>https://klemen1337.github.io/wheniskeynote.com/?id=${index}</link>
      <description>${item.description || 'No description'}</description>
      <pubDate>${item.date.toUTCString()}</pubDate>
      <guid>https://klemen1337.github.io/wheniskeynote.com/?id=${index}</guid>
      ${ item.videoPoster ? `<media:thumbnail url="https://klemen1337.github.io/wheniskeynote.com/assets/${item.videoPoster}"></media:thumbnail>` : ''}
    </item>`).join("");

  const rssHeader = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" lang="en" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>When is next keynote?</title>
    <link>https://klemen1337.github.io/wheniskeynote.com</link>
    <description>Discover when Apple's next keynote / product event is happening!</description>${rssItems}
  </channel>
</rss>`;

  return rssHeader;
}

// Generate and save
console.log("Generating RSS feed for events:", events);
const rssContent = createRssFeed(events);

fs.writeFileSync('./src/rss.xml', rssContent);
console.log("RSS feed saved as rss.xml");