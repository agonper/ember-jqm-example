import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  tagName: 'section',
  classNameBindings: ['ui-page-active'],
  role: 'page',
  didInsertElement() {
    $.mobile.initializePage();
    $('.ui-loader').hide();
  }
});
