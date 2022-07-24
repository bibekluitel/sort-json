# Using MSW to use as mocked api provider

## Decription

The use of real api will always create a strong dependency for development of frontend along with the readiness of the api in backend. We need to use some kind of mocked service for to help us build the product simultanesouly. Ideally this service should work by adhereing the contract of response which would be consumed by the mocked api.

## Decision
 
The initial decision of using [mock service worker](https://mswjs.io/) is taken for initial step as it helps us to proxy the api call and return mocked response. 

