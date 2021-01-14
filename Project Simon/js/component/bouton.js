Vue.component('bouton', {
  template:`
       <button width="50px" height="50px" v-on:click="test"></button>
   `,
   data() {
        return {}
   },

   props : {
       x : Number,
       y : Number,
       
   },
   methods :{
       trigger(x,y){
       }
   },
   
   



})