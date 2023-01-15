const template =(request) => {
  return `
  <!DOCTYPE html>
  <html lang="en" dir="ltr">
  <link rel="stylesheet" href="http://cflare.de/static/css/application.css" />
  <head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />

  <title >CloudFlare Demo</title>

  </head>
  <body>
    <div class=title-container>
      <header id="header">
        <h1 align="center"> Geo Page</h1>
      </header>
    </div>
    </br>
    </br>
    <div class="title-container">
      <a>This is your ${request.headers.get('cf-connecting-ip')} 
        and you are accessing this site from ${request.cf.country} | ${request.cf.asn}
      </a>
    </div>
  </body>
  </html>
  `
}


export default template