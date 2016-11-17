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
   'read' :  'read'
 },
  index: function(){
      console.log('Всем привет!');
},

  read: function(){
      console.log('Всем привет это Read!');
}
});

new App.Router();
Backbone.history.start();

})();
