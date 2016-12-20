import { TeamDirective17Page } from './app.po';

describe('team-directive-17 App', function() {
  let page: TeamDirective17Page;

  beforeEach(() => {
    page = new TeamDirective17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
