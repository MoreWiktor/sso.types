import { IGetResponse } from '../../common';
import { PagesEnum } from '../enums';
import { StylesType } from '../types';

export interface IGetPageStylesParams {
  companyId: string;
  page: PagesEnum;
}

export type IGetPageStylesResponse = IGetResponse<StylesType>;
