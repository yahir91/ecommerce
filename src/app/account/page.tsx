"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Tab } from "semantic-ui-react";
import { Address } from "../../components/Account/Address";
import Info from "../../components/Account/Info/Info";
import Orders from "../../components/Account/Orders/Orders";
import { Settings } from "../../components/Account/Settings";
import Wishlist from "../../components/Account/Wishlist/Wishlist";
import { Separator } from "../../components/Shared/Separator/Separator";
import { useAuth } from "../../hooks/useAuth";
import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";
import styles from "./account.module.scss";

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
      menuItem: "My Orders",
      render: () => (
        <Tab.Pane attached={false}>
          <Orders />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Wish List",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Addresses",
      render: () => (
        <Tab.Pane attached={false}>
          <Address.AddAddress onReload={onReload} />
          <Address.ListAddresses reload={reload} onReload={onReload} />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: { key: 20, icon: "settings", content: "Settings" },
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
    <BasicLayout isContainer relative>
      <Info />

      <Tab
        menu={{ secondary: true, pointing: true }}
        panes={panes}
        className={styles.tabs}
      />
    </BasicLayout>
  );
};

export default Account;
