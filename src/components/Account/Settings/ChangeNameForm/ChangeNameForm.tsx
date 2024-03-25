import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import styles from "./ChangeNameForm.module.scss";
import { User } from "../../../../app/api/user";
import { useAuth } from "../../../../hooks/useAuth";
import { initialValues, validationSchema } from "./ChangeNameForm.form";

const userCtrl = new User();

const ChangeNameForm = () => {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.firstname ?? "", user.lastname ?? ""),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>Nombre y apellidos</label>

      <div className={styles.content}>
        <Form.Input
          name="firstname"
          placeholder="Nombre"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />
        <Form.Input
          name="lastname"
          placeholder="Apellidos"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />
        <Form.Button type="submit" loading={formik.isSubmitting}>
          Enviar
        </Form.Button>
      </div>
    </Form>
  );
};

export default ChangeNameForm;
