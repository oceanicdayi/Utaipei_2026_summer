# 學員資訊登記：Google 表單＋試算表＋自動寄信設定指南

**北市大暑期地球科學課程**  
**用途：蒐集上課同學的姓名、任職學校、Gmail，並在填寫後自動寄送課程資源連結**

---

## 一、你會完成什麼？

完成後，流程如下：

```text
同學填寫 Google 表單
        ↓
資料自動寫入 Google 試算表
        ↓
Google Apps Script（試算表擴充功能）自動寄信
        ↓
同學收到含「課程網頁」與「課程 GitHub」的歡迎信
```

本指南提供兩種做法：

| 做法 | 適合對象 | 說明 |
|---|---|---|
| **做法 A：一鍵建置（建議）** | 想最快完成 | 執行現成 Apps Script，自動建立表單、試算表與寄信觸發器 |
| **做法 B：手動逐步建立** | 想理解每個步驟 | 用點選方式建立表單／試算表，再貼上寄信程式 |

相關程式檔案：

```text
reference/gas/CourseRegistration.gs
```

預設課程連結（可在腳本或試算表「設定」工作表修改）：

| 項目 | 網址 |
|---|---|
| 課程 GitHub | https://github.com/oceanicdayi/Utaipei_2026_summer |
| 課程網頁 | https://github.com/oceanicdayi/Utaipei_2026_summer |

若你之後有獨立課程網頁（例如 GitHub Pages 或 Vercel），只要改「設定」工作表的網址即可。

---

## 二、事前準備

1. 使用可登入的 Google 帳號（建議用授課教師帳號，例如課程負責人的 Gmail）。
2. 確認可以開啟：
   - [Google 表單](https://forms.google.com)
   - [Google 試算表](https://sheets.google.com)
   - [Apps Script](https://script.google.com)
3. 準備好要寄給同學的兩個網址：
   - 課程網頁網址
   - 課程 GitHub 網址

---

## 三、做法 A：一鍵建置（建議）

### 步驟 A1：開啟 Apps Script

1. 瀏覽器開啟：https://script.google.com
2. 點選「新增專案」。
3. 左上角專案名稱可改成：`北市大暑期地球科學課程_學員登記`

### 步驟 A2：貼上建置程式

1. 刪除編輯器中預設的空白 `myFunction` 內容。
2. 開啟本課程 repo 中的：

   ```text
   reference/gas/CourseRegistration.gs
   ```

3. 全選複製，貼到 Apps Script 編輯器。
4. （選用）若課程網頁網址不同，請修改檔案開頭的 `COURSE_CONFIG`：

   ```javascript
   courseWebUrl: 'https://你的課程網頁網址',
   courseGithubUrl: 'https://github.com/oceanicdayi/Utaipei_2026_summer',
   ```

5. 按「儲存」（磁碟圖示）。

### 步驟 A3：執行建置函式

1. 在函式下拉選單選擇：`setupCourseRegistration`
2. 按「執行」。
3. 第一次會要求授權：
   - 點「審查權限」
   - 選擇你的 Google 帳號
   - 若出現「Google 尚未驗證此應用程式」→ 點「進階」→「前往……（不安全）」
   - 勾選所需權限並允許  
     （需要：建立表單、試算表、寄送郵件）
4. 執行完成後，點「執行記錄」，會看到：
   - 表單填寫網址
   - 表單編輯網址
   - 試算表網址

### 步驟 A4：確認已建立的資源

到 Google Drive，應可看到兩個新檔案：

| 檔案名稱 | 用途 |
|---|---|
| 北市大暑期地球科學課程｜學員資訊登記 | Google 表單 |
| 北市大暑期地球科學課程｜學員資訊彙整 | Google 試算表 |

試算表內會有：

| 工作表 | 內容 |
|---|---|
| 表單回應 1 | 同學填寫資料（自動產生） |
| 設定 | 表單／試算表網址、課程連結 |
| 使用說明 | 操作提醒 |

### 步驟 A5：測試自動寄信

1. 開啟「表單填寫網址」，用自己的資料填一筆測試。
2. 確認試算表「表單回應 1」出現新列。
3. 到填寫的 Gmail 收件匣（或垃圾郵件）確認有收到歡迎信。
4. 也可在 Apps Script 執行 `sendTestEmail`，寄一封測試信到目前登入帳號。

### 步驟 A6：把表單分享給同學

1. 開啟表單 → 右上角「傳送」。
2. 複製連結，或產生 QR code。
3. 於課堂或通訊軟體分享給同學。

### 步驟 A7：重要提醒（請勿刪除腳本專案）

做法 A 建立的「自動寄信觸發器」掛在這個 Apps Script 專案上。

- **請保留** https://script.google.com 裡剛建立的專案，不要刪除。
- 若刪除該專案，表單與試算表仍在，但自動寄信會停止。
- 建議把專案加到星號，或把專案網址記在試算表「設定」旁的備註。

---

## 四、做法 B：手動逐步建立

若你想自己點選建立，可依下列步驟操作。

### 步驟 B1：建立 Google 表單

1. 開啟 https://forms.google.com
2. 點「空白表單」。
3. 標題設為：

   ```text
   北市大暑期地球科學課程｜學員資訊登記
   ```

4. 說明可填：

   ```text
   請填寫以下資料，方便課程聯繫與資源發送。
   填寫完成後，系統會自動寄送課程網頁與 GitHub 連結到您的 Gmail。
   ```

### 步驟 B2：新增題目

請依序新增以下題目：

| 順序 | 題目 | 題型 | 必填 | 備註 |
|---:|---|---|---|---|
| 1 | 姓名 | 簡答 | 是 |  |
| 2 | 任職學校 | 簡答 | 是 | 例如：臺北市○○國民中學 |
| 3 | Gmail 帳號 | 簡答 | 是 | 建議加上驗證：文字 → 符合規則運算式 → `^[A-Za-z0-9._%+-]+@gmail\.com$` |
| 4 | 任教領域或科目 | 簡答 | 否 | 選填 |
| 5 | 個人學習目標 | 段落 | 否 | 選填 |

設定提醒：

1. 右上角齒輪 → 可不勾「收集電子郵件地址」（因為我們已用題目蒐集 Gmail）。
2. 回應 → 確認訊息可設為：

   ```text
   感謝填寫！系統將把課程網頁與 GitHub 連結寄到您填寫的 Gmail。
   ```

### 步驟 B3：把回應連到 Google 試算表

1. 在表單編輯頁，點「回應」分頁。
2. 點綠色試算表圖示「連結至試算表」。
3. 選擇「建立新試算表」。
4. 名稱建議：

   ```text
   北市大暑期地球科學課程｜學員資訊彙整
   ```

5. 建立後，之後每筆表單回應都會自動寫入此試算表。

### 步驟 B4：在試算表安裝 Apps Script 自動寄信

1. 開啟剛建立的試算表。
2. 選單：`擴充功能` → `Apps Script`。
3. 貼上 `reference/gas/CourseRegistration.gs` 的完整內容。
4. 儲存專案。

> 注意：若你走「手動建立」路線，**不要再執行** `setupCourseRegistration()`（那會再新建一組表單／試算表）。  
> 請改做下面的「只安裝寄信觸發器」。

### 步驟 B5：只安裝寄信觸發器（手動路線專用）

在 Apps Script 新增並執行一次下列小函式（可暫貼在同一個專案）：

```javascript
function installTriggerOnThisSpreadsheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  // 寫入寄信用設定（請改成你的實際網址）
  PropertiesService.getScriptProperties().setProperties({
    SPREADSHEET_ID: ss.getId(),
    COURSE_WEB_URL: 'https://github.com/oceanicdayi/Utaipei_2026_summer',
    COURSE_GITHUB_URL: 'https://github.com/oceanicdayi/Utaipei_2026_summer',
    EMAIL_SUBJECT: '【北市大暑期地球科學課程】歡迎加入｜課程資源連結',
    SENDER_NAME: '北市大暑期地球科學課程'
  });

  // 清除舊的同名觸發器，避免重複寄信
  var triggers = ScriptApp.getProjectTriggers();
  for (var i = 0; i < triggers.length; i++) {
    if (triggers[i].getHandlerFunction() === 'onCourseFormSubmit') {
      ScriptApp.deleteTrigger(triggers[i]);
    }
  }

  ScriptApp.newTrigger('onCourseFormSubmit')
    .forSpreadsheet(ss)
    .onFormSubmit()
    .create();

  Logger.log('已在此試算表安裝表單提交後自動寄信觸發器。');
}
```

執行 `installTriggerOnThisSpreadsheet` 並完成授權。

也可改用手動方式：

1. Apps Script 左側「觸發條件」（鬧鐘圖示）。
2. 右下角「新增觸發條件」。
3. 設定：
   - 要執行的函式：`onCourseFormSubmit`
   - 事件來源：來自試算表
   - 事件類型：表單提交時
4. 儲存並授權。

### 步驟 B6：測試

1. 用表單填一筆測試資料（Gmail 填自己的）。
2. 確認試算表新增一列。
3. 確認 Gmail 收到歡迎信。

---

## 五、歡迎信內容說明

同學填完表單後，會收到類似以下內容的信件：

```text
○○ 您好：

感謝您登記「北市大暑期地球科學課程」學員資訊（任職學校：○○學校）。

以下是本課程重要連結，請妥善保存：

1. 課程網頁：
https://github.com/oceanicdayi/Utaipei_2026_summer

2. 課程 GitHub：
https://github.com/oceanicdayi/Utaipei_2026_summer

建議您先瀏覽 GitHub 的 reference 資料夾，內有課程計畫、Week 1 講義與安裝檢查表。

祝上課愉快！
北市大暑期地球科學課程
```

若要修改信件主旨或寄件者顯示名稱，請改 `COURSE_CONFIG` 中的：

- `emailSubject`
- `senderName`

---

## 六、常見操作

### 1. 修改課程網址（不需重做表單）

打開試算表 →「設定」工作表：

| 儲存格 | 項目 |
|---|---|
| B6 | 課程網頁網址 |
| B7 | 課程 GitHub 網址 |

之後新的自動寄信會改用新網址。

### 2. 補寄某一列同學的信

1. 在「設定」工作表 A10 填入列號（第 2 列起為第一筆回應）。
2. 在 Apps Script 執行 `resendWelcomeEmailForRow`。

### 3. 查看是否有觸發器

Apps Script → 左側「觸發條件」，應看到：

- 函式：`onCourseFormSubmit`
- 事件：表單提交時

### 4. 避免重複寄信

不要重複新增多個相同觸發器。做法 A 的 `setupCourseRegistration()` 與做法 B 的 `installTriggerOnThisSpreadsheet()` 都會先清除同名觸發器再重建。

---

## 七、課堂使用檢查表

| 項目 | 是否完成 |
|---|---|
| 已建立 Google 表單 | □ |
| 表單含姓名、任職學校、Gmail | □ |
| 已連結 Google 試算表 | □ |
| 已安裝 Apps Script 寄信程式 | □ |
| 已設定「表單提交時」觸發器 | □ |
| 已用自己的 Gmail 測試成功 | □ |
| 已把表單連結／QR code 分享給同學 | □ |
| 已確認課程網頁與 GitHub 網址正確 | □ |

---

## 八、疑難排解

| 狀況 | 可能原因 | 處理方式 |
|---|---|---|
| 執行時要求授權失敗 | 帳號權限或未點進階 | 改用個人／Workspace 有權限的帳號，並完成授權 |
| 有回應但沒寄信 | 觸發器未建立或未授權 | 檢查觸發條件；重新執行安裝函式 |
| 信進垃圾郵件 | Gmail 過濾 | 請同學檢查垃圾郵件，並將寄件者標為可信 |
| 顯示 Gmail 無效 | 同學填成非 gmail.com | 請改填 `@gmail.com`；學校信箱可另開欄位再調整驗證 |
| 重複收到多封信 | 觸發器重複 | 刪除多餘觸發器，只留一個 |
| 找不到表單／試算表 | 建在別的 Google 帳號 | 確認目前登入帳號與 Drive |

---

## 九、隱私與使用提醒

1. 學員姓名、學校、Gmail 屬於個人資料，試算表請勿公開分享。
2. 表單填寫連結可分享給同學；試算表建議僅授課教師可編輯。
3. 若要讓助教查看，請用「共用」指定帳號，勿設成「知道連結的任何人」。
4. Gmail 每日自動寄信有額度限制；一般研習人數通常足夠，大量寄送請改用 Google Workspace 或分批。

---

## 十、與 Week 1 作業的關係

本表單可直接用於課堂點名／學員登記，也可作為 Week 1「Google Form＋Sheets＋GAS」示範：

1. 學員看到教師示範：表單 → 試算表 → 自動寄信。
2. 學員再依 `week01_handout.md` 建立自己的測試表單。
3. 學員完成 `week01_install_checklist.md` 中的 GAS 檢查項。

---

## 十一、最快完成路徑（3 分鐘版）

1. 開啟 https://script.google.com → 新增專案。
2. 貼上 `reference/gas/CourseRegistration.gs`。
3. 執行 `setupCourseRegistration()` 並完成授權。
4. 從執行記錄複製「表單填寫網址」。
5. 自己填一筆測試，確認有收到信。
6. 把表單網址分享給同學。
