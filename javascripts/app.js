window.App = Ember.Application.create();

App.Router.map(function () {
  this.resource("games", function () {
    this.route("game", {path: "/:game_id"})
  });
});
