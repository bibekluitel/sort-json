import * as React from 'react';
import { HotelListData } from '../../hooks/use-get-hotel-list/use-get-hotel-list';

export type HotelListItemProps = {
    hotel: HotelListData;
}
export const HotelListItem: React.FC<HotelListItemProps> = ({ hotel}) => {

    return <>  test</>
}