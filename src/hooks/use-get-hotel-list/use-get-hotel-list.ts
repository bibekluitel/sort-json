import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { useAppContext } from '../use-app-context/use-app-conext';

export type HotelListData = {
  id: string;

  property: {
    propertyId: string;
    title: string;
    address: string[];
    previewImage: {
      url: string;
      caption: string;
      imageType: string;
    };
    rating: {
      ratingValue: number;
      ratingType: string;
    }
  };
  offer: {
    promotion: {
      title: string;
      type: string;
    };
    name: string;
    displayPrice: {
      amount: number;
      currency: string;
    };
    savings: {
      amount: number;
      currency: string;
    };
    cancellationOption: {
      cancellationType: string;
    }
  }
};

export const useGetHotelsList = (): UseQueryResult<HotelListData[]> => {
  const { baseUrl } = useAppContext() || {};
  const { data } = useQuery(['getData'], async () => fetch(`${baseUrl}/hotels`).then(res => res.json()));
  return data as any;
};