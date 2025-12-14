export const notifications = [
  {
    id: '1',
    type: 'debt',
    title: 'Nhắc nợ thanh toán',
    message: 'Bạn có số tiền chưa thanh toán cho kỳ 01/2025. Vui lòng thanh toán trước ngày 15/01/2025.',
    time: '08:00, 05/01/2025',
    action: 'Email',
    unread: true,
  },
  {
    id: '2',
    type: 'success',
    title: 'Thanh toán thành công',
    message: 'Giao dịch ORD202501001 đã được thanh toán thành công. Số tiền: 2,500,000 VNĐ',
    time: '10:35, 05/01/2025',
    action: 'Zalo',
    unread: true,
  },
  {
    id: '3',
    type: 'debt',
    title: 'Nhắc nợ thanh toán',
    message: 'Bạn có số tiền chưa thanh toán cho kỳ 01/2025. Vui lòng thanh toán sớm.',
    time: '09:00, 03/01/2025',
    action: 'Email',
    unread: false,
  },
  {
    id: '4',
    type: 'success',
    title: 'Thanh toán thành công',
    message: 'Giao dịch ORD202501002 đã được thanh toán thành công. Số tiền: 2,500,000 VNĐ',
    time: '14:20, 03/01/2025',
    action: 'Email',
    unread: false,
  },
];

export const unreadCount = notifications.filter(n => n.unread).length;

