import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe("comp: Header", () => {
    it("should render header with logo", () => {
        render(<Header />);
        expect(screen.getByRole('img')).toBeInTheDocument();
    })
})