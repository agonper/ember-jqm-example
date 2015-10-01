import JqmComponent from './jqm-component';

export default JqmComponent.extend({
  role: "panel",
  attributeBindings: ['theme:data-theme', 'position:data-position',
    'display:data-display', 'dismissible:data-dismissible'],
  theme: 'a',
  position: 'left',
  display: 'overlay',
  dismissible: 'true',
  didInsertElement() {
    $(this.$()).panel({
      create: () => {
        $(this.$()).enhanceWithin();
        $(this.$()).panel('open');
      }
    });
  }
});
