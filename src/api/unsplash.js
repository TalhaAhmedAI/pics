import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID dU7UFYzRmnu1I7RlbCFCc_CE366ja8Ywrxp_r6lf9DI",
  },
});
