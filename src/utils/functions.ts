import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchAllNews, fetchNews, fetchRelease } from '../redux/actions/action';
import { NewsItem } from './Types';

export const useFetchData = (dataType: any) => {
  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  // ...

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

export function handleFavoriteClick(item: NewsItem) {
  const favorites = JSON.parse(localStorage.getItem('items') || '[]');
  const index = favorites.findIndex(
    (favoriteItem: NewsItem) => favoriteItem.id === item.id,
  );

  if (index !== -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(item);
  }
  localStorage.setItem('items', JSON.stringify(favorites));
}
