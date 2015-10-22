import Ember from 'ember';

export default Ember.TextField.extend({
  readonly: 'readonly',
  didInsertElement() {
    var elem = $(this.$());
    elem.datepicker({
      dateFormat: 'dd/mm/yy'
    });
    elem.datepicker('setDate', new Date());

    // Remove datepicker from the bottom of the page
    $( '.ui-datepicker' ).css('display', 'none');
  }
});
