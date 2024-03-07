import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email().required(),
    repeatEmail: Yup.string()
      .email()
      .required()
      .oneOf([Yup.ref("email")], ),
  });
}