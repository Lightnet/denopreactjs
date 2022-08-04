
# Links:
- https://medium.com/deno-the-complete-reference/web-crypto-apis-in-deno-6ba9cb232503

```js
import { crypto } from "$std/crypto/mod.ts";

```

https://medium.com/deno-the-complete-reference/deno-nuggets-create-signature-115e981ce5b8


```ts
const rawKey = crypto.getRandomValues(new Uint8Array(16));
const key = await crypto.subtle.importKey(
  "raw",
  rawKey,
  { name: "HMAC", hash: "SHA-1" },
  false,
  ["sign"],
);
const toHexString = (bytes: Uint8Array) =>
  bytes.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "");
async function sign(data: any, key: CryptoKey): Promise<ArrayBuffer> {
  if (typeof data === "string") {
    data = new TextEncoder().encode(data);
  } else if (Array.isArray(data)) {
    data = Uint8Array.from(data);
  }
  return await crypto.subtle.sign("HMAC", key, data);
}
const input = "Text to sign with HMAC";
const signature = new Uint8Array(await sign(input, key));
console.log("Input:", input, ", Signature:", toHexString(signature));
```



https://morioh.com/p/dfed19e38157
```js
import * as bcrypt from 'https://deno.land/x/crypt@v0.1.0/bcrypt.ts';
```

https://www.woolha.com/tutorials/deno-hash-and-validate-password-with-bcrypt-examples#:~:text=If%20you%20use%20Deno%2C%20there,is%20used%20for%20password%20validation.






