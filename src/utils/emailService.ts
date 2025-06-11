// Email service utility for handling mail list submissions
// This is a mock implementation that logs data to console
// In production, you would integrate with:
// - EmailJS
// - Formspree
// - Netlify Forms
// - Your own backend API

export interface EmailSubmission {
  email: string;
  consent: boolean;
  timestamp: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}

// Mock email service that simulates sending an email
export const submitToMailList = async (data: EmailSubmission): Promise<EmailResponse> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  try {
    // Log the submission data for debugging
    console.log('📧 Mail List Submission:', {
      recipient: 'kayn7325@gmail.com',
      subject: 'New Bind Launch Notification Signup',
      submissionData: data,
      emailContent: `
New signup for launch notification:

Email: ${data.email}
Timestamp: ${data.timestamp}
Consent: ${data.consent ? 'Yes' : 'No'}

This person wants to be notified when Bind goes live!
      `
    });

    // In a real implementation, you would:
    // 1. Validate the email format (additional validation)
    // 2. Send email to kayn7325@gmail.com
    // 3. Store the submission in a database
    // 4. Handle potential errors (network, API limits, etc.)

    // For now, we'll simulate a successful submission
    return {
      success: true,
      message: 'Successfully signed up for launch notifications!'
    };
  } catch (error) {
    console.error('Error submitting to mail list:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
};

// EmailJS integration example (uncomment when EmailJS is set up):
/*
import emailjs from '@emailjs/browser';

export const submitToMailListWithEmailJS = async (data: EmailSubmission): Promise<EmailResponse> => {
  try {
    const templateParams = {
      to_email: 'kayn7325@gmail.com',
      from_email: data.email,
      subject: 'New Bind Launch Notification Signup',
      message: `
New signup for launch notification:

Email: ${data.email}
Timestamp: ${data.timestamp}
Consent: ${data.consent ? 'Yes' : 'No'}

This person wants to be notified when Bind goes live!
      `
    };

    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      templateParams,
      'YOUR_PUBLIC_KEY'
    );

    return {
      success: true,
      message: 'Successfully signed up for launch notifications!'
    };
  } catch (error) {
    console.error('EmailJS error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
};
*/

// Formspree integration example (uncomment when Formspree is set up):
/*
export const submitToMailListWithFormspree = async (data: EmailSubmission): Promise<EmailResponse> => {
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        consent: data.consent,
        timestamp: data.timestamp,
        _subject: 'New Bind Launch Notification Signup',
        _replyto: data.email,
        message: `
New signup for launch notification:

Email: ${data.email}
Timestamp: ${data.timestamp}
Consent: ${data.consent ? 'Yes' : 'No'}

This person wants to be notified when Bind goes live!
        `
      }),
    });

    if (response.ok) {
      return {
        success: true,
        message: 'Successfully signed up for launch notifications!'
      };
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Formspree error:', error);
    return {
      success: false,
      message: 'Something went wrong. Please try again.'
    };
  }
};
*/ 