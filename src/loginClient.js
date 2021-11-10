const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5EQyBVc2VyIiwiaWF0IjoxOTE2MjM5MDIyfQ.GnPSC9CVS79WH-dqkxOQbdnMCScTg9OG_0BUeXVp-GE";

export class LoginClient {
  login(loginData) {
    if(loginData['username'] === "NDC_USER" && loginData['password'] === "NDC_PASSWORD") {
      return {accessToken: accessToken};
    } else {
      throw new Error("HTTP 403 Exception")
    }
  }
}

