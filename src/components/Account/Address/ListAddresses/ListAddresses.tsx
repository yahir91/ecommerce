import { useState, useEffect } from "react";
import { map } from "lodash";
import { Address as AddressCtrl } from "../../../../app/api/address";
import styles from "./ListAddresses.module.scss";
import Address from "./Address/Address";
import { useAuth } from "../../../../hooks/useAuth";

const addressCtrl = new AddressCtrl();
const ListAddresses = (props: any) => {
  const { reload, onReload } = props;
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [reload, user.id]);

  if (!addresses) return null;

  return (
    <div className={styles.addresses}>
      {map(addresses, (address: any) => (
        <Address
          key={address.id}
          addressId={address.id}
          address={address.attributes}
          onReload={onReload}
        />
      ))}
    </div>
  );
};

export default ListAddresses;
