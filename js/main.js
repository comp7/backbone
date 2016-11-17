(function() {

window.App={
   Views: {},
   Models: {},
   Collections: {},
   Router: {}
};
 
window.template = function(id) {
  return_.template( $('#' + id).html());
};

App.Router = Backbone.Router.extend({
 routes: {
   ''     : 'index',
   'page/:id/*simbo' :  'page',
   'search/:query'   :   'search',
   '*other'          :   'default'
 },
  index: function(){
      console.log('Всем привет!');
},

  page: function(id, simbo){
      //console.log('Всем привет это Page!!');
      console.log(simbo);
},
  search: function(query){
  },
  default: function(other){
    alert('Хмммм' + other );
  }

});

new App.Router();
Backbone.history.start();

})();
