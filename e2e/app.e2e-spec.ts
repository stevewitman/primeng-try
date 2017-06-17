import { PrimengTry2Page } from './app.po';

describe('primeng-try2 App', () => {
  let page: PrimengTry2Page;

  beforeEach(() => {
    page = new PrimengTry2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
