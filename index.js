const http = require('http');

const server = http.createServer((request, response) => {
  var Chip = require("Chip")["default"];
  Chip.ApiClient.instance.basePath = "https://gate.chip-in.asia/api/v1/";
  Chip.ApiClient.instance.token = "TOKEN";
  var chipp = new Chip.PaymentApi();

  if (request.method == 'POST') {
    console.log('POST')
    
    request.on('data', function(data) {
      var signature = request.headers['x-signature'];
      var publicKey = '-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAxUI+CR2F5DeFtZdZAtek\nSWMOgh4ToH/oez8T1oCj2AIuRi7w+8Yq9WCnncfg4ZQ0MCyZi0yIMmrJigAfH6wf\no/npilTKmQMdvNAAZyvHZbj75iyQ4CpU34ujHSFjjEUGoxFLNxjAQ3ycreYErHQC\n5DbMGU+u1cKvyT3rFzn/Wq5ILs4/H0ZG/O1ZvI50pojQIYmivWKGr93D45QUUIT9\nsRFGY7dyIPgaNy7T0GLPrkLL+zkXtgQ3ipz6/hEU7Y3TJtdBawvE2/YIqHZFPXpx\nFejUkU6/8kAoBTIVdCU2EVsphuwzGiEKpvfdEut/ns2xXrGdRhRaVQ1wV8+Jm4O5\nyASogAB+BL4RqjkzqN6DpVkaD3KK09XxhSgYelNl3NBf8P69H8kjtZ1zhLyGCc4K\nu2H2spW8XrK7XkjITSC61R91OU5hDMem8n3VQASi2B5/Hqi0n3fnx7qRiNAPXDsU\nbWrqESwpLPBjXjREYwGY0/XY+mRvGGToJ8+HPBLRVFTtAgMBAAE=\n-----END PUBLIC KEY-----\n';
      var result = chipp.verify(data, Buffer.from(signature, 'base64'), publicKey);
        console.log(result);
    })

    request.on('end', function() {
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } else {
    console.log('GET')
    var html = `
            <html>
                <body>
                    <form method="post" action="http://www.sendiri.com:4242">Name: 
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(html);
  }
});

server.listen(process.env.PORT || 4242, () => {
  console.log('Server is running...');
});

