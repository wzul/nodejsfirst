const { sign } = require('crypto');
const http = require('http');

const server = http.createServer((request, response) => {
  var Chip = require("Chip")["default"];
  Chip.ApiClient.instance.basePath = "https://gate.chip-in.asia/api/v1/";
  Chip.ApiClient.instance.token = "TOKEN";
  var chipp = new Chip.PaymentApi();

  if (request.method == 'POST') {
    console.log('POST')
    var body = '';    
    
    request.on('data', function(data) {
      body+=data;
      
      var signature = request.headers['x-signature'];

      console.log('ini signature: ' + signature);
      var publicKey = '-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEA1P+PnZyqguEJuxgGKEwY\nVvT3ERcDjfV5P+W/N4pN7dWZHLlunsB0kAy6PD7/K+QaOqWx3fezty+M/dMUDlMR\njYJo5OF0mnkR1YcRhTcHL4jf0QECB7eAYHXwguZlUWzvLQLRqN3bT6qsiOEJzxVE\nphuC8A5OnF1GlGQiHlALOAy9qUHB3uC4sJZUIqLPqilTOO+QePapFDgJHz8aY7D8\nFBQxTFfAG+r0pNNMRgdpT6VxZAxVPmtiD7VCpfvNo2/lvt0fDlxPM03EtNSvA6G4\nDt6+8QDhzDiIOI38b0+HkPCpXoVpgA10liTL3OjDfZuGcLOBKxA3NQPMp/oGj1SS\nNwlyJpDLjizQZSqaGx5hW7Qq65/iOpr2qllR1wIRGWO5OtpzQM7VSOLOYidJOFz6\nA3HItnadtAcz7Ek6o7Sva0kMIbYlqbWwLjAUWOSxW27dvk1KS5LJocUSbCeaa9T4\nAPjh5kJMX/RDrUMEGOMjJFc33RP6Hpsi7ORU9AcaS8TbAgMBAAE=\n-----END PUBLIC KEY-----\n';
      console.log('ini body: ' + body);

      var result = chipp.verify(data, Buffer.from(signature, 'base64'), publicKey);
      console.log('Verification: ' + result);
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

