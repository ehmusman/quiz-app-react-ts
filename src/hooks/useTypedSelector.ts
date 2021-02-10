import {useSelector as _useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../reducers';

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector