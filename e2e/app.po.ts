export class NG2BlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-blog-app h1')).getText();
  }
}
