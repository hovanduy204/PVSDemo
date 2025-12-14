import { populationInfo } from './populationData';

const calculateFees = (populationCount) => {
  const serviceFeePerPerson = 21000;
  const maintenanceFee = 30000;
  const serviceFee = serviceFeePerPerson * populationCount;
  const subtotal = serviceFee + maintenanceFee;
  const vat = Math.round(subtotal * 0.1);
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

const fees1 = calculateFees(4); // Giả sử 4 người cho receipt đầu tiên
const fees2 = calculateFees(4); // Giả sử 4 người cho receipt thứ hai

export const receipts = [
  {
    id: '1',
    receiptNumber: 'BL202501001',
    status: 'Đã thanh toán',
    period: '01/2025',
    amount: `${formatCurrency(fees1.total)} VNĐ`,
    fees: [
      { label: 'Phí dịch vụ', value: `${formatCurrency(fees1.serviceFee)} VNĐ` },
      { label: 'Phí bảo trì', value: `${formatCurrency(fees1.maintenanceFee)} VNĐ` },
      { label: 'VAT (10%)', value: `${formatCurrency(fees1.vat)} VNĐ` },
    ],
    orderId: 'ORD202501001',
    issueDate: '2025-01-05',
  },
  {
    id: '2',
    receiptNumber: 'BL202501002',
    status: 'Đã thanh toán',
    period: '01/2025',
    amount: `${formatCurrency(fees2.total)} VNĐ`,
    fees: [],
    orderId: '',
    issueDate: '',
  },
];

