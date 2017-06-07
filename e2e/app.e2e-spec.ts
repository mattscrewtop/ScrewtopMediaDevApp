import { DfwSportsBeatAppPage } from './app.po';

describe('dfw-sports-beat-app App', function() {
  let page: DfwSportsBeatAppPage;

  beforeEach(() => {
    page = new DfwSportsBeatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
