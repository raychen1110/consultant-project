# ConsultFlow 顧問專案管理

可直接執行的顧問客戶、合約與續約追蹤 MVP。

## 啟動方式

在此資料夾執行：

```bash
python3 -m http.server 4173
```

瀏覽器開啟：

```text
http://localhost:4173
```

## 已完成

- 管理儀表板與關鍵數字
- 客戶管理、搜尋與篩選
- 合約管理、到期天數與狀態
- 續約機會看板與階段推進
- 任務建立、完成與逾期提醒
- 新增客戶、合約及任務
- 客戶與合約詳細資料側欄
- CSV 報表匯出
- 響應式手機版介面
- Supabase 雲端資料庫同步
- 瀏覽器本機備援資料

## 資料說明

正式資料儲存在 Supabase PostgreSQL，包含 `clients`、`contracts`、`tasks` 三張資料表。網站載入時會讀取雲端資料，新增及狀態更新也會直接同步到 Supabase；`localStorage` 僅作為暫時的離線備援。

網站使用 Supabase Auth 的 Email 魔法連結登入，資料庫 RLS 僅允許指定管理者帳號存取。目前授權管理者為 `raychen9@gmail.com`。
