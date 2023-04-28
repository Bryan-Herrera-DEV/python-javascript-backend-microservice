import axios from 'axios';

async function sendWebhook(data: any): Promise<void> {
  const webhookUrl = 'https://webhook.site/38d9ab1d-522f-4c63-8fea-87b1746cebe1';
  await axios.post(webhookUrl, { exchangeValue: data });
}

export default sendWebhook;