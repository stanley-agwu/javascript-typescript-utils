export const mockUseEffect = () => {
  jest.mock('react', () => ({
    ...jest.requireActual<Object>('react'),
    useEffect: jest.fn().mockImplementation((func) => func()),
  }));
};
