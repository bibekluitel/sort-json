import * as React from 'react';
import { Spin, Select } from 'antd';


import { HotelListData, useGetHotelsList } from '../../hooks/use-get-hotel-list/use-get-hotel-list';
import {HotelList} from './../HotelList'
import { SortType } from '../../types/Filters';

export interface HotelsListContentProps { };

export const HotelsListContent: React.FC<HotelsListContentProps> = (props) => {
    const data = useGetHotelsList() as any as HotelListData[];
    // The location of the hotels would be changed from api.
    const location = "Sydney";
    const [filter, setFilter] = React.useState<SortType>(SortType.NONE);

    if (!data) {
        return <Spin />;
    }

    return (<div className='full-body hotel-list-content-main'>
        <div className='list-header full-body'>
            <span> {`${data.length} hotels in ${location}`}</span>
            <div className="filter-container">
                <span> Sort By</span>
                <Select defaultValue={''} value={filter}  style={{width: 200}} onChange={(value: SortType) => setFilter(value)} className="filter-select">
                    <Select.Option value={SortType.HIGH2Low}>Price (high-low)</Select.Option>
                    <Select.Option value={SortType.LOW2HIGH}>Price (low-high)</Select.Option>
                </Select>
            </div>
        </div>
        <HotelList  data={data} filter={filter}/>
    </div>)
}