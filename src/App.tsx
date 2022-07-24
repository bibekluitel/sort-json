import React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import { Header } from "./components/Header";
import { HotelsList } from "./components/HotelsList";
import { AppContext } from "./context/AppContext";

const queryClient = new QueryClient()

export type AppProps = {
    baseUrl?: string;
}

export const App: React.FC<AppProps> = ({ baseUrl }) => (<QueryClientProvider client={queryClient}>
    <AppContext.Provider value={{ config: { baseUrl } }} >
        <Header />
        <HotelsList />
    </AppContext.Provider>
</QueryClientProvider>
);