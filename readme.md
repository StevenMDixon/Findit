# FinditCheap

I wanted to be able to find the best deals on things, so I created a webscraping tool for it :-)

# Idea

Give the app a list of items that we want
The urls we want to check, because searching some sites is super bad :)
Give tha app a list of places to scrape 
Compare the prices for each of the items and record the best price
Upload this data to a 
Email a group of users for price notifications daily

# Technologies

Cheerio - used to scrape the sites
https://www.freecodecamp.org/news/how-to-scrape-websites-with-node-js-and-cheerio/

NodeMailer - send emails
https://www.w3schools.com/nodejs/nodejs_email.asp

MongoDB - used to store the data

# Moving parts

There are two services
1. The scraper that runs and gets the data from the websites
2. The mailer that determines if there is new info that needs to be sent