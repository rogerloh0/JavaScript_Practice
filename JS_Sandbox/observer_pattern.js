function EventObserver(){
  this.observer = [];
}

EventObserver.prototype = {
  subscribe: function(fn){
    this.observer.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  // Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list an reassigns the list of observers.
  unsubscribe: function(fn){
    this.observer = this.observer.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function(){
    this.observer.forEach(function(){
      item.call();
    });
  }
}

const click = new EventObserver();

// Event Listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
  click.subscribe(getCurMilliseconds);
});
document.querySelector('.unsub-ms').addEventListener('click', function(){
  click.unsubscribe(getCurMilliseconds);
});
document.querySelector('.fire').addEventListener('click', function(){
  click.fire();
});

// Click Handler
const getCurMilliseconds = function(){
  console.log(`Current Milliseconds: ${new Date().toMilliseconds()}`);
}