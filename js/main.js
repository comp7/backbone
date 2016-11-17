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
   'page/:id/suryh' :  'page'
 },
  index: function(){
      console.log('Всем привет!');
},

  page: function(){
      console.log('Всем привет это Page !!');
}
});

new App.Router();
Backbone.history.start();

})();
