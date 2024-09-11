import { PagesEnum } from "../enums";
import { InputType } from "./input.type";

export type FieldStyleType = {
  container?: string;
  label?: string;
  input?: string;
};

export type FieldType = {
  title: string;
  type: InputType;
  style?: FieldStyleType;
  required?: boolean;
};

export type ButtonStyleType = { 
  button: {
      base: string;
      primary?: string;
      done?: string;
      error?: string;
      loading?: string;
  };
};

export enum ButtonTypeEnum {
  SUBMIT = "submit",
  REDIRECT = "redirect",
}

export type ButtonType = {
  title: string;
  style?: ButtonStyleType;
  type: ButtonTypeEnum;
} & ({
  type: ButtonTypeEnum.SUBMIT;
} | {
  type: ButtonTypeEnum.REDIRECT;
  link: string;
});

export type FormStyleType = {
  title?: string;
  container?: string;
};

export type FormType = {
  title: string;
  style?: FormStyleType
}

export type BackgroundStyleType = {
  container?: string;
}

export type BackgroundType = {
  style?: BackgroundStyleType;
}

export type InitDataType = {
  page: PagesEnum.SIGNUP;
  fields: FieldType[];
  buttons: ButtonType[];
  form: FormType;
  background: BackgroundType;
};
