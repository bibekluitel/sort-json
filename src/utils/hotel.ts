import { sortBy, reverse } from 'lodash';

import { SortType } from "../types/Filters.type";
import { HotelListData } from "../types/HotelData.types";


export const sortHotel = (data:HotelListData[], sortByType: SortType):HotelListData[] =>  {
    const sortedData = sortBy(data, [(item:HotelListData)=>item.offer.displayPrice.amount])
    if(sortByType === SortType.HIGH2Low) {
        reverse(sortedData);
    }
    return sortedData;
}