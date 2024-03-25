import { ENV } from "@/utils/constants";
import { authFetch } from "../../utils/authFetch";

export class Order {
  async getAll(userId: any) {
    try {
      const filters = `filters[user][id][$eq]=${userId}`;
      const sort = "sort[0]=createdAt:desc";
      const urlParams = `${filters}&${sort}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ORDER}?${urlParams}`;

      const response: any = await authFetch(url, null);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
