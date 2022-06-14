import axios from "axios";
import { resolve } from "./reslove";
import { config } from "../constance";
const BASEURL = config.url.API_URL;

export async function getallKB() {
  return await resolve(
    axios.get(`${BASEURL}/api/getallKB`).then((res) => res.data)
  );
}
