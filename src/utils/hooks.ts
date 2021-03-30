import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../redux/reducer';

// Use throughout the app instead of plain `useDispatch` and `useSelector`
//export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector;
