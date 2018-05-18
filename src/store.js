import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

export const store = new Vuex.Store({
  // Add 'counter' state
  state:{
	todos:[
        {
          title: 'Todo A',
          project: 'Project A',
          done: false,
        },  
        {
          title: "Todo B",
          project: 'Project B',
          done: true,
        },  
        {
          title: 'Todo C',
          project: 'Project C',
          done: false,
        },  
      ]
  },


});
