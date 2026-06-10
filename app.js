const DAY = 86400000;
const today = new Date();
today.setHours(0, 0, 0, 0);

const isoOffset = (days) => {
  const d = new Date(today.getTime() + days * DAY);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const date = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const seedData = {
  clients: [
    { id: 1, name: "晨光科技", industry: "SaaS 軟體", status: "服務中", consultant: "王怡文", contact: "林雅婷", email: "yating@morning.tw", phone: "02-2788-1200", expectations: "建立可複製的業務流程，提升跨部門合作效率。", painPoints: "業務資料分散、團隊缺少一致的成交方法。", lastInteraction: isoOffset(-3), nextFollowUp: isoOffset(2), health: "健康", color: "#315f93" },
    { id: 2, name: "森沐餐飲集團", industry: "連鎖餐飲", status: "服務中", consultant: "陳冠宇", contact: "張志明", email: "cm.chang@senmu.tw", phone: "02-2522-8810", expectations: "建立店長培育制度並降低人員流動率。", painPoints: "展店速度快，管理人才養成跟不上。", lastInteraction: isoOffset(-8), nextFollowUp: isoOffset(1), health: "注意", color: "#8b5e3c" },
    { id: 3, name: "遠見精密工業", industry: "製造業", status: "服務中", consultant: "王怡文", contact: "許家豪", email: "hao@vision-p.tw", phone: "04-2359-7700", expectations: "完成二代接班與中階主管能力升級。", painPoints: "決策集中、跨世代溝通成本高。", lastInteraction: isoOffset(-19), nextFollowUp: isoOffset(-2), health: "風險", color: "#4e7770" },
    { id: 4, name: "好日子設計", industry: "設計服務", status: "洽談中", consultant: "林書妍", contact: "周欣怡", email: "hsinyi@goodday.design", phone: "02-2391-2208", expectations: "改善專案獲利與定價策略。", painPoints: "專案時程常延誤，毛利無法準確掌握。", lastInteraction: isoOffset(-5), nextFollowUp: isoOffset(4), health: "健康", color: "#9a665e" },
    { id: 5, name: "新境教育基金會", industry: "非營利組織", status: "暫停", consultant: "陳冠宇", contact: "李佩珊", email: "peishan@newedu.org", phone: "02-2366-1001", expectations: "建立影響力評估架構。", painPoints: "成效資料格式不一，難以向贊助者說明成果。", lastInteraction: isoOffset(-42), nextFollowUp: isoOffset(7), health: "注意", color: "#71618f" }
  ],
  contracts: [
    { id: 101, clientId: 1, name: "成長策略與業務流程顧問", content: "每月策略會議、業務流程盤點、主管工作坊", topic: "營運成長、銷售流程", start: isoOffset(-300), end: isoOffset(25), amount: 480000, status: "即將到期", hours: 72, usedHours: 61, renewalStage: "提案中", probability: 75, renewalPlan: "續約一年，加入 AI 業務輔助導入專案。", nextAction: "確認第二版續約提案", nextActionDate: isoOffset(2), renewalOwner: "王怡文" },
    { id: 102, clientId: 2, name: "店長領導力培訓計畫", content: "店長訓練、區經理教練、人才盤點", topic: "人才發展、領導力", start: isoOffset(-270), end: isoOffset(48), amount: 620000, status: "即將到期", hours: 96, usedHours: 70, renewalStage: "需求確認", probability: 60, renewalPlan: "擴充至區經理梯隊與新店開幕輔導。", nextAction: "訪談營運長確認明年展店計畫", nextActionDate: isoOffset(1), renewalOwner: "陳冠宇" },
    { id: 103, clientId: 3, name: "接班與組織轉型專案", content: "接班人教練、高階共識營、治理制度設計", topic: "接班、組織轉型", start: isoOffset(-340), end: isoOffset(72), amount: 880000, status: "即將到期", hours: 110, usedHours: 84, renewalStage: "待接觸", probability: 40, renewalPlan: "視董事會共識，延伸至中階主管發展。", nextAction: "安排董事長回顧會議", nextActionDate: isoOffset(-2), renewalOwner: "王怡文" },
    { id: 104, clientId: 5, name: "影響力評估制度建置", content: "指標工作坊、資料表單與成果報告模板", topic: "影響力評估", start: isoOffset(-410), end: isoOffset(-15), amount: 360000, status: "已到期", hours: 60, usedHours: 60, renewalStage: "議價中", probability: 55, renewalPlan: "預算核定後啟動第二期資料儀表板。", nextAction: "追蹤董事會預算決議", nextActionDate: isoOffset(7), renewalOwner: "陳冠宇" },
    { id: 105, clientId: 4, name: "專案獲利改善診斷", content: "專案流程診斷與定價策略工作坊", topic: "專案管理、定價", start: isoOffset(-12), end: isoOffset(108), amount: 180000, status: "有效", hours: 24, usedHours: 3, renewalStage: "未評估", probability: 20, renewalPlan: "完成診斷後評估長期顧問合作。", nextAction: "完成專案資料收集", nextActionDate: isoOffset(4), renewalOwner: "林書妍" }
  ],
  tasks: [
    { id: 201, title: "確認晨光科技續約提案內容", clientId: 1, assignee: "王怡文", due: isoOffset(0), priority: "高", status: "待處理" },
    { id: 202, title: "森沐營運長需求訪談", clientId: 2, assignee: "陳冠宇", due: isoOffset(1), priority: "高", status: "進行中" },
    { id: 203, title: "整理遠見精密季度成果報告", clientId: 3, assignee: "王怡文", due: isoOffset(-2), priority: "中", status: "待處理" },
    { id: 204, title: "好日子設計專案資料盤點", clientId: 4, assignee: "林書妍", due: isoOffset(4), priority: "中", status: "進行中" },
    { id: 205, title: "追蹤新境基金會預算決議", clientId: 5, assignee: "陳冠宇", due: isoOffset(7), priority: "低", status: "待處理" },
    { id: 206, title: "更新六月顧問時數", clientId: 1, assignee: "王怡文", due: isoOffset(0), priority: "低", status: "已完成" }
  ]
};

const STORAGE_KEY = "consultFlowDataV2";
const stored = localStorage.getItem(STORAGE_KEY);
const state = stored ? JSON.parse(stored) : structuredClone(seedData);
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clientById = (id) => state.clients.find(c => c.id === Number(id));
const contractByClient = (id) => state.contracts.find(c => c.clientId === Number(id) && !["已到期", "已續約"].includes(c.status)) || state.contracts.find(c => c.clientId === Number(id));
const daysUntil = (date) => Math.ceil((new Date(`${date}T00:00:00`) - today) / DAY);
const money = (value) => new Intl.NumberFormat("zh-TW", { style: "currency", currency: "TWD", maximumFractionDigits: 0 }).format(value);
const shortMoney = (value) => value >= 10000 ? `$${Math.round(value / 10000)}萬` : `$${value.toLocaleString()}`;
const dateText = (date) => new Intl.DateTimeFormat("zh-TW", { year: "numeric", month: "short", day: "numeric" }).format(new Date(`${date}T00:00:00`));
const badgeClass = (status) => {
  if (["服務中", "有效", "健康", "已完成", "成功"].includes(status)) return "green";
  if (["即將到期", "注意", "進行中", "提案中", "需求確認"].includes(status)) return "amber";
  if (["已到期", "風險", "失敗", "待處理"].includes(status)) return "red";
  if (["洽談中", "議價中"].includes(status)) return "blue";
  return "gray";
};
const showToast = (message) => {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
};

function renderAll() {
  renderDashboard();
  renderClients();
  renderContracts();
  renderRenewals();
  renderTasks();
  $("#clientCount").textContent = state.clients.length;
  $("#renewalCount").textContent = state.contracts.filter(c => !["成功", "失敗", "未評估"].includes(c.renewalStage)).length;
  save();
}

function renderDashboard() {
  $("#todayLabel").textContent = new Intl.DateTimeFormat("zh-TW", { month: "long", day: "numeric", weekday: "long" }).format(today);
  const expiring = state.contracts.filter(c => {
    const days = daysUntil(c.end);
    return days >= 0 && days <= 90;
  });
  const overdue = state.tasks.filter(t => t.status !== "已完成" && daysUntil(t.due) < 0);
  const activeAmount = state.contracts.filter(c => ["有效", "即將到期"].includes(c.status)).reduce((sum, c) => sum + c.amount, 0);
  const forecast = state.contracts.reduce((sum, c) => sum + c.amount * c.probability / 100, 0);
  const metrics = [
    { label: "服務中客戶", value: state.clients.filter(c => c.status === "服務中").length, sub: `<b>+1</b> 本月新增`, icon: "◫", bg: "#e6f3ed", color: "#185c45" },
    { label: "90 天內到期", value: expiring.length, sub: `<b>${expiring.filter(c => daysUntil(c.end) <= 30).length} 份</b> 需優先處理`, icon: "◷", bg: "#fff3e3", color: "#d88731" },
    { label: "有效合約總額", value: shortMoney(activeAmount), sub: `共 ${state.contracts.filter(c => ["有效", "即將到期"].includes(c.status)).length} 份有效合約`, icon: "$", bg: "#eaf1f7", color: "#4b6f91" },
    { label: "逾期任務", value: overdue.length, sub: overdue.length ? `<b>請儘快處理</b>` : "目前沒有逾期", icon: "!", bg: "#fdecec", color: "#c95151" }
  ];
  $("#metricGrid").innerHTML = metrics.map(m => `
    <article class="metric-card" style="--metric-bg:${m.bg};--metric-color:${m.color}">
      <div class="metric-top"><span>${m.label}</span><span class="metric-icon">${m.icon}</span></div>
      <strong>${m.value}</strong><small>${m.sub}</small>
    </article>`).join("");

  $("#expiringTable").innerHTML = expiring.sort((a,b) => new Date(a.end) - new Date(b.end)).slice(0, 4).map(c => {
    const client = clientById(c.clientId);
    const days = daysUntil(c.end);
    return `<tr>
      <td><div class="client-cell"><span class="client-logo" style="--logo:${client.color}">${client.name[0]}</span><div><strong>${client.name}</strong><span>${client.industry}</span></div></div></td>
      <td>${c.name}</td><td>${client.consultant}</td><td>${dateText(c.end)}</td>
      <td><span class="badge ${days <= 30 ? "red" : "amber"}">${days} 天後到期</span></td>
      <td><button class="row-action" data-contract-detail="${c.id}">›</button></td>
    </tr>`;
  }).join("") || `<tr><td colspan="6" class="empty-state">目前沒有即將到期合約</td></tr>`;

  const todayTasks = state.tasks.filter(t => t.status !== "已完成" && daysUntil(t.due) <= 1).sort((a,b) => new Date(a.due) - new Date(b.due));
  $("#todayTaskCount").textContent = todayTasks.length;
  $("#todayTasks").innerHTML = todayTasks.slice(0, 4).map(t => {
    const client = clientById(t.clientId);
    return `<div class="task-item">
      <button class="task-check" data-complete-task="${t.id}" aria-label="完成任務"></button>
      <div><strong>${t.title}</strong><small>${client.name} · ${daysUntil(t.due) < 0 ? "已逾期 " + Math.abs(daysUntil(t.due)) + " 天" : daysUntil(t.due) === 0 ? "今天到期" : "明天到期"}</small></div>
      <span class="priority ${t.priority}">${t.priority}</span>
    </div>`;
  }).join("") || `<div class="empty-state">今天沒有待辦任務</div>`;

  const stages = ["待接觸", "需求確認", "提案中", "議價中"];
  const colors = ["#9ebaae", "#70a18c", "#407b64", "#185c45"];
  const stageTotals = stages.map(stage => ({
    stage,
    amount: state.contracts.filter(c => c.renewalStage === stage).reduce((s, c) => s + c.amount, 0)
  }));
  const max = Math.max(...stageTotals.map(s => s.amount), 1);
  $("#funnelBars").innerHTML = stageTotals.map((s, i) => `
    <div class="funnel-row"><span>${s.stage}</span><div class="funnel-track"><div class="funnel-fill" style="width:${Math.max(5, s.amount/max*100)}%;--bar-color:${colors[i]}"></div></div><strong>${shortMoney(s.amount)}</strong></div>
  `).join("");
  $("#forecastAmount").textContent = money(forecast);

  const healthCounts = ["健康", "注意", "風險"].map(h => state.clients.filter(c => c.health === h).length);
  const healthyPercent = Math.round(healthCounts[0] / state.clients.length * 100);
  $("#healthyPercent").textContent = `${healthyPercent}%`;
  $(".donut").style.background = `conic-gradient(var(--green) 0 ${healthyPercent}%, #e1a45e ${healthyPercent}% ${healthyPercent + Math.round(healthCounts[1]/state.clients.length*100)}%, #d76565 0)`;
  $("#healthLegend").innerHTML = [
    ["健康", healthCounts[0], "#185c45"], ["需注意", healthCounts[1], "#e1a45e"], ["有風險", healthCounts[2], "#d76565"]
  ].map(x => `<div class="legend-item"><span class="legend-dot" style="background:${x[2]}"></span><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("");
}

function renderClients() {
  const q = ($("#clientSearch")?.value || "").toLowerCase();
  const status = $("#clientStatusFilter")?.value || "";
  const consultant = $("#consultantFilter")?.value || "";
  const consultants = [...new Set(state.clients.map(c => c.consultant))];
  if ($("#consultantFilter").options.length === 1) {
    consultants.forEach(name => $("#consultantFilter").insertAdjacentHTML("beforeend", `<option>${name}</option>`));
  }
  const filtered = state.clients.filter(c =>
    (!q || [c.name, c.contact, c.industry].some(v => v.toLowerCase().includes(q))) &&
    (!status || c.status === status) && (!consultant || c.consultant === consultant)
  );
  $("#clientsTable").innerHTML = filtered.map(c => {
    const contract = contractByClient(c.id);
    return `<tr>
      <td><div class="client-cell"><span class="client-logo" style="--logo:${c.color}">${c.name[0]}</span><div><strong>${c.name}</strong><span>${c.industry} · ${c.contact}</span></div></div></td>
      <td><span class="badge ${badgeClass(c.status)}">${c.status}</span></td><td>${c.consultant}</td>
      <td>${dateText(c.lastInteraction)}</td><td class="${daysUntil(c.nextFollowUp) < 0 ? "days urgent" : ""}">${dateText(c.nextFollowUp)}</td>
      <td>${contract ? contract.name : "—"}</td><td><button class="row-action" data-client-detail="${c.id}">›</button></td>
    </tr>`;
  }).join("") || `<tr><td colspan="7" class="empty-state">找不到符合條件的客戶</td></tr>`;
}

function renderContracts() {
  const q = ($("#contractSearch")?.value || "").toLowerCase();
  const status = $("#contractStatusFilter")?.value || "";
  const expiry = Number($("#expiryFilter")?.value || 0);
  const filtered = state.contracts.filter(c => {
    const client = clientById(c.clientId);
    const days = daysUntil(c.end);
    return (!q || `${client.name} ${c.name} ${c.topic}`.toLowerCase().includes(q)) &&
      (!status || c.status === status) && (!expiry || (days >= 0 && days <= expiry));
  });
  $("#contractsTable").innerHTML = filtered.map(c => {
    const client = clientById(c.clientId);
    const days = daysUntil(c.end);
    return `<tr>
      <td><div class="client-cell"><span class="client-logo" style="--logo:${client.color}">${client.name[0]}</span><div><strong>${client.name}</strong><span>${c.name}</span></div></div></td>
      <td>${dateText(c.start)} – ${dateText(c.end)}</td><td>${money(c.amount)}</td><td>${dateText(c.end)}</td>
      <td class="days ${days < 0 ? "urgent" : days <= 30 ? "warning" : ""}">${days < 0 ? `已過期 ${Math.abs(days)} 天` : `${days} 天`}</td>
      <td><span class="badge ${badgeClass(c.status)}">${c.status}</span></td><td><button class="row-action" data-contract-detail="${c.id}">›</button></td>
    </tr>`;
  }).join("") || `<tr><td colspan="7" class="empty-state">找不到符合條件的合約</td></tr>`;
}

function renderRenewals() {
  const stages = ["待接觸", "需求確認", "提案中", "議價中"];
  $("#renewalBoard").innerHTML = stages.map(stage => {
    const items = state.contracts.filter(c => c.renewalStage === stage);
    return `<section class="renewal-column">
      <div class="renewal-column-head"><strong>${stage}</strong><span>${items.length}</span></div>
      <div class="renewal-cards">${items.map(c => {
        const client = clientById(c.clientId);
        return `<article class="renewal-card" data-contract-detail="${c.id}">
          <div class="renewal-top"><h3>${client.name}</h3><span class="badge ${badgeClass(stage)}">${c.probability}%</span></div>
          <p>${c.name}</p>
          <div class="renewal-value"><span>預估金額</span><strong>${money(c.amount)}</strong></div>
          <div class="renewal-next">下一步：${c.nextAction}<br>${dateText(c.nextActionDate)} · ${c.renewalOwner}</div>
        </article>`;
      }).join("") || `<div class="empty-state">目前沒有項目</div>`}</div>
    </section>`;
  }).join("");
}

function renderTasks() {
  const active = state.tasks.filter(t => t.status !== "已完成");
  const counts = [
    ["全部待辦", active.length],
    ["今天到期", active.filter(t => daysUntil(t.due) === 0).length],
    ["已逾期", active.filter(t => daysUntil(t.due) < 0).length],
    ["本週完成", state.tasks.filter(t => t.status === "已完成").length]
  ];
  $("#taskSummary").innerHTML = counts.map(x => `<div class="summary-card"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("");
  $("#tasksTable").innerHTML = [...state.tasks].sort((a,b) => a.status === "已完成" ? 1 : new Date(a.due) - new Date(b.due)).map(t => {
    const client = clientById(t.clientId);
    return `<tr class="${t.status === "已完成" ? "completed-row" : ""}">
      <td><input class="table-checkbox" type="checkbox" data-complete-task="${t.id}" ${t.status === "已完成" ? "checked" : ""}></td>
      <td class="task-title"><strong>${t.title}</strong></td><td>${client.name}</td><td>${t.assignee}</td>
      <td class="${daysUntil(t.due) < 0 && t.status !== "已完成" ? "days urgent" : ""}">${dateText(t.due)}</td>
      <td><span class="priority ${t.priority}">${t.priority}</span></td><td><span class="badge ${badgeClass(t.status)}">${t.status}</span></td>
    </tr>`;
  }).join("");
}

function switchView(view) {
  $$(".view").forEach(v => v.classList.toggle("active", v.id === `${view}View`));
  $$(".nav-item").forEach(n => n.classList.toggle("active", n.dataset.view === view));
  $(".sidebar").classList.remove("open");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const formTemplates = {
  client: () => ({
    title: "新增客戶",
    html: `<div class="form-grid">
      <div class="form-field full"><label>客戶名稱 *</label><input name="name" required placeholder="例如：晨光科技"></div>
      <div class="form-field"><label>產業類別</label><input name="industry" placeholder="例如：SaaS 軟體"></div>
      <div class="form-field"><label>客戶狀態</label><select name="status"><option>服務中</option><option>洽談中</option><option>暫停</option><option>已結案</option></select></div>
      <div class="form-field"><label>負責顧問 *</label><input name="consultant" required placeholder="顧問姓名"></div>
      <div class="form-field"><label>主要聯絡人</label><input name="contact" placeholder="姓名"></div>
      <div class="form-field"><label>聯絡人 Email</label><input type="email" name="email" placeholder="name@company.com"></div>
      <div class="form-field"><label>下次跟進日期</label><input type="date" name="nextFollowUp" value="${isoOffset(7)}"></div>
      <div class="form-field full"><label>主要期望</label><textarea name="expectations" placeholder="客戶希望透過顧問服務達成什麼？"></textarea></div>
      <div class="form-field full"><label>主要痛點</label><textarea name="painPoints" placeholder="目前最需要解決的問題"></textarea></div>
    </div>`
  }),
  contract: () => ({
    title: "新增合約",
    html: `<div class="form-grid">
      <div class="form-field full"><label>客戶 *</label><select name="clientId" required>${state.clients.map(c => `<option value="${c.id}">${c.name}</option>`)}</select></div>
      <div class="form-field full"><label>合約名稱 *</label><input name="name" required placeholder="例如：年度營運成長顧問"></div>
      <div class="form-field"><label>開始日期 *</label><input type="date" name="start" required value="${isoOffset(0)}"></div>
      <div class="form-field"><label>到期日期 *</label><input type="date" name="end" required value="${isoOffset(365)}"></div>
      <div class="form-field"><label>合約金額</label><input type="number" name="amount" min="0" placeholder="480000"></div>
      <div class="form-field"><label>輔導主題</label><input name="topic" placeholder="例如：營運成長、領導力"></div>
      <div class="form-field full"><label>簽約內容</label><textarea name="content" placeholder="服務範圍、會議頻率與交付項目"></textarea></div>
      <div class="form-field full"><label>後續續約計畫</label><textarea name="renewalPlan" placeholder="預計延伸的服務或續約方向"></textarea></div>
    </div>`
  }),
  task: () => ({
    title: "新增任務",
    html: `<div class="form-grid">
      <div class="form-field full"><label>任務名稱 *</label><input name="title" required placeholder="需要完成的下一步"></div>
      <div class="form-field"><label>客戶 *</label><select name="clientId" required>${state.clients.map(c => `<option value="${c.id}">${c.name}</option>`)}</select></div>
      <div class="form-field"><label>負責人 *</label><input name="assignee" required value="王怡文"></div>
      <div class="form-field"><label>截止日期 *</label><input type="date" name="due" required value="${isoOffset(1)}"></div>
      <div class="form-field"><label>優先級</label><select name="priority"><option>高</option><option selected>中</option><option>低</option></select></div>
    </div>`
  })
};

function openModal(type) {
  $("#modalBackdrop").classList.add("open");
  if (!type) {
    $("#modalTitle").textContent = "新增資料";
    $("#quickAddChoices").style.display = "grid";
    $("#dataForm").classList.remove("open");
    return;
  }
  const template = formTemplates[type]();
  $("#modalTitle").textContent = template.title;
  $("#quickAddChoices").style.display = "none";
  $("#dataForm").classList.add("open");
  $("#dataForm").dataset.type = type;
  $("#dataForm").innerHTML = `${template.html}<div class="form-actions"><button type="button" class="button secondary" id="cancelForm">取消</button><button class="button primary" type="submit">儲存資料</button></div>`;
  $("#cancelForm").onclick = closeModal;
  setTimeout(() => $("#dataForm input")?.focus(), 50);
}
function closeModal() { $("#modalBackdrop").classList.remove("open"); }

function submitForm(event) {
  event.preventDefault();
  const type = event.currentTarget.dataset.type;
  const data = Object.fromEntries(new FormData(event.currentTarget).entries());
  if (type === "client") {
    state.clients.push({
      id: Date.now(), name: data.name, industry: data.industry || "未分類", status: data.status,
      consultant: data.consultant, contact: data.contact || "—", email: data.email || "", phone: "",
      expectations: data.expectations || "尚未填寫", painPoints: data.painPoints || "尚未填寫",
      lastInteraction: isoOffset(0), nextFollowUp: data.nextFollowUp || isoOffset(7), health: "健康", color: "#477467"
    });
  } else if (type === "contract") {
    const endDays = daysUntil(data.end);
    state.contracts.push({
      id: Date.now(), clientId: Number(data.clientId), name: data.name, content: data.content || "尚未填寫",
      topic: data.topic || "未分類", start: data.start, end: data.end, amount: Number(data.amount || 0),
      status: endDays < 0 ? "已到期" : endDays <= 90 ? "即將到期" : "有效",
      hours: 0, usedHours: 0, renewalStage: "未評估", probability: 20,
      renewalPlan: data.renewalPlan || "尚未規劃", nextAction: "評估續約可能性", nextActionDate: isoOffset(30),
      renewalOwner: clientById(data.clientId).consultant
    });
  } else {
    state.tasks.push({
      id: Date.now(), title: data.title, clientId: Number(data.clientId), assignee: data.assignee,
      due: data.due, priority: data.priority, status: "待處理"
    });
  }
  closeModal();
  renderAll();
  showToast(`${formTemplates[type]().title}完成`);
}

function openClientDetail(id) {
  const c = clientById(id);
  const contracts = state.contracts.filter(x => x.clientId === c.id);
  $("#detailDrawer").innerHTML = `
    <div class="drawer-head"><div class="drawer-head-top"><span class="eyebrow">CLIENT PROFILE</span><button class="close-button" data-close-drawer>×</button></div><h2>${c.name}</h2><p>${c.industry} · ${c.status}</p></div>
    <div class="drawer-body">
      <section class="detail-section"><h3>客戶概況</h3><div class="detail-grid">
        <div class="detail-field"><span>負責顧問</span><strong>${c.consultant}</strong></div>
        <div class="detail-field"><span>健康度</span><strong><span class="badge ${badgeClass(c.health)}">${c.health}</span></strong></div>
        <div class="detail-field"><span>主要聯絡人</span><strong>${c.contact}</strong></div>
        <div class="detail-field"><span>Email</span><strong>${c.email || "—"}</strong></div>
        <div class="detail-field"><span>最近互動</span><strong>${dateText(c.lastInteraction)}</strong></div>
        <div class="detail-field"><span>下次跟進</span><strong>${dateText(c.nextFollowUp)}</strong></div>
      </div></section>
      <section class="detail-section"><h3>主要期望</h3><div class="detail-copy">${c.expectations}</div></section>
      <section class="detail-section"><h3>主要痛點</h3><div class="detail-copy">${c.painPoints}</div></section>
      <section class="detail-section"><h3>合約紀錄（${contracts.length}）</h3>${contracts.map(x => `<div class="renewal-next">${x.name}<br>${dateText(x.start)} – ${dateText(x.end)} · ${money(x.amount)}</div>`).join("") || '<div class="detail-copy">目前沒有合約</div>'}</section>
      <div class="form-actions"><button class="button secondary" data-close-drawer>關閉</button><button class="button primary" data-add-task-client="${c.id}">＋ 建立跟進任務</button></div>
    </div>`;
  $("#drawerBackdrop").classList.add("open");
}

function openContractDetail(id) {
  const c = state.contracts.find(x => x.id === Number(id));
  const client = clientById(c.clientId);
  $("#detailDrawer").innerHTML = `
    <div class="drawer-head"><div class="drawer-head-top"><span class="eyebrow">CONTRACT DETAIL</span><button class="close-button" data-close-drawer>×</button></div><h2>${c.name}</h2><p>${client.name} · ${c.status}</p></div>
    <div class="drawer-body">
      <section class="detail-section"><h3>合約資訊</h3><div class="detail-grid">
        <div class="detail-field"><span>合約期間</span><strong>${dateText(c.start)} – ${dateText(c.end)}</strong></div>
        <div class="detail-field"><span>合約金額</span><strong>${money(c.amount)}</strong></div>
        <div class="detail-field"><span>到期狀態</span><strong>${daysUntil(c.end) < 0 ? `已到期 ${Math.abs(daysUntil(c.end))} 天` : `剩餘 ${daysUntil(c.end)} 天`}</strong></div>
        <div class="detail-field"><span>服務時數</span><strong>${c.usedHours} / ${c.hours || "—"} 小時</strong></div>
      </div></section>
      <section class="detail-section"><h3>簽約內容</h3><div class="detail-copy">${c.content}</div></section>
      <section class="detail-section"><h3>輔導主題</h3><div class="detail-copy">${c.topic}</div></section>
      <section class="detail-section"><h3>續約追蹤</h3><div class="detail-grid">
        <div class="detail-field"><span>目前階段</span><strong><span class="badge ${badgeClass(c.renewalStage)}">${c.renewalStage}</span></strong></div>
        <div class="detail-field"><span>續約機率</span><strong>${c.probability}%</strong></div>
        <div class="detail-field"><span>續約負責人</span><strong>${c.renewalOwner}</strong></div>
        <div class="detail-field"><span>下次行動日</span><strong>${dateText(c.nextActionDate)}</strong></div>
      </div><div class="renewal-next">下一步：${c.nextAction}</div></section>
      <section class="detail-section"><h3>後續續約計畫</h3><div class="detail-copy">${c.renewalPlan}</div></section>
      <div class="form-actions"><button class="button secondary" data-close-drawer>關閉</button><button class="button primary" data-advance-renewal="${c.id}">推進續約階段</button></div>
    </div>`;
  $("#drawerBackdrop").classList.add("open");
}

document.addEventListener("click", (event) => {
  const nav = event.target.closest("[data-view]");
  const link = event.target.closest("[data-view-link]");
  const modal = event.target.closest("[data-open-modal]");
  const choice = event.target.closest("[data-choice]");
  const clientDetail = event.target.closest("[data-client-detail]");
  const contractDetail = event.target.closest("[data-contract-detail]");
  const complete = event.target.closest("[data-complete-task]");
  if (nav) switchView(nav.dataset.view);
  if (link) switchView(link.dataset.viewLink);
  if (modal) openModal(modal.dataset.openModal);
  if (choice) openModal(choice.dataset.choice);
  if (clientDetail) openClientDetail(clientDetail.dataset.clientDetail);
  if (contractDetail) openContractDetail(contractDetail.dataset.contractDetail);
  if (event.target.closest("[data-close-drawer]")) $("#drawerBackdrop").classList.remove("open");
  if (complete) {
    const task = state.tasks.find(t => t.id === Number(complete.dataset.completeTask));
    task.status = task.status === "已完成" ? "待處理" : "已完成";
    renderAll();
    showToast(task.status === "已完成" ? "任務已完成" : "任務已重新開啟");
  }
  const advance = event.target.closest("[data-advance-renewal]");
  if (advance) {
    const stages = ["待接觸", "需求確認", "提案中", "議價中", "成功"];
    const contract = state.contracts.find(c => c.id === Number(advance.dataset.advanceRenewal));
    const index = stages.indexOf(contract.renewalStage);
    contract.renewalStage = stages[Math.min(index + 1, stages.length - 1)];
    contract.probability = Math.min(contract.probability + 15, 100);
    $("#drawerBackdrop").classList.remove("open");
    renderAll();
    showToast(`續約階段已更新為「${contract.renewalStage}」`);
  }
  if (event.target.closest("[data-add-task-client]")) {
    $("#drawerBackdrop").classList.remove("open");
    openModal("task");
    setTimeout(() => $(`#dataForm select[name="clientId"]`).value = event.target.closest("[data-add-task-client]").dataset.addTaskClient, 0);
  }
});

$("#quickAddButton").addEventListener("click", () => openModal());
$("#closeModal").addEventListener("click", closeModal);
$("#modalBackdrop").addEventListener("click", e => { if (e.target === e.currentTarget) closeModal(); });
$("#drawerBackdrop").addEventListener("click", e => { if (e.target === e.currentTarget) e.currentTarget.classList.remove("open"); });
$("#dataForm").addEventListener("submit", submitForm);
$("#mobileMenu").addEventListener("click", () => $(".sidebar").classList.toggle("open"));
["clientSearch", "clientStatusFilter", "consultantFilter"].forEach(id => $(`#${id}`).addEventListener(id.includes("Search") ? "input" : "change", renderClients));
["contractSearch", "contractStatusFilter", "expiryFilter"].forEach(id => $(`#${id}`).addEventListener(id.includes("Search") ? "input" : "change", renderContracts));
$("#globalSearch").addEventListener("input", e => {
  if (!e.target.value) return;
  switchView("clients");
  $("#clientSearch").value = e.target.value;
  renderClients();
});
$("#exportButton").addEventListener("click", () => {
  const rows = [["客戶名稱","狀態","負責顧問","最近互動","下次跟進"], ...state.clients.map(c => [c.name,c.status,c.consultant,c.lastInteraction,c.nextFollowUp])];
  const csv = "\ufeff" + rows.map(row => row.map(v => `"${String(v).replaceAll('"','""')}"`).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  a.download = `顧問客戶報表_${isoOffset(0)}.csv`;
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("客戶報表已匯出");
});
$("#notificationButton").addEventListener("click", () => showToast(`有 ${state.contracts.filter(c => daysUntil(c.end) <= 30 && daysUntil(c.end) >= 0).length} 份合約將在 30 天內到期`));
document.addEventListener("keydown", e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); $("#globalSearch").focus(); }
  if (e.key === "Escape") { closeModal(); $("#drawerBackdrop").classList.remove("open"); }
});

renderAll();
