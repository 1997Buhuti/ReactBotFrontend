import axios from "axios";
import { resolve } from "./reslove";

// export async function getal() {
//   return await resolve(
//     axios
//       .post("http://some-api.com/auth", { user, pass })
//       .then((res) => res.data)
//   );
// }

export async function getallKB() {
  return await resolve(
    axios.get(`http://localhost:5000/api/getallKB`).then((res) => res.data)
  );
}
