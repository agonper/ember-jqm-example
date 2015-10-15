import Ember from 'ember';

export default Ember.TextField.extend({
  attributeBindings: ['clear-btn:data-clear-btn', 'mini:data-mini']
});
