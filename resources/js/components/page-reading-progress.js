/**
* Reading Progress Bar
* Menampilkan bar di atas halaman yang terisi sesuai scroll position.
*/
class ReadingProgressBar {
    constructor(contentSelector) {
        this.content = document.querySelector(contentSelector);
        if (!this.content) return;
        this.bar = null;
        this.ticking = false;
        this.init();
    }

    init() {
        this.createBar();
        this.bindEvents();
        this.update();
    }

    createBar() {
        const container = document.createElement('div');
        container.className = 'reading-progress-container';
        this.bar = document.createElement('div');
        this.bar.className = 'reading-progress-bar';
        container.appendChild(this.bar);
        document.body.prepend(container);
    }

    bindEvents() {
        window.addEventListener('scroll', () => {
            if (!this.ticking) {
                window.requestAnimationFrame(() => {
                    this.update();
                    this.ticking = false;
                });
                this.ticking = true;
            }
        });
        window.addEventListener('resize', () => this.update());
    }

    update() {
        const contentRect = this.content.getBoundingClientRect();
        const contentTop = contentRect.top + window.scrollY;
        const contentHeight = this.content.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrolled = window.scrollY - contentTop;
        const total = contentHeight - windowHeight;
        
        let progress = 0;
        if (total > 0) {
            progress = Math.min(Math.max(scrolled / total, 0), 1);
        } else {
            progress = 1;
        }
        
        this.bar.style.width = `${progress * 100}%`;
        if (progress >= 1) {
            this.bar.classList.add('complete');
        } else {
            this.bar.classList.remove('complete');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const isPageView = document.querySelector('.page-content');
    if (isPageView) {
        new ReadingProgressBar('.page-content');
    }
});