import { LeviSmellsPage } from './app.po';

describe('levi-smells App', () => {
  let page: LeviSmellsPage;

  beforeEach(() => {
    page = new LeviSmellsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
