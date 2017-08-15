import { DojoNewsifyPage } from './app.po';

describe('dojo-newsify App', () => {
  let page: DojoNewsifyPage;

  beforeEach(() => {
    page = new DojoNewsifyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
