import { PagesEnum, InputTypeEnum, ButtonTypeEnum } from '../enums';

export type FieldStyleType = {
  container?: string;
  label?: string;
  input?: string;
};

export type FieldType = {
  title: string;
  type: InputTypeEnum;
  style: FieldStyleType;
  required: boolean;
};

export type ButtonStyleType = {
  base?: string;
  primary?: string;
  done?: string;
  error?: string;
  loading?: string;
};

export type ButtonType = {
  title: string;
  style: ButtonStyleType;
  type: ButtonTypeEnum;
};

export type FormStyleType = {
  title?: string;
  container?: string;
};

export type FormType = {
  title: string;
  style: FormStyleType;
};

export type BackgroundStyleType = {
  container?: string;
};

export type BackgroundType = {
  style: BackgroundStyleType;
};

export type PageInitDataType = {
  page: PagesEnum.SIGNUP;
  form: FormType;
  background: BackgroundType;
  fields: FieldType[];
  buttons: ButtonType[];
};
