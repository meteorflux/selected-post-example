Posts = new Mongo.Collection('posts');

if ((Meteor.isServer) && (!Posts.findOne())) {
  Posts.insert({ name: "Post 1", details: "Something about post 1" });
  Posts.insert({ name: "Post 2", details: "Something about post 2" });
  Posts.insert({ name: "Post 3", details: "Something about post 3" });
  Posts.insert({ name: "Post 4", details: "Something about post 4" });
  Posts.insert({ name: "Post 5", details: "Something about post 5" });
}
