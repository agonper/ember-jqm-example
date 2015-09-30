import Ember from 'ember';

export default Ember.Controller.extend({
  btnAction: 'showAbout',
  btnText: 'Show about panel',
  actions: {
    showAbout() {
      this.transitionToRoute('home.about');
      this.set('btnAction', 'backToHome');
      this.set('btnText', 'Return to home page');
    },
    backToHome() {
      this.transitionToRoute('home');
      this.set('btnAction', 'showAbout');
      this.set('btnText', 'Show about panel');
    }
  }
});
