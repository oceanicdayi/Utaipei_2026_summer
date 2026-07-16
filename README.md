# 北市大暑期地球科學課程（2026）

**課程網站（GitHub Pages）：[https://oceanicdayi.github.io/Utaipei_2026_summer/](https://oceanicdayi.github.io/Utaipei_2026_summer/)**

北市大暑期地球科學課程（2026）教材與參考資料。

## 課程網站

- **GitHub Pages**：[https://oceanicdayi.github.io/Utaipei_2026_summer/](https://oceanicdayi.github.io/Utaipei_2026_summer/)
- 來源檔：repo 根目錄的 [`index.html`](index.html)
- 自動部署：[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml)

### 第一次啟用（必做，約 30 秒）

目前 repo 尚未開啟 Pages，因此網址會顯示 *Site not found*。請用 **repo 擁有者帳號**完成一次設定：

1. 開啟：[Settings → Pages](https://github.com/oceanicdayi/Utaipei_2026_summer/settings/pages)
2. **Build and deployment → Source** 選 **GitHub Actions**
3. 回到 [Actions](https://github.com/oceanicdayi/Utaipei_2026_summer/actions) 執行工作流程 **Deploy GitHub Pages**（或 push 到 `main` 後會自動跑）
4. 約 1–2 分鐘後開啟：https://oceanicdayi.github.io/Utaipei_2026_summer/

（替代方式：Source 選 **Deploy from a branch** → Branch `main` → folder `/ (root)` → Save，同樣可上線。）

## 參考資料

| 檔案 | 說明 |
|---|---|
| [reference/course_plan.md](reference/course_plan.md) | 6 週課程計畫 |
| [reference/week01_handout.md](reference/week01_handout.md) | Week 1 開課講義 |
| [reference/week01_install_checklist.md](reference/week01_install_checklist.md) | Week 1 安裝與帳號檢查表 |
| [reference/course_registration_form_guide.md](reference/course_registration_form_guide.md) | 學員登記：Google 表單＋試算表＋自動寄信步驟 |
| [reference/gas/CourseRegistration.gs](reference/gas/CourseRegistration.gs) | 一鍵建立表單／試算表／自動寄信的 Apps Script |

## 學員登記（最快路徑）

1. 開啟 https://script.google.com → 新增專案。
2. 貼上 `reference/gas/CourseRegistration.gs`。
3. 執行 `setupCourseRegistration` 並完成授權。
4. 從執行記錄取得表單填寫網址，分享給同學。

詳見 [學員資訊登記設定指南](reference/course_registration_form_guide.md)。
