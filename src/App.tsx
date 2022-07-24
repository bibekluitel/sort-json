import React from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import { Header as HeaderComp } from "./components/Header";
import { HotelsListContent } from "./components/HotelsListContent";
import { AppContext } from "./context/AppContext";



import 'antd/dist/antd.css';
import "./index.scss";

const queryClient = new QueryClient()

export type AppProps = {
    baseUrl?: string;
}

export const App: React.FC<AppProps> = ({ baseUrl }) => (<QueryClientProvider client={queryClient}>
    <AppContext.Provider value={{ config: { baseUrl } }} >
        <div className="full-width full-height main-body">
            <HeaderComp />
            <HotelsListContent />
        </div>
    </AppContext.Provider>
</QueryClientProvider>
);