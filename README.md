# 北市大暑假地球科學課程 (2026)

**課程網站 (GitHub Pages)：[https://oceanicdayi.github.io/Utaipei_2026_summer/](https://oceanicdayi.github.io/Utaipei_2026_summer/)**

北市大暑假地球科學課程 (2026) 教學與參考資料。

## 課程概述

- **主題**：地震學、地球物理與 AI/Agent 輔助教學實作
- **時間**：2026/7/17 起，每週四上午，共 6 週
- **對象**：中小學現職教師
- **課程精神**：教學生動，動手做，學習有用的技能，讓教師能帶回教室應用

## 課程網站

- **GitHub Pages**：[https://oceanicdayi.github.io/Utaipei_2026_summer/](https://oceanicdayi.github.io/Utaipei_2026_summer/)
- **來源檔案**：repo 根目錄的 [`index.html`](index.html)
- **自動部署**：[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

### 第一次啟用 (僅需 30 秒)

若 repo 尚未啟用 Pages，會顯示 *Site not found*。請依下列步驟完成一次設定：

1. 開啟：[Settings → Pages](https://github.com/oceanicdayi/Utaipei_2026_summer/settings/pages)
2. **Build and deployment → Source** 選 **GitHub Actions**
3. 回到 [Actions](https://github.com/oceanicdayi/Utaipei_2026_summer/actions) 執行 **Deploy GitHub Pages** (或 push 到 `main` 後自動觸發)
4. 約 1-2 分鐘後即可開啟：https://oceanicdayi.github.io/Utaipei_2026_summer/

(替代方案：Source 選 **Deploy from a branch** → Branch `main` → folder `/ (root)` → Save，同樣可上線。)

## 參考資料

| 檔案 | 說明 |
|---|---|
| [reference/course_plan.md](reference/course_plan.md) | 6 週課程計畫 |
| [reference/week01_handout.md](reference/week01_handout.md) | Week 1 開課講義 |
| [reference/week01_install_checklist.md](reference/week01_install_checklist.md) | Week 1 安裝與環境設定檢查清單 |
| [reference/course_registration_form_guide.md](reference/course_registration_form_guide.md) | 學員登記：Google 表單+試算表+自動寄信一條龍 |
| [reference/gas/CourseRegistration.gs](reference/gas/CourseRegistration.gs) | 一鍵整合表單/試算表/自動寄信的 Apps Script |

## 學員登記 (免費且快速)

1. 開啟 https://script.google.com → 新增專案。
2. 複製 `reference/gas/CourseRegistration.gs`。
3. 執行 `setupCourseRegistration` 並完成授權。
4. 從執行記錄取得表單網址，分享給學員填寫。

詳見 [學員資料登記表單設定指南](reference/course_registration_form_guide.md)。

## 6 週課程內容

### Week 1 (7/17) - 課程緣起、環境建置、工具介紹
- **主題**：課程緣起、環境建置、工具介紹
- **工具**：Google GWS、GitHub、Hugging Face、Vercel、GAS、opencode、Antigravity CLI、Hermes agent
- **作業 1**：完成個人地震學課程工具包
- **評分標準**：Google Drive、GitHub repo 連結、Google Form 測驗表單、Google Sheets 回應表單、GAS 測試成功截圖、環境建置檢查表、100-200 字個人課程期望

### Week 2 (7/24) - 地震儀、震測、震度與加速度
- **主題**：折射震測原理：探測校園底下的構造
- **工具**：手機感測器、折射震測儀、筆電或 USB 感測器、Google Sheets
- **作業 2**：完成簡易震測實作
- **評分標準**：至少有一張手機或感測器震測資料、一張 Google Sheets 圖表、一段教師教學片段、200 字教學心得

### Week 3 (7/31) - P-S 到時、旅行時間、震源定位
- **主題**：只靠幾張測站的地震波形，如何推算出地震發生在哪裡？
- **工具**：IRIS 震源定位活動、三張測站的 P 波 & S 波到時圖表、P-S 到時計算表、震源深度計算、GitHub 專案或 Google Sheets 連結
- **作業 3**：完成震源定位教案簡報
- **評分標準**：P/S 到時、P-S 到時計算、震源深度計算、三張定位圖、教案簡報、一段教師提問片段

### Week 4 (8/7) - 課程第 4 章精華與真實地震波形分析
- **主題**：地震學課程第 4 章精華 & 真實地震波形分析
- **工具**：Introduction to Earthquake Seismology 第 4 章、jAmaSeis、真實地震波形、教學投影片
- **作業 4**：完成第 4 章導讀與波形分析小報告
- **評分標準**：導讀、一張真實波形或教學圖表、標註 P 波、S 波或其他重要波相、一段 200 字心得

### Week 5 (8/14) - 規模、震度、場址效應與土壤液化
- **主題**：地震規模與震度有什麼不同？為什麼同一個地震，不同地點搖晃程度差很多？
- **工具**：IRIS Magnitude/Intensity、Buildings in Earthquakes、Vercel、GAS
- **作業 5**：完成地震防災互動網頁
- **評分標準**：網頁可開啟或可在教室開啟、一張規模 vs 震度比較圖、一段場址效應與土壤液化說明、一段教師教學片段

### Week 6 (8/21) - 野外實測、成果整合與課程展示
- **主題**：整合 5 週課程內容，完成野外實測或校園地震儀觀測
- **工具**：手機感測器、IRIS Teachable Moments、成果簡報或教案、數據工具、展示網頁
- **作業 6**：完成期末教案與成果展示
- **評分標準**：完整教案概念、教學活動設計、工具操作熟練、展示流暢、5-7 分鐘口頭報告

## 每週 4 小時流程

| 時間 | 活動 |
|---|---|
| 0:00-0:20 | 本週導入：台大地震案例導入 |
| 0:20-1:10 | 地震學/地球物理核心概念講解 |
| 1:10-2:00 | IRIS 真實資料操作 |
| 2:00-3:20 | 數據工具與教案實作 |
| 3:20-4:00 | 作業講解與小組分享 |

## 評分方式

| 項目 | 比例 | 說明 |
|---|---:|---|
| 每週可交作業 | 60% | 每週 10%，共 6 週 |
| 課堂參與與討論 | 20% | 包含小組討論、工具實作、教案分享 |
| 期末成果展示 | 20% | 第 6 週作業與展示 |

## 課程目標

這門課的目標不只是學地震學，而是讓中小學教師能夠：
- 了解地震學的基本概念
- 熟悉地震觀測工具和資料
- 學會使用 AI/Agent 工具輔助教學
- 設計實用的地震教案
- 將所學帶回教室應用

---

**授權**：本課程採用 Apache License 2.0，歡迎自由使用、修改和分享。
