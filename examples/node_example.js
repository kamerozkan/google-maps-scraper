// Run google-maps-scraper on Apify and print the results. npm install apify-client
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });
const input = {
  "queries": [
    "dentist in Austin TX"
  ],
  "countryCode": "us",
  "maxPlacesPerQuery": 20
};
const run = await client.actor('kamerozkan/google-maps-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
