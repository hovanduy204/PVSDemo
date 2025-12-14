// Lấy số nhân khẩu từ populationData
import { populationInfo } from './populationData';

export const userInfo = {
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  phone: '0901234567',
  address: '123 Đường ABC, Phường XYZ, Quận 1, TP.HCM',
  householdCode: 'HH001234',
  idCard: '',
  username: 'abc',
};

// Tính toán phí dựa trên số nhân khẩu
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

const fees = calculateFees(populationInfo.total);

const formatCurrency = (amount) => {
  return amount.toLocaleString('vi-VN');
};

export const currentPayment = {
  period: '01/2025',
  totalAmount: formatCurrency(fees.total),
  currency: 'VNĐ',
  debt: formatCurrency(fees.total),
  fees: [
    { label: 'Phí dịch vụ', value: `${formatCurrency(fees.serviceFee)} VNĐ` },
    { label: 'Phí bảo trì', value: `${formatCurrency(fees.maintenanceFee)} VNĐ` },
    { label: 'VAT (10%)', value: `${formatCurrency(fees.vat)} VNĐ` },
  ],
  receiptNumber: 'BL202501001', // Mã biên lai
};

