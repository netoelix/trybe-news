export interface ArticlesProps {
  filter: string;
}
export type NewsItem = {
  id: number | undefined;
  titulo: string;
  introducao: string;
  data_publicacao: string;
  link: string;
};
export type NewsData = NewsItem[];

export type State = {
  allNews: NewsItem[];
  news: NewsItem[];
  release: NewsItem[];
};

export type StateSection = {
  allNews: {
    items: {
      titulo: string;
      introducao: string;
      data_publicacao: string;
      link: string;
      id?: number;
    }[];
  };
};
