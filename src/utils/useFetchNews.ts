import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllNews, fetchNews, fetchRelease } from '../redux/actions/action';

export const useFetchData = (dataType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    switch (dataType) {
      case 'all':
        dispatch(fetchAllNews());
        break;
      case 'news':
        dispatch(fetchNews());
        break;
      case 'release':
        dispatch(fetchRelease());
        break;
      default:
        break;
    }
  }, [dispatch, dataType]);
};
