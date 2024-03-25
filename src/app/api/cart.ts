import { forEach } from "lodash";
import { ENV } from "../../utils/constants";
import { authFetch } from "../../utils/authFetch";

export class Cart {
  add(gameId: any) {
    const games = this.getAll();
    const objIndex = games.findIndex((game: any) => game.id === gameId);

    if (objIndex < 0) {
      games.push({ id: gameId, quantity: 1 });
    } else {
      const game = games[objIndex];
      games[objIndex].quantity = game.quantity + 1;
    }

    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  getAll() {
    const response = localStorage.getItem(ENV.CART);

    if (!response) {
      return [];
    } else {
      return JSON.parse(response);
    }
  }

  count() {
    const response = this.getAll();
    let count = 0;

    forEach(response, (item) => {
      count += item.quantity;
    });

    return count;
  }

  changeQuantity(gameId: any, quantity: any) {
    const games = this.getAll();
    const objIndex = games.findIndex((game: any) => game.id === gameId);

    games[objIndex].quantity = quantity;

    localStorage.setItem(ENV.CART, JSON.stringify(games));
  }

  delete(gameId: any) {
    const games = this.getAll();
    const updateGames = games.filter((game: any) => game.id !== gameId);

    localStorage.setItem(ENV.CART, JSON.stringify(updateGames));
  }

  deleteAll() {
    localStorage.removeItem(ENV.CART);
  }

  async paymentCart(token: any, products: any, idUser: any, address: any) {
    try {
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PAYMENY_ORDER}`;
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          products,
          idUser,
          addressShipping: address,
        }),
      };

      const response = await authFetch(url, params);

      return response;
    } catch (error) {
      throw error;
    }
  }
}
