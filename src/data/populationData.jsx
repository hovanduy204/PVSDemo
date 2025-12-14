// Tính toán phí dựa trên số nhân khẩu (giống userData)
const calculateFees = (populationCount) => {
  const serviceFeePerPerson = 21000; // Phí dịch vụ: 21.000/1 người
  const maintenanceFee = 30000; // Phí bảo trì: 30.000
  const serviceFee = serviceFeePerPerson * populationCount;
  const subtotal = serviceFee + maintenanceFee;
  const vat = Math.round(subtotal * 0.1); // VAT 10%
  const total = subtotal + vat;

  return {
    serviceFee,
    maintenanceFee,
    vat,
    total,
  };
};

const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN');
};

// Tạo pricing tiers dựa trên công thức mới
export const pricingTiers = [
  { 
    range: '1 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: false,
    min: 1,
    max: 1,
  },
  { 
    range: '2 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: false,
    min: 2,
    max: 2,
  },
  { 
    range: '3-5 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: true,
    min: 3,
    max: 5,
  },
  { 
    range: '6-8 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: false,
    min: 6,
    max: 8,
  },
  { 
    range: '9-10 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: false,
    min: 9,
    max: 10,
  },
  { 
    range: 'Trên 10 người', 
    price: '21.000 VNĐ', 
    description: 'Phí dịch vụ / người', 
    current: false,
    min: 11,
    max: null,
  },
];

export const populationInfo = {
  total: 4,
  currentTier: pricingTiers.find(tier => tier.current) || pricingTiers[2],
  // Tính toán số tiền theo công thức mới
  get pricePerPerson() {
    return '21.000 VNĐ';
  },
  get totalAmount() {
    const fees = calculateFees(this.total);
    return `${formatCurrency(fees.total)} VNĐ`;
  },
  // Thêm thông tin chi tiết về phí
  get feesDetail() {
    return calculateFees(this.total);
  },
};

