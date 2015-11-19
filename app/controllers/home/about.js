import Ember from 'ember';

export default Ember.Controller.extend({
  panelId: "about",
  options: [
    {value: "first", text: "First"},
    {value: "second", text: "Second", disabled: true},
    {value: "third", text: "Third", selected: true}
  ],
  actions: {
    onFile(evt) {
      var file = evt.target.files[0];

      if (file && !this.get('uploading')) {
        var reader = new FileReader();

        reader.onload = () => {
          window.open(reader.result, '_blank');
        };

        reader.readAsDataURL(file);
      }
    }
  }
});
