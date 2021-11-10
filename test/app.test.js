import {LoginClient} from "../src/loginClient.js";
import {parseJwt} from "../src/parseJwt.js";

const app = new LoginClient()

const tokenResponse = app.login({username: "NDC_USER", password: "NDC_PASSWORD"});

if (!tokenResponse)
    throw new Error("No response")
if (!tokenResponse.accessToken)
    throw new Error("Token is not set")

const tokenContent = parseJwt(tokenResponse.accessToken, false)

console.log(tokenContent);
console.log("Yes! It works");