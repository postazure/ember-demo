App.ApplicationAdapter = DS.FixtureAdapter;

App.Game = DS.Model.extend({
  name: DS.attr( 'string' ),
  year: DS.attr( 'string' )
});

App.Game.FIXTURES = [
  {id:1, name:"Catan",      year:"1998"},
  {id:2, name:"Zombicide",  year:"2004"}
]
