import { FromSecsToLocaleDatePipe } from './from-secs-to-locale-date.pipe';

describe('FromSecsToLocaleDatePipe', () => {
  it('create an instance', () => {
    const pipe = new FromSecsToLocaleDatePipe();
    expect(pipe).toBeTruthy();
  });
});
