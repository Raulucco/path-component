import { PathPage } from './app.po';

describe('path App', function() {
  let page: PathPage;

  beforeEach(() => {
    page = new PathPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
