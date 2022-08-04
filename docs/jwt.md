 - https://www.loginradius.com/blog/engineering/jwt-authentication-with-deno/
 - https://medium.com/deno-the-complete-reference/using-jwt-json-web-token-in-deno-9d0c0346982f
 - 
 - 
 - 

```js
import { encode, decode } from "https://deno.land/std/encoding/base64url.ts";
import { HmacSha256 } from "https://deno.land/std/hash/sha256.ts";

export function createJWT(header, payload, secret){
  const bHdr=encode(new TextEncoder().encode(JSON.stringify(header)));
  const bPyld=encode(new TextEncoder().encode(JSON.stringify(payload)));
  const oTkn=`${bHdr}.${bPyld}`;
  return oTkn+'.'+(new HmacSha256(secret)).update(oTkn).toString();
}

export function verifyJWT(token, secret) {
  const parts=token.split('.');
  if(parts.length !== 3)
      return;
  const calcSign=(new HmacSha256(secret)).update(`${parts[0]}.${parts[1]}`).toString();
  if(calcSign !== parts[2])
      return;
  const pyld=JSON.parse(new TextDecoder().decode(decode(parts[1])));
  if(pyld.exp && Date.now()>pyld.exp)
      return;
  return pyld;
}

const hdr={alg:'HS256', typ: 'JWT'},
      data={exp: (Date.now()+100), a: 'b', c: 'd', e: 100},
      secret='ryweuftioovqiuhmhxwrunkfvsorniygwuiwrfamjhrycvuyikgjugbomnjupxucnskhjbuthxjabjsr';

const tkn=createJWT(hdr, data, secret);
console.log(tkn)

const vtkn = verifyJWT(tkn, secret);
console.log("vtkn")
console.log(vtkn)
console.log("////////vtkn")
```












