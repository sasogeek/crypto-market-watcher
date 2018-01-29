import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Template.buying.helpers({
    buying: ()=>{
      return Ticker.findOne({'name': 'bitcoin'}).ticker.ticker.buy
    },

});

Template.selling.helpers({
    selling() {
      return Ticker.findOne({'name': 'bitcoin'}).ticker.ticker.sell
    },
});
