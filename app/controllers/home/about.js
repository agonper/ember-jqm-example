import Ember from 'ember';

export default Ember.Controller.extend({
  panelId: "about",
  options: [
    {value: "first", text: "First"},
    {value: "second", text: "Second", disabled: true},
    {value: "third", text: "Third", selected: true}
  ],
  actions: {
    onFileLoad() {
      var file = this.get('uploadedFile');
      window.open(file, '_blank');
    }
  }
});
