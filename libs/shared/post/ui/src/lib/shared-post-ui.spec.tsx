import { render } from '@testing-library/react';

import SharedPostUi from './shared-post-ui';

describe('SharedPostUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedPostUi />);
    expect(baseElement).toBeTruthy();
  });
});
