import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

describe("app", () => {
    it(" should display message", () => {
        render(
            <App />,
        );

        expect(screen.getByText("sample text")).toBeInTheDocument();
    })
})