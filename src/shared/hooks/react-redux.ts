import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../shared/lib/store/types';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
