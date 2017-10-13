import { FoobarAppPage } from './app.po';

describe('foobar-app App', () => {
  let page: FoobarAppPage;

  beforeEach(() => {
    page = new FoobarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
