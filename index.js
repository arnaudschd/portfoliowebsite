class Lightbox{
	constructor(){
		this.init()
	}

	init(){
		this.container = document.createElement('div');
		this.container.id = 'lightbox';
		document.body.appendChild(this.container);

		this.lightboxImg = document.createElement('img');
		this.container.appendChild(this.lightboxImg);

		this.addListeners();
	}

	addListeners(){
		const images = document.querySelectorAll('.gallery img');
		images.forEach(img => {
			img.addEventListener('click', ()=> this.galleryImgClicked(img))
		})

		this.container.addEventListener('click', ()=>{
			this.hideLightbox()
		})

		document.addEventListener('keydown', (e) => {
			if(e.key === 'Escape') this.hideLightbox()
		})
	}

	hideLightbox(){
		this.container.classList.remove('active')
	}

	galleryImgClicked = (img) => {
		this.lightboxImg.src = img.src;
		this.container.classList.add('active')
	}
}

const lightbox = new Lightbox()

window.fadeIn = function(obj) {
	$(obj).fadeIn(1000);
}

function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
