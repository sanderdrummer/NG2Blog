import { NG2BlogPage } from './app.po';

describe('ng2-blog App', function() {
  let page: NG2BlogPage;

  beforeEach(() => {
    page = new NG2BlogPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-blog works!');
  });
});
