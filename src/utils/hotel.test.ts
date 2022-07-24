import { MOCK_HOTEL_LIST } from '../../test/utils';
import { SortType } from "../types/Filters.type";

import { sortHotel } from './hotel';

describe("func: sortHotel", () => {
    it("should return the original array if no filter is provided", () => {
        const result = sortHotel(MOCK_HOTEL_LIST, undefined);
        expect(result).toMatchObject(MOCK_HOTEL_LIST);
    })

    it("should return the sorted array with price from low to high", () => {
        const result = sortHotel([
            {
                "offer": {
                    "displayPrice": {
                        "amount": 329.000000000,
                        "currency": "AUD"
                    }
                }
            },
            {
                "offer": {
                    "displayPrice": {
                        "amount": 320.000000000,
                        "currency": "AUD"
                    }
                }
            },
        ], SortType.LOW2HIGH);
        expect(result).toMatchObject([
            {
                "offer": {
                    "displayPrice": {
                        "amount": 320.000000000,
                        "currency": "AUD"
                    }
                }
            },
            {
                "offer": {
                    "displayPrice": {
                        "amount": 329.000000000,
                        "currency": "AUD"
                    }
                }
            },
        ]);
    })

    it("should return the sorted array with price from high to low", () => {
        const result = sortHotel([
            {
                "offer": {
                    "displayPrice": {
                        "amount": 319.000000000,
                        "currency": "AUD"
                    }
                }
            },
            {
                "offer": {
                    "displayPrice": {
                        "amount": 320.000000000,
                        "currency": "AUD"
                    }
                }
            },
        ], SortType.HIGH2Low);
        expect(result).toMatchObject([
            {
                "offer": {
                    "displayPrice": {
                        "amount": 320.000000000,
                        "currency": "AUD"
                    }
                }
            },
            {
                "offer": {
                    "displayPrice": {
                        "amount": 319.000000000,
                        "currency": "AUD"
                    }
                }
            },
        ]);
    })
})