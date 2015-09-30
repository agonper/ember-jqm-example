import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goHome() {
      this.transitionToRoute('home');
    }
  }
});
