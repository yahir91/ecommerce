import { useFormik } from "formik";
import { Form } from "semantic-ui-react";
import { User } from "../../../../api/user";
import { useAuth } from "../../../../hooks/useAuth";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
import styles from "./ChangePassword.module.scss";

const userCtrl = new User();
const ChangePasswordForm = () => {
  const { user, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { password: formValue.password });
        logout();
      } catch (error) {
        throw error;
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar contraseña</label>
      <Form.Input
        type="password"
        name="password"
        placeholder="Nueva contraseña"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
      />
      <Form.Input
        type="password"
        name="repeatPassword"
        placeholder="Repetir contraseña"
        value={formik.values.repeatPassword}
        onChange={formik.handleChange}
        error={formik.errors.repeatPassword}
      />
      <Form.Button type="submit" loading={formik.isSubmitting}>
        Enviar
      </Form.Button>
    </Form>
  );
};

export default ChangePasswordForm;
