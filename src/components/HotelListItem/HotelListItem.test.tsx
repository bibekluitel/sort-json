import * as React from 'react';
import { render, screen, fireEvent, within, waitFor } from '@testing-library/react';
import { HotelListItem } from './HotelListItem';
import { MOCK_HOTEL_LIST } from '../../../test/utils';

describe("comp: HotelListItem ", () => {
    it("should render the item with all necessary text", () => {
        render(<HotelListItem {...MOCK_HOTEL_LIST[0]} />);
        expect(screen.getByText("Courtyard by Marriott Sydney-North Ryde")).toBeInTheDocument();
        expect(screen.getByText("7-11 Talavera Rd,North Ryde")).toBeInTheDocument();
        expect(screen.getByText("Exclusive Deal")).toBeInTheDocument();
        expect(screen.queryByText("Free Cancellation")).not.toBeInTheDocument();
        expect(screen.getByText("1 night total (AUD)")).toBeInTheDocument();
        expect(screen.getByText("Save $ 30~")).toBeInTheDocument();
    })
})