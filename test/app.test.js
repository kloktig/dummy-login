import {LoginClient} from "../src/loginClient.js";
import {parseJwt} from "../src/parseJwt.js";

const app = new LoginClient("https://localhost:7240")

const token = await app.login({username: "NDC_USER", password: "NDC_PASSWORD"});

if (!token)
    throw new Error("Token is not set")

const tokenContent = parseJwt(token, false)

console.log("tokenContent:\n");
console.log(tokenContent);
console.log("\nYes! It works");