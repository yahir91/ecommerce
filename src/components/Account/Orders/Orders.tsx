import { useState, useEffect } from "react";
import { map } from "lodash";
import { Order as OrderCtrl } from "@/app/api/order";
import { useAuth } from "@/hooks/useAuth";
import Order from "./Order/Order";
import NoResult from "../../Shared/NoResult/NoResult";

const orderCtrl = new OrderCtrl();

const Orders = () => {
  const [orders, setOrders] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await orderCtrl.getAll(user.id);
        setOrders(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [user.id]);

  if (!orders) return <NoResult text="No tienes ningun producto comprado" />;

  return (
    <div>
      {map(orders, (order: any) => (
        <Order key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
