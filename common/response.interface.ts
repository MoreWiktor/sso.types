export interface IGetResponseMeta {
  page: number;
  count: number;
  total: number;
}

export interface IGetResponse<DataType> {
  data: DataType;
  meta: IGetResponseMeta;
}
