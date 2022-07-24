
import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppConfig } from '../src/types/AppContext.types';
import { AppContextValue, AppContext } from '../src/context/AppContext';

type CustomRenderOptions = {
    appConfig?: AppConfig;
    children?: React.ReactNode;
};

export const MOCK_APP_CONFIG: AppConfig = {
    baseUrl: "localhost",
};

export const TestWrapper: React.FC<CustomRenderOptions> = ({
    children,
    appConfig = MOCK_APP_CONFIG,
}) => {
    const queryClient = React.useMemo<QueryClient>(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        retry: false,
                    },
                },
            }),
        [],
    );

    const appContextValue = React.useMemo<AppContextValue>(
        () => ({ config: appConfig, onCancel: jest.fn(), onComplete: jest.fn() }),
        [appConfig],
    );

   return (
        <>
          <AppContext.Provider value={appContextValue}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </AppContext.Provider>
        </>
      );
};