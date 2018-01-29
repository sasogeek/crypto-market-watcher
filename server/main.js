import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    setInterval(()=>{}, 1000);
    setInterval(()=>{console.log(Ticker.findAll())}, 1000)
});


Meteor.methods({
    get_ticker: () => {
        let ticker = HTTP.get('https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd');
        return ticker.content;
    },

    update: () => {
        Meteor.call('get_ticker', ()=> {
            Ticker.upsert({'name': 'bitcoin'}, {$set: {'name': 'bitcoin', 'ticker': ticker.ticker, 'date': ticker.date}})
        });

    }
});
