import Head from "next/head";

const Seo = (props: any) => {
  const {
    title = "Gaming - Tus juegos favoritos",
    description = "Tus juegos favoritos para Steam, PlayStation, Xbox, Switch al mejor precio.",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
};

export default Seo;
