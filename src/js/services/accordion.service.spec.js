import { AccordionService } from './accordion.service';

describe('Accordion service test', () => {
  let accordionService;

  beforeEach(() => {
    accordionService = new AccordionService();
  });

  it('should call api and get text', () => {
    let promiseHelper;
    const response = {
      url: 'url'
    }
    const promise = new Promise((resolve) => {
      resolve(response);
    });
    spyOn(window, 'fetch').and.callFake(() => {
      return promise
    });

    accordionService.getTextFromApi().then((text) => {
      expect(text).toEqual(response);
    });
    expect(window.fetch).toHaveBeenCalledWith('https://www.drupal.org/api-d7/file/4688627.json');
  })
})