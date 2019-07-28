# GetHTML
Node.js script to get the pure html of a web page.  

Runs Chrome headless under Puppeteer.

README.TXT gives configuration of a Google Cloud Function to run this script under Node.js 8.

the url of the desired page content to be returned should be passed to the GC Function url on the end as a "url=" argument
e.g. https://us-central1-myproject-1234567.cloudfunctions.net/GetHTML?url=https://somejavascriptsite.com

