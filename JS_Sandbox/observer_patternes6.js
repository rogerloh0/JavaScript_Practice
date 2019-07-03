class EventObserver(){
  constructor(){
    this.observer = [];
  }
  subscribe(fn){
    this.observer.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }
  unsubscribe(fn){
    this.observer = this.observer.filter(function(item){
      if(item !== fn){
        return item;
      }
    });
    
    console.log(`You are now unsubscribed from ${fn.name}`);
  }
  fire(){
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