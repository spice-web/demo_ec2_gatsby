import './src/styles/global/_ress.scss';
import './src/styles/global/_global.scss';

export const onRouteUpdate = ({ location }) => {
    class Drawer {
      constructor() {
        this.bg = document.querySelector('.drawer__bg');
        this.btn = document.querySelector('.drawer__btn');
        this.menu = document.querySelector('.drawer__menu');
        this.body = document.body;
        this.active = 'active';
        this.init();
      }

      init() {
        this.bg.addEventListener('click', this, false);
        this.btn.addEventListener('click', this, false);
      }

      toggle() {
        if (!this.btn.classList.contains(this.active)) {
          this.menu.classList.add(this.active);
          this.bg.classList.add(this.active);
          this.btn.classList.add(this.active);
          this.body.style.overflowY = 'hidden';

        } else {
          this.menu.classList.remove(this.active);
          this.bg.classList.remove(this.active);
          this.btn.classList.remove(this.active);
          this.body.style.overflowY = 'auto';
        }
      }

      handleEvent(event) {
        this.toggle(event);
      }
    }
    const drawer = new Drawer();
};