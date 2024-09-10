import { PagesEnum } from "../enums";
import { InputType } from "./input.type";

export type RegistrationInitDataType = {
  page: PagesEnum.SIGNUP;
  fields: {
    style?: {
      container?: string;
      label?: string;
      input?: string;
    };
    email: {
      title: string;
      style?: {
        container?: string;
        label?: string;
        input?: string;
      };
    };
    password: {
      title: string;
      style?: {
        container?: string;
        label?: string;
        input?: string;
      };
    };
    additional?: {
      title: string,
      type: InputType;
      required?: boolean;
      style?: {
        container?: string;
        label?: string;
        input?: string;
      };
    }[];
  };
  buttons: {
    style?: { 
      button?: string;
    };
    submit: {
      title: string;
      style?: { 
        button?: string;
      };
    };
    additional?: {
      title: string;
      type?: "button" | "reset" | "submit";
      style?: { 
        button?: string;
      };
    }[],
  };
  form: {
    title: string;
    style?: {
      title?: string;
      container?: string;
    };
  };
  background?: {
    style?: string;
  }
};

export type InitDataType = RegistrationInitDataType;