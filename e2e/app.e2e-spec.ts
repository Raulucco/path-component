import { StepperPage } from './app.po';

describe('stepper App', function() {
  let page: SteppersPage;

  beforeEach(() => {
    page = new StepperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
