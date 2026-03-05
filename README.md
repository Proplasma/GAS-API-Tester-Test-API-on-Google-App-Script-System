# GAS-API-Tester-Test-API-on-Google-App-Script-System
GAS-API-Tester-Test-API-on-Google-App-Script- GAS API Tester is a powerful tool built on Google Apps Script (GAS), turning Google Sheets into a professional API testing client similar to Postman or Chrome DevTools. It is specially optimized for bot developers and MMO practitioners who need to interact with complex API systems

//////////////English Below////////////////

<img width="2559" height="1599" alt="image" src="https://github.com/user-attachments/assets/8b5c6c79-5c4d-428c-a7c9-e8fb516fe43d" />



<img width="1489" height="1303" alt="image" src="https://github.com/user-attachments/assets/30546885-2562-4c8a-8d98-268cc8ee3241" />

GAS API Tester (Công cụ kiểm thử API trên nền tảng Google Apps Script)
Tổng quan
GAS API Tester là một giải pháp chuyên dụng được phát triển cho môi trường Google Apps Script (GAS), được thiết kế để biến Google Sheets thành một giao diện kiểm thử API tích hợp. Giải pháp này cung cấp quy trình làm việc tối ưu giúp các nhà phát triển kiểm thử, gỡ lỗi và lưu trữ nhật ký (log) các yêu cầu API trực tiếp trong hệ sinh thái của Google, loại bỏ việc phải triển khai lại dự án (redeploy) liên tục.

Công cụ này được tối ưu hóa đặc biệt để tương tác với các dịch vụ RESTful phức tạp, điển hình là các nền tảng thương mại điện tử (Shopee, Lazada), vốn đòi hỏi xử lý nâng cao về Cookie, Header và Chữ ký bảo mật (Signature).

Các tính năng kỹ thuật chính
Giao diện Modeless: Triển khai hộp thoại HTML dạng nổi, có thể di chuyển và thu nhỏ thực tế, cho phép tương tác song song với dữ liệu trên bảng tính.

Bộ phân tích cURL/Fetch tự động: Sử dụng logic Regex nâng cao để phân tích các chuỗi lệnh cURL, được tinh chỉnh đặc biệt để xử lý các ký tự thoát (escape characters) của Windows CMD và các chuỗi văn bản nhiều dòng.

Module xác thực bảo mật: Tích hợp bộ tạo chữ ký HMAC-SHA256 được thiết kế theo tiêu chuẩn yêu cầu của Shopee API.

Quản lý biến môi trường: Hệ thống thay thế biến động sử dụng trang tính "Env" chuyên dụng để quản lý tên miền (host), mã xác thực (token) và các thông tin định danh khác.

Phân tích phản hồi: Tích hợp trình xem JSON Pro Viewer hỗ trợ định dạng và thụt lề mã nguồn theo cú pháp.

Lưu trữ dữ liệu: Cơ chế ghi nhật ký tự động để lưu lại toàn bộ lịch sử yêu cầu/phản hồi, bao gồm trạng thái HTTP, thời gian thực thi và nội dung payload.

Các thành phần hệ thống
Dự án bao gồm bốn module cốt lõi:

Code.gs: Logic phía máy chủ để thực thi HTTP, quản lý thuộc tính (properties) và điều khiển hộp thoại.

UI.html: Giao diện phía người dùng được xây dựng trên nền tảng Bootstrap 5 và CSS tùy chỉnh để quản lý cửa sổ.

Parser.html: Logic phân tích chuyên biệt để chuyển đổi chuỗi cURL thành các đối tượng yêu cầu tương thích với GAS.

JsonViewer.html: Module độc lập để hiển thị dữ liệu JSON với độ chi tiết cao.

Hướng dẫn cài đặt và Triển khai
1. Khởi tạo dự án
Mở một bảng tính Google Sheets mới.

Truy cập trình chỉnh sửa kịch bản qua Tiện ích mở rộng > Apps Script.

2. Tích hợp mã nguồn
Tạo bốn tệp mới với tên chính xác như đã nêu trong phần Các thành phần hệ thống.

Sao chép mã nguồn tương ứng từ kho lưu trữ này vào từng tệp.

Lưu dự án.

3. Cấp quyền và Kích hoạt
Tải lại trang Google Sheets.

Một menu mới có tên API Tools sẽ xuất hiện.

Thực thi lệnh Mở API Tester và làm theo các bước xác thực của Google để cấp quyền urlfetch và spreadsheet.

Quy trình sử dụng
Thiết lập môi trường
Tạo một trang tính có tên Env. Định nghĩa các biến tại Cột A (ví dụ: api_key) và giá trị tương ứng tại Cột B. Tham chiếu các biến này trong giao diện người dùng bằng cú pháp {{tên_biến}}.

Thực thi API
Dán lệnh cURL vào mục Import cURL.

Kiểm tra các thông tin đã phân tích bao gồm Phương thức (Method), URL và Headers.

Nhấn Send Request để thực thi qua UrlFetchApp của Google.

Sử dụng tính năng Apply Sign cho các endpoint yêu cầu xác thực riêng biệt của Shopee nếu cần thiết.

Kiểm tra dữ liệu
Để kiểm tra các phản hồi JSON lớn được lưu trữ trong trang tính History, chọn ô dữ liệu và truy cập API Tools > Xem JSON chi tiết.

Lưu ý về bảo mật
Tất cả các yêu cầu API được thực thi từ máy chủ của Google.

Các thông tin nhạy cảm (Partner Keys) được lưu trữ an toàn trong UserProperties cá nhân, đảm bảo tính riêng tư cho từng người dùng.

Người dùng được khuyến cáo không cam kết (commit) các Cookie hoặc API Key thực tế khi đóng góp hoặc tạo bản sao (fork) kho lưu trữ này.

Tác giả
Dự án: GAS API Tester

Nền tảng: Google Apps Script / Google Sheets

Ngôn ngữ: JavaScript (ES6+), HTML5, CSS3


GAS API Tester (Test API on Google Apps Script)
Overview
GAS API Tester is a specialized tool developed for the Google Apps Script (GAS) environment, designed to transform Google Sheets into an integrated API testing interface. This solution provides a streamlined workflow for developers to test, debug, and log API requests directly within the Google ecosystem, eliminating the need for frequent project redeployments.

<img width="2559" height="1599" alt="image" src="https://github.com/user-attachments/assets/575cd7e1-cf64-446a-860e-2b1cc4cf4cc1" />

<img width="1489" height="1303" alt="image" src="https://github.com/user-attachments/assets/51449171-cc21-41ca-ab2e-9f8d2393a99f" />

The tool is particularly optimized for interacting with complex RESTful services, such as e-commerce platforms (Shopee, Lazada), which require advanced handling of Cookies, Headers, and Security Signatures.

Key Technical Features
Modeless Interface: Implements a floating, draggable, and truly minimizable HTML Dialog that allows simultaneous interaction with the spreadsheet data.

Automated cURL/Fetch Parser: Advanced regex-based logic to parse raw cURL commands, specifically refined to handle Windows CMD escape characters and multi-line strings.

Authentication Module: Built-in HMAC-SHA256 signature generator tailored for Shopee API requirements.

Environment Management: Dynamic variable replacement system using a dedicated "Env" sheet for managing hostnames, tokens, and credentials.

Response Analysis: Integrated JSON Pro Viewer for syntax-aware display and indentation of API responses.

Data Persistence: Automated logging mechanism to record full request/response history, including HTTP status, execution time, and payloads.

System Components
The project consists of four core modules:

Code.gs: Server-side logic for HTTP execution, property management, and dialog control.

UI.html: Client-side interface built with Bootstrap 5 and customized CSS for window management.

Parser.html: Specialized parsing logic for converting cURL strings into GAS-compatible request objects.

JsonViewer.html: Independent module for high-fidelity JSON data visualization.

Installation and Deployment
1. Project Initialization
Open a new Google Spreadsheet.

Access the script editor via Extensions > Apps Script.

2. Source Code Integration
Create four new files with the exact names listed in the System Components section.

Copy the respective source code from this repository into each file.

Save the project.

3. Permissions and Activation
Refresh the Google Spreadsheet.

A new menu titled API Tools will appear.

Execute Mở API Tester and follow the OAuth prompt to grant urlfetch and spreadsheet permissions.

Usage Guidelines
Environment Setup
Create a sheet named Env. Define variables in Column A (e.g., api_key) and their values in Column B. Reference these variables in the UI using the {{variable_name}} syntax.

API Execution
Paste a cURL command into the Import cURL prompt.

Verify the parsed Method, URL, and Headers.

Click Send Request to execute via Google's UrlFetchApp.

Optionally, use Apply Sign for Shopee-specific authenticated endpoints.

Data Inspection
To inspect large JSON responses stored in the History sheet, select the cell and navigate to API Tools > Xem JSON chi tiết.

Security Considerations
All API requests are executed from Google's servers.

Sensitive credentials (Partner Keys) are stored within UserProperties, ensuring they remain private to the individual user.

Users are advised not to commit actual Cookies or API Keys when contributing to or forking this repository.

Author
Project: GAS API Tester Nguyen Bang Do - Proplasma(s)

Platform: Google Apps Script / Google Sheets

Language: JavaScript (ES6+), HTML5, CSS3
