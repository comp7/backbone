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
   'page/:id/*simbo' :  'page'
 },
  index: function(){
      console.log('Всем привет!');
},

  page: function(id, simbo){
      //console.log('Всем привет это Page!!');
      console.log(simbo);
}
});

new App.Router();
Backbone.history.start();

})();
