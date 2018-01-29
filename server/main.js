import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
    setInterval(Meteor.bindEnvironment(function(){
        let ticker = HTTP.get('https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd');
        Ticker.upsert({'name': 'bitcoin'}, {$set: {'name': 'bitcoin', 'ticker': JSON.parse(ticker.content)}})
    }), 500);
});


Meteor.methods({

});
