"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Game } from "@/api/game";
import { useCart } from "@/hooks/useCart";
import CartLayout from "../../layouts/CartLayout/CartLayout";
// import { Cart } from "@/components/Cart";

const gameCtrl = new Game();
const CartPage = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || 1;
  const currentStep = Number(step);
  const [games, setGames] = useState(null);
  const { cart } = useCart();

  useEffect(() => {
    (async () => {
      try {
        const data: any = [];
        for await (const item of cart) {
          const response = await gameCtrl.getGameById(item.id);
          data.push({ ...response.data, quantity: item.quantity });
        }
        setGames(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [cart]);

  return (
    <>
      {/* <Seo title="Carrito" /> */}

      <CartLayout>
        {/* {currentStep === 1 && <Cart.StepOne games={games} />}
        {currentStep === 2 && <Cart.StepTwo games={games} />}
        {currentStep === 3 && <Cart.StepThree />} */}
      </CartLayout>
    </>
  );
};

export default CartPage;
