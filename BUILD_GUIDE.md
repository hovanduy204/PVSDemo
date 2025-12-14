# Hướng dẫn Build APK cho Thu Phí PVS

## Yêu cầu

1. **Expo CLI** - Cài đặt global:
```bash
npm install -g expo-cli
```

2. **EAS CLI** (Expo Application Services) - Cài đặt global:
```bash
npm install -g eas-cli
```

3. **Tài khoản Expo** - Đăng ký miễn phí tại https://expo.dev

## Các bước Build APK

### Bước 1: Đăng nhập Expo

```bash
eas login
```

Nhập email và mật khẩu Expo của bạn.

### Bước 2: Khởi tạo EAS Build (lần đầu tiên)

```bash
eas build:configure
```

Chọn **Android** khi được hỏi.

### Bước 3: Cấu hình build

File `eas.json` sẽ được tạo tự động. Bạn có thể chỉnh sửa nếu cần:

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### Bước 4: Build APK

**Build APK cho testing (preview):**
```bash
eas build --platform android --profile preview
```

**Build APK cho production:**
```bash
eas build --platform android --profile production
```

### Bước 5: Tải APK

Sau khi build xong, bạn sẽ nhận được link để tải APK. Hoặc kiểm tra tại:
- https://expo.dev/accounts/[your-username]/builds

## Build APK Local (Không cần Expo)

Nếu muốn build local mà không cần Expo cloud:

### Cài đặt Android Studio

1. Tải và cài đặt Android Studio: https://developer.android.com/studio
2. Cài đặt Android SDK và các công cụ cần thiết

### Build với Expo

```bash
# Cài đặt dependencies
npm install

# Build APK local
npx expo build:android -t apk
```

**Lưu ý:** Expo build local đã bị deprecated, nên sử dụng EAS Build.

## Build APK với EAS Build Local

Nếu muốn build local với EAS:

```bash
# Cài đặt EAS Build local dependencies
eas build:configure

# Build local
eas build --platform android --profile preview --local
```

## Cấu hình bổ sung trong app.json

Đảm bảo `app.json` có đầy đủ thông tin:

```json
{
  "expo": {
    "name": "Thu Phí PVS",
    "slug": "thu-phi-pvs",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "splash": {
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "android": {
      "package": "com.thuphipvs.app",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    }
  }
}
```

## Lưu ý quan trọng

1. **Icon và Splash Screen**: Cần có file icon.png và splash.png trong thư mục `assets/`
2. **Package Name**: Đảm bảo package name là duy nhất (ví dụ: com.thuphipvs.app)
3. **Version Code**: Tăng versionCode mỗi lần build mới
4. **Keystore**: EAS sẽ tự động tạo và quản lý keystore cho bạn

## Troubleshooting

### Lỗi: "No credentials found"
```bash
eas credentials
```

### Lỗi: "Build failed"
- Kiểm tra log tại https://expo.dev
- Đảm bảo tất cả dependencies đã được cài đặt
- Kiểm tra app.json có đúng cấu hình không

### Lỗi: "Package name already exists"
- Đổi package name trong app.json
- Hoặc sử dụng package name của tài khoản Expo của bạn

## Tài liệu tham khảo

- Expo Build: https://docs.expo.dev/build/introduction/
- EAS Build: https://docs.expo.dev/build/introduction/
- Android Build: https://docs.expo.dev/build-reference/android-builds/

