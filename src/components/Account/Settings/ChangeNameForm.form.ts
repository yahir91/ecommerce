import * as Yup from "yup";

export function initialValues(firstname: string, lastname: string) {
  return {
    firstname,
    lastname,
  };
}

export function validationSchema() {
  return Yup.object({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
  });
}
