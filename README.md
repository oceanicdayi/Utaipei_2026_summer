# 北市大暑期地球科學課程（2026）

**主題：地震學、地球物理與 AI／Agent 輔助教學實作**  
**時間：2026/7/17 起，每週五上午，共 6 週，每次 4 小時**  
**對象：中小學現職教師**  
**課程精神：教學相長、動手做、學習有用技能與知識，啟發興趣與創造力**

> 這門課的目標不是只教地震學，而是讓教師親手把地震學、地球物理、真實資料、AI agent、雲端平台與互動教材整合起來，做出能帶回學校的地球科學教學作品。

---

## 課程網站

本 repo 提供 GitHub Pages 課程首頁：

- **Pages 網址**：`https://oceanicdayi.github.io/Utaipei_2026_summer/`
- 開啟方式：Repo → Settings → Pages → Source 選 `Deploy from a branch` → Branch 選 `main`（或本 PR 合併後的預設分支）→ `/ (root)` → Save

本地預覽：

```bash
# 用瀏覽器直接開啟
open index.html
# 或用簡易伺服器
python -m http.server 8080
```

---

## 課程定位

本課程以**地震學與地球物理學**為主軸，同時導入 AI／Agent 工具與雲端平台，協助中小學教師把地震學知識轉化為：

- 可帶回學校的教材與學習單
- 互動網頁與資料分析活動
- 教學專題與期末發表作品

暑期課程偏重教師研習、動手做與教學轉化；素材亦可作為開學後「地球物理學」課程的前導與素材庫。

---

## 核心目標

1. 建立地震學與地球物理學的基本理解
2. 學會使用真實地震資料做簡單分析與教學設計
3. 將地震學概念轉化成中小學可理解的活動
4. 熟悉 opencode、Antigravity CLI、Hermes agent、GitHub、Hugging Face、Vercel、Google GAS／GWS 等工具
5. 透過 Google GWS 與 GAS 建立教學自動化、資料收集與成果展示流程
6. 每週完成一個可檢核作業
7. 安排一次野外實驗或簡易地震儀觀測活動
8. 最後產出一份可帶回學校使用的地震教學作品

---

## 6 週課程總表

| 週次 | 日期 | 主題 | 可檢核作業 |
|---|---:|---|---|
| Week 1 | 7/17 | 課程介紹、帳號申請、軟體安裝、工作流程建立 | 作業 1：完成個人數位學習工作區 |
| Week 2 | 7/24 | 地震儀、加速度、地震動與震度 | 作業 2：完成簡易震動觀測活動 |
| Week 3 | 7/31 | P-S 到時差、旅行時間曲線與震央定位 | 作業 3：完成震央定位教學範例 |
| Week 4 | 8/7 | 課本第 4 章精讀與真實地震波形資料 | 作業 4：完成第 4 章導讀與波形分析小報告 |
| Week 5 | 8/14 | 規模、震度、場址效應與建物反應 | 作業 5：完成地震防災互動網頁初版 |
| Week 6 | 8/21 | 野外實驗、成果整合與教案發表 | 作業 6：完成期末教學作品與 5–7 分鐘發表 |

### 每週 4 小時固定流程

| 時間 | 活動 |
|---|---|
| 0:00–0:20 | 本週導入：台灣地震案例、新聞、課程目標 |
| 0:20–1:10 | 地震學／地球物理核心概念 |
| 1:10–2:00 | IRIS 案例、真實資料或教學活動操作 |
| 2:00–3:20 | 數位工具實作與教材製作 |
| 3:20–4:00 | 作業說明、小組分享、作品整理、下週任務 |

第一週調整為「介紹與安裝工作坊」，不進行正式 IRIS 活動實作。

---

## 評量方式

| 項目 | 比例 | 說明 |
|---|---:|---|
| 每週可檢核作業 | 60% | 每週 10%，共 6 週 |
| 課堂參與與討論 | 20% | 小組討論、工具實作、教學轉化 |
| 期末成果發表 | 20% | 第 6 週作品與發表 |

---

## Repo 結構

```text
Utaipei_2026_summer/
├── index.html                          # GitHub Pages 課程首頁
├── README.md                           # 本說明
├── LICENSE                             # Apache License 2.0
└── reference/
    ├── course_plan.md                  # 完整 6 週課程計畫
    ├── week01_handout.md               # Week 1 開課講義
    └── week01_install_checklist.md     # Week 1 安裝與帳號檢查表
```

---

## 參考資料（reference）

| 檔案 | 說明 |
|---|---|
| [`reference/course_plan.md`](reference/course_plan.md) | 6 週完整課程計畫、每週作業與檢核標準 |
| [`reference/week01_handout.md`](reference/week01_handout.md) | Week 1 開課流程、今日 5 件事、作業說明 |
| [`reference/week01_install_checklist.md`](reference/week01_install_checklist.md) | 帳號、軟體、AI agent、GAS、GitHub 檢查表 |

---

## 工具與平台

課程會陸續使用：

- **Google GWS／GAS**：Drive、Forms、Sheets、Apps Script
- **GitHub／GitHub Pages**：教材版本控制與網頁展示
- **Hugging Face**：資料集與 Demo
- **Vercel**：互動教材部署
- **opencode / Antigravity CLI / Hermes agent**：AI 輔助教材與程式產出
- **IRIS InClass／jAmaSeis**：地震學教學活動與波形觀測

---

## 學員建議 repo 結構

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

## License

本專案採用 [Apache License 2.0](LICENSE)。
