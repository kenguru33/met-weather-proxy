Met Weather Proxy 
==================================

CORS proxy for http://api.met.no/weatherapi/locationforecast

Installaltion
---------------

```sh
# clone it
https://github.com/kenguru33/met-weather-proxy.git
cd met-weather-proxy

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start
```

Usage
---------------


Xml (https://www.npmjs.com/package/yr.no-forecast)

http://<url>:8080/api/xml?lat=0&lon=0

json (using https://www.npmjs.com/package/yr.no-forecast)

http://<url>:8080/api/xml?lat=0&lon=0

json2 (using  metno-client - https://www.npmjs.com/package/metno-client)

License
-------

MIT
