import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(),
    repeatPassword: Yup.string()
      .required()
      .oneOf([Yup.ref("password")], ),
  });
}