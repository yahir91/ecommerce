import { useState } from "react";
import { Button } from "semantic-ui-react";
import styles from "./AddAdress.module.scss";
import { BasicModal } from "../../../Shared/BasicModal/BasicModal";
import AddressForm from "../AddressForm/AddressForm";

const AddAddress = ({ onReload }: any) => {
  const [show, setShow] = useState(false);

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Crear
      </Button>

      <BasicModal show={show} onClose={onOpenClose} title="Nueva dirección">
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
};

export default AddAddress;
