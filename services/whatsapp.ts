
import { WHATSAPP_NUMBER } from '../constants';

export const generateWhatsAppUrl = (name?: string, phone?: string, message?: string) => {
  // Normalize number for WhatsApp API: handle both international + format and local 0 format
  let cleanNumber = WHATSAPP_NUMBER.replace(/\+/g, '').replace(/\s/g, '').replace(/-/g, '');
  if (cleanNumber.startsWith('0')) {
    cleanNumber = '92' + cleanNumber.substring(1);
  }
  
  const baseUrl = `https://wa.me/${cleanNumber}`;
  let text = "Hello Dr. Talha Dental Clinic, ";
  
  if (name && phone) {
    text += `I would like to book an appointment. \n\nName: ${name}\nPhone: ${phone}\nMessage: ${message || 'I am interested in a dental consultation.'}`;
  } else {
    text += "I have a question regarding your dental services.";
  }
  
  return `${baseUrl}?text=${encodeURIComponent(text)}`;
};

export const openWhatsApp = (name?: string, phone?: string, message?: string) => {
  window.open(generateWhatsAppUrl(name, phone, message), '_blank');
};
