
export function parseJwt (rawToken, isk6 = false) {
    const parts = rawToken.split(".");
    if (parts.length !== 3) {
        throw `Invalid Jwt: ${raw}`;
    }

    const headerdata = atob(parts[0]);
    const payloadData = atob(parts[1]);

    return{
        raw: rawToken,
        header: JSON.parse(headerdata),
        payload: JSON.parse(payloadData),
        signature: parts[2]
    }
}