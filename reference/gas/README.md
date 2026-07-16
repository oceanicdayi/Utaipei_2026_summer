# Google Apps Script：學員登記與自動寄信

本目錄提供一鍵建立「Google 表單 + Google 試算表 + 表單提交後自動寄信」的程式。

## 檔案

| 檔案 | 說明 |
|---|---|
| `CourseRegistration.gs` | 主程式：建置表單／試算表、安裝觸發器、寄送歡迎信 |

完整操作步驟請見：

```text
../course_registration_form_guide.md
```

## 最快使用方式

1. 開啟 https://script.google.com → 新增專案。
2. 貼上 `CourseRegistration.gs` 全部內容並儲存。
3. 執行 `setupCourseRegistration`。
4. 完成 Google 授權。
5. 在「執行記錄」複製表單填寫網址，分享給同學。

## 主要函式

| 函式 | 用途 |
|---|---|
| `setupCourseRegistration` | 一鍵建立表單、試算表、觸發器 |
| `onCourseFormSubmit` | 表單提交時自動寄信（由觸發器呼叫） |
| `sendTestEmail` | 寄一封測試信到目前登入帳號 |
| `resendWelcomeEmailForRow` | 依「設定!A10」列號補寄 |

## 預設蒐集欄位

1. 姓名（必填）
2. 任職學校（必填）
3. Gmail 帳號（必填，需為 `@gmail.com`）
4. 任教領域或科目（選填）
5. 個人學習目標（選填）
