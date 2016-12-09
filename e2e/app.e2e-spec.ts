import { Ng2TodosPage } from './app.po';

describe('ng2-todos App', function() {
  let page: Ng2TodosPage;

  beforeEach(() => {
    page = new Ng2TodosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
