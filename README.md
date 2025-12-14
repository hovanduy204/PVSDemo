# Thu Phí PVS - Ứng dụng Quản lý Thanh toán Dịch vụ

Ứng dụng React Native Expo để quản lý thanh toán dịch vụ cho khu dân cư.

## Yêu cầu hệ thống

- Node.js: 18.20.8
- Expo SDK: 51
- npm hoặc yarn

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Chạy ứng dụng:
```bash
npm start
```

3. Quét QR code bằng Expo Go app trên điện thoại hoặc chạy trên emulator:
- Android: `npm run android`
- iOS: `npm run ios`
- Web: `npm run web`

## Cấu trúc dự án

```
APP/
├── App.jsx                 # Entry point với navigation
├── src/
│   └── screens/            # Các màn hình của ứng dụng
│       ├── LoginScreen.jsx
│       ├── HomeScreen.jsx
│       ├── PaymentScreen.jsx
│       ├── OnlinePaymentScreen.jsx
│       ├── TransactionHistoryScreen.jsx
│       ├── NotificationsScreen.jsx
│       ├── PersonalInfoScreen.jsx
│       ├── SupportScreen.jsx
│       ├── ReceiptScreen.jsx
│       └── PopulationManagementScreen.jsx
├── assets/                 # Hình ảnh và tài nguyên
├── package.json
├── app.json
└── babel.config.js
```

## Tính năng

- Đăng nhập (Demo mode)
- Trang chủ với thông tin thanh toán
- Thanh toán online (PayOS, MoMo, QR Code)
- Lịch sử giao dịch
- Thông báo
- Thông tin cá nhân
- Hỗ trợ
- Biên lai/Hóa đơn
- Quản lý nhân khẩu

## Ghi chú

- Ứng dụng đang ở chế độ demo, có thể đăng nhập với bất kỳ thông tin nào
- Tất cả dữ liệu hiện tại là dữ liệu mẫu

