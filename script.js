const jobs = [
  {id:'MTL-TECH-001',badge:'Ưu tiên mẫu',family:'tech',familyLabel:'Thiết bị & Ứng dụng',title:'Kỹ sư dịch vụ thiết bị xét nghiệm',location:'hn',locationLabel:'Hà Nội',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Hỗ trợ hệ thống xét nghiệm vận hành ổn định từ lắp đặt tới bảo trì.',deadline:'31/07/2027',details:['Lắp đặt, bảo trì và xử lý sự cố thiết bị xét nghiệm.','Phối hợp với đội ngũ ứng dụng và khách hàng để bảo đảm hệ thống hoạt động ổn định.','Ghi nhận và bàn giao thông tin kỹ thuật có thể truy xuất.'],output:'Hệ thống vận hành ổn định, sự cố được xử lý có cấu trúc và khách hàng nắm rõ phương án tiếp theo.'},
  {id:'MTL-APP-002',badge:'Mới mẫu',family:'tech',familyLabel:'Thiết bị & Ứng dụng',title:'Chuyên viên ứng dụng sản phẩm',location:'hcm',locationLabel:'TP. Hồ Chí Minh',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Giúp người sử dụng hiểu giải pháp và vận hành quy trình xét nghiệm phù hợp.',deadline:'31/07/2027',details:['Đào tạo người dùng về quy trình và giải pháp.','Hỗ trợ ứng dụng trong quá trình triển khai và sử dụng.','Phối hợp kỹ thuật, sản phẩm và khách hàng để xử lý tình huống.']},
  {id:'MTL-LIS-003',badge:'Ưu tiên mẫu',family:'data',familyLabel:'LIS / IT / Data',title:'Chuyên viên phân tích nghiệp vụ LIS',location:'hn',locationLabel:'Hà Nội',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Chuyển nhu cầu phòng xét nghiệm thành yêu cầu phần mềm rõ, đo được và kiểm thử được.',deadline:'31/07/2027',details:['Khảo sát quy trình phòng xét nghiệm và nhu cầu người dùng.','Mô hình hóa yêu cầu và tiêu chí nghiệm thu.','Phối hợp Dev, Tester và đội triển khai LIS.']},
  {id:'MTL-DEV-004',badge:'Mới mẫu',family:'data',familyLabel:'LIS / IT / Data',title:'Lập trình viên C# / ReactJS',location:'hn',locationLabel:'Hà Nội',level:'senior',levelLabel:'Cao cấp',type:'Toàn thời gian',summary:'Phát triển các chức năng phần mềm y tế đáng tin cậy và dễ vận hành.',deadline:'31/07/2027',details:['Phát triển tính năng web/desktop phục vụ hệ thống LIS.','Gỡ lỗi, tối ưu và bảo đảm khả năng bảo trì mã nguồn.','Phối hợp BA/Tester để đưa yêu cầu vào sản phẩm.']},
  {id:'MTL-SALES-005',badge:'Ưu tiên mẫu',family:'commercial',familyLabel:'Kinh doanh & Vận hành',title:'Chuyên viên kinh doanh giải pháp IVD',location:'hcm',locationLabel:'TP. Hồ Chí Minh',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Kết nối nhu cầu khách hàng với giải pháp thiết bị và hóa chất xét nghiệm phù hợp.',deadline:'31/07/2027',details:['Phát triển khách hàng và cơ hội kinh doanh trong khu vực phụ trách.','Phối hợp Product/Application để xây giải pháp phù hợp.','Theo dõi pipeline, dự báo và cam kết sau bán.']},
  {id:'MTL-BID-006',badge:'Mới mẫu',family:'commercial',familyLabel:'Kinh doanh & Vận hành',title:'Nhân viên hồ sơ thầu',location:'hn',locationLabel:'Hà Nội',level:'staff',levelLabel:'Nhân viên',type:'Toàn thời gian',summary:'Chuẩn bị hồ sơ đúng yêu cầu, đúng thời hạn và có thể truy xuất.',deadline:'31/07/2027',details:['Chuẩn bị và kiểm soát hồ sơ dự thầu.','Theo dõi mốc thời gian, tài liệu và phê duyệt liên quan.','Phối hợp Sales, Product, Pháp chế/Tuân thủ và các bộ phận hỗ trợ.']}
];

const journey = [
  {num:'BẮT ĐẦU',short:'Khám phá cơ hội',title:'Khám phá cơ hội phù hợp',lead:'Tìm một công việc phù hợp với điều bạn muốn phát triển.',body:'Khám phá các vị trí đang tuyển tại Mitalab theo nhóm nghề, địa điểm và lĩnh vực chuyên môn. Bạn có thể tìm hiểu mô tả công việc, yêu cầu và môi trường làm việc trước khi quyết định ứng tuyển.',items:['Tìm theo nhóm nghề và địa điểm','Đọc JD trước khi ứng tuyển','Hiểu rõ vai trò và môi trường'],cta:'Khám phá vị trí đang tuyển'},
  {num:'01',short:'Gửi hồ sơ',title:'Gửi hồ sơ',lead:'Cho chúng tôi biết bạn là ai và điều bạn đang tìm kiếm.',body:'Chọn vị trí phù hợp và gửi CV cùng các thông tin cần thiết. Hồ sơ của bạn sẽ được đội ngũ Tuyển dụng Mitalab xem xét dựa trên yêu cầu của vị trí và mức độ phù hợp với công việc.',items:['Chọn đúng vị trí','Chuẩn bị CV cập nhật','Nhận xác nhận hồ sơ']},
  {num:'02',short:'Trao đổi cùng HR',title:'Trao đổi cùng HR',lead:'Một cuộc trò chuyện để hai bên hiểu nhau hơn.',body:'Nếu hồ sơ phù hợp, HR sẽ kết nối với bạn để trao đổi về kinh nghiệm, mong muốn nghề nghiệp, định hướng công việc và những thông tin quan trọng về vị trí.',items:['Kinh nghiệm & định hướng','Thông tin về vị trí','Câu hỏi từ ứng viên']},
  {num:'03',short:'Gặp đội ngũ chuyên môn',title:'Gặp gỡ đội ngũ chuyên môn',lead:'Cùng nói sâu hơn về công việc bạn sẽ thực sự đảm nhận.',body:'Bạn sẽ có cơ hội trao đổi với Quản lý trực tiếp và/hoặc đội ngũ chuyên môn về kinh nghiệm thực tế, kiến thức chuyên môn, cách xử lý tình huống và kỳ vọng của hai bên.',items:['Trao đổi chuyên môn','Tình huống công việc','Kỳ vọng hai bên']},
  {num:'04',short:'Nhận kết quả',title:'Nhận kết quả',lead:'Bạn sẽ được cập nhật về kết quả và bước tiếp theo.',body:'Sau quá trình trao đổi, đội ngũ Tuyển dụng sẽ tổng hợp đánh giá và phản hồi kết quả đến bạn. Nếu có bước tiếp theo, HR sẽ đồng thời hướng dẫn các thông tin cần thiết để bạn chủ động chuẩn bị.',items:['Tổng hợp đánh giá','Phản hồi kết quả','Hướng dẫn bước tiếp theo']},
  {num:'05',short:'Đề nghị nhận việc',title:'Đề nghị nhận việc',lead:'Khi hai bên cùng nhìn thấy một sự phù hợp.',body:'Ứng viên được lựa chọn sẽ nhận thông tin đề nghị nhận việc từ Mitalab. HR sẽ trao đổi rõ các nội dung liên quan đến vị trí, chính sách, thời điểm dự kiến bắt đầu công việc và giải đáp những câu hỏi còn lại.',items:['Thông tin vị trí & chính sách','Thời điểm bắt đầu','Giải đáp trước quyết định']},
  {num:'06',short:'Gia nhập Mitalab',title:'Chào mừng bạn gia nhập Mitalab',lead:'Hành trình ứng tuyển kết thúc. Một hành trình mới bắt đầu.',body:'Sau khi bạn xác nhận gia nhập, Mitalab sẽ gửi các thông tin cần thiết để chuẩn bị cho ngày làm việc đầu tiên. Từ đây, bạn chính thức bắt đầu hành trình mới cùng Mitalab.',items:['Chuẩn bị trước ngày đầu tiên','Thông tin onboarding','Kết nối với đội ngũ'],cta:'Khám phá cuộc sống tại Mitalab'}
];

const faqs = [
  ['Tôi sẽ trải qua bao nhiêu vòng tuyển dụng?','Tùy vị trí, quy trình mẫu gồm sàng lọc, trao đổi chuyên môn và quyết định. Số vòng, hình thức và thời lượng dự kiến phải được ghi ngay trong Job Detail.'],
  ['Sau khi nộp hồ sơ, khi nào tôi nhận được phản hồi?','Thời gian phản hồi tùy theo vị trí và từng giai đoạn tuyển dụng. Khi triển khai chính thức, mốc phản hồi sẽ được thông báo rõ để ứng viên chủ động theo dõi.'],
  ['Tôi có thể ứng tuyển nhiều vị trí không?','Bạn có thể ứng tuyển nhiều vị trí nếu kinh nghiệm và định hướng phù hợp. Đội ngũ tuyển dụng có thể trao đổi thêm để xác định cơ hội phù hợp nhất.'],
  ['Mitalab sử dụng dữ liệu ứng viên như thế nào?','Dữ liệu ứng viên chỉ được sử dụng cho các mục đích tuyển dụng và kết nối cơ hội nghề nghiệp theo nội dung bạn đã đồng ý. Thông báo dữ liệu chi tiết sẽ được công bố tại điểm thu thập thông tin.'],
  ['Làm sao nhận biết thông tin tuyển dụng chính thức?','Hãy ưu tiên các kênh tuyển dụng chính thức của Mitalab và MitalabWorks. Mitalab không thu phí ứng viên trong bất kỳ vòng tuyển dụng nào.']
];

const storyData = {
  technical:{tag:'FIELD NOTES · TECHNICAL',title:'Một ca hỗ trợ thiết bị bắt đầu từ đâu?',body:'Cấu trúc gợi ý: Bối cảnh → tín hiệu ban đầu → cách kỹ sư chẩn đoán → phối hợp nội bộ → phương án xử lý → bàn giao → bài học chuyên môn. Nội dung thật cần dùng ca việc đã được phê duyệt và ẩn thông tin nhạy cảm.'},
  lis:{tag:'DATA FLOW · LIS',title:'Khi một yêu cầu phòng lab trở thành tính năng LIS',body:'Cấu trúc gợi ý: nhu cầu người dùng → khảo sát quy trình → mô hình hóa → viết yêu cầu → phát triển → kiểm thử → triển khai → phản hồi sau sử dụng.'},
  commercial:{tag:'RIGHT FIT · COMMERCIAL',title:'Một giải pháp phù hợp được xây như thế nào?',body:'Cấu trúc gợi ý: bài toán khách hàng → dữ liệu đầu vào → phối hợp Product/Application → phương án → điều kiện triển khai → kết quả → cam kết sau bán.'}
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function renderJobs(){
  const keyword = $('#jobKeyword').value.trim().toLowerCase();
  const family = $('#jobFamily').value; const location=$('#jobLocation').value; const level=$('#jobLevel').value;
  const filtered = jobs.filter(j => (!keyword || `${j.title} ${j.summary} ${j.id} ${j.familyLabel}`.toLowerCase().includes(keyword)) && (family==='all'||j.family===family) && (location==='all'||j.location===location) && (level==='all'||j.level===level));
  $('#jobCount').textContent = `${filtered.length} vị trí phù hợp`;
  $('#jobGrid').innerHTML = filtered.length ? filtered.map(j=>`<article class="job-card reveal visible"><div class="job-meta"><span class="pill brand">${j.badge}</span><span class="pill">${j.familyLabel}</span></div><h3>${j.title}</h3><p>${j.summary}</p><div class="job-meta"><span class="pill">${j.locationLabel}</span><span class="pill">${j.levelLabel}</span><span class="pill">${j.type}</span></div><div class="job-code"><span>${j.id}</span><span>Hạn mẫu: ${j.deadline}</span></div><button class="link-btn" data-job="${j.id}">Xem JD ${j.title} ↗</button></article>`).join('') : '<div class="job-card"><h3>Chưa có vị trí phù hợp với bộ lọc.</h3><p>Hãy thử từ khóa hoặc tiêu chí khác.</p></div>';
  $$('[data-job]').forEach(b=>b.addEventListener('click',()=>openJob(b.dataset.job)));
}

function openJob(id){
  const j=jobs.find(x=>x.id===id); if(!j)return;
  $('#jobDialogContent').innerHTML=`<span class="eyebrow">${j.familyLabel} · ${j.id}</span><h2>${j.title}</h2><p>${j.summary}</p><dl><dt>Địa điểm</dt><dd>${j.locationLabel}</dd><dt>Cấp độ</dt><dd>${j.levelLabel}</dd><dt>Hình thức</dt><dd>${j.type}</dd><dt>Hạn mẫu</dt><dd>${j.deadline}</dd></dl><h3>Bạn sẽ làm gì?</h3><ul>${j.details.map(x=>`<li>${x}</li>`).join('')}</ul>${j.output?`<div class="apply-box"><b>Đầu ra mong đợi</b><p>${j.output}</p></div>`:''}<div class="apply-box"><b>Ứng tuyển mô phỏng</b><p>Bản GitHub này không gửi hồ sơ thật. Khi triển khai production, nối CTA này với ATS/form chính thức của Mitalab.</p></div>`;
  $('#jobDialog').showModal();
}

function renderJourney(active=0){
  $('#journeyTrack').innerHTML=journey.map((s,i)=>`<button class="journey-step ${i===active?'active':''}" role="tab" aria-selected="${i===active}" data-step="${i}"><span class="journey-dot">${s.num}</span><strong>${s.short}</strong></button>`).join('');
  const s=journey[active];
  $('#journeyDetail').innerHTML=`<div><span class="eyebrow">${s.num==='BẮT ĐẦU'?'ĐIỂM KHỞI ĐẦU':`BƯỚC ${s.num}`}</span><h3>${s.title}</h3><p><b>${s.lead}</b></p></div><div class="detail-side"><p>${s.body}</p><ul>${s.items.map(x=>`<li>${x}</li>`).join('')}</ul>${s.cta?`<button class="btn btn-primary" style="margin-top:18px" data-journey-cta="${active}">${s.cta}</button>`:''}</div>`;
  $$('[data-step]').forEach(b=>b.addEventListener('click',()=>renderJourney(Number(b.dataset.step))));
  $$('[data-journey-cta]').forEach(b=>b.addEventListener('click',()=>document.querySelector(b.dataset.journeyCta==='0'?'#jobs':'#stories').scrollIntoView({behavior:'smooth'})));
}

function renderFAQ(){
  $('#faqList').innerHTML=faqs.map((f,i)=>`<div class="faq-item ${i===0?'open':''}"><button class="faq-q" aria-expanded="${i===0}"><span>${f[0]}</span><span class="faq-symbol" aria-hidden="true">${i===0?'−':'+'}</span></button><div class="faq-a"><div class="faq-a-inner">${f[1]}</div></div></div>`).join('');
  $$('.faq-q').forEach(q=>q.addEventListener('click',()=>{
    const item=q.closest('.faq-item');
    item.classList.toggle('open');
    const open=item.classList.contains('open');
    q.setAttribute('aria-expanded',open);
    $('.faq-symbol',q).textContent=open?'−':'+';
  }));
}

function initDialogs(){
  $$('[data-open]').forEach(b=>b.addEventListener('click',()=>$('#'+b.dataset.open)?.showModal()));
  $$('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  $$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
  $$('[data-story]').forEach(b=>b.addEventListener('click',()=>{const s=storyData[b.dataset.story];$('#storyDialogContent').innerHTML=`<span class="eyebrow">${s.tag}</span><h2>${s.title}</h2><p>${s.body}</p>`;$('#storyDialog').showModal();}));
}

function initNav(){
  $('.menu-toggle').addEventListener('click',()=>{const nav=$('#site-nav');const open=nav.classList.toggle('open');$('.menu-toggle').setAttribute('aria-expanded',open)});
  $$('#site-nav a').forEach(a=>a.addEventListener('click',()=>$('#site-nav').classList.remove('open')));
}

function initSearch(){
  ['#jobKeyword','#jobFamily','#jobLocation','#jobLevel'].forEach(s=>$(s).addEventListener(s==='#jobKeyword'?'input':'change',renderJobs));
  $('#resetFilters').addEventListener('click',()=>{$('#jobKeyword').value='';$('#jobFamily').value='all';$('#jobLocation').value='all';$('#jobLevel').value='all';renderJobs()});
  $('#quickSearch').addEventListener('submit',e=>{e.preventDefault();$('#jobKeyword').value=$('#quickKeyword').value;renderJobs();$('#jobs').scrollIntoView({behavior:'smooth'})});
  $$('[data-family-jump]').forEach(b=>b.addEventListener('click',()=>{$('#jobFamily').value=b.dataset.familyJump;renderJobs();$('#jobs').scrollIntoView({behavior:'smooth'})}));
  $$('[data-filter-family]').forEach(b=>b.addEventListener('click',()=>{$('#jobFamily').value=b.dataset.filterFamily;renderJobs();$('#jobs').scrollIntoView({behavior:'smooth'})}));
  $$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'})));
}

function initTalent(){
  $('#talentForm').addEventListener('submit',e=>{e.preventDefault();$('#talentMessage').textContent='Đã mô phỏng đăng ký thành công — không có dữ liệu nào được gửi hoặc lưu.';e.currentTarget.reset();});
}

function initReveal(){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
  $$('.reveal').forEach(el=>obs.observe(el));
}

renderJobs(); renderJourney(); renderFAQ(); initDialogs(); initNav(); initSearch(); initTalent(); initReveal();
