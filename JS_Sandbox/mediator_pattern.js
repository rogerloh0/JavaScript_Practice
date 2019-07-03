// The chatroom is the mediator of the users in the chatroom

const User = function(){
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to){
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from){
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function(){
  let users = {}; // List of users

  return{
    register: function(user){
      users[user.name]=user;
      user.chatroom = this;
    },
    send: function(message, from, to){
      if(to){
        // Single user message
        to.receive(message, from)
      } else{
        // Mass message
        for(key in users){
          if(users[key]!==from){
            users[key].receive(message,from);
          }
        }
      }
    }
  }
}

// Pattern below

const brad = new User('Brad');
const jeff = new User('Jeff');
const roger = new User('Roger');
const sarah = new User('Sara');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(roger);
chatroom.register(sarah);

brad.send('Hello, Jeff', jeff);
brad.send('Hello, Roger', roger);
sarah.send('Hello, everyone');