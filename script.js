class Slider {
    constructor({el}) {
        this.slider = el instanceof HTMLElement ? el : document.querySelector(el);
        this.sliderItems = this.slider.querySelectorAll('.slider__item');
        this.prev = this.slider.querySelector('.slider__prev');
        this.next = this.slider.querySelector('.slider__next');
        this.active = 0;

        //Пишем точки (Dotted) для слайда
        this.pagination = this.slider.querySelector('.slider__pagination');
        for (let i = 0; i < this.sliderItems.length; i++) {
            let li = '<li></li>'
            this.pagination.innerHTML += li;
        }

        this.dots = [...this.pagination.querySelectorAll('li')]
        // ----------------------------

        this.prev.addEventListener('click', () => this.moveSlider(this.prev));
        this.next.addEventListener('click', () => this.moveSlider(this.next));

        this.dots.forEach(item => {
            item.addEventListener('click', (e) => this.clickDots(e));
        });

        this.setClass();
    }

    setClass(){
        for (let i = 0; i < this.sliderItems.length; i++) {
            this.sliderItems[i].classList.remove('active');
            this.dots[i].classList.remove('active');
        }
        this.sliderItems[this.active].classList.add('active');
        this.dots[this.active].classList.add('active');
    }
    clickDots(e){
        let id = this.dots.indexOf(e.target);
        this.active = id;
        this.setClass();

        // console.log(e.target);
        // console.log(this.dots.indexOf(e.target));
    };
    moveSlider(btn) {

        if(btn == this.prev) {
            this.active--;
            if(this.active < 0) this.active = this.sliderItems.length - 1;
        }
        else if(btn == this.next) {
            this.active++
            if(this.active > this.sliderItems.length - 1) this.active = 0
        }
        this.setClass();


    }
}

const mySlider = new Slider({
    el: '.slider'
})
