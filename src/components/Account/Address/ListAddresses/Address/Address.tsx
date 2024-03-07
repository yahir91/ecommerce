import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { Address as AddressCtrl } from "../../../../../api/address";
import styles from "./Address.module.scss";
import { BasicModal } from "../../../../Shared/BasicModal/BasicModal";
import AddressForm from "../../AddressForm/AddressForm";
import { Confirm } from "../../../../Shared/Confirm/COnfirm";

const addressCtrl = new AddressCtrl();

const Address = (props: any) => {
  const { addressId, address, onReload } = props;
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const openCloseEdit = () => setShowEdit((prevState) => !prevState);
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  const onDelete = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}: </p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{" "}
            {address.postal_code}
          </p>
        </div>

        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil" />
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="delete" />
          </Button>
        </div>
      </div>

      <Confirm
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="¿Estas seguro de que quieres eliminar la dirección?"
      />

      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
        />
      </BasicModal>
    </>
  );
};

export default Address;
