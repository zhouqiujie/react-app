export interface CommonModel {
  [key: string]: any
};

export interface RouteUseLocationModel {
  pathname: string;
  search: string;
  hash: string;
  state: any;
  key?: string;
}

export interface RouteUseParamsModel {
  [key: string]: string
}

export interface RouteUseHistoryModel {
  [key: string]: any;
}
