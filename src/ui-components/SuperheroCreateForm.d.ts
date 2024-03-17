/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SuperheroCreateFormInputValues = {
    name?: string;
    image?: string;
    description?: string;
    externalId?: string;
    powerstats?: string;
};
export declare type SuperheroCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    externalId?: ValidationFunction<string>;
    powerstats?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SuperheroCreateFormOverridesProps = {
    SuperheroCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    externalId?: PrimitiveOverrideProps<TextFieldProps>;
    powerstats?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type SuperheroCreateFormProps = React.PropsWithChildren<{
    overrides?: SuperheroCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SuperheroCreateFormInputValues) => SuperheroCreateFormInputValues;
    onSuccess?: (fields: SuperheroCreateFormInputValues) => void;
    onError?: (fields: SuperheroCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SuperheroCreateFormInputValues) => SuperheroCreateFormInputValues;
    onValidate?: SuperheroCreateFormValidationValues;
} & React.CSSProperties>;
export default function SuperheroCreateForm(props: SuperheroCreateFormProps): React.ReactElement;
