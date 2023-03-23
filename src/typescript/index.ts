export type THexagonButton = {
  title: string;
  icon: any;
  id: string;
  handleFilterFoodList: (idItem: string) => void;
};

export type TSeeMoreButton = {
  title: () => string | undefined;
  handleAddMorePage: () => void;
};

export type TTopCard = {
  img: string;
  title: string;
  id: string;
};

export type TCategoryCard = {
  img: string;
  title: string;
  content: string;
};

export type TRecommendCard = {
  title: string;
  content: string;
};

export type TColumnCard = {
  img: string;
  time: string;
  content: string;
  hashtag: string;
};

// REDUX
export type TOtherState = {
  data: {
    foodList: TTopCard[];
    blogList: TColumnCard[];
  };
  foodList: TTopCard[];
  loadNumberList: number[];
};

export type TTitleAndTime = {
  title: string,
  time: string,
};
