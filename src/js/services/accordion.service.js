export class AccordionService {
  getTextFromApi() {
    return fetch('https://www.drupal.org/api-d7/file/4688627.json')
      .then((response) => {
        return response.json();
      });
  }
}
