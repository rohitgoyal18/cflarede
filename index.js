import template from './template'

let headers = new Headers();

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {

  if (request.cf.country === 'SG') {
    console.log(request.headers.get('cf-connecting-ip'));
    return new Response(template(request), {
      headers: { 'content-type': 'text/html' },
    })
  } else {
    return Response.redirect('https://1.1.1.1');
  }

}
