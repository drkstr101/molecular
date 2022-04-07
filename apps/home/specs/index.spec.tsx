import { render } from '@testing-library/react';

import Greeting from './index';

describe('Greeting', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Greeting />);
    expect(baseElement).toBeTruthy();
  });
});
