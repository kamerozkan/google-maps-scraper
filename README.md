# Google Maps Scraper Germany, UK & US - Local Business Leads

Scrape local businesses from Google Maps in Germany, the UK, the US and 27 more countries by keyword and city: name, category, rating, exact review count, address, phone, website, open now status, coordinates, place ID and Maps link. Low cost lead lists for sales, local SEO and market research.

**[Run it on Apify Store](https://apify.com/kamerozkan/google-maps-scraper)**: no servers, no proxies to manage, results as JSON, CSV or Excel, or straight into your app through the API.

## Why use it

- Runs in the cloud on [Apify](https://apify.com/kamerozkan/google-maps-scraper); start it from the browser, the API, a schedule, or tools like Make, n8n and Zapier.
- Pay only for results. The current price and plan discounts are always on the [Store page](https://apify.com/kamerozkan/google-maps-scraper).
- Cap the cost of any run with the maximum cost per run setting.

## Quick start

1. Open the [Actor page](https://apify.com/kamerozkan/google-maps-scraper) and click **Try for free**.
2. Paste an input like the one below and click **Start**.
3. Download the dataset or read it over the API.

```json
{
  "queries": [
    "dentist in Austin TX"
  ],
  "countryCode": "us",
  "maxPlacesPerQuery": 20
}
```

## Use it from code

Python ([examples/python_example.py](examples/python_example.py)), Node.js ([examples/node_example.js](examples/node_example.js)) and cURL ([examples/curl.sh](examples/curl.sh)) examples are in the `examples` folder. All of them need an [Apify API token](https://console.apify.com/settings/integrations).

## Use in n8n & Make

- **n8n:** Import [integrations/n8n-workflow.json](integrations/n8n-workflow.json) directly into your n8n workspace, set your `APIFY_TOKEN` environment variable (or Bearer token header), and click **Execute Workflow**.
- **Make / Zapier:** Call the Apify **Run an Actor** module with Actor ID `kamerozkan/google-maps-scraper` and the JSON input above, or POST to `https://api.apify.com/v2/acts/kamerozkan~google-maps-scraper/run-sync-get-dataset-items`.

## Use with AI Agents (Apify MCP)

This Actor works with Claude Desktop, Cursor, Windsurf and any MCP-compatible AI agent through the official [Apify MCP Server](https://mcp.apify.com). Copy [integrations/mcp-config.json](integrations/mcp-config.json) into your MCP client configuration and replace `YOUR_APIFY_TOKEN` with your token.

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "query": "dentist in Austin TX",
    "country": "US",
    "position": 1,
    "name": "ATX Family Dental",
    "category": "Dentist",
    "categories": [
      "Dentist"
    ],
    "rating": 4.9,
    "reviewsCount": 924,
    "address": "1700 S 1st St, Austin, TX 78704",
    "phone": "(+1 555 0100",
    "website": "https://www.atxfamilydental.com/",
    "openingStatus": "Closed · Opens 8 AM Mon",
    "latitude": 30.248223,
    "longitude": -97.75597,
    "placeId": "ChIJb5gBC-u0RIYRHkntaUcdJGs",
    "cid": "7720327853776914718",
    "kgmid": "/g/11cn2mvqwc",
    "googleMapsUrl": "https://www.google.com/maps?cid=7720327853776914718"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/google-maps-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
