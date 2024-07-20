const express = require("express");
const eventRouter = express.Router();
const path = require("path");
const { crawlPage } = require("./crawler");

eventRouter.get("/crawl", (req,res)=>{
    
        var { url } = req.query 
        if(!url){

        } else {
            console.log( "URL :", url)
            crawlPage(url, (event, data) => {
            res.write(`event: ${event}\n`);
            res.write(`data: ${JSON.stringify(data)}\n\n`);
            
        });
        res.status(200).send('Crawling started');
        }
})

eventRouter.get("/events", (req,res)=>{
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const sendEvent = (event, data) => {
        res.write(`event: ${event}\n`);
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    req.on('close', () => {
        console.log('Client disconnected');
    });
})

module.exports = eventRouter;