import Ember from 'ember';

export default Ember.Controller.extend({
  panelId: "about",
  options: [
    {text: 'Choose...'},
    {
      optgroup: "Group 1",
      elements: [
        {value: "first", text: "First"},
        {value: "second", text: "Second", disabled: true},
        {value: "third", text: "Third", selected: true}
      ]
    },
    {
      optgroup: "Group 2",
      elements: [
        {value: "fourth", text: "Fourth"},
        {value: "fifth", text: "Fifth", disabled: true},
        {value: "sixth", text: "Sixth"}
      ]
    },
    {
      optgroup: "Group 3",
      elements: [
        {value: "seventh", text: "Seventh"},
        {value: "eighth", text: "Eighth", disabled: true},
        {value: "ninth", text: "Ninth"}
      ]
    },
    {value: 'other', text: "Other (specify)"}
  ],
  onFile: Ember.observer('files', function () {
    var file = this.get('files')[0];

    if (file && !this.get('uploading')) {
      var reader = new FileReader();

      reader.onload = () => {
        window.open(reader.result, '_blank');
      };

      reader.readAsDataURL(file);
    }
  })
  //actions: {
  //  onFile(evt) {
  //    var file = evt.target.files[0];
  //
  //    if (file && !this.get('uploading')) {
  //      var reader = new FileReader();
  //
  //      reader.onload = () => {
  //        window.open(reader.result, '_blank');
  //      };
  //
  //      reader.readAsDataURL(file);
  //    }
  //  }
  //}
});
