
export function parseJwt (rawToken, isk6 = false) {
    const parts = rawToken.split(".");
    if (parts.length !== 3) {
        throw `Invalid Jwt: ${raw}`;
    }
    
    let headerdata, payloaddata;

    if (isk6) {
        headerdata = encoding.b64decode(parts[0], "rawurl", "s");
        payloaddata = encoding.b64decode(parts[1], "rawurl", "s");
    } else{ 
        headerdata = atob(parts[0]);
        payloaddata = atob(parts[1]);
    }    

    return{
        raw: rawToken,
        header: JSON.parse(headerdata),
        payload: JSON.parse(payloaddata),
        signature: parts[2]
    }
}
