import { newSpecPage } from '@stencil/core/testing';
import { ExtendableMediaRecorderBug } from '../extendable-media-recorder-bug';

describe('extendable-media-recorder-bug', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ExtendableMediaRecorderBug],
      html: `<extendable-media-recorder-bug></extendable-media-recorder-bug>`,
    });
    expect(page.root).toEqualHtml(`
      <extendable-media-recorder-bug>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </extendable-media-recorder-bug>
    `);
  });
});
