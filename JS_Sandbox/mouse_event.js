const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//Click
clearBtn.addEventListener('click', runEvent);

//Doube click
clearBtn.addEventListener('dblclick', runEvent);

//Mouse down
clearBtn.addEventListener('mousedown', runEvent);
//Mouse up
clearBtn.addEventListener('mouseenter', runEvent);
//Mouse enter
clearBtn.addEventListener('mousedown', runEvent);
//Mouse leave
clearBtn.addEventListener('mouseleave', runEvent);
//Mouse over
clearBtn.addEventListener('mouseover', runEvent);
//Mouse out
clearBtn.addEventListener('mouseout', runEvent);
//Mouse move
clearBtn.addEventListener('mousemove', runEvent);


//Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} Mouse Y: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}