import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { HotelListData } from '../../types/HotelData.types';
import { useAppContext } from '../use-app-context/use-app-conext';

export const useGetHotelsList = (): UseQueryResult<HotelListData[]> => {
  const { baseUrl } = useAppContext() || {};
  const { data } = useQuery(['getData'], async () => fetch(`${baseUrl}/hotels`).then(res => res.json()));
  return data as any;
};