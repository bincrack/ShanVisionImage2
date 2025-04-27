export interface Env {
    // If you set another name in the Wrangler config file for the value for 'binding',
    // replace "DB" with the variable name you defined.
}
  
export default {
async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/beverages") {
        return Response.json('ok');
    }

    return new Response(
        "Call /api/beverages to see everyone who works at Bs Beverages",
    );
},
} satisfies ExportedHandler<Env>;