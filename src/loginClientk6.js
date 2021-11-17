import http from "k6/http";

export class LoginClientK6 {
  constructor(host) {
    this.host = host;
  }

  login(loginData) {
    const header = {
      "Content-Type": "application/json",
      "accept": "*/*"
    }
    const url = `${this.host}/auth/token`;
    return http.post(url, JSON.stringify(loginData), {headers: header}).body;
  }
}

