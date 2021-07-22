window.addEventListener('keydown', function(e) {
	 try {
	 	const audio = document.querySelector(`audio[data-letter="${e.code}"]`);
		const key = document.querySelector(`.piano-key[data-code="${e.code}"]`);
		if(!audio) return;
		if(e.repeat) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add('piano-key-active');
	}
	catch (err) {

	}
	// setTimeout(function() {
	// 	key.classList.remove('piano-key-active');
	// }, 500)
});


window.addEventListener('keyup', function(e) {
	 try {
	const audio = document.querySelector(`audio[data-letter="${e.code}"]`);
	const key = document.querySelector(`.piano-key[data-code="${e.code}"]`);
	
		key.classList.remove('piano-key-active');
	}
	catch (err) {
		
	}
});

let onpiano = false;
const piano = document.querySelector('.piano');

piano.addEventListener('mousedown', (e) => {
    if(e.target.classList.contains('piano-key')) {
    	const audio = document.querySelector(`audio[data-letter="${e.target.getAttribute('data-code')}"]`);
		const key = document.querySelector(`.piano-key[data-code="${e.target.getAttribute('data-code')}"]`);
    	if(!audio) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add('piano-key-active');
		key.classList.add('piano-key-remove-mouse');
		key.classList.add('piano-key-active-pseudo');
		onpiano = true;
		// setTimeout(function() {
		// 	key.classList.remove('piano-key-active');
		// 	key.classList.remove('piano-key-remove-mouse');
		// 	key.classList.remove('piano-key-active-pseudo');
		// }, 500)
     }
  });

piano.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('piano-key') && onpiano == true) {
    	const audio = document.querySelector(`audio[data-letter="${e.target.getAttribute('data-code')}"]`);
		const key = document.querySelector(`.piano-key[data-code="${e.target.getAttribute('data-code')}"]`);
    	if(!audio) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add('piano-key-active');
		key.classList.add('piano-key-remove-mouse');
		key.classList.add('piano-key-active-pseudo');
		
		// setTimeout(function() {
		// 	key.classList.remove('piano-key-active');
		// 	key.classList.remove('piano-key-remove-mouse');
		// 	key.classList.remove('piano-key-active-pseudo');
		// }, 500)
     }
  });
piano.addEventListener('mouseout', (e) => {
    if(onpiano == true) {
    	const keys = document.querySelectorAll('.piano-key');
    	for (let j = 0; j < keys.length; j++) {
		keys[j].classList.remove('piano-key-active');
		keys[j].classList.remove('piano-key-remove-mouse');
		keys[j].classList.remove('piano-key-active-pseudo');
		}
		// setTimeout(function() {
		// 	key.classList.remove('piano-key-active');
		// 	key.classList.remove('piano-key-remove-mouse');
		// 	key.classList.remove('piano-key-active-pseudo');
		// }, 500)
     }
  });


window.addEventListener('mouseup', () => {
    // if(e.target.classList.contains('piano-key')) {
    	 if(onpiano == true) {
  //   	const audio = document.querySelector(`audio[data-letter="${e.target.getAttribute('data-code')}"]`);
		// const key = document.querySelector(`.piano-key[data-code="${e.target.getAttribute('data-code')}"]`);
    	const keys = document.querySelectorAll('.piano-key');
    	for (let j = 0; j < keys.length; j++) {
		keys[j].classList.remove('piano-key-active');
		keys[j].classList.remove('piano-key-remove-mouse');
		keys[j].classList.remove('piano-key-active-pseudo');
	
	}
	onpiano = false;
}
  });




const screen = document.querySelector('.fullscreen');
screen.addEventListener('click', () => {
	toggleFullScreen();
});

	function toggleFullScreen() {
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

const bl = document.querySelector('.btn-letters');
const bn = document.querySelector('.btn-notes');
const keys = document.querySelectorAll('.piano-key');
bl.addEventListener('click', () => {
	bl.classList.add('btn-active');	
	bn.classList.remove('btn-active');
	for (let j = 0; j < keys.length; j++) {
			keys[j].classList.add('piano-key-letter');
		};
});
bn.addEventListener('click', () => {
	bn.classList.add('btn-active');	
	bl.classList.remove('btn-active');	
	for (let j = 0; j < keys.length; j++) {
			keys[j].classList.remove('piano-key-letter');
		};
});


