const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

const newEmpties = Array.from(empties);
fill.setAttribute('draggable', 'true');


// fill add event listener

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empties and call drag events
newEmpties.forEach(empty => {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
})


// drag functions
function dragStart() {
		this.className += ' hold';
	setTimeout(()=>{
		this.className = 'invisible';
console.log('start');
	}, 0);
}

function dragEnd() {
	
	this.className = 'fill';
	console.log('end')
}


function dragOver(e) {
	e.preventDefault();
	
}

function dragEnter(e) {
	e.preventDefault();
	this.className += ' hovered';
	

}

function dragLeave() {
	this.className = 'empty';
	
}

function dragDrop() {
	this.className = 'empty';
	this.append(fill);

}










