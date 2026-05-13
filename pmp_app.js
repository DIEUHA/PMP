// PMP Master Guide — App Logic
    var TOPICS = {
      risk: {
        kw: ['risk', 'threat', 'opportunity', 'mitigate', 'transfer', 'contingency', 'probability', 'workaround', 'risk register', 'residual', 'secondary', 'trigger'], lbl: 'Risk Management', anchor: '#risk-knowledge',
        tips: ['Rủi ro cần xử lý proactively. Known unknowns dung Contingency Reserve (PM quyen dung), Unknown unknowns dung Management Reserve (can Sponsor phe duyet).', 'Negative responses: Avoid (loai bo hoan toan), Transfer (bao hiem/hop dong - khong loai bo chi chuyen financial consequence), Mitigate (giam xac suat/tac dong), Accept.', 'Khi risk xay ra ma khong co plan: dung Workaround (xu ly ngay luc do), sau do document va cap nhat Risk Register ngay.', 'Risk identification la qua trinh LIEN TUC suot du an - khong chi lam 1 lan o dau du an.']
      },
      stakeholder: {
        kw: ['stakeholder', 'sponsor', 'resistant', 'neutral', 'supportive', 'leading', 'engagement', 'power', 'interest', 'influence', 'expectation', 'register'], lbl: 'Stakeholder Management', anchor: '#stakeholder-knowledge',
        tips: ['Xac dinh stakeholders cang som cang tot - ngay Initiation, truoc khi project charter duoc ky. Stakeholder Register can cap nhat lien tuc.', 'Khi stakeholder Resistant: PM PHAI chu dong gap go, tim hieu nguyen nhan va address concerns - khong bo qua hay ne tranh.', 'Power/Interest Grid: High Power + High Interest => Manage Closely (engage thuong xuyen nhat, bao cao chi tiet).', 'Muc tieu: chuyen stakeholders tu Resistant/Neutral sang Supportive/Leading qua communication va engagement.']
      },
      conflict: {
        kw: ['conflict', 'disagree', 'dispute', 'tension', 'argue', 'friction', 'confrontation', 'interpersonal'], lbl: 'Conflict Resolution', anchor: '#conflict-knowledge',
        tips: ['Tot nhat: Collaborate/Problem Solve - tat ca ben cung tim giai phap win-win. Giai quyet duoc goc re van de.', 'Withdraw/Avoid la cach TE NHAT - khong giai quyet van de, van de se tro nen te hon theo thoi gian.', 'Conflict la binh thuong trong du an - dac biet o giai doan Storming. Healthy conflict thuc day sang tao.', 'Force chi dung khi khan cap - tao ra win-lose va co the gay resentment lau dai trong team.']
      },
      team: {
        kw: ['team member', 'motivat', 'morale', 'recogni', 'reward', 'tuckman', 'forming', 'storming', 'norming', 'performing', 'self-organ', 'psychological safety', 'virtual team'], lbl: 'Team Development', anchor: '#team-knowledge',
        tips: ['Servant leadership: PM phuc vu team - loai bo obstacles, khong micromanage. Dat cau hoi "team can gi?" thay vi "team phai lam gi?".', 'Tuckman stages: Forming=>Storming(xung dot)=>Norming=>Performing(hieu qua)=>Adjourning. PM ho tro khac nhau o moi stage.', 'Herzberg: Motivators thuc su la achievement, recognition, growth (khong phai luong hay moi truong lam viec).', 'Theory Y: nhan vien tu giac, muon duoc trao quyen va co y nghia trong cong viec. PMP ung ho Theory Y.']
      },
      communication: {
        kw: ['communicat', 'report', 'meeting', 'inform', 'notify', 'feedback', 'update', 'status', 'announce', 'transparent'], lbl: 'Communication Management', anchor: '#comm-knowledge',
        tips: ['Khi co tin xau: PM phai communicate SOM va TRUC TIEP voi stakeholders - khong tri hoan hay che giau vi "so mat long".', 'Communication channels = n x (n-1)/2. Them 5 nguoi co the tang hang tram kenh - giai thich tai sao team lon khong phai luc nao cung nhanh hon.', 'Interactive (meeting/call) tot hon Push (email) cho van de phuc tap can 2 chieu thao luan va quyet dinh.', 'PM can xay dung Communications Management Plan: ai can biet gi, khi nao, qua kenh nao, voi tan suat bao nhieu.']
      },
      scope: {
        kw: ['scope', 'wbs', 'requirement', 'deliverable', 'feature', 'backlog', 'gold plat', 'creep', 'change request', 'acceptance', 'user story'], lbl: 'Scope Management', anchor: '#scope-knowledge',
        tips: ['Scope Creep: stakeholder yeu cau them feature khong qua change control - PM phai yeu cau formal change request, du change co ve nho.', 'Gold Plating: chinh PM/team tu y them tinh nang khong duoc yeu cau - KHONG duoc lam du co y tot.', 'WBS la nen tang cua planning: phan ra cong viec thanh work packages co the estimate va assign duoc cho team.', 'Moi thay doi anh huong den scope/schedule/cost baseline deu PHAI qua CCB (Change Control Board).']
      },
      change: {
        kw: ['change control', 'ccb', 'baseline', 'approve', 'reject', 'integrated change', 'change request', 'change management'], lbl: 'Change Management', anchor: '#scope-knowledge',
        tips: ['Dung quy trinh: Nhan request => Phan tich impact => Submit CCB => Phe duyet => Cap nhat plans & baselines => Notify stakeholders.', 'PM KHONG co quyen tu phe duyet change anh huong den baseline ma khong co su dong y cua CCB.', 'Khong chap nhan verbal changes - moi change phai bang van ban truoc khi thuc hien, de tranh hieu nham sau nay.', 'Corrective action (dieu chinh de ve baseline) co the khong can CCB neu nam trong nguong variance da duoc thoa thuan.']
      },
      schedule: {
        kw: ['schedule', 'delay', 'critical path', 'float', 'slack', 'milestone', 'fast track', 'crash', 'deadline', 'behind schedule', 'ahead of schedule', 'resource leveling'], lbl: 'Schedule Management', anchor: '#schedule-knowledge',
        tips: ['Khi can rut ngan tien do: Fast Tracking truoc (lam song song - khong ton tien nhung tang risk), sau do moi Crashing (them resource - ton tien hon).', 'Critical Path luon co float = 0. Delay bat ky task nao tren Critical Path se delay toan bo du an - can monitor sat.', 'Resource Leveling co the keo dai project duration. Chi dung khi khong the overload resource. Resource Smoothing khong thay doi critical path.', 'Milestone co duration = 0. Danh dau diem ket thuc giai doan quan trong, khong phai la cong viec can lam.']
      },
      cost: {
        kw: ['cost', 'budget', 'evm', 'cpi', 'spi', 'earned value', 'planned value', 'actual cost', 'bac', 'eac', 'overrun', 'reserve', 'variance', 'estimate'], lbl: 'Cost & EVM', anchor: '#cost-knowledge',
        tips: ['EAC = BAC/CPI la cong thuc pho bien nhat trong exam khi hoi ve forecast tong chi phi khi du an ket thuc.', 'CPI = EV/AC: >1 tot (under budget - dang tiet kiem), <1 xau (over budget - dang vuot ngan sach). Khi ca CPI<1 va SPI<1 => bao cao Sponsor ngay.', 'Contingency Reserve: cho known unknowns, PM co quyen dung. Management Reserve: cho unknown unknowns, can Sponsor/Management phe duyet.', 'Nho: EV luon dung dau trong cac cong thuc variance va index: CV = EV-AC, SV = EV-PV, CPI = EV/AC, SPI = EV/PV.']
      },
      quality: {
        kw: ['quality', 'defect', 'qa', 'qc', 'control chart', 'pareto', 'fishbone', 'inspection', 'prevention', 'rework', 'continuous improvement', 'kaizen'], lbl: 'Quality Management', anchor: '#quality-knowledge',
        tips: ['QA = kiem tra QUY TRINH lam viec (phong ngua loi). QC = kiem tra SAN PHAM dau ra (phat hien loi). Dau tu vao QA tot se giam effort cho QC.', 'Prevention over Inspection: dau tu vao phong ngua loi re hon nhieu so voi sua loi sau khi san pham da duoc tao ra.', '7-point rule tren Control Chart: 7 diem lien tiep cung phia duong mean => quy trinh out of control, can investigate du chua vuot gioi han.', 'Pareto (80/20): 80% loi do 20% nguyen nhan - focus vao 20% nguyen nhan do truoc de giai quyet hau het van de.']
      },
      agile: {
        kw: ['agile', 'scrum', 'sprint', 'kanban', 'retrospective', 'backlog', 'product owner', 'scrum master', 'velocity', 'burndown', 'iteration', 'adaptive', 'hybrid', 'increment', 'impediment'], lbl: 'Agile & Hybrid', anchor: '#agile-knowledge',
        tips: ['Sprint Review = demo cho STAKEHOLDERS ve PRODUCT, thu feedback. Sprint Retrospective = cai thien PROCESS noi bo team - hai cai khac nhau hoan toan.', 'Servant leadership trong Agile: PM/SM loai bo impediments, khong ra lenh. Team tu to chuc va quyet dinh HOW de hoan thanh cong viec.', 'Product Owner quyet dinh WHAT va priority cua backlog. Development Team quyet dinh HOW va estimate effort. SM facilitate.', '~50% cau hoi PMP exam lien quan Agile/Hybrid. Hieu Agile mindset (trust team, deliver value, inspect & adapt) quan trong khong kem PMBOK.']
      },
      procurement: {
        kw: ['procure', 'contract', 'vendor', 'supplier', 'fixed price', 'cost plus', 'time and material', 'make or buy', 'sow', 'rfp'], lbl: 'Procurement Management', anchor: '#proc-knowledge',
        tips: ['Fixed Price: buyer biet truoc chi phi, seller chiu risk neu estimate sai. Phu hop khi scope ro rang va on dinh.', 'Cost Plus: buyer chiu risk chi phi cao hon du kien. Phu hop khi scope chua ro hoac cong viec R&D kho estimate.', 'T&M (Time & Material): tra theo gio lam + vat tu thuc te. Dung cho cong viec scope nho hoac chua xac dinh duoc scope.', 'Transfer risk (bao hiem, hop dong) KHONG loai bo risk - chi chuyen financial consequence sang ben khac.']
      },
      biz: {
        kw: ['business case', 'benefit', 'strategic', 'governance', 'compliance', 'legal', 'regulation', 'pmo', 'portfolio', 'program', 'value', 'outcome'], lbl: 'Business Environment', anchor: '#biz-knowledge',
        tips: ['Du an phai align voi chien luoc to chuc. Neu khong con align do business thay doi => PM phai bao cao management de quyet dinh tiep tuc/dung.', 'PM phai tuan thu phap luat ke ca khi Sponsor yeu cau vi pham. Khong co ngoai le - day la PMI Code of Ethics.', 'PMI Code of Ethics: Responsibility (chiu trach nhiem), Respect (ton trong), Fairness (cong bang), Honesty (trung thuc).', 'Business Case do Sponsor chuan bi va maintain (khong phai PM). Benefits Realization thuong do Business Owner sau khi project ket thuc.']
      },
      general: {
        kw: [], lbl: 'Project Management', anchor: '#domain-people',
        tips: ['PM ly tuong theo PMI: proactive (chu dong), collaborative (hop tac), ethical (dao duc), follows process (tuan thu quy trinh), empowers team (trao quyen).', 'Khi gap van de: luon investigate root cause truoc khi dua ra hanh dong - khong jump to solution ngay khi chua hieu nguyen nhan.', 'Communicate som voi stakeholders khi co van de hoac risks - khong cho den khi qua muon va mat co hoi xu ly.', 'Luon follow formal process (change control, risk management) - khong tu y shortcut du co ap luc thoi gian tu sponsor hay customer.']
      }
    };

    var SRC_COLORS = { 'Exam 800': '#3B82F6', 'ExamTopics P1': '#8B5CF6', 'ExamTopics P2': '#06B6D4' };
    var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];
    var filteredQs = ALL_QUESTIONS.slice();
    var curIdx = 0, selAns = null, answered = false;
    var score = 0, attempted = 0, curAnchor = '#domain-people';
    var sidebarCollapsed = false;

    function detectTopic(q) {
      var ql = (q || '').toLowerCase();
      var keys = Object.keys(TOPICS);
      for (var i = 0; i < keys.length; i++) {
        var t = keys[i];
        if (t === 'general') continue;
        var kws = TOPICS[t].kw;
        for (var j = 0; j < kws.length; j++) {
          if (ql.indexOf(kws[j]) >= 0) return t;
        }
      }
      return 'general';
    }

    function loadQ() {
      if (!filteredQs.length) return;
      var q = filteredQs[curIdx];
      answered = false; selAns = null;
      document.getElementById('qNumTag').textContent = q.id || ('Q' + (curIdx + 1));
      var srcTag = document.getElementById('qSrcTag');
      srcTag.textContent = q.src;
      srcTag.style.background = SRC_COLORS[q.src] || '#64748b';
      document.getElementById('qText').textContent = q.q;
      var list = document.getElementById('ansList');
      list.innerHTML = '';
      for (var i = 0; i < q.ans.length; i++) {
        (function (idx) {
          var a = q.ans[idx];
          var div = document.createElement('div');
          div.className = 'ans-item';
          var ltr = document.createElement('span');
          ltr.className = 'ans-letter';
          ltr.textContent = LETTERS[idx] || String(idx + 1);
          var txt = document.createElement('span');
          txt.className = 'ans-txt';
          txt.textContent = a.a;
          div.appendChild(ltr);
          div.appendChild(txt);
          div.onclick = function () { if (!answered) selectAns(idx, div); };
          list.appendChild(div);
        })(i);
      }
      document.getElementById('submitBtn').disabled = true;
      document.getElementById('submitBtn').style.display = '';
      document.getElementById('nextBtn').style.display = 'none';
      var expBox = document.getElementById('expBox');
      expBox.className = 'exp-box';
      var pct = filteredQs.length > 0 ? ((curIdx + 1) / filteredQs.length * 100).toFixed(1) : 0;
      document.getElementById('progBar').style.width = pct + '%';
      document.getElementById('qCounter').textContent = (curIdx + 1) + ' / ' + filteredQs.length;
      updateSidebarScore();
    }

    function selectAns(idx, el) {
      selAns = idx;
      var items = document.querySelectorAll('.ans-item');
      for (var i = 0; i < items.length; i++) items[i].classList.remove('sel');
      el.classList.add('sel');
      document.getElementById('submitBtn').disabled = false;
    }

    function submitAns() {
      if (selAns === null || answered) return;
      answered = true; attempted++;
      var q = filteredQs[curIdx];
      var correctIdx = -1;
      for (var i = 0; i < q.ans.length; i++) { if (q.ans[i].c) { correctIdx = i; break; } }
      var isOk = selAns === correctIdx;
      if (isOk) score++;
      var items = document.querySelectorAll('.ans-item');
      for (var i = 0; i < items.length; i++) {
        items[i].classList.add('disabled');
        if (i === correctIdx) items[i].classList.add('rev-ok');
        else if (i === selAns && !isOk) items[i].classList.add('rev-fail');
      }
      var topic = detectTopic(q.q);
      var info = TOPICS[topic] || TOPICS.general;
      var tipIdx = Math.abs((q.q || '').length + curIdx) % info.tips.length;
      curAnchor = info.anchor;
      var expBox = document.getElementById('expBox');
      expBox.className = 'exp-box show ' + (isOk ? 'ok' : 'fail');
      document.getElementById('expResult').innerHTML = isOk
        ? '<span style="font-size:1.3rem">✅</span> Chính xác!'
        : '<span style="font-size:1.3rem">❌</span> Chưa đúng';
      document.getElementById('expAns').textContent = 'Đáp án đúng: ' + q.ans[correctIdx].a;
      document.getElementById('expTip').innerHTML = '<b>' + info.lbl + ':</b> ' + info.tips[tipIdx];
      document.getElementById('expKnowBtn').textContent = 'Xem kiến thức: ' + info.lbl + ' →';
      document.getElementById('submitBtn').style.display = 'none';
      document.getElementById('nextBtn').style.display = '';
      updateScore();
      expBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function goToKnow() {
      showPage('knowledge');
      showKTab('domains');
      setTimeout(function () {
        var el = document.querySelector(curAnchor);
        if (!el) el = document.getElementById('domain-people');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          var origBorder = el.style.border;
          el.style.border = '2px solid var(--green)';
          setTimeout(function () { el.style.border = origBorder; }, 2500);
        }
      }, 150);
    }

    function nextQ() { if (curIdx < filteredQs.length - 1) { curIdx++; loadQ(); window.scrollTo(0, 0); } }
    function prevQ() { if (curIdx > 0) { curIdx--; loadQ(); window.scrollTo(0, 0); } }
    function randQ() { curIdx = Math.floor(Math.random() * filteredQs.length); loadQ(); }
    function doJump() {
      var n = parseInt(document.getElementById('jumpInp').value, 10) - 1;
      if (!isNaN(n) && n >= 0 && n < filteredQs.length) { curIdx = n; loadQ(); }
    }

    function setSource(src, btn) {
      document.querySelectorAll('.src-pill').forEach(function (b) { b.classList.remove('on'); });
      if (btn) btn.classList.add('on');
      filteredQs = src === 'all' ? ALL_QUESTIONS.slice() : ALL_QUESTIONS.filter(function (q) { return q.src === src; });
      curIdx = 0; score = 0; attempted = 0; updateScore(); loadQ();
    }

    function updateScore() {
      var pct = attempted > 0 ? Math.round(score / attempted * 100) : 0;
      document.getElementById('scoreDisp').innerHTML = '<span>' + score + '</span>/' + attempted + ' (' + pct + '%)';
      updateSidebarScore();
    }

    function updateSidebarScore() {
      var pct = attempted > 0 ? Math.round(score / attempted * 100) : 0;
      var el = document.getElementById('sbScore');
      if (el) el.textContent = score + '/' + attempted + ' — ' + pct + '%';
      var el2 = document.getElementById('sbCur');
      if (el2) el2.textContent = 'Question ' + (curIdx + 1) + '/' + filteredQs.length;
    }

    function showPracticeTab(tab) {
      document.querySelectorAll('.practice-tab').forEach(function(t) { t.classList.remove('active'); });
      var el = document.getElementById('ptab-' + tab);
      if (el) el.classList.add('active');
      document.querySelectorAll('.ptab-btn').forEach(function(b) { b.classList.remove('active'); });
      var btn = document.getElementById('ptabBtn-' + tab);
      if (btn) btn.classList.add('active');
      if (tab === 'scenario') { initScenarioTab(); }
      if (tab === 'chart') { initChartTab(); }
      if (tab === 'drag') { initDragTab(); }
    }

    function showPage(page) {
      document.querySelectorAll('.page-section').forEach(function (s) { s.classList.remove('active'); });
      var el = document.getElementById('page-' + page);
      if (el) el.classList.add('active');
      document.querySelectorAll('.nav-btn.main-btn').forEach(function (b) { b.classList.remove('active'); });
      var mb = document.querySelector('.nav-btn[data-page="' + page + '"]');
      if (mb) mb.classList.add('active');
      var kSub = document.getElementById('kSubnav');
      if (kSub) kSub.style.display = page === 'knowledge' ? 'block' : 'none';
      if (page === 'practice') showPracticeTab('mcq');
    }

    function showKTab(tab) {
      document.querySelectorAll('.k-panel').forEach(function (p) { p.classList.remove('active'); });
      var el = document.getElementById('kp-' + tab);
      if (el) el.classList.add('active');
      document.querySelectorAll('.nav-btn.sub-btn').forEach(function (b) { b.classList.remove('active'); });
      var sb = document.querySelector('.nav-btn[data-tab="' + tab + '"]');
      if (sb) sb.classList.add('active');
    }

    function toggleSidebar() {
      sidebarCollapsed = !sidebarCollapsed;
      var sb = document.getElementById('sidebar');
      var ct = document.getElementById('contentArea');
      if (sidebarCollapsed) { sb.classList.add('collapsed'); ct.classList.add('collapsed'); }
      else { sb.classList.remove('collapsed'); ct.classList.remove('collapsed'); }
    }

    function toggleGroup(hdr) {
      hdr.closest('.domain-group').classList.toggle('collapsed');
    }

    function toggleDomain(hdr) {
      hdr.closest('.domain-block').classList.toggle('collapsed');
    }

    function toggleVocabSection(hdr) {
      hdr.closest('.vocab-section').classList.toggle('collapsed');
    }

    function searchVocab(q) {
      var ql = (q || '').toLowerCase().trim();
      document.querySelectorAll('.vcard').forEach(function (c) {
        c.classList.toggle('hidden', ql.length > 0 && c.textContent.toLowerCase().indexOf(ql) < 0);
      });
      document.querySelectorAll('.vocab-section').forEach(function (sec) {
        if (!ql) { sec.classList.remove('all-hidden'); return; }
        var hasVisible = false;
        sec.querySelectorAll('.vcard').forEach(function (c) { if (!c.classList.contains('hidden')) hasVisible = true; });
        sec.classList.toggle('all-hidden', !hasVisible);
      });
    }

    window.addEventListener('DOMContentLoaded', function () {
      loadQ();
      showPage('knowledge');
      showKTab('vocab');
      document.getElementById('jumpInp').addEventListener('keydown', function (e) { if (e.key === 'Enter') doJump(); });
    });
  
  /* ── Calculation Practice JS ── */
  var CALC = {
    '1': {
      fields: {
        ev:  {lbl:'EV', ans:25000,  tol:200,  fmt:'$', note:'EV = 25% × $100,000 = <strong>$25,000</strong>'},
        cpi: {lbl:'CPI', ans:0.926, tol:0.02, fmt:'',  note:'CPI = EV/AC = 25,000/27,000 = <strong>0.926</strong> (< 1: vượt ngân sách)'},
        spi: {lbl:'SPI', ans:0.5,   tol:0.01, fmt:'',  note:'SPI = EV/PV = 25,000/50,000 = <strong>0.5</strong> (< 1: chậm tiến độ nghiêm trọng)'}
      },
      conclusion: 'CPI < 1 và SPI < 1 → Dự án <strong>vượt ngân sách</strong> và <strong>chậm tiến độ</strong> nghiêm trọng.'
    },
    '2': {
      fields: {
        eac: {lbl:'EAC', ans:108000, tol:500,  fmt:'$', note:'EAC = BAC/CPI = 100,000 / 0.926 ≈ <strong>$108,000</strong>'},
        etc: {lbl:'ETC', ans:81000,  tol:500,  fmt:'$', note:'ETC = EAC − AC = 108,000 − 27,000 = <strong>$81,000</strong>'},
        vac: {lbl:'VAC', ans:-8000,  tol:500,  fmt:'$', note:'VAC = BAC − EAC = 100,000 − 108,000 = <strong>−$8,000</strong> (dự án lỗ)'}
      },
      conclusion: 'Dự án dự kiến <strong>vượt $8,000</strong> so với ngân sách ban đầu. PM cần báo cáo Sponsor ngay.'
    },
    '3': {
      fields: {
        tcpi: {lbl:'TCPI', ans:1.027, tol:0.02, fmt:'', note:'TCPI = (BAC−EV)/(BAC−AC) = 75,000/73,000 = <strong>1.027</strong>'}
      },
      conclusion: 'TCPI > 1 → Để hoàn thành đúng ngân sách, hiệu quả phần còn lại phải <strong>cao hơn 2.7%</strong> so với hiệu suất hiện tại.'
    },
    '4': {
      fields: {
        ev: {lbl:'EV', ans:105000, tol:500,  fmt:'$', note:'EV = 70% × $150,000 = <strong>$105,000</strong>'},
        cv: {lbl:'CV', ans:10000,  tol:200,  fmt:'$', note:'CV = EV − AC = 105,000 − 95,000 = <strong>+$10,000</strong> (đang tiết kiệm chi phí)'},
        sv: {lbl:'SV', ans:15000,  tol:200,  fmt:'$', note:'SV = EV − PV = 105,000 − 90,000 = <strong>+$15,000</strong> (đang đi trước kế hoạch)'}
      },
      conclusion: 'CV > 0 và SV > 0 → Dự án <strong>dưới ngân sách</strong> và <strong>trước tiến độ</strong>. Tuyệt vời!'
    },
    '5': {
      fields: {
        eac: {lbl:'EAC (atypical)', ans:78000, tol:500, fmt:'$', note:'EAC = AC + (BAC−EV) = 38,000 + (80,000−40,000) = <strong>$78,000</strong>. Giả sử phần còn lại thực hiện đúng ngân sách.'}
      },
      conclusion: 'EAC = $78,000 < BAC = $80,000 → Dự án <strong>dưới ngân sách $2,000</strong>. Dùng công thức atypical khi hiệu suất xấu chỉ là tạm thời.'
    },
    '6': {
      fields: {
        e:  {lbl:'E (giờ)', ans:5.17, tol:0.05, fmt:'', note:'E = (O+4M+P)/6 = (4+20+7)/6 = 31/6 = <strong>5.17 giờ</strong>'},
        sd: {lbl:'SD (giờ)', ans:0.5, tol:0.02, fmt:'', note:'SD = (P−O)/6 = (7−4)/6 = 3/6 = <strong>0.5 giờ</strong>'}
      },
      conclusion: 'Khoảng ±1σ: 4.67 → 5.67 giờ (68% confidence). Khoảng ±2σ: 4.17 → 6.17 giờ (95% confidence).'
    },
    '7': {
      fields: {
        e:  {lbl:'E (ngày)', ans:9,   tol:0.1,  fmt:'', note:'E = (2+32+20)/6 = 54/6 = <strong>9 ngày</strong>'},
        sd: {lbl:'SD (ngày)', ans:3,  tol:0.1,  fmt:'', note:'SD = (20−2)/6 = 18/6 = <strong>3 ngày</strong> — dải rộng = nhiều rủi ro hơn'}
      },
      conclusion: 'SD = 3 ngày rất lớn so với E = 9 ngày → Bài toán này có <strong>độ bất định cao</strong>. PM nên thêm buffer.'
    },
    '8': {
      fields: {
        tri:  {lbl:'Triangular', ans:5.33, tol:0.05, fmt:'', note:'Triangular = (O+M+P)/3 = (4+5+7)/3 = 16/3 = <strong>5.33</strong>'},
        beta: {lbl:'Beta/PERT',  ans:5.17, tol:0.05, fmt:'', note:'Beta/PERT = (O+4M+P)/6 = (4+20+7)/6 = <strong>5.17</strong> (M có trọng số cao hơn)'}
      },
      conclusion: 'Beta cho kết quả nhỏ hơn Triangular vì <strong>coi trọng Most Likely hơn</strong>. PMP exam thường dùng công thức Beta.'
    },
    '9': {
      fields: {
        emv: {lbl:'Tổng EMV', ans:3000, tol:50, fmt:'$', note:'EMV = (0.4×10,000) + (0.2×−5,000) = 4,000 − 1,000 = <strong>$3,000</strong>'}
      },
      conclusion: 'EMV dương = kỳ vọng có lợi. PM có thể dùng $3,000 làm phần của contingency reserve.'
    },
    '10': {
      fields: {
        reserve: {lbl:'Contingency Reserve', ans:14500, tol:100, fmt:'$',
          note:'A: 0.3×20,000=$6,000 | B: 0.5×8,000=$4,000 | C: 0.15×30,000=$4,500 | Tổng = <strong>$14,500</strong>'}
      },
      conclusion: 'Contingency Reserve $14,500 dành cho <strong>known unknowns</strong> (rủi ro đã xác định). PM có quyền sử dụng trực tiếp.'
    },
    '11': {
      fields: {
        emv_a: {lbl:'EMV Option A', ans:125000, tol:1000, fmt:'$', note:'0.7×200,000 + 0.3×(−50,000) = 140,000−15,000 = <strong>$125,000</strong>'},
        emv_b: {lbl:'EMV Option B', ans:90000,  tol:100,  fmt:'$', note:'Chắc chắn = <strong>$90,000</strong>'}
      },
      conclusion: 'Option A (EMV=$125,000) > Option B ($90,000) → <strong>Chọn Option A</strong>. Tuy nhiên, cần xem xét risk tolerance của tổ chức.'
    },
    '12': {
      fields: {
        cp: {lbl:'Đường găng', ans:17, tol:0, fmt:'', note:'Path A→B→D→E = 2+6+8+1 = <strong>17 ngày</strong>. Path A→C = 2+4=6 ngày (không kết nối đến cuối).'}
      },
      conclusion: 'Đường găng = <strong>17 ngày</strong>. Delay bất kỳ task nào trong A→B→D→E đều delay toàn dự án.'
    },
    '13': {
      fields: {
        float: {lbl:'Total Float B', ans:2, tol:0, fmt:'', note:'Float = CP − Path có B = 14 − 12 = <strong>2 ngày</strong>. Task B có thể trễ tối đa 2 ngày mà không ảnh hưởng dự án.'}
      },
      conclusion: 'Float = 2 ngày. Task B <strong>không nằm trên Critical Path</strong> và có một chút linh hoạt về thời gian.'
    },
    '14': {
      fields: {
        days: {lbl:'Ngày hoà vốn', ans:100, tol:0, fmt:'', note:'210,000 = 2,000×n + 10,000 → 200,000 = 2,000×n → n = <strong>100 ngày</strong>'}
      },
      conclusion: 'Từ ngày thứ <strong>101 trở đi, mua sẽ rẻ hơn thuê</strong>. Nếu dự án ngắn hơn 100 ngày → nên thuê.'
    },
    '15': {
      fields: {
        ch8:  {lbl:'8 người', ans:28, tol:0, fmt:'', note:'8×(8−1)/2 = 56/2 = <strong>28 kênh</strong>'},
        ch10: {lbl:'10 người', ans:45, tol:0, fmt:'', note:'10×(10−1)/2 = 90/2 = <strong>45 kênh</strong>'},
        new:  {lbl:'Kênh mới', ans:17, tol:0, fmt:'', note:'45 − 28 = <strong>17 kênh mới</strong> phát sinh khi thêm 2 người'}
      },
      conclusion: 'Thêm 2 người → tăng thêm <strong>17 kênh giao tiếp</strong>. Đây là lý do team lớn không phải lúc nào cũng hiệu quả hơn!'
    }
  };

  function checkCalc(id) {
    var prob = CALC[id];
    if (!prob) return;
    var allOk = true;
    var rows = '';
    for (var k in prob.fields) {
      var f = prob.fields[k];
      var inp = document.getElementById('ci-' + id + '-' + k);
      if (!inp) continue;
      var raw = inp.value.replace(/,/g, '').trim();
      if (raw === '') {
        allOk = false;
        inp.className = '';
        rows += '<div class="cr-row cr-err">⚠️ ' + f.lbl + ': chưa nhập</div>';
        continue;
      }
      var val = parseFloat(raw);
      var ok = Math.abs(val - f.ans) <= f.tol;
      if (!ok) allOk = false;
      inp.className = ok ? 'inp-ok' : 'inp-err';
      rows += '<div class="cr-row ' + (ok ? 'cr-ok' : 'cr-err') + '">' + (ok ? '✅' : '❌') + ' ' + f.lbl + ': ' + f.note + '</div>';
    }
    var status = allOk ? '🎉 Tất cả đúng! Xuất sắc!' : '💡 Có ô chưa đúng — xem giải thích bên dưới';
    var box = document.getElementById('cr-' + id);
    box.innerHTML = (
      '<div class="cr-status ' + (allOk ? 'cr-all-ok' : 'cr-has-err') + '">' + status + '</div>' +
      '<div class="cr-rows">' + rows + '</div>' +
      '<div class="cr-explain"><strong>📝 Kết luận:</strong> ' + prob.conclusion + '</div>'
    );
    box.style.display = 'block';
  }

  /* ════════════════════════════════════════════
     SCENARIO-BASED QUESTIONS
  ════════════════════════════════════════════ */
  var SCENARIO_QUESTIONS = [
    {
      type: 'Scenario',
      context: 'You have just been assigned as PM on a project that is already behind schedule. The team is new and conflicts are occurring — members are blaming each other for uncompleted work.',
      question: 'What should the PM do NEXT?',
      opts: [
        'Immediately report the team conflict to the project sponsor.',
        'Facilitate the creation of a Team Charter to clarify roles, responsibilities, and ground rules for working together.',
        'Replace the team members causing conflict to stabilize the project.',
        'Update the risk register and document the conflict as a project risk.'
      ],
      correct: 1,
      explanation: 'When a new team experiences conflict due to unclear roles and expectations, the first step is to build a Team Charter. This document aligns the team on ground rules and responsibilities — addressing the root cause of the conflict rather than its symptoms.',
      tip: '💡 Team Charter ≠ Project Charter. The Team Charter is created BY the team to define HOW they will work together. PMBOK 7 emphasizes this as a key tool for high-performing teams.'
    },
    {
      type: 'Scenario',
      context: 'During a project scope meeting, the Business Director accuses the Technology Director of failing to meet requirements on previous projects. The Tech Director counters that the Business Director constantly changes requirements, impacting delivery. The conflict is escalating.',
      question: 'How should the PM handle this conflict?',
      opts: [
        'Ask the sponsor to step in and decide who is right.',
        'Side with the Tech Director since unmanaged scope changes are the root cause.',
        'Pause the meeting, speak privately with each party to understand their perspective, then refocus the discussion on the current issue — not past grievances.',
        'Document the conflict in the meeting minutes and continue the meeting as normal.'
      ],
      correct: 2,
      explanation: 'The Collaborate/Problem Solving technique requires the PM to focus on the issue, not the people, and work toward a joint solution. Speaking privately with each party uncovers the root cause, then the PM redirects to the present goal. Revisiting past failures prevents forward progress.',
      tip: '💡 PMI favors Collaborate (win-win). Never take sides. A PM must remain neutral and solution-focused. Avoid/Withdraw — never dodge conflict.'
    },
    {
      type: 'Scenario',
      context: 'Your Agile project is in Sprint 4. A highly influential C-level stakeholder approaches you and demands a new feature be added to the current sprint. This feature does not exist in the Product Backlog.',
      question: 'What is the PM/Scrum Master priority action?',
      opts: [
        'Immediately add the feature to the sprint backlog so the important stakeholder does not have to wait.',
        'Firmly decline since the sprint is running and scope cannot change.',
        'Acknowledge the request, add it to the Product Backlog, and work with the Product Owner to evaluate priority based on business value.',
        'Hold a full team vote on whether to add the feature to the sprint.'
      ],
      correct: 2,
      explanation: 'In Agile, all new requests must go through the Product Owner and Product Backlog — this IS the change control process. The PM does not add items to a running sprint. The PO will prioritize based on business value and the team will address it in a future sprint.',
      tip: '💡 The Sprint Goal is protected. No one — not even the CEO — can add to a running sprint without going through the PO and the formal process.'
    },
    {
      type: 'Scenario',
      context: 'A team member informs you that their task will be delayed by 3 days. This task is on the project Critical Path.',
      question: 'What should the PM do IMMEDIATELY?',
      opts: [
        'Update the schedule and send a delay report to the sponsor.',
        'Assess the impact on the overall project, evaluate options (fast-tracking, crashing, scope adjustment) and discuss with relevant stakeholders.',
        'Require the team member to work overtime to meet the original deadline.',
        'Use the schedule reserve to absorb the 3-day delay without notifying anyone.'
      ],
      correct: 1,
      explanation: 'When a Critical Path task is delayed, the PM must: (1) assess the full project impact, (2) evaluate recovery options (fast-tracking, crashing, scope adjustment), and (3) communicate with stakeholders. Acting early means more options are available.',
      tip: '💡 A delay on the Critical Path = delay to the entire project. The PM must act immediately, analyze fully, and communicate — never stay silent or react without analysis.'
    },
    {
      type: 'Scenario',
      context: 'The project is nearing its delivery date. The sponsor requests eliminating the testing phase to meet the deadline, arguing that "the team is experienced enough and there won\'t be any major defects."',
      question: 'How should the PM respond?',
      opts: [
        'Agree immediately — the sponsor has the authority to make this decision.',
        'Clearly present the risks of skipping testing, propose alternatives (reduced test scope, enhanced UAT), and require the decision to be documented in writing.',
        'Quietly conduct a reduced testing cycle without informing the sponsor.',
        'Refuse entirely, since testing is a mandatory process step.'
      ],
      correct: 1,
      explanation: 'The PM must ensure decisions are made with full information. It is the PM\'s responsibility to clearly present risks, propose alternatives, and if the sponsor still chooses to skip testing, obtain written acceptance of risk. The PM neither complies silently nor refuses without documenting the decision.',
      tip: '💡 "Document everything" — when a sponsor accepts a risk, the PM must have it in writing. This protects both the PM and the project.'
    },
    {
      type: 'Scenario',
      context: 'Mid-project, a new government regulation is enacted that directly affects a key project deliverable. This change was not anticipated in the project plan.',
      question: 'How should the PM respond?',
      opts: [
        'Quietly adjust the deliverable to comply without reporting the change.',
        'Immediately stop the project and await sponsor direction.',
        'Assess the impact, raise a formal change request, present it to the Change Control Board (CCB) for approval, and update baselines accordingly.',
        'Continue with the original plan and address the compliance issue after the project closes.'
      ],
      correct: 2,
      explanation: 'Any change impacting scope, schedule, or cost must go through Integrated Change Control. The PM needs to fully assess the impact and get CCB approval — baselines cannot be changed unilaterally, even when external forces such as new regulations trigger the change.',
      tip: '💡 "No undocumented changes" — every change must go through a change request, including externally-driven changes like new laws or regulations.'
    },
    {
      type: 'Scenario',
      context: 'Your Agile team just completed a Sprint Review. The Product Owner is dissatisfied with the delivered feature — it does not meet expectations, even though the team implemented all the written acceptance criteria.',
      question: 'What is the core issue, and what should the PM/SM do?',
      opts: [
        'The team did not work hard enough — increase working hours in the next sprint.',
        'The acceptance criteria were not written clearly enough. The SM should facilitate a retrospective to improve the process for writing user stories and AC with the PO going forward.',
        'The PO changed expectations during the sprint — this is the PO\'s fault.',
        'Accept the outcome and make no adjustments since the team met the requirements as written.'
      ],
      correct: 1,
      explanation: 'This is a sign that the Definition of Done and Acceptance Criteria were insufficiently clear. The Retrospective is the opportunity to inspect and adapt — the team and PO work together to improve how user stories and AC are written, ensuring alignment before the sprint begins.',
      tip: '💡 Sprint Review ≠ Sprint Retrospective. Review = inspect the product. Retrospective = improve the process. These are two distinct Scrum events.'
    },
    {
      type: 'Scenario',
      context: 'You receive an EVM status report: CPI = 0.72, SPI = 0.85. The project has a BAC of $500,000 and is at the midpoint.',
      question: 'What is the project status and what should the PM prioritize?',
      opts: [
        'The project is over budget and behind schedule — prioritize identifying the root cause of the cost overrun and discussing corrective actions with the team.',
        'The project is within budget but behind schedule — only the schedule needs adjustment.',
        'The project is over budget but on schedule — no concern since the timeline is fine.',
        'Both indicators are positive — the project is progressing normally.'
      ],
      correct: 0,
      explanation: 'CPI = 0.72 (<1) means spending $1 generates only $0.72 of value — serious cost overrun. SPI = 0.85 (<1) means behind schedule. Both indicators are red — the PM must analyze root causes and propose corrective actions immediately.',
      tip: '💡 CPI < 1 = over budget. SPI < 1 = behind schedule. CPI > 1 = under budget. SPI > 1 = ahead of schedule. Memorize this rule — it appears constantly on the exam.'
    },
    {
      type: 'Scenario',
      context: 'A PM discovers that a team member skipped several QA steps to meet a deadline. The deliverable has already been sent to the customer, who has not yet noticed any issues.',
      question: 'What should the PM do?',
      opts: [
        'Stay quiet — the customer has not noticed, and reporting will create unnecessary trouble.',
        'Wait to see if the customer discovers the issue; only act if they do.',
        'Proactively inform the customer of the problem, propose a remediation plan, and improve the internal QA process to prevent recurrence.',
        'Discipline the team member and add a note to their personnel file.'
      ],
      correct: 2,
      explanation: 'The PMI Code of Ethics requires honesty and accountability. When a PM discovers a defect affecting a deliverable, they must proactively disclose it — not wait to be caught. This is an ethical responsibility, not an optional choice.',
      tip: '💡 PMI Code of Ethics: Responsibility, Respect, Fairness, Honesty. Ethics questions consistently favor proactive disclosure and taking full accountability.'
    },
    {
      type: 'Scenario',
      context: 'During project execution, a high-performing team member informs you they are resigning in two weeks. Their critical task is estimated to require 3 more weeks to complete.',
      question: 'How should the PM handle this situation?',
      opts: [
        'Convince them to stay until their task is finished.',
        'Assess the schedule and scope impact immediately, update the Risk Register, evaluate options (knowledge transfer, hire a contractor, reassign the task), and escalate to the sponsor if needed.',
        'Wait until they actually leave before finding a solution — there are still two weeks.',
        'Take over the work personally so it does not impact the schedule.'
      ],
      correct: 1,
      explanation: 'Losing a key resource is a risk event in progress. The PM must: immediately assess the impact, update the risk register, generate options (knowledge transfer, replacement hire, schedule adjustment), and notify the sponsor. Acting early = more options available.',
      tip: '💡 PMs manage FORWARD — do not wait for a problem to fully materialize. The moment you know, start planning your response.'
    },
    {
      type: 'Scenario',
      context: 'You are in the Project Closure phase. The customer is satisfied and all deliverables have been formally accepted. However, the team wants to skip the Lessons Learned session because everyone is busy starting a new project.',
      question: 'What should the PM do?',
      opts: [
        'Agree to skip Lessons Learned since the project is finished and everyone is busy.',
        'Write the Lessons Learned alone based on personal observations.',
        'Emphasize the organizational value of Lessons Learned, schedule a short session (1–2 hours) with the team, and ensure the output is stored in the organization\'s OPA.',
        'Flag this as a risk and report to the PMO that the team is unwilling to participate.'
      ],
      correct: 2,
      explanation: 'Lessons Learned is a required part of Project Closure per PMBOK. Its purpose extends beyond the current project — the output becomes Organizational Process Assets (OPA), helping future projects avoid the same mistakes. The PM must ensure this step is completed.',
      tip: '💡 PMBOK 7 emphasizes that Lessons Learned should be captured THROUGHOUT the project life cycle, not only at closure — an important evolution from earlier editions.'
    },
    {
      type: 'Scenario',
      context: 'A key stakeholder (high power, high interest) has repeatedly missed meetings and is not responding to emails. The next project phase requires this stakeholder\'s approval.',
      question: 'What should the PM do?',
      opts: [
        'Continue sending emails and wait — avoid disturbing a busy stakeholder.',
        'Immediately escalate to the sponsor to demand their involvement.',
        'Proactively seek a direct meeting, investigate the reason for disengagement, and adjust the communication approach — change the format, frequency, or channel to better suit their preferences.',
        'Mark them as Resistant in the Stakeholder Register and proceed without their input.'
      ],
      correct: 2,
      explanation: 'A disengaged High Power/High Interest stakeholder is a serious project risk. The PM must proactively investigate why (overloaded? not seeing value? wrong communication channel?) and adapt the engagement strategy accordingly. Escalation is a last resort after direct approaches are exhausted.',
      tip: '💡 Stakeholder engagement is ongoing throughout the project — not a one-time activity. The PM must continuously assess and adapt the engagement strategy as circumstances change.'
    }
  ];

  var scenarioIdx = 0;
  var scenarioSelected = -1;
  var scenarioSubmitted = false;
  var scenarioScore = 0;
  var scenarioAnswered = [];

  function initScenarioTab() {
    scenarioIdx = 0;
    scenarioSelected = -1;
    scenarioSubmitted = false;
    scenarioScore = 0;
    scenarioAnswered = new Array(SCENARIO_QUESTIONS.length).fill(null);
    renderScenario();
  }

  function renderScenario() {
    var q = SCENARIO_QUESTIONS[scenarioIdx];
    var prev = scenarioAnswered[scenarioIdx];
    var submitted = prev !== null;
    var letters = ['A','B','C','D'];

    var optsHtml = q.opts.map(function(opt, i) {
      var cls = 'scenario-opt';
      if (submitted) {
        if (i === q.correct) cls += ' correct';
        else if (i === prev && prev !== q.correct) cls += ' wrong';
      } else if (scenarioSelected === i) {
        cls += ' selected';
      }
      return '<div class="' + cls + '" onclick="selectScenarioOpt(' + i + ')">' +
        '<div class="scenario-opt-letter">' + letters[i] + '</div>' +
        '<div>' + opt + '</div>' +
      '</div>';
    }).join('');

    var expHtml = '';
    if (submitted) {
      var ok = prev === q.correct;
      expHtml = '<div class="scenario-exp show">' +
        '<div class="scenario-exp-result ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✅ Correct!' : '❌ Incorrect') + ' — Correct answer: ' + letters[q.correct] + '</div>' +
        '<div class="scenario-exp-why">' + q.explanation + '</div>' +
        '<div class="scenario-exp-tip">' + q.tip + '</div>' +
      '</div>';
    }

    var correct = scenarioAnswered.filter(function(a,i){ return a === SCENARIO_QUESTIONS[i].correct; }).length;
    var answered = scenarioAnswered.filter(function(a){ return a !== null; }).length;

    document.getElementById('scenario-area').innerHTML =
      '<div class="scenario-card">' +
        '<div class="scenario-meta">' +
          '<span class="scenario-num-tag">Scenario ' + (scenarioIdx+1) + ' / ' + SCENARIO_QUESTIONS.length + '</span>' +
          '<span class="scenario-type-tag">' + q.type + '</span>' +
        '</div>' +
        '<div class="scenario-context">' + q.context + '</div>' +
        '<div class="scenario-question">❓ ' + q.question + '</div>' +
        '<div class="scenario-opts" id="scenario-opts">' + optsHtml + '</div>' +
        '<div class="scenario-actions">' +
          '<button class="btn btn-green" onclick="submitScenario()" id="scenario-submit-btn"' + (submitted ? ' disabled' : (scenarioSelected === -1 ? ' disabled' : '')) + '>Check Answer</button>' +
          '<button class="btn btn-outline" onclick="randScenario()">🔀 Random</button>' +
        '</div>' +
        expHtml +
      '</div>' +
      '<div class="scenario-nav">' +
        '<button class="btn btn-outline" onclick="prevScenario()" ' + (scenarioIdx === 0 ? 'disabled' : '') + '>← Trước</button>' +
        '<div>' +
          '<div class="scenario-counter">Question ' + (scenarioIdx+1) + ' / ' + SCENARIO_QUESTIONS.length + '</div>' +
          '<div class="scenario-score">Correct: ' + correct + ' / ' + answered + ' answered</div>' +
        '</div>' +
        '<button class="btn btn-outline" onclick="nextScenario()" ' + (scenarioIdx === SCENARIO_QUESTIONS.length-1 ? 'disabled' : '') + '>Tiếp →</button>' +
      '</div>';
  }

  function selectScenarioOpt(i) {
    if (scenarioAnswered[scenarioIdx] !== null) return;
    scenarioSelected = i;
    renderScenario();
  }

  function submitScenario() {
    if (scenarioSelected === -1) return;
    if (scenarioAnswered[scenarioIdx] !== null) return;
    scenarioAnswered[scenarioIdx] = scenarioSelected;
    if (scenarioSelected === SCENARIO_QUESTIONS[scenarioIdx].correct) scenarioScore++;
    renderScenario();
  }

  function nextScenario() {
    if (scenarioIdx < SCENARIO_QUESTIONS.length - 1) {
      scenarioIdx++;
      scenarioSelected = -1;
      renderScenario();
    }
  }

  function prevScenario() {
    if (scenarioIdx > 0) {
      scenarioIdx--;
      scenarioSelected = -1;
      renderScenario();
    }
  }

  function randScenario() {
    scenarioIdx = Math.floor(Math.random() * SCENARIO_QUESTIONS.length);
    scenarioSelected = -1;
    renderScenario();
  }

  /* ════════════════════════════════════════════
     CHART / DATA QUESTIONS
  ════════════════════════════════════════════ */
  var CHART_QUESTIONS = [
    {
      label: 'EVM',
      context: 'Review the following EVM status table for a software project:',
      table: [
        ['Metric', 'Week 4', 'Week 8', 'Week 12'],
        ['PV ($)', '$20,000', '$40,000', '$60,000'],
        ['EV ($)', '$18,000', '$30,000', '$52,000'],
        ['AC ($)', '$19,000', '$36,000', '$58,000']
      ],
      question: 'Based on the data at the end of Week 12, what is the project status?',
      opts: [
        'On budget and on schedule — the project is healthy.',
        'Over budget and behind schedule.',
        'Under budget but behind schedule.',
        'Over budget but on schedule.'
      ],
      correct: 1,
      explanation: 'Week 12: CPI = EV/AC = 52,000/58,000 = 0.897 (<1 → over budget). SPI = EV/PV = 52,000/60,000 = 0.867 (<1 → behind schedule). Both indices are below 1, confirming the project has both cost and schedule problems.',
      tip: '💡 Trend matters: performance is worsening each week (CPI and SPI both declining) — this signals that escalation and corrective action are urgently needed.'
    },
    {
      label: 'Burndown',
      context: 'Sprint Burndown Chart (3-week Sprint, 60 story points):',
      chart:
'Day    | Ideal Remaining | Actual Remaining\n' +
'-------|-----------------|------------------\n' +
'Day 0  | 60 SP           | 60 SP\n' +
'Day 3  | 50 SP           | 55 SP\n' +
'Day 6  | 40 SP           | 52 SP\n' +
'Day 9  | 30 SP           | 48 SP\n' +
'Day 12 | 20 SP           | 40 SP',
      question: 'Based on the Sprint Burndown Chart, which statement is CORRECT?',
      opts: [
        'The team is burning story points faster than planned — the sprint will finish early.',
        'The team is behind the ideal burndown line — there is a risk of not completing the Sprint Goal.',
        'There is insufficient data to draw conclusions about the team\'s progress.',
        'The burndown chart indicates that scope was added during the sprint.'
      ],
      correct: 1,
      explanation: 'The ideal line drops evenly from 60 to 0. The actual line drops more slowly (Day 12: 40 SP remaining vs. 20 SP ideal). The gap is widening — the team is behind plan and at high risk of not completing the Sprint Goal.',
      tip: '💡 On a burndown chart: Actual BELOW Ideal = ahead of schedule. Actual ABOVE Ideal = behind. A flat actual line for several consecutive days usually indicates a blocking impediment.'
    },
    {
      label: 'Control Chart',
      context: 'A Control Chart tracks the daily number of defects in a manufacturing process. UCL = 15, LCL = 3, Mean = 9. Data for 10 days:',
      table: [
        ['Day', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        ['Defects', '8', '10', '7', '9', '11', '8', '17', '10', '6', '9']
      ],
      question: 'On which day does the process show a sign of being OUT OF CONTROL?',
      opts: [
        'Day 5 (11 defects) — above the mean.',
        'Day 7 (17 defects) — exceeds the Upper Control Limit (UCL = 15).',
        'Day 9 (6 defects) — significantly below the mean.',
        'The process is always in control — no abnormal days.'
      ],
      correct: 1,
      explanation: 'Day 7 has 17 defects, exceeding UCL = 15. Any data point outside the control limits (>UCL or <LCL) signals "special cause variation" — the process is OUT OF CONTROL and the root cause must be investigated immediately.',
      tip: '💡 Out of control does NOT mean bad or good — it means a special cause exists and must be investigated. Rule of 7: seven consecutive points on the same side of the mean also signals out of control.'
    },
    {
      label: 'Critical Path',
      context: 'Project network diagram (all Finish-to-Start dependencies):',
      chart:
'START → A(4d) → C(6d) → END\n' +
'START → A(4d) → B(3d) → D(5d) → END\n' +
'START → E(8d) → D(5d) → END',
      question: 'What is the Critical Path and the minimum project duration?',
      opts: [
        'Path: START → A → C → END = 10 days',
        'Path: START → A → B → D → END = 12 days',
        'Path: START → E → D → END = 13 days',
        'Critical Path is START → E → D → END = 13 days — the longest path in the network'
      ],
      correct: 3,
      explanation: 'Path 1: A+C = 4+6 = 10 days. Path 2: A+B+D = 4+3+5 = 12 days. Path 3: E+D = 8+5 = 13 days. Critical Path = the LONGEST path = START→E→D→END = 13 days. This is also the minimum time in which the project can be completed.',
      tip: '💡 Critical Path = the LONGEST path (not the shortest!). Tasks on the CP have Float = 0. Any delay on a CP task causes the same delay to the entire project.'
    },
    {
      label: 'Risk Matrix',
      context: 'Project risks analyzed using Probability-Impact scoring:',
      table: [
        ['Risk', 'Probability', 'Impact', 'Score (P×I)'],
        ['R1: Vendor delay', '0.7', 'High (0.8)', '0.56'],
        ['R2: Staff turnover', '0.3', 'Medium (0.5)', '0.15'],
        ['R3: Scope creep', '0.5', 'High (0.8)', '0.40'],
        ['R4: Tech obsolescence', '0.1', 'Very High (1.0)', '0.10'],
        ['R5: Budget cut', '0.4', 'Medium (0.5)', '0.20']
      ],
      question: 'Which risk should the PM prioritize addressing FIRST?',
      opts: [
        'R4 — it has the highest impact rating (Very High).',
        'R1 — it has the highest Risk Score (0.56).',
        'R3 — it combines both high probability and high impact.',
        'R2 — it has the most balanced probability and impact values.'
      ],
      correct: 1,
      explanation: 'Risk Score = Probability × Impact. R1 = 0.56 is the highest → address first. Although R4 has a Very High impact, its probability is only 0.1 → a low overall score. Quantitative risk analysis uses expected value (P×I) to prioritize — not impact alone.',
      tip: '💡 Prioritize risks by Risk Score (P×I), not by impact or probability in isolation. High Probability + High Impact = requires an immediate response plan.'
    },
    {
      label: 'EVM Forecast',
      context: 'A project is at its midpoint with the following EVM data:',
      table: [
        ['Metric', 'Value'],
        ['BAC (Budget at Completion)', '$120,000'],
        ['EV (Earned Value)', '$45,000'],
        ['AC (Actual Cost)', '$54,000'],
        ['PV (Planned Value)', '$50,000']
      ],
      question: 'What is the EAC (Estimate at Completion) assuming current CPI performance continues?',
      opts: [
        '$129,000',
        '$144,000',
        '$160,000',
        '$132,000'
      ],
      correct: 1,
      explanation: 'CPI = EV/AC = 45,000/54,000 = 0.8333. EAC = BAC/CPI = 120,000/0.8333 = $144,000 (Answer B). For comparison: $129,000 = AC+(BAC-EV) — the atypical formula used when the remaining work will be completed at the original budget rate.',
      tip: '💡 Three EAC formulas: (1) EAC=BAC/CPI — current performance continues; (2) EAC=AC+(BAC-EV) — variance was a one-time event; (3) EAC=AC+(BAC-EV)/CPI — weighted approach. The exam will specify which assumption applies.'
    },
    {
      label: 'Communications',
      context: 'A project starts with 5 team members and expands to 12.',
      table: [
        ['Team Size', 'Formula', 'Channels'],
        ['5 people', '5×4/2', '10 channels'],
        ['12 people', '12×11/2', '66 channels'],
        ['Net increase', '—', '+56 channels']
      ],
      question: 'When the team grows from 5 to 12 members, how many new communication channels are added?',
      opts: [
        '46 new channels (from 10 to 56).',
        '56 new channels (from 10 to 66).',
        '66 new channels (from 10 to 76).',
        '52 new channels (from 10 to 62).'
      ],
      correct: 1,
      explanation: '5 people: 5×4/2 = 10 channels. 12 people: 12×11/2 = 66 channels. Net increase = 66 − 10 = 56 new channels. This non-linear growth explains why large teams require a formal Communications Management Plan.',
      tip: '💡 Formula: n(n−1)/2. Adding 1 person to a team of n adds n new channels. The non-linear growth is why Agile prefers small, cross-functional teams.'
    },
    {
      label: 'Agile Velocity',
      context: 'An Agile team has completed 5 Sprints:',
      table: [
        ['Sprint', '1', '2', '3', '4', '5'],
        ['Velocity (SP)', '28', '32', '30', '35', '33']
      ],
      question: 'If 180 story points remain and the team forecasts using average velocity, how many sprints are needed to complete the project?',
      opts: [
        '5 Sprints',
        '6 Sprints',
        '7 Sprints',
        '8 Sprints'
      ],
      correct: 1,
      explanation: 'Average velocity = (28+32+30+35+33)/5 = 158/5 = 31.6 SP/Sprint. Sprints needed = 180 ÷ 31.6 = 5.7 → round up = 6 Sprints.',
      tip: '💡 Velocity-based forecasting: use the average of the 3–5 most recent sprints. On the PMP exam, simple average is the standard approach unless otherwise specified.'
    },
    {
      label: 'Stakeholder',
      context: 'Power/Interest Grid for project stakeholders:',
      table: [
        ['Stakeholder', 'Power', 'Interest', 'Strategy'],
        ['Sponsor', 'High', 'High', 'Manage Closely'],
        ['End Users', 'Low', 'High', 'Keep Informed'],
        ['Regulatory Body', 'High', 'Low', 'Keep Satisfied'],
        ['Vendor', 'Low', 'Low', 'Monitor']
      ],
      question: 'A new Functional Manager is identified with High Power and Low Interest. Which engagement strategy should the PM apply?',
      opts: [
        'Monitor — send periodic monthly updates.',
        'Keep Informed — invite them to all project meetings.',
        'Keep Satisfied — provide executive summaries and ensure there are no surprises.',
        'Manage Closely — hold weekly meetings with full detailed reports.'
      ],
      correct: 2,
      explanation: 'High Power + Low Interest = "Keep Satisfied." Strategy: provide executive-level summaries, ensure there are no surprises, consult for key decisions — but do not burden them with detailed daily or weekly updates.',
      tip: '💡 Power/Interest Grid: Manage Closely (HP+HI) | Keep Satisfied (HP+LI) | Keep Informed (LP+HI) | Monitor (LP+LI). Memorize all four quadrants — they appear frequently on the exam.'
    },
    {
      label: 'PERT',
      context: 'Three-point estimates for critical project tasks:',
      table: [
        ['Task', 'Optimistic (O)', 'Most Likely (M)', 'Pessimistic (P)', 'PERT E', 'SD'],
        ['Task A', '2 days', '4 days', '6 days', '4.0', '0.67'],
        ['Task B', '1 day', '3 days', '11 days', '3.67', '1.67'],
        ['Task C', '5 days', '5 days', '5 days', '5.0', '0.00']
      ],
      question: 'Which task carries the HIGHEST estimation uncertainty (risk)?',
      opts: [
        'Task A — has a P–O spread of 4 days.',
        'Task B — has the largest Standard Deviation due to a wide P–O range of 10 days.',
        'Task C — since all three estimates are identical, it cannot be evaluated.',
        'All tasks have equal uncertainty because they use the same PERT formula.'
      ],
      correct: 1,
      explanation: 'SD = (P−O)/6. Task A: (6−2)/6 = 0.67. Task B: (11−1)/6 = 1.67. Task C: (5−5)/6 = 0.00. Task B has the highest SD (1.67) → highest uncertainty → requires the most risk monitoring attention. Task C has zero uncertainty — a perfectly confident estimate.',
      tip: '💡 Standard Deviation in PERT measures how uncertain an estimate is. The larger the SD, the less reliable the estimate — and the more risk attention it needs.'
    }
  ];

  var chartIdx = 0;
  var chartSelected = -1;
  var chartAnswered = [];

  function initChartTab() {
    chartIdx = 0;
    chartSelected = -1;
    chartAnswered = new Array(CHART_QUESTIONS.length).fill(null);
    renderChartQ();
  }

  function renderChartQ() {
    var q = CHART_QUESTIONS[chartIdx];
    var prev = chartAnswered[chartIdx];
    var submitted = prev !== null;
    var letters = ['A','B','C','D'];

    var dataHtml = '';
    if (q.table) {
      var rows = q.table.map(function(row, ri) {
        var cells = row.map(function(c, ci) {
          return ri === 0 ? '<th>' + c + '</th>' : '<td>' + c + '</td>';
        }).join('');
        return '<tr>' + cells + '</tr>';
      }).join('');
      dataHtml = '<table class="chartq-table">' + rows + '</table>';
    } else if (q.chart) {
      dataHtml = '<div class="chartq-chart">' + q.chart + '</div>';
    }

    var optsHtml = q.opts.map(function(opt, i) {
      var cls = 'chartq-opt';
      if (submitted) {
        if (i === q.correct) cls += ' correct';
        else if (i === prev && prev !== q.correct) cls += ' wrong';
      } else if (chartSelected === i) {
        cls += ' selected';
      }
      return '<div class="' + cls + '" onclick="selectChartOpt(' + i + ')">' +
        '<div class="chartq-opt-letter">' + letters[i] + '</div>' +
        '<div>' + opt + '</div>' +
      '</div>';
    }).join('');

    var expHtml = '';
    if (submitted) {
      var ok = prev === q.correct;
      expHtml = '<div class="chartq-exp show">' +
        '<div class="chartq-exp-result ' + (ok ? 'ok' : 'bad') + '">' + (ok ? '✅ Correct!' : '❌ Incorrect') + ' — Answer: ' + letters[q.correct] + '</div>' +
        '<div>' + q.explanation + '</div>' +
        '<div style="color:var(--txt2);font-size:.78rem;margin-top:6px;padding-top:6px;border-top:1px solid var(--border)">' + q.tip + '</div>' +
      '</div>';
    }

    var correct2 = chartAnswered.filter(function(a,i){ return a === CHART_QUESTIONS[i].correct; }).length;
    var answered2 = chartAnswered.filter(function(a){ return a !== null; }).length;

    document.getElementById('chartq-area').innerHTML =
      '<div class="chartq-card">' +
        '<div class="chartq-label">' + q.label + '</div>' +
        '<div class="chartq-context">' + q.context + '</div>' +
        dataHtml +
        '<div class="chartq-question">❓ ' + q.question + '</div>' +
        '<div class="chartq-opts">' + optsHtml + '</div>' +
        '<div class="scenario-actions">' +
          '<button class="btn btn-green" onclick="submitChartQ()"' + (submitted ? ' disabled' : (chartSelected === -1 ? ' disabled' : '')) + '>Check Answer</button>' +
          '<button class="btn btn-outline" onclick="randChartQ()">🔀 Random</button>' +
        '</div>' +
        expHtml +
      '</div>' +
      '<div class="chartq-nav">' +
        '<button class="btn btn-outline" onclick="prevChartQ()" ' + (chartIdx === 0 ? 'disabled' : '') + '>← Trước</button>' +
        '<div>' +
          '<div class="chartq-counter">Question ' + (chartIdx+1) + ' / ' + CHART_QUESTIONS.length + '</div>' +
          '<div style="font-size:.78rem;color:var(--txt2);text-align:center">Correct: ' + correct2 + ' / ' + answered2 + ' answered</div>' +
        '</div>' +
        '<button class="btn btn-outline" onclick="nextChartQ()" ' + (chartIdx === CHART_QUESTIONS.length-1 ? 'disabled' : '') + '>Tiếp →</button>' +
      '</div>';
  }

  function selectChartOpt(i) {
    if (chartAnswered[chartIdx] !== null) return;
    chartSelected = i;
    renderChartQ();
  }

  function submitChartQ() {
    if (chartSelected === -1 || chartAnswered[chartIdx] !== null) return;
    chartAnswered[chartIdx] = chartSelected;
    renderChartQ();
  }

  function nextChartQ() {
    if (chartIdx < CHART_QUESTIONS.length - 1) { chartIdx++; chartSelected = -1; renderChartQ(); }
  }

  function prevChartQ() {
    if (chartIdx > 0) { chartIdx--; chartSelected = -1; renderChartQ(); }
  }

  function randChartQ() {
    chartIdx = Math.floor(Math.random() * CHART_QUESTIONS.length);
    chartSelected = -1;
    renderChartQ();
  }

  /* ════════════════════════════════════════════
     DRAG AND DROP EXERCISES
  ════════════════════════════════════════════ */
  var DRAG_EXERCISES = [
    {
      title: 'Conflict Management Techniques',
      desc: 'Drag each technique name (left) and drop it onto its correct description (right)',
      pairs: [
        { term: 'Collaborate / Problem Solving', def: 'Seek a win-win solution that fully resolves the issue for all parties — the BEST approach per PMI' },
        { term: 'Force / Direct', def: 'Use authority or power to impose one party\'s viewpoint on others — win/lose outcome' },
        { term: 'Compromise / Reconcile', def: 'Each party gives up something to reach a mutually acceptable solution — partial lose/lose' },
        { term: 'Smooth / Accommodate', def: 'Emphasize areas of agreement, temporarily downplay differences — does not resolve the root issue' },
        { term: 'Withdraw / Avoid', def: 'Retreat from the conflict, postpone or sidestep the issue without resolving it' }
      ]
    },
    {
      title: 'Scrum Roles & Responsibilities',
      desc: 'Drag each Scrum role (left) and drop it onto its primary responsibility (right)',
      pairs: [
        { term: 'Product Owner', def: 'Maximizes product value and owns/prioritizes the Product Backlog' },
        { term: 'Scrum Master', def: 'Removes impediments, shields the team, and ensures Scrum is properly applied' },
        { term: 'Development Team', def: 'Self-organizes work, commits to the Sprint Goal, and estimates story points' },
        { term: 'Stakeholder', def: 'Provides feedback during Sprint Review; does not interfere directly in the sprint' }
      ]
    },
    {
      title: 'Quality Tools & Their Purpose',
      desc: 'Drag each quality tool (left) and drop it onto its purpose (right)',
      pairs: [
        { term: 'Ishikawa / Fishbone Diagram', def: 'Root Cause Analysis — identifies all possible causes contributing to a problem' },
        { term: 'Pareto Chart', def: 'Identifies the 20% of causes responsible for 80% of problems — used for prioritization' },
        { term: 'Control Chart', def: 'Monitors a process over time to determine if it is within statistical control limits' },
        { term: 'Scatter Diagram', def: 'Tests the correlation (relationship) between two variables' },
        { term: 'Histogram', def: 'Shows the frequency distribution of data — reveals the shape of the data distribution' }
      ]
    },
    {
      title: 'PMBOK 7 — Performance Domains',
      desc: 'Drag each Performance Domain (left) and drop it onto its primary focus area (right)',
      pairs: [
        { term: 'Stakeholder Domain', def: 'Working with and for those who have an interest in the project — continuous engagement throughout' },
        { term: 'Team Domain', def: 'Building a high-performing, collaborative, and accountable project team environment' },
        { term: 'Development Approach & Life Cycle', def: 'Selecting the right approach (predictive/agile/hybrid) based on project and product characteristics' },
        { term: 'Planning Domain', def: 'Establishing sufficient planning to guide the team without being rigid or over-prescriptive' },
        { term: 'Uncertainty Domain', def: 'Identifying and responding to risks, ambiguity, and complexity throughout the project' }
      ]
    },
    {
      title: 'EVM Formulas',
      desc: 'Drag each EVM metric name (left) and drop it onto its meaning and calculation (right)',
      pairs: [
        { term: 'CPI (Cost Performance Index)', def: 'EV / AC — measures cost efficiency. >1 = under budget; <1 = over budget' },
        { term: 'SPI (Schedule Performance Index)', def: 'EV / PV — measures schedule efficiency. >1 = ahead of schedule; <1 = behind schedule' },
        { term: 'EAC (Estimate at Completion)', def: 'BAC / CPI — forecasts total cost at project completion assuming current performance continues' },
        { term: 'TCPI (To-Complete Performance Index)', def: '(BAC − EV) / (BAC − AC) — the CPI required on remaining work to finish within the original budget' },
        { term: 'CV (Cost Variance)', def: 'EV − AC — measures cost deviation. Negative = over budget. Positive = under budget' }
      ]
    },
    {
      title: 'Change Request — Correct Process Order',
      desc: 'Drag each action (left) to its correct step number in the PMI Change Request process (right)',
      pairs: [
        { term: 'Assess the situation and identify the need for a change', def: 'Step 1 — Assess the situation' },
        { term: 'Review the relevant management plan (e.g., Change Management Plan)', def: 'Step 2 — Review the management plan' },
        { term: 'Analyze the impact on scope, schedule, cost, and risk with the team', def: 'Step 3 — Analyze impact with the team' },
        { term: 'Update project documents (Change Log, Risk Register, etc.)', def: 'Step 4 — Update project documents' },
        { term: 'Communicate the CCB decision to all relevant stakeholders', def: 'Step 5 — Communicate decision to stakeholders' },
        { term: 'Implement the approved change and monitor its execution', def: 'Step 6 — Take action / Implement the change' }
      ]
    },
    {
      title: 'Cost of Quality (COQ) — Categorization',
      desc: 'Drag each activity (left) to its correct COQ category (right)',
      pairs: [
        { term: 'Conducting Agile training for the new team before the project starts', def: 'Prevention Cost — invest to avoid defects from occurring' },
        { term: 'Establishing quality assurance standards and review checklists', def: 'Prevention Cost — invest to avoid defects from occurring' },
        { term: 'Running unit tests and inspections during development', def: 'Appraisal Cost — measuring and inspecting to find defects' },
        { term: 'Reworking a defective module discovered before product release', def: 'Internal Failure Cost — fixing defects found before delivery' },
        { term: 'Handling customer warranty claims after product delivery', def: 'External Failure Cost — cost of defects found by the customer' }
      ]
    },
    {
      title: 'Project Life Cycle — Choose the Right Approach',
      desc: 'Drag each project scenario (left) to the most appropriate development approach (right)',
      pairs: [
        { term: 'A hospital construction project with fully approved architectural plans and fixed regulatory requirements', def: 'Predictive (Waterfall) — requirements are well-defined and stable upfront' },
        { term: 'A software product where small usable features are released early to capture market share', def: 'Incremental — deliver working subsets early; full scope planned from the start' },
        { term: 'A product where early prototypes are built to refine ideas, but only one final delivery is made', def: 'Iterative — repeat cycles to refine, but deliver only at the end' },
        { term: 'A mobile app with highly volatile requirements that needs customer feedback every two weeks', def: 'Adaptive (Agile) — requirements evolve; frequent customer collaboration drives delivery' }
      ]
    },
    {
      title: 'PMBOK 7 — Artifacts by Performance Domain',
      desc: 'Drag each project artifact (left) to its primary Performance Domain (right)',
      pairs: [
        { term: 'Stakeholder Register', def: 'Stakeholder Domain — identifies and tracks all parties with an interest in the project' },
        { term: 'Risk Register', def: 'Uncertainty Domain — records identified risks, their probability, impact, and response plans' },
        { term: 'Probability and Impact Matrix', def: 'Uncertainty Domain — used to prioritize risks based on likelihood and severity' },
        { term: 'Quality Metrics and Scope Baseline', def: 'Delivery Domain — defines what is to be delivered and the quality standards for acceptance' },
        { term: 'Project Schedule and WBS Dictionary', def: 'Planning Domain — structures the work and establishes the time baseline for delivery' }
      ]
    },
    {
      title: 'EVM Indicators — Interpret the Project Status',
      desc: 'Drag each EVM result (left) to its correct project status interpretation (right)',
      pairs: [
        { term: 'CPI = 0.8 / SPI = 0.7', def: 'Over budget AND behind schedule — both indicators below 1, urgent action needed' },
        { term: 'CPI = 1.2 / SPI = 1.1', def: 'Under budget AND ahead of schedule — both indicators above 1, strong performance' },
        { term: 'CPI = 1.0 / SPI = 0.5', def: 'On budget but severely behind schedule — cost is fine but timeline is in serious trouble' },
        { term: 'CV (Cost Variance) is Positive', def: 'EV > AC — the project is spending LESS than planned for the work done (favorable)' },
        { term: 'SV (Schedule Variance) is Negative', def: 'EV < PV — the project has accomplished LESS than planned at this point in time (unfavorable)' }
      ]
    },
    {
      title: 'Modern PM Tools — PMBOK 8 Updates',
      desc: 'Drag each tool or technique (left) to its primary purpose in project management (right)',
      pairs: [
        { term: 'Six Thinking Hats', def: 'Facilitates diverse perspectives in group decision-making by assigning different thinking modes to participants' },
        { term: 'Theory of Constraints (TOC)', def: 'Identifies and manages the single bottleneck that limits overall project throughput' },
        { term: 'Monte Carlo Simulation', def: 'Runs thousands of scenarios to produce a probability range of possible cost or schedule outcomes' },
        { term: 'After Action Review (AAR)', def: 'A rapid retrospective technique to capture lessons learned immediately after a project activity concludes' },
        { term: 'Stakeholder Engagement Assessment Matrix', def: 'Compares current vs. desired stakeholder engagement levels to identify gaps and guide improvement actions' }
      ]
    }
  ];

  var dragExIdx = 0;
  var dragState = {};

  function initDragTab() {
    dragExIdx = 0;
    renderDragExercise();
  }

  function renderDragExercise() {
    var ex = DRAG_EXERCISES[dragExIdx];
    dragState = {};

    // Shuffle definitions
    var defs = ex.pairs.map(function(p, i) { return { def: p.def, origIdx: i }; });
    for (var i = defs.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = defs[i]; defs[i] = defs[j]; defs[j] = tmp;
    }

    var btnHtml = DRAG_EXERCISES.map(function(e, i) {
      return '<button class="drag-ex-btn' + (i === dragExIdx ? ' active' : '') + '" onclick="switchDragEx(' + i + ')">' + (i+1) + '. ' + e.title + '</button>';
    }).join('');

    var termsHtml = ex.pairs.map(function(p, i) {
      return '<div class="drag-item" draggable="true" id="drag-term-' + i + '" data-idx="' + i + '" ondragstart="dragStart(event)">' + p.term + '</div>';
    }).join('');

    var zonesHtml = defs.map(function(d, i) {
      return '<div class="drag-drop-pair">' +
        '<div class="drag-target-label">→ Match with:</div>' +
        '<div class="drop-zone" id="drop-zone-' + d.origIdx + '" data-orig="' + d.origIdx + '" ondragover="dragOver(event)" ondrop="dropItem(event)" ondragleave="dragLeave(event)">' +
          '<span class="drop-def">' + d.def + '</span>' +
          '<span class="drop-badge" style="display:none"></span>' +
        '</div>' +
      '</div>';
    }).join('');

    document.getElementById('drag-area').innerHTML =
      '<div class="drag-ex-selector">' + btnHtml + '</div>' +
      '<div class="drag-ex-title">' + ex.title + '</div>' +
      '<div class="drag-ex-desc">' + ex.desc + '</div>' +
      '<div class="drag-area">' +
        '<div>' +
          '<div class="drag-col-hdr">Drag from here ↓</div>' +
          '<div class="drag-items" id="drag-terms">' + termsHtml + '</div>' +
        '</div>' +
        '<div>' +
          '<div class="drag-col-hdr">Drop here ↓</div>' +
          '<div class="drag-items">' + zonesHtml + '</div>' +
        '</div>' +
      '</div>' +
      '<div style="display:flex;gap:10px;margin-bottom:8px">' +
        '<button class="btn btn-green" onclick="checkDragResult()">🔍 Check Results</button>' +
        '<button class="btn btn-outline" onclick="resetDrag()">↺ Reset</button>' +
      '</div>' +
      '<div class="drag-result" id="drag-result"></div>';
  }

  function dragStart(e) {
    e.dataTransfer.setData('termIdx', e.target.getAttribute('data-idx'));
    e.target.classList.add('dragging');
    setTimeout(function() { if(e.target) e.target.classList.remove('dragging'); }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-over');
  }

  function dragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
  }

  function dropItem(e) {
    e.preventDefault();
    var termIdx = e.dataTransfer.getData('termIdx');
    var zoneOrig = e.currentTarget.getAttribute('data-orig');
    e.currentTarget.classList.remove('drag-over');

    // Remove term from any previous zone
    for (var key in dragState) {
      if (dragState[key] === termIdx) delete dragState[key];
    }

    dragState[zoneOrig] = termIdx;

    // Update zone visually
    var termEl = document.getElementById('drag-term-' + termIdx);
    var termText = termEl ? termEl.textContent : '';
    var zone = document.getElementById('drop-zone-' + zoneOrig);
    zone.classList.add('filled');
    zone.classList.remove('correct','wrong');
    zone.querySelector('.drop-badge').style.display = 'none';
    // Show matched term as a tag above definition
    var existing = zone.querySelector('.drop-matched');
    if (existing) existing.remove();
    var matchedTag = document.createElement('div');
    matchedTag.className = 'drop-matched';
    matchedTag.style.cssText = 'font-size:.75rem;font-weight:700;color:var(--green);margin-bottom:4px;padding:2px 0;border-bottom:1px solid var(--border2)';
    matchedTag.textContent = '▶ ' + termText;
    zone.insertBefore(matchedTag, zone.firstChild);
  }

  function checkDragResult() {
    var ex = DRAG_EXERCISES[dragExIdx];
    var correct = 0;
    var rows = '';
    ex.pairs.forEach(function(p, i) {
      var placed = dragState[String(i)];
      var ok = placed !== undefined && parseInt(placed) === i;
      if (ok) correct++;
      var termText = placed !== undefined ? ex.pairs[parseInt(placed)].term : '(not placed)';
      var zone = document.getElementById('drop-zone-' + i);
      if (zone) {
        zone.classList.remove('correct','wrong','filled');
        zone.classList.add(ok ? 'correct' : 'wrong');
        var badge = zone.querySelector('.drop-badge');
        if (badge) { badge.style.display = 'inline'; badge.textContent = ok ? '✅' : '❌'; }
      }
      rows += '<div class="drag-result-row">' + (ok ? '✅' : '❌') + ' <strong>' + p.term + '</strong> → ' + (ok ? 'Correct!' : 'Wrong — placed: ' + termText) + '</div>';
    });
    var pct = Math.round(correct / ex.pairs.length * 100);
    var res = document.getElementById('drag-result');
    res.innerHTML =
      '<div class="drag-score-bar"><div class="drag-score-fill" style="width:' + pct + '%"></div></div>' +
      rows +
      '<div class="drag-conclusion ' + (correct === ex.pairs.length ? 'ok' : 'bad') + '">' +
        (correct === ex.pairs.length ? '🎉 Perfect! All ' + ex.pairs.length + '/' + ex.pairs.length + ' correct!' : '💡 ' + correct + '/' + ex.pairs.length + ' correct (' + pct + '%) — Review the red boxes and try again!') +
      '</div>';
    res.classList.add('show');
  }

  function resetDrag() { renderDragExercise(); }

  function switchDragEx(i) { dragExIdx = i; renderDragExercise(); }


