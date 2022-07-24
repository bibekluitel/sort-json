import * as React from 'react';
import { useGetHotelsList } from '../../hooks/use-get-hotel-list/use-get-hotel-list';

export interface HotelsListProps {};

export const HotelsList: React.FC<HotelsListProps> = (props) => {
    const data = useGetHotelsList();
    console.log(data);
    return <> hotels list</>
}