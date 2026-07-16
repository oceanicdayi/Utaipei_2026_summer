/**
 * 北市大暑期地球科學課程｜學員報名表單一鍵建置
 *
 * 使用方式（擇一）：
 * 1. 開啟 https://script.google.com → 新增專案 → 貼上本檔 → 執行 setupCourseRegistration()
 * 2. 開啟任意 Google Sheet → 擴充功能 → Apps Script → 貼上本檔 → 執行 setupCourseRegistration()
 *
 * 首次執行會要求授權（表單、試算表、Gmail／寄信）。
 * 執行完成後，請查看「執行記錄」或試算表「設定」工作表中的表單／試算表網址。
 */

/** ===== 請依需要修改以下設定 ===== */
var COURSE_CONFIG = {
  formTitle: '北市大暑期地球科學課程｜學員資訊登記',
  formDescription:
    '請填寫以下資料，方便課程聯繫與資源發送。\n' +
    '填寫完成後，系統會自動寄送課程網頁與 GitHub 連結到您的 Gmail。',
  spreadsheetName: '北市大暑期地球科學課程｜學員資訊彙整',
  courseWebUrl: 'https://github.com/oceanicdayi/Utaipei_2026_summer',
  courseGithubUrl: 'https://github.com/oceanicdayi/Utaipei_2026_summer',
  emailSubject: '【北市大暑期地球科學課程】歡迎加入｜課程資源連結',
  senderName: '北市大暑期地球科學課程'
};

/**
 * 一鍵建立：Google 表單 + 回應試算表 + 自動寄信觸發條件
 * 請在 Apps Script 編輯器中選取此函式後按「執行」。
 */
function setupCourseRegistration() {
  var form = FormApp.create(COURSE_CONFIG.formTitle);
  form.setDescription(COURSE_CONFIG.formDescription);
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setConfirmationMessage(
    '感謝填寫！系統將把課程網頁與 GitHub 連結寄到您填寫的 Gmail。若未收到，請檢查垃圾郵件匣。'
  );

  form.addTextItem()
    .setTitle('姓名')
    .setHelpText('請填寫真實姓名')
    .setRequired(true);

  form.addTextItem()
    .setTitle('任職學校')
    .setHelpText('例如：臺北市○○國民中學')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Gmail 帳號')
    .setHelpText('請填寫可收信的 Gmail，系統會寄送課程資源到此信箱')
    .setRequired(true)
    .setValidation(
      FormApp.createTextValidation()
        .requireTextMatchesPattern('^[A-Za-z0-9._%+-]+@gmail\\.com$')
        .setHelpText('請輸入有效的 Gmail 帳號（必須以 @gmail.com 結尾）')
        .build()
    );

  form.addTextItem()
    .setTitle('任教領域或科目')
    .setHelpText('例如：自然、理化、地球科學（選填）')
    .setRequired(false);

  form.addParagraphTextItem()
    .setTitle('個人學習目標')
    .setHelpText('100–200 字即可（選填）')
    .setRequired(false);

  var spreadsheet = SpreadsheetApp.create(COURSE_CONFIG.spreadsheetName);
  form.setDestination(FormApp.DestinationType.SPREADSHEET, spreadsheet.getId());

  // 重新開啟試算表，寫入設定與說明
  spreadsheet = SpreadsheetApp.openById(spreadsheet.getId());
  var configSheet = spreadsheet.insertSheet('設定');
  configSheet.getRange('A1:B8').setValues([
    ['項目', '內容'],
    ['表單標題', COURSE_CONFIG.formTitle],
    ['表單編輯網址', form.getEditUrl()],
    ['表單填寫網址', form.getPublishedUrl()],
    ['試算表網址', spreadsheet.getUrl()],
    ['課程網頁網址', COURSE_CONFIG.courseWebUrl],
    ['課程 GitHub 網址', COURSE_CONFIG.courseGithubUrl],
    ['建立時間', new Date().toString()]
  ]);
  configSheet.setColumnWidth(1, 180);
  configSheet.setColumnWidth(2, 560);
  configSheet.getRange('A1:B1').setFontWeight('bold');

  var helpSheet = spreadsheet.insertSheet('使用說明');
  helpSheet.getRange('A1').setValue(
    [
      '使用說明',
      '',
      '1. 把「設定」工作表中的「表單填寫網址」分享給上課同學。',
      '2. 同學填寫後，回應會自動出現在「表單回應 1」工作表。',
      '3. 每次有新回應，Apps Script 會自動寄信給同學（含課程網頁與 GitHub 連結）。',
      '4. 若要改課程網址：修改本腳本 COURSE_CONFIG，再重新部署／儲存即可；',
      '   或直接改「設定」工作表 B6、B7（寄信時會優先讀取該處）。',
      '5. 手動補寄：選取函式 resendWelcomeEmailForRow，在執行前於「設定」A10 填入列號，或改用 sendTestEmail。',
      '',
      '注意：首次執行需完成 Google 授權；寄信額度受 Gmail／Workspace 限制。'
    ].join('\n')
  );
  helpSheet.setColumnWidth(1, 900);

  // 保存供觸發器與寄信使用
  PropertiesService.getScriptProperties().setProperties({
    FORM_ID: form.getId(),
    SPREADSHEET_ID: spreadsheet.getId(),
    COURSE_WEB_URL: COURSE_CONFIG.courseWebUrl,
    COURSE_GITHUB_URL: COURSE_CONFIG.courseGithubUrl,
    EMAIL_SUBJECT: COURSE_CONFIG.emailSubject,
    SENDER_NAME: COURSE_CONFIG.senderName
  });

  // 建立「表單提交後自動寄信」觸發器（掛在試算表上）
  _installFormSubmitTrigger_(spreadsheet.getId());

  // 把本專案綁定到試算表（方便之後從試算表開啟編輯）
  // 注意：若從 script.google.com 獨立專案執行，仍可用；觸發器已綁定 spreadsheet。

  Logger.log('===== 建置完成 =====');
  Logger.log('表單填寫網址：' + form.getPublishedUrl());
  Logger.log('表單編輯網址：' + form.getEditUrl());
  Logger.log('試算表網址：' + spreadsheet.getUrl());
  Logger.log('請把表單填寫網址分享給同學。');

  // 若從試算表開啟腳本，可跳出提示
  try {
    SpreadsheetApp.getUi().alert(
      '建置完成',
      '表單填寫網址：\n' + form.getPublishedUrl() + '\n\n試算表網址：\n' + spreadsheet.getUrl(),
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  } catch (e) {
    // 獨立專案沒有 UI，忽略即可
  }
}

/**
 * 表單提交觸發器：自動寄歡迎信
 * 觸發器會呼叫此函式，請勿改名（或同步改觸發器設定）。
 */
function onCourseFormSubmit(e) {
  if (!e || !e.values) {
    Logger.log('onCourseFormSubmit：沒有事件資料，略過。');
    return;
  }

  var named = e.namedValues || {};
  var name = _firstValue_(named, ['姓名', 'Name']) || '';
  var school = _firstValue_(named, ['任職學校', '學校']) || '';
  var email = _firstValue_(named, ['Gmail 帳號', 'Gmail', 'Email', '電子郵件']) || '';

  // 若 namedValues 取不到，退回依欄位順序（時間戳記, 姓名, 任職學校, Gmail...）
  if (!email && e.values && e.values.length >= 4) {
    name = name || e.values[1];
    school = school || e.values[2];
    email = e.values[3];
  }

  email = String(email || '').trim();
  if (!_isGmail_(email)) {
    Logger.log('無效或不支援的 Gmail：' + email);
    return;
  }

  var urls = _resolveCourseUrls_();
  _sendWelcomeEmail_(email, name, school, urls.web, urls.github);
  Logger.log('已寄送歡迎信至：' + email);
}

/**
 * 測試寄信：改下方 email 後執行
 */
function sendTestEmail() {
  var testEmail = Session.getActiveUser().getEmail();
  var urls = _resolveCourseUrls_();
  _sendWelcomeEmail_(
    testEmail,
    '測試學員',
    '測試學校',
    urls.web,
    urls.github
  );
  Logger.log('測試信已寄至：' + testEmail);
}

/**
 * 依試算表列號補寄（列號含表頭：第 2 列起為第一筆回應）
 * 用法：在「設定」工作表 A10 填入列號（例如 2），再執行本函式。
 */
function resendWelcomeEmailForRow() {
  var props = PropertiesService.getScriptProperties();
  var ssId = props.getProperty('SPREADSHEET_ID');
  if (!ssId) {
    throw new Error('找不到 SPREADSHEET_ID，請先執行 setupCourseRegistration()。');
  }

  var ss = SpreadsheetApp.openById(ssId);
  var configSheet = ss.getSheetByName('設定');
  var row = Number(configSheet.getRange('A10').getValue());
  if (!row || row < 2) {
    throw new Error('請在「設定」工作表 A10 填入要補寄的列號（>= 2）。');
  }

  var responseSheet = _findResponseSheet_(ss);
  var headers = responseSheet.getRange(1, 1, 1, responseSheet.getLastColumn()).getValues()[0];
  var rowValues = responseSheet.getRange(row, 1, 1, responseSheet.getLastColumn()).getValues()[0];

  var name = _valueByHeader_(headers, rowValues, ['姓名']);
  var school = _valueByHeader_(headers, rowValues, ['任職學校']);
  var email = _valueByHeader_(headers, rowValues, ['Gmail 帳號', 'Gmail']);

  if (!_isGmail_(email)) {
    throw new Error('第 ' + row + ' 列沒有有效的 Gmail：' + email);
  }

  var urls = _resolveCourseUrls_();
  _sendWelcomeEmail_(email, name, school, urls.web, urls.github);
  Logger.log('已補寄至第 ' + row + ' 列：' + email);
}

/** ===== 以下為內部函式 ===== */

function _installFormSubmitTrigger_(spreadsheetId) {
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'onCourseFormSubmit') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  ScriptApp.newTrigger('onCourseFormSubmit')
    .forSpreadsheet(spreadsheetId)
    .onFormSubmit()
    .create();
}

function _sendWelcomeEmail_(email, name, school, webUrl, githubUrl) {
  var props = PropertiesService.getScriptProperties();
  var subject = props.getProperty('EMAIL_SUBJECT') || COURSE_CONFIG.emailSubject;
  var senderName = props.getProperty('SENDER_NAME') || COURSE_CONFIG.senderName;
  var displayName = name ? String(name) : '老師';

  var body =
    displayName + ' 您好：\n\n' +
    '感謝您登記「北市大暑期地球科學課程」學員資訊' +
    (school ? '（任職學校：' + school + '）' : '') + '。\n\n' +
    '以下是本課程重要連結，請妥善保存：\n\n' +
    '1. 課程網頁：\n' + webUrl + '\n\n' +
    '2. 課程 GitHub：\n' + githubUrl + '\n\n' +
    '建議您先瀏覽 GitHub 的 reference 資料夾，內有課程計畫、Week 1 講義與安裝檢查表。\n\n' +
    '若有任何問題，請直接回信與授課教師聯繫。\n\n' +
    '祝上課愉快！\n' +
    senderName + '\n';

  var htmlBody =
    '<p>' + _escapeHtml_(displayName) + ' 您好：</p>' +
    '<p>感謝您登記「北市大暑期地球科學課程」學員資訊' +
    (school ? '（任職學校：' + _escapeHtml_(school) + '）' : '') + '。</p>' +
    '<p>以下是本課程重要連結，請妥善保存：</p>' +
    '<ol>' +
    '<li><strong>課程網頁</strong>：<a href="' + _escapeHtml_(webUrl) + '">' + _escapeHtml_(webUrl) + '</a></li>' +
    '<li><strong>課程 GitHub</strong>：<a href="' + _escapeHtml_(githubUrl) + '">' + _escapeHtml_(githubUrl) + '</a></li>' +
    '</ol>' +
    '<p>建議您先瀏覽 GitHub 的 <code>reference</code> 資料夾，內有課程計畫、Week 1 講義與安裝檢查表。</p>' +
    '<p>若有任何問題，請直接回信與授課教師聯繫。</p>' +
    '<p>祝上課愉快！<br>' + _escapeHtml_(senderName) + '</p>';

  GmailApp.sendEmail(email, subject, body, {
    name: senderName,
    htmlBody: htmlBody
  });
}

function _resolveCourseUrls_() {
  var props = PropertiesService.getScriptProperties();
  var web = COURSE_CONFIG.courseWebUrl;
  var github = COURSE_CONFIG.courseGithubUrl;

  try {
    var ssId = props.getProperty('SPREADSHEET_ID');
    if (ssId) {
      var ss = SpreadsheetApp.openById(ssId);
      var configSheet = ss.getSheetByName('設定');
      if (configSheet) {
        var webCell = String(configSheet.getRange('B6').getValue() || '').trim();
        var githubCell = String(configSheet.getRange('B7').getValue() || '').trim();
        if (webCell) web = webCell;
        if (githubCell) github = githubCell;
      }
    }
  } catch (err) {
    Logger.log('讀取設定工作表失敗，改用預設網址：' + err);
  }

  web = props.getProperty('COURSE_WEB_URL') && !web ? props.getProperty('COURSE_WEB_URL') : web;
  github = props.getProperty('COURSE_GITHUB_URL') && !github ? props.getProperty('COURSE_GITHUB_URL') : github;

  return { web: web, github: github };
}

function _findResponseSheet_(ss) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    var name = sheets[i].getName();
    if (name.indexOf('表單回應') !== -1 || name.indexOf('Form Responses') !== -1) {
      return sheets[i];
    }
  }
  // 後備：通常回應表是第一個工作表
  return sheets[0];
}

function _firstValue_(namedValues, keys) {
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (namedValues[key] && namedValues[key][0]) {
      return String(namedValues[key][0]).trim();
    }
  }
  return '';
}

function _valueByHeader_(headers, values, candidates) {
  for (var c = 0; c < candidates.length; c++) {
    for (var i = 0; i < headers.length; i++) {
      if (String(headers[i]).trim() === candidates[c]) {
        return String(values[i] || '').trim();
      }
    }
  }
  return '';
}

function _isGmail_(email) {
  return /^[A-Za-z0-9._%+-]+@gmail\.com$/i.test(String(email || '').trim());
}

function _escapeHtml_(text) {
  return String(text || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
