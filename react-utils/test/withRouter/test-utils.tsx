import { PropsWithChildren, ReactElement } from 'react';
import {
  BrowserRouter,
  BrowserRouterProps,
  MemoryRouterProps,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom';

import type { PreloadedState } from '@reduxjs/toolkit';
import type {
  Queries,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
} from '@testing-library/react';
import { queries, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { AppStore, RootState } from 'common/api/store/store';
import { setupStore } from 'common/api/store/store';

export type AugmentedRouterProps = (BrowserRouterProps | MemoryRouterProps) & {
  useBrowserRouter?: boolean;
  path?: string;
};

interface ExtendedRenderRouterOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  routerProps?: AugmentedRouterProps;
}

const wrapperForRenderWithRouter =
  ({ useBrowserRouter, path, ...routerProps }: AugmentedRouterProps) =>
  ({ children }: PropsWithChildren): JSX.Element & PropsWithChildren => {
    const Router = useBrowserRouter ? BrowserRouter : MemoryRouter;
    return (
      <Router {...routerProps}>
        {path ? (
          <Routes>
            <Route path={path} element={children} />
          </Routes>
        ) : (
          children
        )}
      </Router>
    );
  };

export const renderWithRouter = (
  ui: ReactElement,
  {
    preloadedState = {},
    routerProps = {},
    store = setupStore(preloadedState),
    wrapper = wrapperForRenderWithRouter(routerProps),
    ...renderOptions
  }: ExtendedRenderRouterOptions = {}
) => ({
  store,
  ...render(ui, { wrapper, ...renderOptions }),
  user: userEvent.setup(),
});

export const renderHookWithRouter = function renderHookWithRouter<
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  render: (initialProps: Props) => Result,
  {
    store = setupStore(),
    routerProps = {},
    wrapper = wrapperForRenderWithRouter(routerProps),
    ...renderOptions
  }: RenderHookOptions<Props, Q, Container, BaseElement> & {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
    routerProps?: MemoryRouterProps;
  } = {}
): RenderHookResult<Result, Props> & { store?: AppStore } {
  return {
    store,
    ...renderHook<Result, Props, Q, Container, BaseElement | DocumentFragment>(
      render,
      {
        wrapper,
        ...renderOptions,
      }
    ),
  };
};

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { renderWithRouter as render };
export { renderHookWithRouter as renderHook };
export { userEvent };
