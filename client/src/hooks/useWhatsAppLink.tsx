import { useMemo } from 'react'

/**
 * Hook para criar um link de WhatsApp com número e mensagem personalizados.
 * @param phoneNumber - Número do WhatsApp no formato internacional (ex.: 5511998765432).
 * @param message - Mensagem personalizada para enviar pelo WhatsApp.
 * @returns Link completo para abrir no WhatsApp.
 */
export const useWhatsAppLink = (phoneNumber: string, message: string) => {
  const whatsappLink = useMemo(() => {
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }, [phoneNumber, message])

  return whatsappLink
}
