import { Accordion } from './accordion';
import { AccordionService } from '../services/accordion.service';

describe('Accordion test', () => {
  let accordion;
  let accordionService;
  let dl, dt, dd, p;
  const mockService = {
    getTextFromApi: () => {
      return {
        then: (callback) => {
          callback({ url: 'url' });
        }
      }
    }
  };

  beforeEach(() => {
    const body = document.getElementsByTagName('body')[0];
    dl = createElement('dl')
    dt = createElement('dt');
    dd = createElement('dd');
    p = createElement('p')
    dt.classList.add('accordion-title');
    dd.style.display = 'none';
    p.setAttribute('id', 'accordionAjaxContent');
    body.appendChild(dl);
    dl.appendChild(dt);
    dl.appendChild(dd);
    dd.appendChild(p);

    accordion = new Accordion(mockService);
  });


  it('should create accordion', () => {
    expect(accordion.accordionService).toEqual(mockService);
  });

  it('should call set text and update paragraph', () => {
    const paragraph = document.getElementById('accordionAjaxContent');

    expect(paragraph.innerHTML).toEqual('Ajax content url: url');
  });

  it('should check actual accordion is open and close it', () => {
    const spyCloseAccordions = spyOn(accordion, 'closeAccordions').and.callFake(() => { });
    dd.style.display = 'block';
    dt.classList.toggle('active');
    accordion.toggleItem(dt);

    expect(dd.style.display).toEqual('none');
    expect(dt.classList).not.toContain('active');
    expect(spyCloseAccordions).not.toHaveBeenCalled();
  });

  it('should check actual accordion is open and close it', () => {
    const spyCloseAccordions = spyOn(accordion, 'closeAccordions').and.callFake(() => { });
    accordion.toggleItem(dt);

    expect(dd.style.display).toEqual('block');
    expect(dt.classList).toContain('active');
    expect(spyCloseAccordions).toHaveBeenCalled();
  });

  function createElement(elementName) {
    return document.createElement(elementName);
  }
});