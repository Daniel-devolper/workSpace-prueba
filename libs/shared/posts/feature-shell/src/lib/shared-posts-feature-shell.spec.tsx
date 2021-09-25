import { render } from '@testing-library/react';

import SharedPostsFeatureShell from './shared-posts-feature-shell';

describe('SharedPostsFeatureShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedPostsFeatureShell />);
    expect(baseElement).toBeTruthy();
  });
});
