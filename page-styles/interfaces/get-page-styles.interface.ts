import { IGetResponse } from '@shared/types/common';
import { PagesEnum } from '../enums';
import { StylesType } from '../types';

export interface IGetPageStylesParams {
  companyId: string;
  page: PagesEnum;
}

export interface IGetPageStylesResponse extends IGetResponse<StylesType> {}
