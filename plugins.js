import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/ja";

import { API_ENDPOINT } from "./constants";

axios.defaults.baseURL = API_ENDPOINT;
dayjs.locale("ja");

export { axios,dayjs };