import axios from "axios";
import https from "https";

export class LoginClient {
  constructor(host) {
    if (host.endsWith("/"))
      throw Error("Add host without '/' in the end");
    this.host = host;
  }

  async login(loginData) {
    const url = `${this.host}/auth/token`;

    let config = {
      headers: {
        "Content-Type":"application/json",
        "accept": "*/*"
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false
      })
    };
    const response = await axios.post(url, JSON.stringify(loginData), config);
    if (response.status !== 200)
      throw new Error(`Login failed with status ${response.status} - ${response.statusText}`);
    return response.data;
  }
}

