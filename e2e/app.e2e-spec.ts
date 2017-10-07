import { MyCoffeeAppPage } from './app.po';

describe('my-coffee-app App', () => {
  let page: MyCoffeeAppPage;

  beforeEach(() => {
    page = new MyCoffeeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
