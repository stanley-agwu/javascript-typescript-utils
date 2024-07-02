import { ComponentPropsWithoutRef, ReactNode } from "react";

export interface InputGroupProps extends ComponentPropsWithoutRef<'input'> {
  error?: ReactNode;
  success?: ReactNode;
  label?: string;
}