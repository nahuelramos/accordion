import { AccordionService } from '../services/accordion.service';

export class Accordion {
  constructor(accordionService) {
    this.accordions = document.getElementsByClassName('accordion-title');
    this.accordionService = accordionService;
    this.setText();
    this.addListeners();
  }

  addListeners() {
    for (let i = 0; i < this.accordions.length; i++) {
      this.accordions[i].addEventListener('click', e => {
        this.toggleItem(this.accordions[i]);
        e.preventDefault();
      });
    }
  }

  setText() {
    this.accordionService.getTextFromApi().then((text) => {
      let paragraph = document.getElementById('accordionAjaxContent');
      paragraph.innerHTML = `Ajax content url: ${text.url}`;
    });
  }

  toggleItem(accordion) {
    let panel = accordion.nextElementSibling;
    const isActualAccordionActive = (panel.style.display === 'block');

    if (isActualAccordionActive) {
      panel.style.display = 'none';
      accordion.classList.remove('active');

      return;
    }

    this.closeAccordions();
    accordion.classList.toggle('active');
    panel.style.display = 'block';
  }

  closeAccordions() {
    for (let i = 0; i < this.accordions.length; i++) {
      this.accordions[i].classList.remove('active');
      let panel = this.accordions[i].nextElementSibling;
      panel.style.display = 'none';
    }
  }
}

const accordion = new Accordion(new AccordionService());
