export const paymentMethods = [
  {
    id: '1',
    name: 'PayOS',
    icon: 'card',
    iconColor: '#FFC107',
  },
  {
    id: '2',
    name: 'MoMo',
    icon: 'phone-portrait',
    iconColor: '#000000',
  },
  {
    id: '3',
    name: 'QR Code',
    icon: 'qr-code',
    iconColor: '#2196F3',
  },
];

// Tạo mã đơn hàng ngẫu nhiên
const generateOrderId = () => {
  return `ORD${Date.now()}`;
};

export const paymentInfo = {
  householdCode: 'HH001234',
  orderId: generateOrderId(),
};

