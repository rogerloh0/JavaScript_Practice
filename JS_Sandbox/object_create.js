const personPrototypes = {
  greeting: function(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsmarried: function(newLastName){
    this.lastName = newLastName;
  }
}
const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'William';
mary.age = 30;

const brad = Object.create(personPrototypes, {
  firstName: {value: 'Brad'},
  lastName: {value: 'Traversy'},
  age: {value: 36}
});

