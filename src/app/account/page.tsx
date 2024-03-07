"use client";

import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { useRouter } from "next/navigation";
import styles from "./account.module.scss";
import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import { useAuth } from "../../hooks/useAuth";
import Info from "../../components/Account/Info/Info";
import { Separator } from "../../components/Shared/Separator/Separator";
import { Settings } from "../../components/Account/Settings";
import { Address } from "../../components/Account/Address";

const Account = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [reload, setReload] = useState(false);

  if (!user) {
    router.push("/home");
    return null;
  }

  const onReload = () => setReload((prevState) => !prevState);

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          {/* <Orders /> */}
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          {/* <Wishlist /> */}
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          {/* <Address.ListAddresses reload={reload} onReload={onReload} /> */}
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Ajustes" },
      render: () => (
        <Tab.Pane attached={false} key={99}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
            <Settings.ChangePasswordForm />
          </div>
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];

  return (
    <>
      {/* <Seo title="Mi cuenta" /> */}

      <BasicLayout isContainer relative>
        <Info />

        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
      </BasicLayout>
    </>
  );
};

export default Account;
