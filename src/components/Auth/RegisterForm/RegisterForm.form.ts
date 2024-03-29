import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    name: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email().required(),
    username: Yup.string().required(),
    name: Yup.string().required(),
    password: Yup.string().required(),
  });
}