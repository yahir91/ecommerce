import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

import { initialValues, validationSchema } from "./LoginForm.form";
import { Auth } from "../../../api/auth";
import { useAuth } from "../../../hooks/useAuth";

const authCtrl = new Auth();
const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        login(response.jwt);

        router.push("/home");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Input
        name="identifier"
        type="text"
        placeholder="Correo electronico o nombre de usuario"
        value={formik.values.identifier}
        onChange={formik.handleChange}
        error={formik.errors.identifier}
      />
      <Form.Input
        name="password"
        type="password"
        placeholder="Contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />

      <Form.Button type="submit" fluid loading={formik.isSubmitting}>
        Enter
      </Form.Button>
    </Form>
  );
};

export default LoginForm;
