interface WebhookData {
  email: string;
  archetype: string;
  archetypeTitle: string;
  isHybrid: boolean;
  answers: string[];
  completedAt: string;
  userAgent: string;
}

export const sendToMakeCom = async (data: WebhookData): Promise<boolean> => {
  const webhookUrl = import.meta.env.VITE_MAKECOM_WEBHOOK_URL;
  
  // Don't send if webhook URL is not configured
  if (!webhookUrl || webhookUrl.includes('your-webhook-url-here')) {
    console.log('Make.com webhook not configured, skipping...');
    return false;
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    console.log('Successfully sent data to Make.com');
    return true;
  } catch (error) {
    console.error('Failed to send data to Make.com:', error);
    return false;
  }
};