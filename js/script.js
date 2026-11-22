"use strict";

const APP_VERSION = "1.0.0";
const LS = {
  USERS: "gchat_users",
  MESSAGES: "gchat_messages",
  SESSION: "gchat_session",
};

const USER_COLORS = [
  "#ff6b6b",
  "#ff9f43",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#a29bfe",
  "#fd79a8",
  "#00cec9",
  "#e17055",
  "#74b9ff",
  "#55efc4",
  "#fdcb6e",
];

const POLL_INTERVAL = 2000;
const COUNTRIES = [
  { code: "AF", name: "Afghanistan", flag: "🇦🇫" },
  { code: "AL", name: "Albania", flag: "🇦🇱" },
  { code: "DZ", name: "Algeria", flag: "🇩🇿" },
  { code: "AO", name: "Angola", flag: "🇦🇴" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "AM", name: "Armenia", flag: "🇦🇲" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "AZ", name: "Azerbaijan", flag: "🇦🇿" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
  { code: "BY", name: "Belarus", flag: "🇧🇾" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "BO", name: "Bolivia", flag: "🇧🇴" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "KH", name: "Cambodia", flag: "🇰🇭" },
  { code: "CM", name: "Cameroon", flag: "🇨🇲" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "CD", name: "Congo (DRC)", flag: "🇨🇩" },
  { code: "HR", name: "Croatia", flag: "🇭🇷" },
  { code: "CU", name: "Cuba", flag: "🇨🇺" },
  { code: "CZ", name: "Czech Republic", flag: "🇨🇿" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "EC", name: "Ecuador", flag: "🇪🇨" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "ET", name: "Ethiopia", flag: "🇪🇹" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "GE", name: "Georgia", flag: "🇬🇪" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "GT", name: "Guatemala", flag: "🇬🇹" },
  { code: "HN", name: "Honduras", flag: "🇭🇳" },
  { code: "HK", name: "Hong Kong", flag: "🇭🇰" },
  { code: "HU", name: "Hungary", flag: "🇭🇺" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "IR", name: "Iran", flag: "🇮🇷" },
  { code: "IQ", name: "Iraq", flag: "🇮🇶" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "JM", name: "Jamaica", flag: "🇯🇲" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "JO", name: "Jordan", flag: "🇯🇴" },
  { code: "KZ", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "KP", name: "North Korea", flag: "🇰🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "KW", name: "Kuwait", flag: "🇰🇼" },
  { code: "LB", name: "Lebanon", flag: "🇱🇧" },
  { code: "LY", name: "Libya", flag: "🇱🇾" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "MA", name: "Morocco", flag: "🇲🇦" },
  { code: "MM", name: "Myanmar", flag: "🇲🇲" },
  { code: "NP", name: "Nepal", flag: "🇳🇵" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "OM", name: "Oman", flag: "🇴🇲" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "PA", name: "Panama", flag: "🇵🇦" },
  { code: "PY", name: "Paraguay", flag: "🇵🇾" },
  { code: "PE", name: "Peru", flag: "🇵🇪" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "QA", name: "Qatar", flag: "🇶🇦" },
  { code: "RO", name: "Romania", flag: "🇷🇴" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "SN", name: "Senegal", flag: "🇸🇳" },
  { code: "RS", name: "Serbia", flag: "🇷🇸" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "SD", name: "Sudan", flag: "🇸🇩" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "SY", name: "Syria", flag: "🇸🇾" },
  { code: "TW", name: "Taiwan", flag: "🇹🇼" },
  { code: "TZ", name: "Tanzania", flag: "🇹🇿" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "TN", name: "Tunisia", flag: "🇹🇳" },
  { code: "TR", name: "Turkey", flag: "🇹🇷" },
  { code: "UG", name: "Uganda", flag: "🇺🇬" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "AE", name: "UAE", flag: "🇦🇪" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "UY", name: "Uruguay", flag: "🇺🇾" },
  { code: "UZ", name: "Uzbekistan", flag: "🇺🇿" },
  { code: "VE", name: "Venezuela", flag: "🇻🇪" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "YE", name: "Yemen", flag: "🇾🇪" },
  { code: "ZM", name: "Zambia", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", flag: "🇿🇼" },
];

let state = {
  currentUser: null,
  currentCountry: null,
  isAtBottom: true,
  newMsgCount: 0,
  lastMessageCount: 0,
  pollTimer: null,
  lastRenderedMsgId: null,
};

function lsGet(key) {
  try {
    const raw = localStorage.getItem(key);

    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function lsSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));

    return true;
  } catch {
    return false;
  }
}

function lsRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

function loadUsers() {
  return lsGet(LS.USERS) || {};
}

function saveUsers(users) {
  lsSet(LS.USERS, users);
}

function findUserByUsername(username) {
  const users = loadUsers();
  const key = username.toLowerCase().trim();

  return (
    Object.values(users).find((u) => u.username.toLowerCase() === key) || null
  );
}

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function assignUserColor() {
  const users = loadUsers();
  const usedColors = Object.values(users).map((u) => u.color);
  const colorCount = USER_COLORS.map(
    (c) => usedColors.filter((u) => u === c).length,
  );
  const minCount = Math.min(...colorCount);
  const available = USER_COLORS.filter((c, i) => colorCount[i] === minCount);

  return available[Math.floor(Math.random() * available.length)];
}

function loadAllMessages() {
  return lsGet(LS.MESSAGES) || {};
}

function loadMessages(countryCode) {
  const all = loadAllMessages();

  return all[countryCode] || [];
}

function saveMessage(countryCode, message) {
  const all = loadAllMessages();

  if (!all[countryCode]) all[countryCode] = [];
  all[countryCode].push(message);

  if (all[countryCode].length > 500) {
    all[countryCode] = all[countryCode].slice(-500);
  }

  lsSet(LS.MESSAGES, all);
}

function getVisibleMessages(countryCode, user) {
  const messages = loadMessages(countryCode);

  return messages.filter((msg) => {
    return msg.timestamp >= user.createdAt;
  });
}

function saveSession(user) {
  lsSet(LS.SESSION, { userId: user.id, username: user.username });
}

function loadSession() {
  const session = lsGet(LS.SESSION);
  if (!session) return null;

  const users = loadUsers();

  return users[session.userId] || null;
}

function clearSession() {
  lsRemove(LS.SESSION);
}

function validateUsername(username) {
  if (!username || username.trim().length < 3)
    return "Username must be at least 3 characters.";
  if (username.trim().length > 24)
    return "Username must be 24 characters or less.";
  if (!/^[a-zA-Z0-9_]+$/.test(username.trim()))
    return "Username can only contain letters, numbers, and underscores.";

  return null;
}

function validatePassword(password) {
  if (!password || password.length < 6)
    return "Password must be at least 6 characters.";

  return null;
}

function validateName(name) {
  if (!name || name.trim().length < 2)
    return "Please enter your full name (at least 2 characters).";
  if (name.trim().length > 50) return "Name is too long (max 50 characters).";

  return null;
}

function handleRegister() {
  const name = document.getElementById("reg-name").value.trim();
  const username = document.getElementById("reg-username").value.trim();
  const password = document.getElementById("reg-password").value;
  const countryCode = document.getElementById("reg-country").value;
  const errorEl = document.getElementById("reg-error");

  showError(errorEl, null);

  const nameErr = validateName(name);
  if (nameErr) {
    showError(errorEl, nameErr);
    return;
  }

  const userErr = validateUsername(username);
  if (userErr) {
    showError(errorEl, userErr);
    return;
  }

  const passErr = validatePassword(password);
  if (passErr) {
    showError(errorEl, passErr);
    return;
  }

  if (!countryCode) {
    showError(errorEl, "Please select your country.");

    return;
  }

  if (findUserByUsername(username)) {
    showError(
      errorEl,
      "That username is already taken. Please choose another.",
    );

    return;
  }

  const country = COUNTRIES.find((c) => c.code === countryCode);
  if (!country) {
    showError(errorEl, "Invalid country selected.");

    return;
  }

  const userId = generateId();
  const now = Date.now();
  const newUser = {
    id: userId,
    name: name,
    username: username,
    password: password,
    country: countryCode,
    countryName: country.name,
    countryFlag: country.flag,
    color: assignUserColor(),
    createdAt: now,
  };

  const users = loadUsers();
  users[userId] = newUser;
  saveUsers(users);

  const joinMsg = {
    id: generateId(),
    type: "system",
    text: `${username} joined the room 👋`,
    timestamp: now,
    countryCode,
  };

  saveMessage(countryCode, joinMsg);
  loginUser(newUser, true);
}

function handleLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;
  const errorEl = document.getElementById("login-error");

  showError(errorEl, null);

  if (!username) {
    showError(errorEl, "Please enter your username.");
    return;
  }
  if (!password) {
    showError(errorEl, "Please enter your password.");
    return;
  }

  const user = findUserByUsername(username);

  if (!user) {
    showError(errorEl, "No account found with that username.");
    return;
  }

  if (user.password !== password) {
    showError(errorEl, "Incorrect password. Please try again.");
    return;
  }

  loginUser(user, false);
}

function loginUser(user, isNewUser) {
  state.currentUser = user;
  state.currentCountry =
    COUNTRIES.find((c) => c.code === user.country) || COUNTRIES[0];

  saveSession(user);
  showAppView();
  loadChatRoom();
}

function handleLogout() {
  stopPolling();

  state.currentUser = null;
  state.currentCountry = null;
  state.newMsgCount = 0;

  clearSession();
  showAuthView();
}

function showAuthView() {
  document.getElementById("app-view").classList.add("hidden");
  document.getElementById("app-view").classList.remove("active");
  document.getElementById("auth-view").classList.remove("hidden");
  document.getElementById("auth-view").classList.add("active");
  document.getElementById("login-username").value = "";
  document.getElementById("login-password").value = "";
  document.getElementById("reg-name").value = "";
  document.getElementById("reg-username").value = "";
  document.getElementById("reg-password").value = "";
  document.getElementById("reg-country").value = "";

  showError(document.getElementById("login-error"), null);
  showError(document.getElementById("reg-error"), null);

  switchAuthTab("login");
}

function showAppView() {
  document.getElementById("auth-view").classList.add("hidden");
  document.getElementById("auth-view").classList.remove("active");
  document.getElementById("app-view").classList.remove("hidden");
  document.getElementById("app-view").classList.add("active");

  switchScreen("chat-screen");
}

function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach((s) => {
    s.classList.remove("active");
    s.classList.add("hidden");
  });

  document.getElementById(screenId).classList.remove("hidden");
  document.getElementById(screenId).classList.add("active");
  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.screen === screenId);
  });

  if (screenId === "settings-screen") {
    updateSettingsUI();
  }
}

function switchAuthTab(tab) {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const indicator = document.querySelector(".tab-indicator");

  if (tab === "login") {
    loginForm.classList.remove("hidden");
    loginForm.classList.add("active");

    registerForm.classList.add("hidden");
    registerForm.classList.remove("active");

    indicator.classList.remove("right");
  } else {
    loginForm.classList.add("hidden");
    loginForm.classList.remove("active");

    registerForm.classList.remove("hidden");
    registerForm.classList.add("active");

    indicator.classList.add("right");
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tab);
  });
}

function showError(el, message) {
  if (!el) return;
  if (message) {
    el.textContent = message;
    el.classList.remove("hidden");
  } else {
    el.textContent = "";
    el.classList.add("hidden");
  }
}

function togglePasswordVisibility(targetId) {
  const input = document.getElementById(targetId);
  const btn = document.querySelector(`.eye-toggle[data-target="${targetId}"]`);
  const eyeOpen = btn.querySelector(".eye-open");
  const eyeClsd = btn.querySelector(".eye-closed");

  if (input.type === "password") {
    input.type = "text";

    eyeOpen.classList.add("hidden");
    eyeClsd.classList.remove("hidden");
  } else {
    input.type = "password";

    eyeOpen.classList.remove("hidden");
    eyeClsd.classList.add("hidden");
  }
}

function populateCountrySelect() {
  const select = document.getElementById("reg-country");
  COUNTRIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c.code;
    opt.textContent = `${c.flag} ${c.name}`;
    select.appendChild(opt);
  });
}

function loadChatRoom() {
  const country = state.currentCountry;

  document.getElementById("room-flag").textContent = country.flag;
  document.getElementById("room-name").textContent =
    `${country.flag} ${country.name}`;
  document.getElementById("room-sub").textContent = "Public Country Room";

  state.newMsgCount = 0;
  state.lastRenderedMsgId = null;

  hideNewMsgNotif();
  renderMessages();
  startPolling();
}

function formatTime(timestamp) {
  const d = new Date(timestamp);

  return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatDate(timestamp) {
  const d = new Date(timestamp);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) return "Today";

  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);

  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString([], {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getInitials(username) {
  return username.charAt(0).toUpperCase();
}

function renderMessages() {
  const listEl = document.getElementById("messages-list");
  const loadingEl = document.getElementById("messages-loading");
  const user = state.currentUser;
  const code = state.currentCountry.code;

  if (!user) return;
  if (loadingEl) loadingEl.remove();

  const messages = getVisibleMessages(code, user);

  if (messages.length === 0) {
    listEl.innerHTML = "";
    listEl.appendChild(createEmptyState());

    return;
  }

  listEl.innerHTML = "";

  let lastDate = null;
  let lastUserId = null;

  messages.forEach((msg, idx) => {
    const msgDate = formatDate(msg.timestamp);
    if (msgDate !== lastDate) {
      listEl.appendChild(createDateSeparator(msgDate));

      lastDate = msgDate;
      lastUserId = null;
    }

    if (msg.type === "system") {
      listEl.appendChild(createSystemMessage(msg));

      lastUserId = null;
    } else {
      const isGrouped = lastUserId === msg.userId && msg.type !== "system";

      listEl.appendChild(createMessageBubble(msg, user, isGrouped));

      lastUserId = msg.userId;
    }
  });

  if (messages.length > 0) {
    state.lastRenderedMsgId = messages[messages.length - 1].id;
    state.lastMessageCount = messages.length;
  }

  scrollToBottom(true);
}

function createEmptyState() {
  const div = document.createElement("div");
  div.className = "messages-empty";
  div.innerHTML = `
    <div class="messages-empty-icon">${state.currentCountry.flag}</div>
    <div class="messages-empty-title">No messages yet</div>
    <div class="messages-empty-sub">
      Be the first to say hello in the ${state.currentCountry.name} chat room!
    </div>
  `;

  return div;
}

function createDateSeparator(dateStr) {
  const div = document.createElement("div");
  div.className = "msg-date-separator";
  div.innerHTML = `
    <div class="msg-date-separator-line"></div>
    <div class="msg-date-separator-text">${escapeHTML(dateStr)}</div>
    <div class="msg-date-separator-line"></div>
  `;

  return div;
}

function createSystemMessage(msg) {
  const div = document.createElement("div");
  div.className = "msg-system";
  div.dataset.msgId = msg.id;
  div.innerHTML = `<div class="msg-system-inner">${escapeHTML(msg.text)}</div>`;

  return div;
}

function createMessageBubble(msg, currentUser, isGrouped) {
  const isSelf = msg.userId === currentUser.id;
  const row = document.createElement("div");
  row.className = `msg-row ${isSelf ? "msg-self" : "msg-other"}${isGrouped ? " msg-grouped" : ""}`;
  row.dataset.msgId = msg.id;

  const avatar = document.createElement("div");
  avatar.className = "msg-avatar";
  avatar.style.background = msg.userColor || "#8888aa";
  avatar.textContent = getInitials(msg.username);

  const body = document.createElement("div");
  body.className = "msg-body";

  const usernameEl = document.createElement("div");
  usernameEl.className = "msg-username";
  usernameEl.style.color = msg.userColor || "#8888aa";
  usernameEl.textContent = msg.username;

  const bubble = document.createElement("div");
  bubble.className = "msg-bubble";
  bubble.textContent = msg.text;

  const timeEl = document.createElement("div");
  timeEl.className = "msg-time";
  timeEl.textContent = formatTime(msg.timestamp);

  body.appendChild(usernameEl);
  body.appendChild(bubble);
  body.appendChild(timeEl);

  if (isSelf) {
    row.appendChild(body);
  } else {
    row.appendChild(avatar);
    row.appendChild(body);
  }

  return row;
}

function appendNewMessages() {
  const listEl = document.getElementById("messages-list");
  const user = state.currentUser;
  const code = state.currentCountry.code;

  if (!user || !listEl) return;

  const allMessages = getVisibleMessages(code, user);
  const lastId = state.lastRenderedMsgId;

  let newMessages;

  if (!lastId) {
    newMessages = allMessages;
  } else {
    const lastIdx = allMessages.findIndex((m) => m.id === lastId);

    newMessages = lastIdx >= 0 ? allMessages.slice(lastIdx + 1) : [];
  }

  if (newMessages.length === 0) return;

  const emptyState = listEl.querySelector(".messages-empty");
  if (emptyState) emptyState.remove();

  const renderedRows = listEl.querySelectorAll("[data-msg-id]");

  let lastUserId = null;
  let lastDate = null;

  if (renderedRows.length > 0) {
    const lastRow = renderedRows[renderedRows.length - 1];
    const lastMsg = allMessages.find((m) => m.id === lastRow.dataset.msgId);

    if (lastMsg) {
      lastUserId = lastMsg.userId || null;
      lastDate = formatDate(lastMsg.timestamp);
    }
  }

  newMessages.forEach((msg) => {
    const msgDate = formatDate(msg.timestamp);
    if (msgDate !== lastDate) {
      listEl.appendChild(createDateSeparator(msgDate));

      lastDate = msgDate;

      lastUserId = null;
    }

    if (msg.type === "system") {
      listEl.appendChild(createSystemMessage(msg));

      lastUserId = null;
    } else {
      const isGrouped = lastUserId === msg.userId;

      listEl.appendChild(createMessageBubble(msg, user, isGrouped));

      lastUserId = msg.userId;
    }
  });

  state.lastRenderedMsgId = newMessages[newMessages.length - 1].id;
  state.lastMessageCount = allMessages.length;

  if (state.isAtBottom) {
    scrollToBottom(false);
  } else {
    state.newMsgCount += newMessages.filter((m) => m.type !== "system").length;

    if (state.newMsgCount > 0) {
      showNewMsgNotif(state.newMsgCount);
    }
  }
}

function handleSendMessage() {
  const input = document.getElementById("msg-input");
  const text = input.value.trim();

  if (!text || !state.currentUser || !state.currentCountry) return;

  const user = state.currentUser;
  const code = state.currentCountry.code;
  const newMsg = {
    id: generateId(),
    type: "user",
    userId: user.id,
    username: user.username,
    text: text,
    userColor: user.color,
    timestamp: Date.now(),
    countryCode: code,
  };

  saveMessage(code, newMsg);

  input.value = "";
  input.style.height = "auto";

  appendNewMessages();
}

function scrollToBottom(instant) {
  const container = document.getElementById("messages-container");

  if (!container) return;
  if (instant) {
    container.scrollTop = container.scrollHeight;
  } else {
    container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
  }

  state.isAtBottom = true;
  state.newMsgCount = 0;

  hideNewMsgNotif();
}

function onMessagesScroll() {
  const container = document.getElementById("messages-container");
  if (!container) return;

  const threshold = 80;
  const distBottom =
    container.scrollHeight - container.scrollTop - container.clientHeight;

  state.isAtBottom = distBottom <= threshold;

  if (state.isAtBottom) {
    state.newMsgCount = 0;

    hideNewMsgNotif();
  }
}

function showNewMsgNotif(count) {
  const notif = document.getElementById("new-msg-notif");
  const countEl = document.getElementById("new-msg-count");

  if (!notif) return;

  countEl.textContent = count === 1 ? "1 new message" : `${count} new messages`;

  notif.classList.remove("hidden");
}

function hideNewMsgNotif() {
  const notif = document.getElementById("new-msg-notif");

  if (notif) notif.classList.add("hidden");
}

function startPolling() {
  stopPolling();

  state.pollTimer = setInterval(() => {
    appendNewMessages();
  }, POLL_INTERVAL);
}

function stopPolling() {
  if (state.pollTimer) {
    clearInterval(state.pollTimer);

    state.pollTimer = null;
  }
}

let filteredCountries = [...COUNTRIES];

function openCountryModal() {
  const modal = document.getElementById("country-modal");
  const searchEl = document.getElementById("country-search");

  modal.classList.remove("hidden");

  searchEl.value = "";

  filteredCountries = [...COUNTRIES];

  renderCountryList(COUNTRIES);
  setTimeout(() => searchEl.focus(), 200);
}

function closeCountryModal() {
  document.getElementById("country-modal").classList.add("hidden");
}

function renderCountryList(countries) {
  const listEl = document.getElementById("country-list");
  const currentCode = state.currentCountry ? state.currentCountry.code : null;

  listEl.innerHTML = "";

  if (countries.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center; padding:32px; color: var(--text-muted); font-size:14px;">
        No countries found
      </div>
    `;

    return;
  }

  countries.forEach((c) => {
    const item = document.createElement("div");
    item.className = `country-item${c.code === currentCode ? " active" : ""}`;
    item.dataset.code = c.code;
    item.innerHTML = `
      <span class="country-item-flag">${c.flag}</span>
      <span class="country-item-name">${escapeHTML(c.name)}</span>
      <svg class="country-item-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    `;

    item.addEventListener("click", () => selectCountry(c));
    listEl.appendChild(item);
  });
}

function filterCountries(query) {
  const q = query.toLowerCase().trim();

  if (!q) {
    filteredCountries = [...COUNTRIES];
  } else {
    filteredCountries = COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q),
    );
  }

  renderCountryList(filteredCountries);
}

function selectCountry(country) {
  if (!state.currentUser) return;
  if (state.currentCountry && state.currentCountry.code === country.code) {
    closeCountryModal();
    return;
  }

  const users = loadUsers();
  const user = users[state.currentUser.id];

  if (user) {
    user.country = country.code;
    user.countryName = country.name;
    user.countryFlag = country.flag;
    users[state.currentUser.id] = user;

    saveUsers(users);

    state.currentUser = user;

    saveSession(user);
  }

  state.currentCountry = country;

  const joinMsg = {
    id: generateId(),
    type: "system",
    text: `${state.currentUser.username} joined the room 👋`,
    timestamp: Date.now(),
    countryCode: country.code,
  };

  saveMessage(country.code, joinMsg);
  closeCountryModal();
  stopPolling();

  state.lastRenderedMsgId = null;
  state.newMsgCount = 0;

  loadChatRoom();
  updateSettingsUI();
  switchScreen("chat-screen");
}

function updateSettingsUI() {
  const user = state.currentUser;
  const country = state.currentCountry;

  if (!user) return;

  const avatarEl = document.getElementById("settings-avatar");
  avatarEl.textContent = getInitials(user.username);
  avatarEl.style.background = `linear-gradient(135deg, ${user.color}, ${shadeColor(user.color, -20)})`;

  document.getElementById("settings-name").textContent = user.name;
  document.getElementById("settings-username").textContent =
    `@${user.username}`;
  document.getElementById("settings-country-flag").textContent = country
    ? country.flag
    : "🌐";
  document.getElementById("settings-country-name").textContent = country
    ? country.name
    : "—";

  const joinedDate = new Date(user.createdAt).toLocaleDateString([], {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("settings-joined").textContent = joinedDate;
}

function shadeColor(color, amount) {
  let R = parseInt(color.slice(1, 3), 16);
  let G = parseInt(color.slice(3, 5), 16);
  let B = parseInt(color.slice(5, 7), 16);

  R = Math.max(0, Math.min(255, R + amount));
  G = Math.max(0, Math.min(255, G + amount));
  B = Math.max(0, Math.min(255, B + amount));

  return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(2, "0")}${B.toString(16).padStart(2, "0")}`;
}

function openLogoutModal() {
  document.getElementById("confirm-modal").classList.remove("hidden");
}

function closeLogoutModal() {
  document.getElementById("confirm-modal").classList.add("hidden");
}

function autoResizeTextarea(el) {
  el.style.height = "auto";

  const maxH = 120;

  el.style.height = Math.min(el.scrollHeight, maxH) + "px";
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = String(str);

  return div.innerHTML;
}

function setupEventListeners() {
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchAuthTab(btn.dataset.tab));
  });

  document.querySelectorAll(".eye-toggle").forEach((btn) => {
    btn.addEventListener("click", () =>
      togglePasswordVisibility(btn.dataset.target),
    );
  });

  document.getElementById("login-btn").addEventListener("click", handleLogin);
  document.getElementById("login-password").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });

  document.getElementById("login-username").addEventListener("keydown", (e) => {
    if (e.key === "Enter") document.getElementById("login-password").focus();
  });

  document
    .getElementById("register-btn")
    .addEventListener("click", handleRegister);

  document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.addEventListener("click", () => switchScreen(btn.dataset.screen));
  });

  document
    .getElementById("change-room-btn")
    .addEventListener("click", openCountryModal);
  document
    .getElementById("change-country-setting")
    .addEventListener("click", () => {
      openCountryModal();
    });

  document
    .getElementById("modal-close-btn")
    .addEventListener("click", closeCountryModal);
  document.getElementById("country-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("country-modal"))
      closeCountryModal();
  });

  document.getElementById("country-search").addEventListener("input", (e) => {
    filterCountries(e.target.value);
  });

  const sendBtn = document.getElementById("send-btn");
  const msgInput = document.getElementById("msg-input");

  sendBtn.addEventListener("click", handleSendMessage);

  msgInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  });

  msgInput.addEventListener("input", () => autoResizeTextarea(msgInput));

  document
    .getElementById("messages-container")
    .addEventListener("scroll", onMessagesScroll, {
      passive: true,
    });

  document
    .getElementById("scroll-to-bottom-btn")
    .addEventListener("click", () => {
      scrollToBottom(false);
    });

  document
    .getElementById("logout-btn")
    .addEventListener("click", openLogoutModal);
  document
    .getElementById("confirm-cancel")
    .addEventListener("click", closeLogoutModal);
  document.getElementById("confirm-logout").addEventListener("click", () => {
    closeLogoutModal();
    handleLogout();
  });

  document.getElementById("confirm-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("confirm-modal"))
      closeLogoutModal();
  });
}

function init() {
  populateCountrySelect();
  setupEventListeners();

  const savedUser = loadSession();

  if (savedUser) {
    state.currentUser = savedUser;
    state.currentCountry =
      COUNTRIES.find((c) => c.code === savedUser.country) || COUNTRIES[0];

    showAppView();
    loadChatRoom();
    updateSettingsUI();
  } else {
    showAuthView();
  }
}

document.addEventListener("DOMContentLoaded", init);
