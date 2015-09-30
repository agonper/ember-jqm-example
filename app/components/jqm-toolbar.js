import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  attributeBindings: ['position:data-position'],
  didInsertElement() {
    $(this.$()).toolbar();
    $.mobile.resetActivePageHeight();
  }
});
