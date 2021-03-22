import axios from "axios";

import { API_ENDPOINT } from "./constants";

axios.defaults.baseURL = API_ENDPOINT;

export { axios };