import { LoginClientK6 } from "../src/loginClientk6.js";
import { parseJwtK6 } from "../src/parseJwtk6.js";

const loginClient = new LoginClientK6("https://localhost:7240");

export const options = {
    iterations: 1,  // Number of iterations
    vus: 1,         // Number of virtual users to shard across
};

export default function () {
    const token = loginClient.login({username: "NDC_USER", password: "NDC_PASSWORD"});
    console.log(token);
    console.log(parseJwtK6(token));
}