interface WebhookData {
  email: string;
  archetype: string;
  archetypeTitle: string;
  isHybrid: boolean;
  answers: string[];
  completedAt: string;
  userAgent: string;
}

// Test function to check webhook configuration
export const testWebhookConnection = () => {
  const webhookUrl = import.meta.env.VITE_MAKECOM_WEBHOOK_URL;
  console.log('=== WEBHOOK DEBUG INFO ===');
  console.log('Environment variable:', webhookUrl);
  console.log('Is configured:', !webhookUrl?.includes('your-webhook-url-here'));
  console.log('URL starts with https:', webhookUrl?.startsWith('https://'));
  console.log('========================');
  return webhookUrl && !webhookUrl.includes('your-webhook-url-here');
};

export const sendToMakeCom = async (data: WebhookData): Promise<boolean> => {
  const webhookUrl = import.meta.env.VITE_MAKECOM_WEBHOOK_URL;
  
  // Debug logging
  console.log('Environment variable check:', {
    webhookUrl: webhookUrl,
    hasWebhookUrl: !!webhookUrl,
    isConfigured: !webhookUrl?.includes('your-webhook-url-here')
  });
  
  // Don't send if webhook URL is not configured
  if (!webhookUrl || webhookUrl.includes('your-webhook-url-here')) {
    console.log('Make.com webhook not configured, skipping...');
    return false;
  }

  try {
    console.log('Attempting to send webhook to:', webhookUrl);
    console.log('Webhook data:', data);
    
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    console.log('Webhook response status:', response.status);
    console.log('Webhook response ok:', response.ok);

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