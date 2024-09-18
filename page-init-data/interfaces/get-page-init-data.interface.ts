import { IGetResponse } from '../../common';
import { PagesEnum } from '../enums';
import { PageInitDataType } from '../types';

export interface IGetPageInitDataParams {
  companyId: string;
  page: PagesEnum;
}

export type IGetPageInitDataResponse = IGetResponse<PageInitDataType>;
