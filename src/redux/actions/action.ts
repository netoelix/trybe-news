import { getAllNews, getNews, getRelease } from '../../utils/requestAPI';

export const fetchAllNews = () => async (dispatch: any) => {
  const data = await getAllNews();
  dispatch({ type: 'FETCH_ALL_NEWS', payload: data });
};

export const fetchNews = () => async (dispatch: any) => {
  const data = await getNews();
  dispatch({ type: 'FETCH_NEWS', payload: data });
};

export const fetchRelease = () => async (dispatch: any) => {
  const data = await getRelease();
  dispatch({ type: 'FETCH_RELEASE', payload: data });
};
