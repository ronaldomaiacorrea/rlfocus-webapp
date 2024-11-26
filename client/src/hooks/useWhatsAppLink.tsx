import { useMemo } from 'react'

/**
 * Hook to create a WhatsApp link with a custom number and message.
 * @param phoneNumber - WhatsApp number in international format (e.g., 5511998765432).
 * @param message - Custom message to send via WhatsApp.
 * @returns Full link to open in WhatsApp.
 */

export const useWhatsAppLink = () => {
  const phoneNumber = '5512991876712'
  const message =
    'Olá RLFocus, gostaria de mais informações sobre os seus serviços!'

  const whatsappLink = useMemo(() => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }, [phoneNumber, message])

  return whatsappLink
}
