import { newE2EPage } from '@stencil/core/testing';

describe('extendable-media-recorder-bug', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<extendable-media-recorder-bug></extendable-media-recorder-bug>');

    const element = await page.find('extendable-media-recorder-bug');
    expect(element).toHaveClass('hydrated');
  });
});
