import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNameBindings: ['ui-btn'],
  click() {
    this.sendAction();
  }
});
