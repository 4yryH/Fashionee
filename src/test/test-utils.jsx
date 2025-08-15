import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { theme } from '../styles/theme.js';

/**
 * Общие провайдеры для тестов:
 * - ThemeProvider — чтобы props.theme.colors не был undefined
 * - MemoryRouter — если используется react-router
 */
function Providers({ children, route = '/' }) {
  return (
    <MemoryRouter initialEntries={[route]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
}

export function renderWithProviders(ui, { route = '/', ...options } = {}) {
  return render(ui, {
    wrapper: ({ children }) => <Providers route={route}>{children}</Providers>,
    ...options,
  });
}
