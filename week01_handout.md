# Week 1 開課用講義

**北市大暑期地球科學課程**  
**日期：2026/7/17**  
**主題：課程介紹、帳號申請、軟體安裝與工作流程建立**

---

## 一、本週課程目標

第一週的目標不是立刻進入完整地震學活動，而是協助每位教師完成後續 5 週課程會用到的基本準備。

完成本週後，學員應該具備：

1. 知道 6 週課程的整體目標。
2. 了解每週要完成的作業。
3. 建立個人課程資料夾。
4. 建立 GitHub 個人課程 repo。
5. 完成 Google Form、Sheets、GAS 的基本測試。
6. 安裝或確認主要軟體。
7. 建立 AI／Agent 工具的基本使用概念。
8. 寫下自己的地震教學學習目標。

---

## 二、本課程要做什麼？

這是一門結合 **地震學、地球物理、AI 工具與動手做教學設計** 的課程。

我們會學習：

- 地震儀如何記錄地面震動。
- 什麼是加速度、震度、規模。
- 如何用 P 波與 S 波定位震央。
- 如何閱讀真實地震波形。
- 如何把地震學概念變成中小學教學活動。
- 如何用 GitHub、Google GAS、Hugging Face、Vercel 等工具保存、展示與分享教材。
- 如何使用 opencode、Antigravity CLI、Hermes agent 等 AI／Agent 工具協助產出教材與程式。

---

## 三、6 週課程簡表

| 週次 | 主題 | 主要任務 | 作業 |
|---|---|---|---|
| Week 1 | 課程準備與工具安裝 | 建立數位工作區 | 作業 1：個人數位學習工作區 |
| Week 2 | 地震動與震度 | 觀測震動資料 | 作業 2：簡易震動觀測活動 |
| Week 3 | 震央定位 | P-S 到時差與三測站定位 | 作業 3：震央定位教學範例 |
| Week 4 | 第 4 章與波形 | 閱讀課本與分析波形 | 作業 4：導讀與波形分析小報告 |
| Week 5 | 規模、震度與場址效應 | 製作防災互動教材 | 作業 5：地震防災互動網頁 |
| Week 6 | 野外實驗與成果發表 | 整合期末教學作品 | 作業 6：期末教學作品 |

---

## 四、今日課程流程

| 時間 | 活動 |
|---|---|
| 0:00–0:20 | 課程介紹、學員自我介紹 |
| 0:20–0:50 | 6 週課程地圖與每週作業說明 |
| 0:50–1:30 | Google Drive、Google Form、Google Sheets 建立 |
| 1:30–2:10 | Google Apps Script 測試 |
| 2:10–2:50 | GitHub 帳號、repo、README.md 建立 |
| 2:50–3:20 | Hugging Face、Vercel 帳號導覽 |
| 3:20–3:45 | AI／Agent 工具介紹：opencode、Antigravity CLI、Hermes agent |
| 3:45–4:00 | 作業 1 說明、Q&A、下週準備 |

---

## 五、今日要完成的 5 件事

### 1. 建立 Google Drive 課程資料夾

資料夾命名建議：

```text
北市大暑期地球科學課程_姓名
```

資料夾內建立：

```text
week01_setup
week02_ground_shaking
week03_eq_location
week04_seismogram
week05_site_effect
week06_final_project
```

---

### 2. 建立 Google Form 測試表單

表單名稱：

```text
Week 1 課程回饋與學習目標
```

表單至少包含 5 題：

1. 姓名
2. 任教學校或任教領域
3. 我最想學的地震學主題
4. 我最想學的數位工具
5. 我想把哪個地震概念帶回學校教學生？

---

### 3. 連接 Google Sheets

將 Google Form 回應連接到 Google Sheets，確認至少有一筆測試回應。

---

### 4. 測試 Google Apps Script

在 Google Sheets 中開啟 Apps Script，貼上測試程式：

```javascript
function courseHello() {
  SpreadsheetApp.getActiveSpreadsheet().toast("北市大暑期地球科學課程：GAS 測試成功！");
}
```

執行後，若畫面出現提示訊息，即完成測試。

---

### 5. 建立 GitHub 個人 repo

repo 命名建議：

```text
earth-science-summer-2026-yourname
```

README.md 建議內容：

```markdown
# 北市大暑期地球科學課程

## 我的學習目標

我想學會如何把地震學與地球物理學概念，轉化成中小學可以理解與操作的教學活動。

## 每週成果

- Week 1：課程準備與工具安裝
- Week 2：簡易震動觀測活動
- Week 3：震央定位教學範例
- Week 4：波形分析小報告
- Week 5：地震防災互動網頁
- Week 6：期末教學作品
```

---

## 六、AI／Agent 工具在本課程中的角色

### opencode

opencode 可作為終端機、IDE 或桌面環境中的 AI coding agent，適合協助產生教材、程式、README、網頁與資料處理流程。

### Antigravity CLI

Antigravity 可作為 agent-first 的開發與教學工具，適合協助建立教材專案、處理多檔案任務、產生教學網站與程式原型。

### Hermes agent

Hermes agent 可用於資料整理、任務分解、課程成果彙整與輔助產出週報，適合作為教學行政與學習紀錄輔助工具。

---

## 七、本週作業：作業 1

### 作業名稱

**完成個人數位學習工作區**

### 繳交內容

請在下週上課前繳交：

1. Google Drive 個人課程資料夾截圖。
2. GitHub repo 連結。
3. GitHub README.md 截圖。
4. Google Form 測試表單連結。
5. Google Sheets 回應表截圖。
6. GAS 執行成功截圖。
7. Hugging Face 帳號截圖或連結。
8. Vercel 帳號截圖。
9. 軟體安裝檢查表。
10. 100–200 字個人學習目標。

### 個人學習目標範例

```text
我想學會如何用手機或簡易地震儀觀測震動，並把震度、加速度與地震防災概念轉化成國中學生可以操作的活動。
```

---

## 八、下週課前準備

下週會進入「地震儀、加速度、地震動與震度」。

請準備：

1. 手機一支。
2. 可記錄加速度的 App。
3. 筆電。
4. Google Sheets 可正常使用。
5. 完成 Week 1 作業。
