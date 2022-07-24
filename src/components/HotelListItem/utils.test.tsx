import * as React from 'react';
import {getCancellationText, getFullAdress, getCurrencyText, getSavingsText, getHotelrating} from './utils';
import { HotelCancellationType, RatingType } from "../../types/HotelData.types"



describe("func: getCancellationText", () => {
    it("should return free cancellation text for free cancellation type", ()=> {
        const result = getCancellationText(HotelCancellationType.FREE_CANCELLATION);
        expect(result).toBe("Free Cancellation");
    })

    it("should not return free cancellation text for other cancellation type", ()=> {
        const result = getCancellationText(HotelCancellationType.NOT_REFUNDABLE);
        expect(result).not.toBe("Free Cancellation");
    })
})

describe("func: getHotelrating", () => {
    it("should return array of circles for length of on upper scale of rating", ()=> {
        const result = getHotelrating(1.2, RatingType.SELF );
        expect(result.length).toBe(2);
        // expect(result[0]).toContain("fa-circle");
        
    })

    it("should return array of star for length of on upper scale of rating", ()=> {
        const result = getHotelrating(1.2, RatingType.STAR );
        expect(result.length).toBe(2);
        // expect(result[0]).toContain("fa-star");
        
    })
})

describe("func: getFullAdress", () => {
    it("should return joined full address with comma in between", ()=> {
        const result = getFullAdress(['test','bibek']);
        expect(result).toBe("test,bibek");
    })
    it("should  not return joined any address if address is undefined", ()=> {
        const result = getFullAdress(undefined);
        expect(result).toBe(undefined);
    })
})

describe("func: getCurrencyText", () => {
    it("should return text with currency appended to it", ()=> {
        const result = getCurrencyText('test');
        expect(result).toBe("1 night total (test)");
    })

    it("should return null if currency is not provided to it", ()=> {
        const result = getCurrencyText(null);
        expect(result).toBe(null);
    })
})

describe("func: getSavingsText", () => {
    it("should return text with amount to nearest integer", ()=> {
        const result = getSavingsText({ amount: 12.3});
        expect(result).toBe("Save $ 12~");
    })

    it("should return null if savings is not present", ()=> {
        const result = getSavingsText(undefined);
        expect(result).toBe(undefined);
    })
})