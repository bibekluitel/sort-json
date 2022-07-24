
import * as React from 'react';
import { renderHook } from '@testing-library/react';
import { AppContext  } from '../../context/AppContext';
import * as useAppContextDetails  from '../use-app-context/use-app-conext';
import { useGetHotelsList } from './use-get-hotel-list';
import {TestWrapper} from '../../../test/utils';

describe("function: use-get-hotel-list", () => {

    it('should call the fetch api with the base url provided from app config', () => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
            })
        ) as any;

        const spyForAppContext = jest.spyOn(useAppContextDetails, 'useAppContext').mockReturnValue({ baseUrl: 'test'})

        const data =  renderHook(useGetHotelsList, {
            wrapper: (props) => <TestWrapper {...props}  /> 
        })
        spyForAppContext.mockRestore();
        (fetch as any).mockClear();
    })
})