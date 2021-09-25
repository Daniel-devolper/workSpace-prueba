import { render } from '@testing-library/react';

import SharedGetTodosDataAcces from './shared-get-todos-data-acces';

describe('SharedGetTodosDataAcces', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedGetTodosDataAcces />);
    expect(baseElement).toBeTruthy();
  });
});
