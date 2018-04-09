import { MeetingPage } from './app.po';

describe('meeting App', () => {
  let page: MeetingPage;

  beforeEach(() => {
    page = new MeetingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
