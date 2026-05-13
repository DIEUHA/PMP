# PMP Master Guide — UI & Code Rules

Đây là workspace ôn thi PMP của Jiyoo. Mọi thay đổi HTML/CSS phải follow các rules dưới đây.

---

## File Structure

```
pmp_master_guide.html   ← HTML content only (~193KB)
pmp_style.css           ← Toàn bộ CSS
pmp_questions.js        ← 2184 câu hỏi (var ALL_QUESTIONS = [...])
pmp_app.js              ← App logic, TOPICS, CALC, functions
pmp_master_guide.BACKUP.html  ← Backup, không sửa
```

**Quan trọng:** 4 file phải nằm cùng folder. Không dùng `fetch()` cho local files (CORS). Dùng `<script src="...">` thay thế.

**Trước mỗi lần sửa lớn:** copy backup trước (`cp pmp_master_guide.html pmp_master_guide.BACKUP.html`).

---

## Color Palette

Chỉ dùng CSS variables, không hardcode hex màu trong HTML hay CSS mới.

```css
--green: #03C75A        /* Màu chủ đạo — accent, CTA, active states */
--green-dim: #02A849    /* Green hover */
--green-pale: #F0FDF4   /* Green tint nhạt — background hover nhẹ */
--dark: #1A1A2E         /* Heading, text quan trọng */
--txt: #2D3748          /* Body text */
--txt2: #718096         /* Secondary text, labels */
--txt3: #A0AEC0         /* Placeholder, disabled */
--bg: #F7FBF8           /* Page background */
--white: #FFFFFF        /* Card background */
--border: #E8F0EB       /* Border mặc định */
--border2: #C6E8D1      /* Border nổi bật hơn */
--yellow: #D97706       /* Warning/important accent */
--red: #E53E3E          /* Critical/error accent */
```

**Rule màu sắc:**
- Accent color duy nhất trên page: `--green`
- Không dùng nhiều màu sắc khác nhau trên cùng 1 khu vực
- Inline `style="background:#..."` trong HTML: **cấm** — dùng class thay thế
- Nếu cần màu mới → thêm vào CSS variables, không hardcode

---

## Typography

- **Font:** Montserrat (Google Fonts, đã load sẵn)
- **Page title:** `1.6rem / weight 800`
- **Section heading (h3 trong domain-hdr):** `0.92rem / weight 700`
- **Card title (.concept-name):** `0.84rem / weight 700`
- **Body text (.concept-desc):** `0.80rem / line-height 1.65`
- **Labels/badges (uppercase):** `0.68–0.72rem / weight 700 / letter-spacing 0.7px`
- **Secondary text:** `0.77rem / color var(--txt2)`

---

## Component System

### 1. Domain Block (collapsible section)

Dùng cho: các phần kiến thức lớn có thể thu gọn.

```html
<div class="domain-block" id="domain-xyz">
  <div class="domain-hdr" onclick="toggleDomain(this)">
    <div class="d-num">I</div>          <!-- Số La Mã: I, II, III·1... -->
    <div class="d-meta">
      <div class="d-step">Label nhỏ</div>   <!-- context label, màu green -->
      <h3>Tên section</h3>
      <p>Mô tả ngắn</p>
    </div>
    <div class="d-pct">Badge</div>      <!-- badge pill xám -->
    <span class="d-arrow">▾</span>
  </div>
  <div class="domain-body">
    <!-- content -->
  </div>
</div>
```

**Numbering:** Dùng số La Mã (I, II, III, IV, V). Sub-items: III·1, III·2, III·3.  
**Không dùng emoji làm icon** trong domain-hdr.

### 2. Domain Group (nhóm nhiều domain-block)

Dùng khi: cần gom nhiều domain-block liên quan vào 1 group có thể collapse.

```html
<div class="domain-group">
  <div class="domain-group-hdr" onclick="toggleGroup(this)">
    <div class="d-num">III</div>
    <div class="d-meta">
      <div class="d-step">Label</div>
      <h3>Tên group</h3>
      <p>Mô tả</p>
    </div>
    <div class="d-pct">Badge</div>
    <span class="d-arrow">▾</span>
  </div>
  <div class="domain-group-body">
    <!-- domain-block items -->
  </div>
</div>
```

### 3. Topic Group (nhóm nhỏ trong domain-body)

```html
<div class="topic-group">
  <div class="topic-group-hdr">Tiêu đề nhóm</div>
  <!-- concept-cards -->
</div>
```

### 4. Concept Card — Hệ thống 3 loại

**Chỉ có 3 loại card, dùng nhất quán:**

| Class | Border-left | Dùng khi |
|-------|-------------|----------|
| *(default)* | không có | Nội dung thông thường |
| `.imp` | vàng (`--yellow`) | ⚠️ Quan trọng, hay bị nhầm, cần chú ý |
| `.good` | xanh lá (`--green`) | ✅ Best practice, đáp án đúng, ghi nhớ |
| `.crit` | đỏ (`--red`) | 🚫 Cảnh báo, sai lầm phổ biến, cấm |

```html
<div class="concept-card">           <!-- default -->
<div class="concept-card imp">       <!-- important -->
<div class="concept-card good">      <!-- best practice -->
<div class="concept-card crit">      <!-- critical warning -->
```

**Bên trong concept-card:**
```html
<div class="concept-card imp">
  <div class="concept-name">Tiêu đề card</div>
  <div class="concept-desc">Nội dung...</div>
  <div class="concept-ex">💡 Ghi nhớ / tip thi</div>  <!-- optional -->
</div>
```

**Rule:**
- Mỗi topic-group: tối đa 1–2 card `.imp` hoặc `.good`, không dùng cả 4 loại cùng lúc
- `.crit` dùng tiết kiệm — chỉ khi thực sự là lỗi nghiêm trọng
- Không mix inline background color vào card

### 5. Info Box & Tip Box

Dùng cho: đoạn intro ngắn đầu section, không phải card nội dung.

```html
<div class="info-box"><strong>Label:</strong> Nội dung...</div>
<div class="tip-box"><strong>Tip:</strong> Nội dung...</div>
```

- `info-box`: border-left xám — thông tin context trung tính
- `tip-box`: border-left vàng — lưu ý, mẹo quan trọng
- Không lồng card bên trong info-box/tip-box

### 6. Comparison Table

```html
<table class="cmp-table">
  <tr><th>Tiêu chí</th><th>Option A</th><th>Option B</th></tr>
  <tr><td>...</td><td>...</td><td>...</td></tr>
</table>
```

---

## Layout Rules

- **Sidebar:** 260px, collapsible về 68px. Không thêm sidebar thứ 2.
- **Content area:** `margin-left: var(--sidebar-w)`, max-width 1100px
- **Page sections:** dùng class `.page-section`, toggle bằng `showPage()`
- **K-panels (tab trong Kiến thức):** dùng class `.k-panel`, toggle bằng `showKTab()`
- **Practice tabs:** `.practice-tab`, toggle bằng `showPracticeTab()`

---

## Things to Avoid

- ❌ Inline `style="background:#..."` hoặc `style="color:#..."` trong HTML
- ❌ Mỗi component 1 màu khác nhau (loạn màu)
- ❌ Dùng emoji làm icon trong domain-hdr (dùng d-num thay thế)
- ❌ Lồng box trong box trong box (tối đa 2 cấp: card > concept-ex)
- ❌ Dùng `fetch()` để load file local (CORS issue)
- ❌ String replacement trực tiếp trên file lớn mà không xem cấu trúc trước
- ❌ Sửa CSS mà không check xem class đó có dùng ở chỗ khác không

## Safe Edit Process

1. Xem cấu trúc code vùng cần sửa trước (`grep`, `sed -n`, `python3 -c`)
2. Verify div balance sau khi sửa HTML (opens == closes)
3. Với sửa lớn: backup trước, dùng Python script thay vì string replace thủ công
4. Test bằng cách check key elements còn tồn tại sau khi sửa
