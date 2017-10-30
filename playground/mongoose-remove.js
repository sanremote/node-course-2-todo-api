const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59f66a4d6c8a6f5311975b83'}).then((todo) => {

});

Todo.findByIdAndRemove('59f66a4d6c8a6f5311975b83').then((todo) =>{
  console.log(todo);
});
