const jobs = [
  {id:'job-sales-biochem',badge:'Urgent',family:'commercial',familyLabel:'Kinh doanh & Sản phẩm',title:'Nhân viên Kinh doanh Thiết bị Y tế & Hóa chất tiêu hao (Sinh hóa – Miễn dịch)',location:'hn',locationLabel:'Hà Nội',level:'staff',levelLabel:'Nhân viên',type:'Toàn thời gian',summary:'Tìm hiểu thị trường, phát triển khách hàng và tư vấn giải pháp thiết bị/hóa chất xét nghiệm phù hợp.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Tìm hiểu thị trường, đối thủ, sản phẩm và khách hàng.','Tìm kiếm, duy trì và phát triển quan hệ khách hàng.','Tư vấn giải pháp, đàm phán hợp đồng và theo dõi thầu/công nợ.'],url:'https://www.mitalab.com/tuyen-dung/hn-nhan-vien-kinh-doanh-thiet-bi-y-te-hoa-chat-tieu-hao-nganh-hang-sinh-hoa-mien-dich'},
  {id:'job-software',badge:'Hot',family:'data',familyLabel:'LIS / IT / Data',title:'Nhân viên Lập trình Phần mềm',location:'hn',locationLabel:'Hà Nội',level:'staff',levelLabel:'Nhân viên',type:'Toàn thời gian',summary:'Phát triển ứng dụng web/windows cho dự án nội bộ và khách hàng trong bối cảnh Digital Healthcare/MedTech.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Phát triển ứng dụng phần mềm trên web/windows.','Lập trình, kết nối cơ sở dữ liệu, gỡ lỗi và sửa đổi chương trình.','Báo cáo tiến độ và xử lý lỗi từ mức trung bình đến phức tạp khi triển khai/vận hành.'],url:'https://www.mitalab.com/tuyen-dung/hn-lap-trinh-vien-phat-trien-phan-mem'},
  {id:'job-chief-accountant',badge:'Hot',family:'corporate',familyLabel:'Khối hỗ trợ',title:'Kế toán trưởng (Không quản lý nhân viên)',location:'hn',locationLabel:'Hà Nội',level:'senior',levelLabel:'Cao cấp',type:'Toàn thời gian',summary:'Kiểm soát tài chính – kế toán, công nợ, chứng từ, báo cáo luật định và các vấn đề thuế của Công ty.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Kiểm tra, soát xét thu/chi và nghĩa vụ ngân sách.','Theo dõi công nợ, tổ chức luân chuyển chứng từ.','Chịu trách nhiệm báo cáo tài chính theo chuẩn mực và pháp luật Việt Nam.'],url:'https://www.mitalab.com/tuyen-dung/hn-ke-toan-truong'},
  {id:'job-rd',badge:'Hot',family:'commercial',familyLabel:'Kinh doanh & Sản phẩm',title:'Nhân viên R&D (Phát triển sản phẩm thương mại)',location:'hn',locationLabel:'Hà Nội',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Tìm kiếm ý tưởng sản phẩm mới, nghiên cứu xu hướng xét nghiệm và phát triển cơ hội kinh doanh trong y tế/chẩn đoán.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Nghiên cứu thị trường trong nước và quốc tế, chính sách y tế và xu hướng bệnh.','Cập nhật xu hướng sản phẩm xét nghiệm và đề xuất cơ hội kinh doanh mới.','Thu thập, xử lý thông tin sản phẩm mới và xây định hướng tiếp cận/phát triển.'],url:'https://www.mitalab.com/tuyen-dung/hn-nhan-vien-rd-phat-trien-san-pham-thuong-mai'},
  {id:'job-technician',badge:'Urgent',family:'tech',familyLabel:'Thiết bị & Ứng dụng',title:'Kỹ thuật viên Bảo trì Bảo dưỡng Thiết bị Y tế',location:'hn',locationLabel:'Hà Nội',level:'staff',levelLabel:'Nhân viên / Fresher',type:'Toàn thời gian',summary:'Lắp đặt, bảo trì máy xét nghiệm, khảo sát hiện trường và phối hợp xử lý sự cố tại khách hàng.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Lắp đặt các máy xét nghiệm mới tại khu vực được phân công.','Bảo trì, bảo dưỡng và hỗ trợ kỹ sư xử lý sự cố tại khách hàng.','Khảo sát hiện trường, thực hiện báo cáo; vị trí chấp nhận sinh viên mới ra trường.'],url:'https://www.mitalab.com/tuyen-dung/hn-ky-thuat-vien-bao-tri-bao-duong-thiet-bi-y-te'},
  {id:'job-product-automation',badge:'Urgent',family:'commercial',familyLabel:'Kinh doanh & Sản phẩm',title:'Nhân viên Phụ trách Sản phẩm (Ngành hàng Automation)',location:'hn',locationLabel:'Hà Nội',level:'specialist',levelLabel:'Chuyên viên',type:'Toàn thời gian',summary:'Quản lý và phát triển danh mục Automation & AI, phối hợp hãng và các phòng ban để xây giải pháp và kế hoạch kinh doanh.',posted:'04/09/2026',deadline:'Theo tin gốc: còn khoảng 28 ngày',details:['Quản lý danh mục sản phẩm, giải pháp Automation và AI.','Phối hợp hãng về sản phẩm, giá, chính sách thương mại và cung ứng.','Phân tích thị trường, hỗ trợ Sales, tư vấn giải pháp và đào tạo nội bộ.'],url:'https://www.mitalab.com/tuyen-dung/hn-nhan-vien-phu-trach-san-pham-nganh-hang-automation'},
  {id:'job-engineer',badge:'Hot',family:'tech',familyLabel:'Thiết bị & Ứng dụng',title:'Kỹ sư Bảo trì Bảo dưỡng Thiết bị Y tế',location:'hn',locationLabel:'Hà Nội',level:'specialist',levelLabel:'Kỹ sư',type:'Toàn thời gian',summary:'Lắp đặt, bảo trì và bảo dưỡng thiết bị xét nghiệm tại khu vực được phân công, phối hợp hỗ trợ khách hàng.',posted:'04/09/2026',deadline:'Theo trang danh sách: còn khoảng 30 ngày',details:['Lắp đặt và bàn giao máy xét nghiệm mới.','Bảo trì, bảo dưỡng thiết bị theo khu vực phụ trách.','Phối hợp xử lý sự cố và bảo đảm chất lượng thiết bị sau triển khai.'],url:'https://www.mitalab.com/tuyen-dung'}
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
  ['Tôi sẽ trải qua bao nhiêu vòng tuyển dụng?','Mitalab hiện chưa công bố một số vòng cố định áp dụng cho mọi vị trí trên website. Số bước có thể khác nhau theo vai trò; HR sẽ trao đổi cụ thể khi liên hệ và sắp xếp phỏng vấn.'],
  ['Sau khi nộp hồ sơ, khi nào tôi nhận được phản hồi?','Trang Tuyển dụng cho biết hồ sơ sẽ được đánh giá và ứng viên được liên hệ trong thời gian sớm nhất, nhưng chưa công bố SLA cố định. Nếu cần kiểm tra trạng thái, bạn có thể liên hệ Bộ phận Tuyển dụng theo thông tin bên trái.'],
  ['Tôi có thể ứng tuyển nhiều vị trí không?','Bạn có thể quan tâm nhiều vị trí nếu kinh nghiệm phù hợp. Nên ghi rõ vị trí ưu tiên trong CV/email để đội ngũ Tuyển dụng hiểu định hướng chính của bạn và trao đổi cơ hội phù hợp hơn.'],
  ['Tôi gửi CV bằng cách nào?','Trang Tuyển dụng có form ứng tuyển trực tuyến. Một số JD hiện hành cũng hướng dẫn gửi CV: Hà Nội/Đà Nẵng qua tuyendung@mitalab.com; TP.HCM/Cần Thơ qua tuyendunghcm@mitalab.com. Hãy ưu tiên hướng dẫn ghi trên JD bạn đang ứng tuyển.'],
  ['Tiêu đề email và tên file CV nên ghi thế nào?','Các JD hiện hành hướng dẫn theo cấu trúc: Địa điểm ứng tuyển – Vị trí ứng tuyển – Họ và tên. Cách đặt tên rõ ràng giúp hồ sơ được nhận diện nhanh và hạn chế nhầm vị trí.'],
  ['Sinh viên mới ra trường có thể ứng tuyển không?','Có ở một số vị trí. Ví dụ, tin Kỹ thuật viên Bảo trì Bảo dưỡng Thiết bị Y tế đăng ngày 04/09/2026 ghi rõ không yêu cầu kinh nghiệm và chấp nhận sinh viên mới ra trường. Hãy kiểm tra phần Yêu cầu của từng JD.'],
  ['Mitalab có đào tạo nhân viên không?','Có nội dung đào tạo được công khai trên website. Nhiều JD hiện hành cũng nêu nhân viên được tham gia các khóa đào tạo kiến thức chuyên môn và kỹ năng mềm. Chương trình cụ thể sẽ phụ thuộc vai trò và từng giai đoạn.'],
  ['Quyền lợi và phúc lợi có những gì?','Các JD hiện hành có đề cập gói lương thưởng cạnh tranh, BSC/tháng 13 theo chính sách, đào tạo, ăn trưa, hỗ trợ phục vụ công việc, quà dịp lễ và các hoạt động nghỉ mát/team building. Chi tiết có thể khác theo vị trí và chính sách tại thời điểm nhận việc.'],
  ['Một số vị trí có cần đi công tác không?','Có thể. Ví dụ vị trí Kỹ thuật viên hiện yêu cầu sẵn sàng đi công tác xa, dài ngày. Với các vai trò kỹ thuật, sản phẩm hoặc kinh doanh, phạm vi di chuyển cần được đọc trực tiếp trong từng JD và trao đổi với HR.'],
  ['Mức lương của vị trí được xác định như thế nào?','Các tin tuyển dụng hiện tại chủ yếu ghi “cạnh tranh” hoặc thỏa thuận theo năng lực. Mức cụ thể phụ thuộc phạm vi công việc, kinh nghiệm và chính sách của từng vị trí; HR sẽ trao đổi ở giai đoạn phù hợp.'],
  ['Mitalab sử dụng dữ liệu ứng viên như thế nào?','Bản Career Hub này chưa phải hệ thống lưu hồ sơ thật. Khi ứng tuyển chính thức, hãy sử dụng form hoặc email trên mitalab.com và đọc thông báo/chính sách dữ liệu tại điểm thu thập thông tin trước khi gửi.'],
  ['Làm sao nhận biết thông tin tuyển dụng chính thức?','Ưu tiên trang mitalab.com/tuyen-dung, Fanpage MitalabWorks, Fanpage MitalabCompany và các thông tin liên hệ được ghi trực tiếp trong JD chính thức. Khi có nghi ngờ, xác minh qua Bộ phận Tuyển dụng trước khi cung cấp thông tin cá nhân.'],
  ['Nếu hiện tại chưa có vị trí phù hợp thì sao?','Bạn có thể theo dõi trang Tuyển dụng và MitalabWorks để cập nhật tin mới. Khối Talent Community trong bản Career Hub này đang là prototype; chưa gửi hoặc lưu dữ liệu thật.']
];

const storyData = {
  technical:{tag:'FIELD NOTES · TECHNICAL · BÀI THẬT',title:'Lắp đặt MiSeq i100 Plus đầu tiên tại Việt Nam',body:'Tháng 12/2025, Mitalab công bố hoàn tất lắp đặt và bàn giao hệ thống MiSeq i100 Plus cho một đối tác chiến lược. Đây là chất liệu phù hợp để kể chuyện nghề kỹ thuật theo chuỗi: chuẩn bị triển khai → lắp đặt → bàn giao → hỗ trợ khai thác công nghệ.',source:'Mitalab.com · 25/12/2025',url:'https://www.mitalab.com/mitalab-lap-dat-cong-nghe-giai-trinh-tu-gen-moi-miseq-i100-plus-dau-tien-tai-viet-nam.html'},
  culture:{tag:'GROWING TOGETHER · CULTURE · BÀI THẬT',title:'Kick-off Meeting 2026: Đồng hành phát triển – Kiến tạo thành công',body:'Kick-off 2026 được tổ chức trên cả hai miền, có hoạt động ghi nhận cá nhân/đội nhóm/quản lý nổi bật, giới thiệu BSC và ghi lại cam kết mục tiêu của Mitalabers. Đây là một mẫu tốt để chuyển “văn hóa” thành những hành vi và bằng chứng cụ thể.',source:'Mitalab.com · 06/04/2026',url:'https://www.mitalab.com/en/kick-off-meeting-2026-growing-together-creating-success.html'},
  team:{tag:'TOGETHER AS ONE · TEAM · BÀI THẬT',title:'Team Building 2023: Trekking “Together as One”',body:'Hành trình Phước Bửu – Long Hải đưa Mitalabers qua các thử thách Tâm thế, Hợp tác, Kỷ luật và Đồng nhất. Bài viết là ví dụ thực tế về cách kể văn hóa công ty qua trải nghiệm tập thể thay vì chỉ liệt kê giá trị.',source:'Mitalab.com · 25/07/2023',url:'https://www.mitalab.com/mitalab-team-building-2023-trekking-together-one.html'}
};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

function renderJobs(){
  const keyword = $('#jobKeyword').value.trim().toLowerCase();
  const family = $('#jobFamily').value; const location=$('#jobLocation').value; const level=$('#jobLevel').value;
  const filtered = jobs.filter(j => (!keyword || `${j.title} ${j.summary} ${j.familyLabel}`.toLowerCase().includes(keyword)) && (family==='all'||j.family===family) && (location==='all'||j.location===location) && (level==='all'||j.level===level));
  $('#jobCount').textContent = `${filtered.length} vị trí phù hợp`;
  $('#jobGrid').innerHTML = filtered.length ? filtered.map(j=>`<article class="job-card reveal visible"><div class="job-meta"><span class="pill brand">${j.badge}</span><span class="pill">${j.familyLabel}</span></div><h3>${j.title}</h3><p>${j.summary}</p><div class="job-meta"><span class="pill">${j.locationLabel}</span><span class="pill">${j.levelLabel}</span><span class="pill">${j.type}</span></div><div class="job-code"><span>Đăng: ${j.posted}</span><span>${j.deadline}</span></div><button class="link-btn" data-job="${j.id}">Xem thông tin vị trí ↗</button></article>`).join('') : '<div class="job-card"><h3>Chưa có vị trí phù hợp với bộ lọc.</h3><p>Hãy thử từ khóa hoặc tiêu chí khác.</p></div>';
  $$('[data-job]').forEach(b=>b.addEventListener('click',()=>openJob(b.dataset.job)));
}

function openJob(id){
  const j=jobs.find(x=>x.id===id); if(!j)return;
  $('#jobDialogContent').innerHTML=`<span class="eyebrow">${j.familyLabel} · NGUỒN MITALAB.COM</span><h2>${j.title}</h2><p>${j.summary}</p><dl><dt>Địa điểm</dt><dd>${j.locationLabel}</dd><dt>Cấp độ tham chiếu</dt><dd>${j.levelLabel}</dd><dt>Ngày đăng</dt><dd>${j.posted}</dd><dt>Trạng thái</dt><dd>${j.deadline}</dd></dl><h3>Nội dung chính</h3><ul>${j.details.map(x=>`<li>${x}</li>`).join('')}</ul><div class="apply-box"><b>Thông tin chính thức</b><p>Dữ liệu trong Career Hub là snapshot đối chiếu ngày 07/09/2026. Trạng thái tuyển dụng có thể thay đổi sau thời điểm này.</p><a class="btn btn-primary" href="${j.url}" target="_blank" rel="noreferrer">Mở JD trên Mitalab ↗</a></div>`;
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
  $$('[data-story]').forEach(b=>b.addEventListener('click',()=>{const s=storyData[b.dataset.story];$('#storyDialogContent').innerHTML=`<span class="eyebrow">${s.tag}</span><h2>${s.title}</h2><p>${s.body}</p><div class="apply-box"><b>${s.source}</b><p>Đây là nội dung công khai từ website Mitalab.</p><a class="btn btn-primary" href="${s.url}" target="_blank" rel="noreferrer">Đọc bài gốc trên Mitalab ↗</a></div>`;$('#storyDialog').showModal();}));
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
