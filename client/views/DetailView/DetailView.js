// Views retrieve the data they need from the Stores.
Template.DetailView.helpers({
  selectedPost: function () {
    return PostStore.get.selectedPost();
  }
});
