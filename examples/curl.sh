#!/usr/bin/env bash
# Run google-maps-scraper synchronously and get the dataset items back. Needs APIFY_TOKEN.
curl -s -X POST "https://api.apify.com/v2/acts/kamerozkan~google-maps-scraper/run-sync-get-dataset-items" \
  -H "Authorization: Bearer $APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"queries": ["dentist in Austin TX"], "countryCode": "us", "maxPlacesPerQuery": 20}'
