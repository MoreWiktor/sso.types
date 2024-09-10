import { IGetResponse } from '../../common';
import { PagesEnum } from '../enums';
import { InitDataType } from '../types';

export interface IGetPageInitDataParams {
  companyId: string;
  page: PagesEnum;
};

export type IGetPageInitDataResponse = IGetResponse<InitDataType>;
