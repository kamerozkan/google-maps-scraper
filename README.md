# Google Maps Scraper - Local Business Leads & Ratings

Scrape local businesses from Google Maps results by keyword and city: name, category, rating, exact review count, address, phone, website, open now status, coordinates, place ID and Maps link. Low cost lead lists for sales, local SEO and market research.

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

## Sample output

Real rows from a recent run, with any contact details masked. Full sample: [sample-output.json](sample-output.json).

```json
[
  {
    "query": "Zahnarzt Berlin Mitte",
    "country": "DE",
    "position": 1,
    "name": "Torhaus - Ihre Zahnärzte in Berlin Mitte",
    "category": "Zahnarzt",
    "categories": [
      "Zahnarzt"
    ],
    "rating": 4.9,
    "reviewsCount": 237,
    "address": "Robert-Koch-Platz 11, 10115 Berlin",
    "phone": "+1 555 0100",
    "website": "https://www.zahnarzt-torhaus.de/",
    "openingStatus": "Geschlossen · Öffnet Mo um 08:00",
    "latitude": 52.528409,
    "longitude": 13.378451,
    "placeId": "ChIJ--eWx5RRqEcRdw6wJaph-Ig",
    "cid": "9869745966787071607",
    "kgmid": "/g/113jfd1w9",
    "googleMapsUrl": "https://www.google.com/maps?cid=9869745966787071607"
  }
]
```

## Support

Found a problem or need a field? Open an issue on the [Actor's Issues tab](https://apify.com/kamerozkan/google-maps-scraper/issues) and include your run link.

---
This repository holds usage examples and sample data. The Actor itself runs on Apify.
