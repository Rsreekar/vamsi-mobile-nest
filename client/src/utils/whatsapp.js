export const WHATSAPP_NUMBER = "919948800033";
export const STORE_PHONE = "9948800022";
export const MAPS_URL = "https://maps.app.goo.gl/RQWmcFsjU8YZdo8RA?g_st=ac";
export const INSTAGRAM_URL = "https://instagram.com/mobilenest_mangalagiri";

/**
 * Direct WhatsApp Link
 */
export const getWhatsAppLink = (message) => {
  if (message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }
  return `https://wa.me/${WHATSAPP_NUMBER}`;
};

export const getProductWhatsAppLink = () => `https://wa.me/${WHATSAPP_NUMBER}`;
export const getServiceWhatsAppLink = () => `https://wa.me/${WHATSAPP_NUMBER}`;
export const getOldPhoneWhatsAppLink = () => `https://wa.me/${WHATSAPP_NUMBER}`;
