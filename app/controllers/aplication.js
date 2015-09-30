import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    $('#index').trigger('create');
  }
});
