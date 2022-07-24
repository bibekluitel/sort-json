import * as React from 'react';
import { HotelListData } from '../../types/HotelData.types'
import { getCancellationText, getCurrencyText, getFullAdress, getHotelrating, getSavingsText } from './utils';

export type HotelListItemProps = {
    hotel: HotelListData;
}
export const HotelListItem: React.FC<HotelListData> = ({ id, property, offer }) => (<div className='hotel-list-item-main full-body' key={id} data-test-id="hotel-list-item">
    <div className='item-image'
        style={{ backgroundImage: `url(${property.previewImage.url})` }}
    >
        <div className='deal-type'> <span>{offer.promotion.title}</span> </div>
        <div className='clear-both'></div>
    </div>
    <div className="item-container">
        <div className='header-row full-body'>
            <div className="hotel-title">
                {property.title}
            </div>
            <div className='hotel-rating'>
                {getHotelrating(property.rating.ratingValue, property.rating.ratingType)}
            </div>
        </div>
        <div className='hotel-address full-body'>
            {getFullAdress(property.address)}
        </div>
        <a className="hotel-room-type full-body">
            {offer.name}
        </a>
        <div className="hotel-cancellation-availability">
            {getCancellationText(offer.cancellationOption.cancellationType)}
        </div>
    </div>
    <div className='hotel-price-section'>
        <div className='currency-details'> {getCurrencyText(offer.displayPrice.currency)}</div>
        <div className='amount'> <sup>$</sup> {Math.floor(offer.displayPrice.amount)}</div>
        <div className='savings'>
            {getSavingsText(offer.savings)}
        </div>
    </div>
</div>);