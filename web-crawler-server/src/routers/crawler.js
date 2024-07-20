// crawler.js
const axios = require('axios');
const cheerio = require('cheerio');
const Page = require('../models/page');
const url = require('url');

const crawledUrls = new Set();

const crawlPage = async (pageUrl, sendEvent, depth = 0) => {
    if (crawledUrls.has(pageUrl) || depth > 3) { // depth check for recursive crawling
        return;
    }

    try {
        const { data } = await axios.get(pageUrl);
        const $ = cheerio.load(data);
        const title = $('title').text();
        const content = $('body').text();

        // Save to MongoDB
        const page = new Page({ url: pageUrl, title, content });
        await page.save();
        console.log(`Crawled and saved: ${pageUrl}`);

        // Add to crawled URLs
        crawledUrls.add(pageUrl);

        // Send event to client
        sendEvent('pageCrawled', { url: pageUrl, title, content });

        // Extract and filter links
        const links = [];
        $('a[href]').each((index, element) => {
            const href = $(element).attr('href');
            const absoluteUrl = url.resolve(pageUrl, href);
            if (absoluteUrl.startsWith('http')) {
                links.push(absoluteUrl);
            }
        });

        // Recursively crawl extracted links
        for (const link of links) {
            await crawlPage(link, sendEvent, depth + 1);
        }

    } catch (error) {
        console.error(`Error crawling ${pageUrl}:`, error);
    }
};

module.exports = { crawlPage };
