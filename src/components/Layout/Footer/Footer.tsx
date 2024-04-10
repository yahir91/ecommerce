import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <Image src="/images/logo.png" alt="Gaming" />
            </Link>
          </div>

          <div>
            <ul>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Privacy Policies</Link>
              <Link href="#">Contact</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>

          <div className={styles.social}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button as="a" href="#" circular color="linkedin" icon="linkedin" />
            <Button as="a" href="#" circular color="youtube" icon="youtube" />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright © 2023 Gaming - All rights reserved</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
