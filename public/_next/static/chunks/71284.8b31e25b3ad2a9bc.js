"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71284],{71284:function(t,e,i){i.d(e,{uploadBatchNode:function(){return s}});var o=i(88615),a=i(99910);async function s(t,e,i,s){let l={};t.secretKey?l["x-secret-key"]=t.secretKey:t.clientId&&(l["x-client-id"]=t.clientId),"undefined"!=typeof globalThis&&"APP_BUNDLE_ID"in globalThis&&(l["x-bundle-id"]=globalThis.APP_BUNDLE_ID),"undefined"!=typeof globalThis&&"TW_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_AUTH_TOKEN&&(l.authorization=`Bearer ${globalThis.TW_AUTH_TOKEN}`),"undefined"!=typeof globalThis&&"TW_CLI_AUTH_TOKEN"in globalThis&&"string"==typeof globalThis.TW_CLI_AUTH_TOKEN&&(l.authorization=`Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`,l["x-authorize-wallet"]="true");let r=await (0,a.NX)(t)(`https://${(0,o.gc)().storage}/ipfs/upload`,{method:"POST",headers:{...l},body:e});if(!r.ok){if(r.body?.cancel(),401===r.status)throw Error("Unauthorized - You don't have permission to use this service.");throw Error(`Failed to upload files to IPFS - ${r.status} - ${r.statusText} - ${await r.text()}`)}let n=(await r.json()).IpfsHash;if(!n)throw Error("Failed to upload files to IPFS - Bad CID");return s?.uploadWithoutDirectory?[`ipfs://${n}`]:i.map(t=>`ipfs://${n}/${t}`)}}}]);