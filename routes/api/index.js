

export default function handle(req){

  return new Response("Hello, World!",{status:200,headers:{'Content-Type':'text/html'}});
}