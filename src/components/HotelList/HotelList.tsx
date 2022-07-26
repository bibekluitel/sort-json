import * as React from 'react';
import { List } from 'antd';

import { HotelListData } from './../../types/HotelData.types';
import { SortType } from '../../types/Filters.type';
import { sortHotel } from '../..//utils/hotel';
import { HotelListItem } from '../HotelListItem';

export type HotelListProps = {
    data: HotelListData[];
    filter?: SortType;
}

export const HotelList: React.FC<HotelListProps> = ({ data, filter }) => {
    const sortedData = sortHotel(data, filter)
    return (<List itemLayout="vertical"
        size="large"
        dataSource={sortedData as any} pagination={false}
        renderItem={(item: HotelListData) => (
            <List.Item
                key={item.property.title}
                data-test-id="hotel-list-item"
            >
                <HotelListItem {...item} />
            </List.Item>
        )}
    />);
}