const https = require('https');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { firstname, lastname, email, message } = JSON.parse(event.body);

  const payload = JSON.stringify({
    from: 'Contact Form <onboarding@resend.dev>',
    to: 'alabiabdulmumuni9@gmail.com',
    subject: `New message from ${firstname} ${lastname}`,
    html: `<p><strong>Name:</strong> ${firstname} ${lastname}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`
  });

  return new Promise((resolve) => {
    const req = https.request({
      hostname: 'api.resend.com',
      path: '/emails',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, (res) => {
      resolve({
        statusCode: res.statusCode === 200 || res.statusCode === 201 ? 200 : 500,
        body: res.statusCode === 200 || res.statusCode === 201
          ? 'Message sent successfully'
          : 'Failed to send message'
      });
    });
    req.on('error', () => resolve({ statusCode: 500, body: 'Server error' }));
    req.write(payload);
    req.end();
  });
};
