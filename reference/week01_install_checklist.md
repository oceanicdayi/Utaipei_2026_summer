# Week 1 安裝與帳號檢查表

**北市大暑期地球科學課程**  
**用途：確認學員是否具備後續 5 週實作所需環境**

---

## 一、帳號申請檢查

| 項目 | 用途 | 是否完成 | 備註 |
|---|---|---|---|
| Google 帳號 | Drive、Docs、Sheets、Forms、GAS | □ 完成 □ 未完成 |  |
| GitHub 帳號 | 保存教材、程式、網頁 | □ 完成 □ 未完成 |  |
| Hugging Face 帳號 | 保存資料集、Demo、Space | □ 完成 □ 未完成 |  |
| Vercel 帳號 | 發布互動教材網頁 | □ 完成 □ 未完成 |  |
| OpenAI／ChatGPT 帳號 | 輔助教材與文字產生 | □ 完成 □ 未完成 |  |
| Google Antigravity 可用帳號 | Antigravity CLI 或 Antigravity 平台 | □ 完成 □ 未完成 |  |
| Hermes／Nous 相關登入 | Hermes agent 使用 | □ 完成 □ 未完成 |  |

---

## 二、基本軟體安裝檢查

| 軟體 | 用途 | 檢查方式 | 是否完成 |
|---|---|---|---|
| Google Chrome | 瀏覽器、雲端工具 | 可開啟 Google Drive | □ 完成 □ 未完成 |
| Visual Studio Code | 編輯教材、程式、Markdown | 可開啟資料夾 | □ 完成 □ 未完成 |
| Git | 版本控制 | `git --version` | □ 完成 □ 未完成 |
| GitHub Desktop | 圖形化 Git 工具，選用 | 可登入 GitHub | □ 完成 □ 未完成 □ 不使用 |
| Python 或 Miniconda | 資料分析、圖表、震央定位 | `python --version` | □ 完成 □ 未完成 |
| Node.js | 網頁工具、Vercel、部分 CLI 工具 | `node --version` | □ 完成 □ 未完成 |
| Java | jAmaSeis 或部分教學軟體 | `java -version` | □ 完成 □ 未完成 |
| 手機加速度 App | Week 2 震動觀測 | 可輸出或查看加速度 | □ 完成 □ 未完成 |

---

## 三、opencode 安裝檢查

### macOS／Linux／WSL 建議檢查

```bash
curl -fsSL https://opencode.ai/install | bash
opencode --version
opencode
```

### Node.js 安裝方式，選用

```bash
npm install -g opencode-ai
opencode --version
```

### 檢查項目

| 項目 | 是否完成 |
|---|---|
| 可在終端機輸入 `opencode --version` | □ 完成 □ 未完成 |
| 可輸入 `opencode` 開啟 TUI | □ 完成 □ 未完成 |
| 可輸入 `opencode run "請用一句話介紹地震學"` | □ 完成 □ 未完成 |
| 已知道如何離開 opencode | □ 完成 □ 未完成 |

---

## 四、Antigravity CLI 安裝檢查

### 檢查方式

請依官方文件完成安裝後，檢查：

```bash
agy --version
agy
```

若課堂環境暫時無法安裝，至少完成：

| 項目 | 是否完成 |
|---|---|
| 已開啟官方 Antigravity 文件 | □ 完成 □ 未完成 |
| 已確認自己的作業系統可否安裝 | □ 完成 □ 未完成 |
| 已完成 Antigravity CLI 安裝 | □ 完成 □ 未完成 |
| 可輸入 `agy --version` | □ 完成 □ 未完成 |
| 可輸入 `agy` 開啟互動介面 | □ 完成 □ 未完成 |

---

## 五、Hermes agent 安裝檢查

### Linux／macOS／WSL2／Android Termux

```bash
curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash
hermes --version
```

### Windows PowerShell

```powershell
iex (irm https://hermes-agent.nousresearch.com/install.ps1)
hermes --version
```

### 檢查項目

| 項目 | 是否完成 |
|---|---|
| 已完成 Hermes Desktop 或 CLI 安裝 | □ 完成 □ 未完成 |
| 可輸入 `hermes --version` | □ 完成 □ 未完成 |
| 可開啟 Hermes | □ 完成 □ 未完成 |
| 已知道如何設定 provider 或登入 | □ 完成 □ 未完成 |
| 已測試一次簡單對話 | □ 完成 □ 未完成 |

---

## 六、Google GWS／GAS 檢查

| 項目 | 檢查方式 | 是否完成 |
|---|---|---|
| Google Drive | 已建立課程資料夾 | □ 完成 □ 未完成 |
| Google Form | 已建立 Week 1 測試表單 | □ 完成 □ 未完成 |
| Google Sheets | 表單回應已連接試算表 | □ 完成 □ 未完成 |
| Google Apps Script | 可執行 `courseHello()` | □ 完成 □ 未完成 |
| 截圖 | 已保存 GAS 成功截圖 | □ 完成 □ 未完成 |

測試程式：

```javascript
function courseHello() {
  SpreadsheetApp.getActiveSpreadsheet().toast("北市大暑期地球科學課程：GAS 測試成功！");
}
```

---

## 七、GitHub 課程 repo 檢查

| 項目 | 是否完成 |
|---|---|
| 已建立 GitHub 帳號 | □ 完成 □ 未完成 |
| 已建立個人課程 repo | □ 完成 □ 未完成 |
| repo 內有 README.md | □ 完成 □ 未完成 |
| README.md 有寫學習目標 | □ 完成 □ 未完成 |
| 已建立 week01 到 week06 資料夾 | □ 完成 □ 未完成 |
| 已知道如何上傳檔案 | □ 完成 □ 未完成 |

建議 repo 結構：

```text
earth-science-summer-2026-yourname/
├── week01_setup/
├── week02_ground_shaking/
├── week03_eq_location/
├── week04_seismogram/
├── week05_site_effect/
├── week06_final_project/
└── README.md
```

---

## 八、Week 1 作業繳交檢查

| 繳交項目 | 是否完成 |
|---|---|
| Google Drive 資料夾截圖 | □ 完成 □ 未完成 |
| GitHub repo 連結 | □ 完成 □ 未完成 |
| GitHub README.md 截圖 | □ 完成 □ 未完成 |
| Google Form 測試表單連結 | □ 完成 □ 未完成 |
| Google Sheets 回應表截圖 | □ 完成 □ 未完成 |
| GAS 測試成功截圖 | □ 完成 □ 未完成 |
| Hugging Face 帳號截圖或連結 | □ 完成 □ 未完成 |
| Vercel 帳號截圖 | □ 完成 □ 未完成 |
| 軟體安裝檢查表 | □ 完成 □ 未完成 |
| 100–200 字個人學習目標 | □ 完成 □ 未完成 |

---

## 九、最低完成標準

若學員第一週時間不足，至少完成以下 5 項即可進入 Week 2：

1. Google Drive 課程資料夾。
2. GitHub 帳號與 repo。
3. Google Form + Sheets。
4. GAS 測試成功。
5. Git、VS Code、Python 至少完成 2 項安裝。

---

## 十、進階完成標準

進階學員可額外完成：

1. opencode 可正常使用。
2. Antigravity CLI 可正常使用。
3. Hermes agent 可正常使用。
4. Vercel 可部署一個測試網頁。
5. Hugging Face 建立一個測試 Dataset 或 Space。
