import { MessageCircle } from 'lucide-react';

const whatsappLink = 'https://wa.me/6281234567890';

export const WhatsAppFloatingButton = () => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BA5A] transition-all duration-300 hover:scale-110 z-40 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

