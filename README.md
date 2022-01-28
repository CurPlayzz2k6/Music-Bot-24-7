# **Music Bot 24/7**

>## **Khởi tạo**
Để bot hoạt động vui lòng làm theo các bước sau:

**B1**: Tạo tài khoản tại **[Replit](replit.com)**

**B2**: Tạo project mới

**B3**: Tại shell, dán lệnh sau và khởi chạy:

```
npm init -y && npm i --save-dev node@16 && npm config set prefix=$(pwd)/node_modules/node && export PATH=$(pwd)/node_modules/node/bin:$PATH
```
**B4**: Tại console, dán lệnh sau và khởi chạy:

```
npm i
```
hoặc 
```
npm install
```
để tải toàn bộ thư viện cần thiết

**B5**: Cũng tại console, nhập lệnh sau để khởi chạy:
```
npm start
```
**⚠ Lưu ý:** Không sử dụng lệnh:
```
node index
```
**B6**: Copy link web mà Replit vừa tạo cho bạn và truy cập **[UptimeRobot](https://uptimerobot.com)** và tạo tài khoản

**B5**: Vào mục *Go To Dashboard*, chọn *Add New Monitor*:

Tại *Monitor Type*, chọn *HTTP(s)*

Tại *Friendly Name*, nhập tên bất kì

Tại *URL (or IP)*, dán link web bạn copy ở Replit

Nhấn *Create Monitor*

**B6:** TOKEN là một thứ rất quan trọng khi tạo bot Discord vì vậy tôi khuyên bạn nên để TOKEN trong phần Secret của Replit và truy cập đến TOKEN bằng process.env['TOKEN'] để bảo vệ TOKEN của bạn

>## **Thư viện liên quan**
**[@discordjs/opus](https://github.com/discordjs/opus)**: v0.5.3

**[@discordjs/voice](https://discordjs.github.io/voice/)**: v0.8.0

**[discord.js](https://discord.js.org/#/)**: v13.6.0

**[ffmpeg](https://www.npmjs.com/package/ffmpeg)**: v0.0.4

**[ffmpeg-static](https://www.npmjs.com/package/ffmpeg-static)**: v4.4.1

**[libsodium-wrappers](https://www.npmjs.com/package/libsodium-wrappers)**: v0.7.9

**[npm](https://www.npmjs.com/package/npm)**: v8.3.2

**[opusscript](https://github.com/abalabahaha/opusscript)**: v0.0.8

**[ytdl-core](https://github.com/fent/node-ytdl-core)**: v4.10.0

>## **Lệnh**
|      Lệnh       |                Thông tin                     |    Tham số    |
|:----------------|:--------------------------------------------:|--------------:|
|  **start24/7**  |        Bắt đầu phát 24/7 sau 30 phút         |   Không có    |
|  **stop24/7**   |        Dừng phát 24/7                        |   Không có    |
