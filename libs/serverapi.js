// https://deno.land/manual/runtime/web_platform_apis#web-platform-apis
// https://doc.deno.land/https://deno.land/std@0.150.0/node/crypto.ts
// https://deno.land/std@0.150.0/crypto
import { crypto } from "$std/crypto/mod.ts";
import { encode, decode } from "https://deno.land/std/encoding/base64url.ts";
import { HmacSha256 } from "https://deno.land/std/hash/sha256.ts";

export function createJWT(payload, secret, options){
  const header = {alg:'HS256', typ: 'JWT'};
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