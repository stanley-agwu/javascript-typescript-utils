import * as react from 'react';

export const mockUseState = (response: any) => {
  const mockSelectorFn = jest.fn();
  const mockUseSelector = jest.spyOn(react, 'useState');
  mockUseSelector.mockImplementationOnce(() => response);
  mockUseSelector.mockReturnValue(response);
  return mockSelectorFn;
}