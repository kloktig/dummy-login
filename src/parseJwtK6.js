import encoding from "k6/encoding";

export function parseJwtK6 (rawToken) {
    const parts = rawToken.split(".");
    if (parts.length !== 3) {
        throw `Invalid Jwt: ${raw}`;
    }

    let headerdata = encoding.b64decode(parts[0], "rawurl", "s");
    let payloaddata = encoding.b64decode(parts[1], "rawurl", "s");

    return{
        raw: rawToken,
        header: JSON.parse(headerdata),
        payload: JSON.parse(payloaddata),
        signature: parts[2]
    }
}