import * as reduxHooks from 'store/hooks';

export const mockSelector = (state?: any, once?: boolean) => {
  const mockUseSelector = jest.spyOn(reduxHooks, 'useAppSelector');

  if(once) {
    mockUseSelector.mockImplementationOnce((fn) => fn(state))
  } else {
    mockUseSelector.mockImplementation((fn) => fn(state));
  }
  return mockUseSelector;
}

export const mockSelectorResponse = (response?: any) => {
  const mockedSelector = jest.spyOn(reduxHooks, 'useAppSelector');
  mockedSelector.mockReturnValue(response);
  return mockedSelector;
}
