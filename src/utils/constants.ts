export const ENV = {
    SERVER_HOST: process.env.NEXT_PUBLIC_SERVER,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    ENDPOINTS: {
      AUTH: {
        REGISTER: "auth/local/register",
        LOGIN: "auth/local",
      },
      USERS_ME: "users/me",
      USERS: "users",
      PLATFORM: "platforms",
      ADDRESS: "addresses",
      GAME: "games",
      WISHLIST: "wishlists",
      PAYMENY_ORDER: "payment-order",
      ORDER: "orders",
    },
    TOKEN: "token",
    CART: "cart",
    STRIPE_TOKEN:
      "pk_test_51McFNvGuOrnPfQra2CPEv40T6bwjvke3EmtZELp3685TKzCMDgagCauuO8nOVgL2sI4eiU0s830K3aZj31iOXtoV00zA9gPqMd",
  };