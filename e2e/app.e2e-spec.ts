import { SteppersPage } from './app.po';

describe('steppers App', function() {
  let page: SteppersPage;

  beforeEach(() => {
    page = new SteppersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
