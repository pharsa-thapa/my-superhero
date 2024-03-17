/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { Superhero } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SuperheroUpdateForm(props) {
  const {
    id: idProp,
    superhero: superheroModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    image: "",
    description: "",
    externalId: "",
    powerstats: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [externalId, setExternalId] = React.useState(initialValues.externalId);
  const [powerstats, setPowerstats] = React.useState(initialValues.powerstats);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = superheroRecord
      ? { ...initialValues, ...superheroRecord }
      : initialValues;
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setDescription(cleanValues.description);
    setExternalId(cleanValues.externalId);
    setPowerstats(
      typeof cleanValues.powerstats === "string" ||
        cleanValues.powerstats === null
        ? cleanValues.powerstats
        : JSON.stringify(cleanValues.powerstats)
    );
    setErrors({});
  };
  const [superheroRecord, setSuperheroRecord] =
    React.useState(superheroModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Superhero, idProp)
        : superheroModelProp;
      setSuperheroRecord(record);
    };
    queryData();
  }, [idProp, superheroModelProp]);
  React.useEffect(resetStateValues, [superheroRecord]);
  const validations = {
    name: [{ type: "Required" }],
    image: [],
    description: [],
    externalId: [],
    powerstats: [{ type: "JSON" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          image,
          description,
          externalId,
          powerstats,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            Superhero.copyOf(superheroRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "SuperheroUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              image,
              description,
              externalId,
              powerstats,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image: value,
              description,
              externalId,
              powerstats,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              description: value,
              externalId,
              powerstats,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="External id"
        isRequired={false}
        isReadOnly={false}
        value={externalId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              description,
              externalId: value,
              powerstats,
            };
            const result = onChange(modelFields);
            value = result?.externalId ?? value;
          }
          if (errors.externalId?.hasError) {
            runValidationTasks("externalId", value);
          }
          setExternalId(value);
        }}
        onBlur={() => runValidationTasks("externalId", externalId)}
        errorMessage={errors.externalId?.errorMessage}
        hasError={errors.externalId?.hasError}
        {...getOverrideProps(overrides, "externalId")}
      ></TextField>
      <TextAreaField
        label="Powerstats"
        isRequired={false}
        isReadOnly={false}
        value={powerstats}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              image,
              description,
              externalId,
              powerstats: value,
            };
            const result = onChange(modelFields);
            value = result?.powerstats ?? value;
          }
          if (errors.powerstats?.hasError) {
            runValidationTasks("powerstats", value);
          }
          setPowerstats(value);
        }}
        onBlur={() => runValidationTasks("powerstats", powerstats)}
        errorMessage={errors.powerstats?.errorMessage}
        hasError={errors.powerstats?.hasError}
        {...getOverrideProps(overrides, "powerstats")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || superheroModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || superheroModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
