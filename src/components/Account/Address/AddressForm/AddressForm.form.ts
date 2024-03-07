import * as Yup from "yup";

export function initialValues(address: any) {
  return {
    title: address?.title || "",
    name: address?.name || "",
    address: address?.address || "",
    city: address?.city || "",
    state: address?.state || "",
    postal_code: address?.postal_code || "",
    phone: address?.phone || "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required(),
    name: Yup.string().required(),
    address: Yup.string().required(),
    city: Yup.string().required(),
    state: Yup.string().required(),
    postal_code: Yup.string().required(),
    phone: Yup.number().required(),
  });
}
