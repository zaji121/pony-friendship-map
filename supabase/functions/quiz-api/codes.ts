const dbUrl=Deno.env.get('SUPABASE_URL')!;
const serviceKey=Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const secret=Deno.env.get('CODE_ENCRYPTION_KEY')||'';
export const encode=(bytes:Uint8Array)=>Array.from(bytes,b=>b.toString(16).padStart(2,'0')).join('');
const decode=(hex:string)=>new Uint8Array(hex.match(/../g)!.map(x=>parseInt(x,16)));
export const hashCode=async(value:string)=>encode(new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(value))));
let encryptionKey:Promise<CryptoKey>;
function key(){
 if(!/^[a-f0-9]{64}$/i.test(secret))throw new Error('密码管理尚未配置完成。');
 return encryptionKey||=crypto.subtle.importKey('raw',decode(secret),{name:'AES-GCM'},false,['encrypt','decrypt']);
}
export async function encrypt(value:string){const iv=crypto.getRandomValues(new Uint8Array(12));return encode(iv)+'.'+encode(new Uint8Array(await crypto.subtle.encrypt({name:'AES-GCM',iv},await key(),new TextEncoder().encode(value))));}
export async function decrypt(value:string){const [iv,body]=value.split('.');return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:decode(iv)},await key(),decode(body)));}
export async function db(route:string,method='GET',body?:unknown,prefer='return=representation'){
 const response=await fetch(dbUrl+'/rest/v1/'+route,{method,headers:{apikey:serviceKey,Authorization:'Bearer '+serviceKey,'Content-Type':'application/json',Prefer:prefer},body:body===undefined?undefined:JSON.stringify(body)});
 if(!response.ok)throw new Error('密码数据库暂时不可用。');
 return response.status===204?null:response.json();
}
