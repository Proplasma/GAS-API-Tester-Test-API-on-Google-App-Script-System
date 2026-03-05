/**
 * TẠO MENU
 */
function onOpen() {
  SpreadsheetApp.getUi().createMenu('🛠️ API Tools').addItem('Mở API Tester', 'openApiTester').addToUi();
}

/**
 * MỞ DIALOG (MODELLESS)
 */
function openApiTester() {
  const html = HtmlService.createTemplateFromFile('UI').evaluate()
      .setWidth(750).setHeight(700)
      .setTitle('Super API Tester Pro v1.2.1');
  SpreadsheetApp.getUi().showModelessDialog(html, ' ');
}

/**
 * QUẢN LÝ BIẾN MÔI TRƯỜNG & KEYS
 */
function getEnvVariables() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Env");
  if (!sheet) return {};
  const data = sheet.getDataRange().getValues();
  const env = {};
  data.forEach(row => { if (row[0]) env[row[0]] = row[1]; });
  return env;
}

function getStoredKeys() {
  const props = PropertiesService.getUserProperties();
  return { pId: props.getProperty('SHOPEE_PID') || '', pKey: props.getProperty('SHOPEE_PKEY') || '' };
}

function storeKeys(pId, pKey) {
  const props = PropertiesService.getUserProperties();
  props.setProperty('SHOPEE_PID', pId);
  props.setProperty('SHOPEE_PKEY', pKey);
  return "Đã lưu cấu hình!";
}

/**
 * HÀM THỰC THI API
 */
function executeApiRequest(req) {
  const startTime = Date.now();
  const resObj = { success: false, body: "", status: 0, time: 0, error: "" };
  try {
    const options = {
      method: req.method,
      headers: req.headers || {},
      payload: (req.method !== 'GET' && req.payload) ? req.payload : null,
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch(req.url, options);
    resObj.status = response.getResponseCode();
    resObj.success = (resObj.status >= 200 && resObj.status < 300);
    resObj.body = response.getContentText();
    resObj.time = Date.now() - startTime;
  } catch (e) {
    resObj.error = e.toString();
    resObj.status = "GAS_FETCH_ERROR";
  }
  return resObj;
}

/**
 * SHOPEE SIGNATURE
 */
function getShopeeAuth(pId, pKey, apiPath, shopId) {
  const timestamp = Math.floor(Date.now() / 1000);
  let baseString = pId + apiPath + timestamp;
  if (shopId) baseString += shopId;
  const signature = Utilities.computeHmacSignature(Utilities.MacAlgorithm.HMAC_SHA256, baseString, pKey)
    .map(e => ("0" + (e & 0xFF).toString(16)).slice(-2)).join("");
  return { sign: signature, timestamp: timestamp };
}


/**
 * MỞ CỬA SỔ XEM JSON CHI TIẾT
 */
function openJsonViewer() {
  const cell = SpreadsheetApp.getCurrentCell();
  const value = cell.getValue();
  
  // Kiểm tra xem ô có chứa nội dung không
  if (!value || typeof value !== 'string' || value.trim() === "") {
    SpreadsheetApp.getUi().alert("⚠️ Vui lòng chọn ô chứa dữ liệu JSON bạn muốn xem!");
    return;
  }

  // Tạo giao diện và truyền dữ liệu JSON vào thông qua đối tượng Template
  const template = HtmlService.createTemplateFromFile('JsonViewer');
  template.jsonData = value; // Gửi dữ liệu vào HTML

  const html = template.evaluate()
      .setWidth(700).setHeight(600)
      .setTitle('🔍 JSON Advanced Viewer');
  
  SpreadsheetApp.getUi().showModelessDialog(html, ' ');
}

// Cập nhật lại Menu onOpen để thêm nút mới
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🛠️ API Tools')
    .addItem('🚀 Mở API Tester', 'openApiTester')
    .addItem('🔍 Xem JSON chi tiết', 'openJsonViewer') // Nút mới ở đây
    .addToUi();
}


/**
 * LƯU LỊCH SỬ (ĐẢM BẢO ĐỦ CỘT PAYLOAD)
 */
function saveRequestToSheet(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName("History") || ss.insertSheet("History");
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(["Thời gian", "Method", "URL", "Status", "Payload", "Response", "Full_Headers"]);
    sheet.getRange("A1:G1").setFontWeight("bold").setBackground("#f3f3f3");
  }
  sheet.appendRow([
    new Date(), 
    data.method, 
    data.url, 
    data.status, 
    data.payload || "", 
    data.response || "", 
    JSON.stringify(data.headers || {})
  ]);
  return "Đã lưu thành công!";
}
