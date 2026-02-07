import { MessageCircle } from 'lucide-react';
import { getWhatsAppOrderLink } from '../appConfig';

interface WhatsAppOrderButtonProps {
  productName: string;
  price: number;
  variant?: 'default' | 'large';
  className?: string;
}

export default function WhatsAppOrderButton({
  productName,
  price,
  variant = 'default',
  className = '',
}: WhatsAppOrderButtonProps) {
  const handleOrder = () => {
    const link = getWhatsAppOrderLink(productName, price);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'large') {
    return (
      <button
        onClick={handleOrder}
        className={`w-full bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-md ${className}`}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Order via WhatsApp</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleOrder}
      className={`bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 font-medium py-2 px-4 rounded-md flex items-center gap-2 transition-colors text-sm ${className}`}
    >
      <MessageCircle className="w-4 h-4" />
      <span>Order</span>
    </button>
  );
}
