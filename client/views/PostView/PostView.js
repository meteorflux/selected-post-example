// Views retrieve the data they need from the Stores.
Template.PostView.helpers({
  'postList': function () {
    return PostStore.get.allPosts();
  }
});

// Views can only dispatch events. They can't change the App State.
Template.PostView.events({
  'click .post': function(event){
    Dispatcher.dispatch({
      actionType: "USER_HAS_SELECTED_A_POST",
      id: $(event.target).attr('data-id')
    });
  }
});
