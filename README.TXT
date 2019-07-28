This is a Node.js script to return a pure HTML rendering of any web page (similar to the python GetPage.py program)
It does this by calling Puppeteer that runs a chrome headless dom dump

Puppeteer API
https://github.com/GoogleChrome/puppeteer/blob/v1.19.0/docs/api.md



google cloud function name:	GetHTML
url:   https://us-central1-agent86-179104.cloudfunctions.net/GetHTML
runtime:  					Node.js 8
function to execute: 		screenshot
arguments:				url=https://(etcetc)


sample:  
https://us-central1-myproject-123456.cloudfunctions.net/GetHTML?url=https://somesite.com