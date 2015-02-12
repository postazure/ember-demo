App.GamesRoute = Ember.Route.extend({
  model:function () {
    return this.store.find('game');
  }
});

App.GameRoute = Ember.Route.extend({
  model:function (params) {
    return this.store.find('game', params.game_id);
  }
});
