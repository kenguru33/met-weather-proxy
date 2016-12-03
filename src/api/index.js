import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';


export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/xml', (req, res) => {
		//res.json({ version });

        let yrno = require('yr.no-interface'),
            pos = {
                lat: req.query.lat,
                lon: req.query.lon
            },
            LOC_VER = 1.9;


        yrno.locationforecast(pos, LOC_VER, function (err, xml) {
            if (err) {
                // Something went wrong...
            } else {
                console.log(xml);
                res.set('Content-Type', 'text/xml');
                res.send(xml);
            }
        });

	});

    api.get('/json2', (req, res) => {

        const client = require('metno-client');

        client.getWeather({
            params: {lat: req.query.lat, lon: req.query.lon},
            request: {timeout: 1000},
            hours: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
            days: 1,
            version: 1.9
        }, (error, weatherReport) => {
                res.json({weatherReport});
            });
    });

    api.get('/json', (req, res) => {

        let yrno = require('yr.no-forecast');

        let weather = null;

        const version = '1.9';

        let pos = {
            lat: req.query.lat,
            lon: req.query.lon
        };

        console.log(pos);

        yrno.getWeather(pos, (error, location) => {

            if (error) {
                return error;
            }

            location.getCurrentSummary((error, summary) => {
                res.json({ summary });
            });
        }, version);

    });
    
	return api;
}
