const http = require('http');

const server = http.createServer((request, response) => {
  var Chip = require("Chip")["default"];
  Chip.ApiClient.instance.basePath = "https://gate.chip-in.asia/api/v1/";
  Chip.ApiClient.instance.token = "TOKEN";
  var chipp = new Chip.PaymentApi();

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      // console.log('Partial body: ' + body)
    })
    
    request.on('data', function(data) {
      // var content = '{"id": "165ec67d-c39c-42be-b395-5a12d1d92db0", "due": 1667848092, "type": "purchase", "client": {"cc": [], "bcc": [], "city": "SG ARA", "email": "admin@wptest.wanzul-hosting.com", "phone": "0145356443", "country": "MY", "zip_code": "", "bank_code": "", "full_name": "Wan Zulkarnain", "brand_name": "", "legal_name": "", "tax_number": "", "client_type": null, "bank_account": "", "personal_code": "", "shipping_city": "", "street_address": "RB 7-4 PERSIARAN BAYAN 3 TAMAN TUNAS", "shipping_country": "", "shipping_zip_code": "", "registration_number": "", "shipping_street_address": ""}, "issued": "2022-11-07", "status": "paid", "is_test": true, "payment": {"amount": 1500, "paid_on": 1667794095, "currency": "MYR", "fee_amount": 0, "net_amount": 1350, "description": "", "is_outgoing": false, "payment_type": "purchase", "pending_amount": 150, "remote_paid_on": 1667794095, "owned_bank_code": null, "owned_bank_account": null, "pending_unfreeze_on": 1668053295, "owned_bank_account_id": null}, "product": "purchases", "user_id": null, "brand_id": "e0bb63e2-bf75-4606-8379-49d91459aa66", "order_id": null, "platform": "woocommerce", "purchase": {"debt": 0, "notes": "Product A", "total": 1500, "currency": "MYR", "language": "en", "products": [{"name": "Order #137 https://wptest.wanzul-hosting.com/wp2", "price": 1500, "category": "", "discount": 0, "quantity": "1.0000", "tax_percent": "0.00"}], "timezone": "UTC", "due_strict": true, "email_message": "", "total_override": null, "shipping_options": [], "subtotal_override": null, "total_tax_override": null, "payment_method_details": {}, "request_client_details": [], "total_discount_override": null}, "client_id": null, "reference": "137", "viewed_on": 1667794092, "company_id": "56d72c15-c42b-4214-877d-38b811f20392", "created_on": 1667794092, "event_type": "purchase.paid", "updated_on": 1667794095, "invoice_url": null, "checkout_url": "https://gate.chip-in.asia/p/165ec67d-c39c-42be-b395-5a12d1d92db0/invoice/", "send_receipt": false, "skip_capture": false, "creator_agent": "Chip Woocommerce module: v1.1.3", "issuer_details": {"website": "https://www.chip-in.asia/marketplace", "brand_name": "CHIP", "legal_city": "Kuala Lumpur", "legal_name": "CHIP IN SDN. BHD.", "tax_number": "", "bank_accounts": [{"bank_code": "MBB", "bank_account": "12345567890"}], "legal_country": "MY", "legal_zip_code": "58100", "registration_number": "1456611H", "legal_street_address": "7­2, Plaza Danau 2 Jalan 2/109F, Taman Danau Desa"}, "marked_as_paid": false, "status_history": [{"status": "created", "timestamp": 1667794092}, {"status": "viewed", "timestamp": 1667794092}, {"status": "paid", "timestamp": 1667794095}], "cancel_redirect": "https://wptest.wanzul-hosting.com/wp2/?wc-api=wc_gateway_chip&id=137&action=cancel", "created_from_ip": "103.72.163.165", "direct_post_url": null, "force_recurring": false, "recurring_token": null, "failure_redirect": "https://wptest.wanzul-hosting.com/wp2/?wc-api=wc_gateway_chip&id=137&action=cancel", "success_callback": "https://glacial-scrubland-13817.herokuapp.com/", "success_redirect": "https://wptest.wanzul-hosting.com/wp2/?wc-api=wc_gateway_chip&id=137&action=paid", "transaction_data": {"flow": "woocommerce", "extra": {}, "country": "", "attempts": [{"flow": "woocommerce", "type": "execute", "error": null, "extra": {}, "country": "", "client_ip": "", "fee_amount": 150, "successful": true, "payment_method": "fpx", "processing_time": 1667794095}], "payment_method": "fpx"}, "refundable_amount": 1500, "is_recurring_token": false, "billing_template_id": null, "currency_conversion": null, "reference_generated": "CH415", "refund_availability": "all", "payment_method_whitelist": null}';
      var content = body;
      // var signature = "pzCviIdypNxUGm+4Vr5GtT/TTqgvvRIQm8FC+Aod7DV5JutRKS7moOO5tzjH02/9P0/3VkGxgib4dfoV7MsmulxUUC9zxhphV7vtLRw/V5fOiWMmdzf0hUSl+8qrFoBD/rmna4FvB0WRdcS/N9zXFr5MRBZEjNg27DlEY+5GWbUYRdeCJn6sXBZJdSQTjOAI6qvTgU6uThk1OCqmIKX/eo8PdPmtFFsOOZtp4GvXriSqqyYjVETKzLgCVZgP+u6nVK0PztXFc0bpGOwZ97scuHPk9KDnvw55kNzlqLkgOurjFw/SQI+DxWjbyNZEex2Mf2u5Onxsk2whnVu4o7WqGHinwRuXKzBPPdy2/kU+NfPYW5agV+CJDoy/L9wZRI7jXxMV1cuTyxlvZ5Ak9QsPoPqdmrXdGTZk9zDFEJmQ6KY2C2TyDaSN/yH54WfryquQPIpLSeuZjO06knE70ighBzhFL+Nhl51gVOZ+AXIPRjc7WKahqF+3kOXcBQ/Zphfb";
      // var signature = request.headers['x-signature'];
      var signature = 'ffff'; // expect false
      var publicKey = '-----BEGIN PUBLIC KEY-----\nMIIBojANBgkqhkiG9w0BAQEFAAOCAY8AMIIBigKCAYEAxUI+CR2F5DeFtZdZAtek\nSWMOgh4ToH/oez8T1oCj2AIuRi7w+8Yq9WCnncfg4ZQ0MCyZi0yIMmrJigAfH6wf\no/npilTKmQMdvNAAZyvHZbj75iyQ4CpU34ujHSFjjEUGoxFLNxjAQ3ycreYErHQC\n5DbMGU+u1cKvyT3rFzn/Wq5ILs4/H0ZG/O1ZvI50pojQIYmivWKGr93D45QUUIT9\nsRFGY7dyIPgaNy7T0GLPrkLL+zkXtgQ3ipz6/hEU7Y3TJtdBawvE2/YIqHZFPXpx\nFejUkU6/8kAoBTIVdCU2EVsphuwzGiEKpvfdEut/ns2xXrGdRhRaVQ1wV8+Jm4O5\nyASogAB+BL4RqjkzqN6DpVkaD3KK09XxhSgYelNl3NBf8P69H8kjtZ1zhLyGCc4K\nu2H2spW8XrK7XkjITSC61R91OU5hDMem8n3VQASi2B5/Hqi0n3fnx7qRiNAPXDsU\nbWrqESwpLPBjXjREYwGY0/XY+mRvGGToJ8+HPBLRVFTtAgMBAAE=\n-----END PUBLIC KEY-----\n';
      var result = chipp.verify(content, Buffer.from(signature, 'base64'), publicKey);
        console.log(result);
        console.log('atas ni ada apa');

    })

    request.on('end', function() {
      // console.log('Body: ' + body)
      // console.log('Header: ' + JSON.stringify(request.headers));
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

