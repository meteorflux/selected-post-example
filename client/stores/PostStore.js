var PostStoreCreator = function(){
  var self = this;

  // These Reactive vars are used to store the App State of the app.
  var selectedPostId = new ReactiveVar(false);

  // These "on" callbacks are used to modify the App State when
  // something happens.
  self.on = {
    postSelected: function (id) {
      selectedPostId.set(id);
    }
  };

  // These getters are used to retrieve the App State from the Views or
  // from other Stores.
  self.get = {
    allPosts: function () {
      return Posts.find({});
    },
    selectedPost: function () {
      return Posts.findOne(selectedPostId.get());
    }
  };

  // The register method is used to listen to the actions this Store is
  // interested in and invoke the correct callbacks.
  // Facebook people use this "switch" approach and at first it looks
  // kind of dirty, but it's very flexible.
  Dispatcher.register(function (payload) {
    switch (payload.actionType) {
      case "USER_HAS_SELECTED_A_POST":
        self.on.postSelected(payload.id);
        break;
    }
  });
};

PostStore = new PostStoreCreator();
