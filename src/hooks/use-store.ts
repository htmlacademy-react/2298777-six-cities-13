import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { State, AppDispatch } from '../types/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useAppDispatch, useAppSelector };
