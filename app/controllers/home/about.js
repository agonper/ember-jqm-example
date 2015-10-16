import Ember from 'ember';

export default Ember.Controller.extend({
  panelId: "about",
  options: [
    {value: "first", text: "First"},
    {value: "second", text: "Second"}
  ]
});
