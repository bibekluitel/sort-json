import * as React from 'react';
import { HotelCancellationType, RatingType } from "../../types/HotelData.types"

export const getCancellationText = (type: HotelCancellationType): string => type === HotelCancellationType.FREE_CANCELLATION ? "Free Cancellation" : '';

export const getHotelrating = (rating: number, ratingType: RatingType) => {
    let arr: React.ReactNode[] = [];
    for (let i = 0; i < Math.ceil(rating); i++) {
        if (ratingType === RatingType.SELF) {
            arr.push(<span className='fa fa-circle checked' style={{ color: i+1 < rating && 'gold' }}></span>);
        }
        else {
            arr.push(<span className="fa fa-star checked" style={{ color: i+1 < rating && 'gold' }}></span>)
        }
    }
    return arr;

}

export const getFullAdress = (address: string[]):string => {
    return address.join();
}

export const getCurrencyText = (currency: string) => `1 night total (${currency})`

export const getSavingsText =(savings: {amount: number})=> savings?.amount && `Save $ ${Math.floor(savings.amount)}~`;