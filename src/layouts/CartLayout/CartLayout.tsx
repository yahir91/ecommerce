import { Container } from "semantic-ui-react";
import Footer from "../../components/Layout/Footer/Footer";
import { Separator } from "../../components/Shared/Separator/Separator";
import HeaderCart from "../../components/Layout/HeaderCart/HeaderCart";
const CartLayout = (props: any) => {
  const { children } = props;

  return (
    <>
      <HeaderCart />
      <Separator height={150} />
      <Container>{children}</Container>
      <Separator height={70} />
      <Footer />
    </>
  );
};

export default CartLayout;
