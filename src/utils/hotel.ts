import { sortBy, reverse } from 'lodash';

import { SortType } from "../types/Filters";
import { HotelListData } from "../hooks/use-get-hotel-list/use-get-hotel-list";


export const sortHotel = (data:HotelListData[], sortByType: SortType):HotelListData[] =>  {
    const sortedData = sortBy(data, [(item:HotelListData)=>item.offer.displayPrice.amount])
    if(sortByType === SortType.HIGH2Low) {
        reverse(sortedData);
    }
    return sortedData;
}