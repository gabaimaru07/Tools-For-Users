'use strict';
/* ================= i18n dictionary ================= */
const I18N = {
en:{back:'Back',d1:'Shrink JPG, PNG and WebP images and keep them sharp.',d2:'Combine several PDF files into a single document.',d3:'Turn any text or link into a downloadable QR code.',d4:'Count words, characters and sentences as you type.',d5:'Convert length, weight and temperature instantly.',d6:'Create strong random passwords you can trust.',
ab1h:'Our mission',ab1:'We believe everyday online tasks should be quick, free and clear. Plainly lets anyone compress an image, merge a PDF or create a password without signing up or installing anything.',
ab2h:'What you can do here',ab2:'Plainly has six tools: an image compressor, a PDF merger, a QR code generator, a word and character counter, a unit converter and a password generator. Each has its own page with simple controls and instant results.',
ab3h:'Private by design',ab3:"Your files never leave your device. Images, PDFs and text are processed inside your browser, and passwords are made with your browser's secure random generator.",
ab4h:'Free, and kept free',ab4:'Plainly is free to use and supported by advertising. We keep improving the tools and adding languages. Have an idea or found a problem? Use the Contact page and we will read it.',
sending:'Sending…',errSend:'The message could not be sent. Please try again later.',home:'Home',about:'About',contact:'Contact',privacy:'Privacy Policy',terms:'Terms of Service',
 heroT:'Small tools that just work.',heroS:'Six free tools that run privately in your browser. Your files never leave your device.',
 t1:'Image Compressor',t2:'PDF Merger',t3:'QR Code Generator',t4:'Word & Character Counter',t5:'Unit Converter',t6:'Password Generator',
 quality:'Quality',download:'Download',merge:'Merge PDFs',generate:'Generate',copy:'Copy',copied:'Copied',remove:'Remove',
 words:'Words',chars:'Characters',sentences:'Sentences',phText:'Type or paste your text…',phQr:'Text or URL',
 length:'Length',weight:'Weight',temp:'Temperature',pwLen:'Length',upper:'Uppercase',nums:'Numbers',syms:'Symbols',
 name:'Name',email:'Email',message:'Message',send:'Send message',sent:'Thanks! Your message has been sent.',
 errImg:'Choose an image file (JPG, PNG or WebP).',errPdf:'Select at least 2 PDF files to merge.',errQr:'Enter text or a URL first.',errPw:'Select at least one character type.',errGen:'Something went wrong. Try another file.',
 aboutP:'Plainly offers free, fast online tools for everyday tasks. Everything runs in your browser, so your files and text stay on your device.',
 contactP:'Questions, feedback or a tool you would like to see? Send us a message.',
 priv1:'We do not upload or store the files or text you process. All tools run locally in your browser.',
 priv2:'This site may use cookies and third-party advertising (such as Google AdSense) to show ads. You can manage ad personalization in your Google settings.',
 terms1:'These tools are provided free and "as is", without warranties of any kind. You are responsible for how you use the results.',
 terms2:'By using this site you agree not to misuse it. We may update these terms at any time.'},
fr:{back:'Retour',d1:'Réduisez le poids de vos images JPG, PNG et WebP sans perdre en netteté.',d2:'Réunissez plusieurs fichiers PDF en un seul document.',d3:'Transformez un texte ou un lien en QR code téléchargeable.',d4:'Comptez mots, caractères et phrases en tapant.',d5:'Convertissez longueurs, poids et températures instantanément.',d6:'Créez des mots de passe aléatoires et robustes.',
ab1h:'Notre mission',ab1:"Nous pensons que les tâches du quotidien en ligne doivent être rapides, gratuites et claires. Plainly permet à chacun de compresser une image, fusionner des PDF ou créer un mot de passe sans inscription ni installation.",
ab2h:'Ce que vous pouvez faire',ab2:"Plainly réunit six outils : compresseur d'images, fusion de PDF, générateur de QR code, compteur de mots, convertisseur d'unités et générateur de mots de passe. Chacun a sa propre page, avec des commandes simples et des résultats immédiats.",
ab3h:'Confidentialité par conception',ab3:"Vos fichiers ne quittent jamais votre appareil. Images, PDF et textes sont traités dans votre navigateur, et les mots de passe sont créés avec le générateur aléatoire sécurisé du navigateur.",
ab4h:'Gratuit, et ça le restera',ab4:"Plainly est gratuit et financé par la publicité. Nous améliorons les outils et ajoutons des langues. Une idée ou un problème ? Écrivez-nous via la page Contact.",
sending:'Envoi…',errSend:"Le message n'a pas pu être envoyé. Réessayez plus tard.",home:'Accueil',about:'À propos',contact:'Contact',privacy:'Politique de confidentialité',terms:"Conditions d'utilisation",
 heroT:'De petits outils qui font le travail.',heroS:'Six outils gratuits qui fonctionnent dans votre navigateur. Vos fichiers ne quittent jamais votre appareil.',
 t1:"Compresseur d'images",t2:'Fusion de PDF',t3:'Générateur de QR code',t4:'Compteur de mots',t5:"Convertisseur d'unités",t6:'Générateur de mots de passe',
 quality:'Qualité',download:'Télécharger',merge:'Fusionner les PDF',generate:'Générer',copy:'Copier',copied:'Copié',remove:'Retirer',
 words:'Mots',chars:'Caractères',sentences:'Phrases',phText:'Saisissez ou collez votre texte…',phQr:'Texte ou URL',
 length:'Longueur',weight:'Poids',temp:'Température',pwLen:'Longueur',upper:'Majuscules',nums:'Chiffres',syms:'Symboles',
 name:'Nom',email:'E-mail',message:'Message',send:'Envoyer',sent:'Merci ! Votre message a été envoyé.',
 errImg:'Choisissez une image (JPG, PNG ou WebP).',errPdf:'Sélectionnez au moins 2 fichiers PDF.',errQr:"Saisissez d'abord un texte ou une URL.",errPw:'Sélectionnez au moins un type de caractère.',errGen:'Une erreur est survenue. Essayez un autre fichier.',
 aboutP:"Plainly propose des outils en ligne gratuits et rapides pour le quotidien. Tout s'exécute dans votre navigateur : vos fichiers et textes restent sur votre appareil.",
 contactP:'Une question, un avis ou un outil à suggérer ? Écrivez-nous.',
 priv1:"Nous ne téléversons ni ne conservons les fichiers ou textes que vous traitez. Tous les outils fonctionnent localement dans votre navigateur.",
 priv2:"Ce site peut utiliser des cookies et de la publicité tierce (comme Google AdSense). Vous pouvez gérer la personnalisation des annonces dans vos paramètres Google.",
 terms1:'Ces outils sont fournis gratuitement « tels quels », sans garantie. Vous êtes responsable de l\'utilisation des résultats.',
 terms2:"En utilisant ce site, vous vous engagez à ne pas en faire un usage abusif. Ces conditions peuvent être modifiées à tout moment."},
ar:{back:'رجوع',d1:'قلّل حجم صور JPG وPNG وWebP مع الحفاظ على وضوحها.',d2:'ادمج عدة ملفات PDF في مستند واحد.',d3:'حوّل أي نص أو رابط إلى رمز QR قابل للتنزيل.',d4:'احسب الكلمات والأحرف والجمل أثناء الكتابة.',d5:'حوّل الطول والوزن والحرارة فورًا.',d6:'أنشئ كلمات مرور عشوائية وقوية.',
ab1h:'مهمتنا',ab1:'نؤمن بأن المهام اليومية على الإنترنت يجب أن تكون سريعة ومجانية وواضحة. يتيح Plainly للجميع ضغط صورة أو دمج ملفات PDF أو إنشاء كلمة مرور دون تسجيل أو تثبيت أي شيء.',
ab2h:'ماذا يمكنك أن تفعل هنا',ab2:'يضم Plainly ست أدوات: ضغط الصور، دمج PDF، منشئ QR، عدّاد الكلمات، محوّل الوحدات ومنشئ كلمات المرور. لكل أداة صفحتها الخاصة بعناصر تحكم بسيطة ونتائج فورية.',
ab3h:'خصوصية بالتصميم',ab3:'ملفاتك لا تغادر جهازك أبدًا. تتم معالجة الصور وملفات PDF والنصوص داخل متصفحك، وتُنشأ كلمات المرور بمولّد عشوائي آمن في المتصفح.',
ab4h:'مجاني وسيبقى كذلك',ab4:'Plainly مجاني ويُموَّل بالإعلانات. نواصل تحسين الأدوات وإضافة لغات. إن كانت لديك فكرة أو واجهت مشكلة فراسلنا عبر صفحة اتصل بنا.',
sending:'جارٍ الإرسال…',errSend:'تعذّر إرسال الرسالة. حاول لاحقًا.',home:'الرئيسية',about:'من نحن',contact:'اتصل بنا',privacy:'سياسة الخصوصية',terms:'شروط الخدمة',
 heroT:'أدوات صغيرة تؤدي المهمة.',heroS:'ست أدوات مجانية تعمل داخل متصفحك. ملفاتك لا تغادر جهازك أبدًا.',
 t1:'ضغط الصور',t2:'دمج ملفات PDF',t3:'منشئ رمز QR',t4:'عدّاد الكلمات والأحرف',t5:'محوّل الوحدات',t6:'منشئ كلمات المرور',
 quality:'الجودة',download:'تنزيل',merge:'دمج الملفات',generate:'إنشاء',copy:'نسخ',copied:'تم النسخ',remove:'إزالة',
 words:'كلمات',chars:'أحرف',sentences:'جمل',phText:'اكتب أو الصق نصك هنا…',phQr:'نص أو رابط',
 length:'الطول',weight:'الوزن',temp:'الحرارة',pwLen:'الطول',upper:'أحرف كبيرة',nums:'أرقام',syms:'رموز',
 name:'الاسم',email:'البريد الإلكتروني',message:'الرسالة',send:'إرسال',sent:'شكرًا! تم إرسال رسالتك.',
 errImg:'اختر ملف صورة (JPG أو PNG أو WebP).',errPdf:'اختر ملفين PDF على الأقل للدمج.',errQr:'أدخل نصًا أو رابطًا أولًا.',errPw:'اختر نوعًا واحدًا على الأقل من الأحرف.',errGen:'حدث خطأ. جرّب ملفًا آخر.',
 aboutP:'يقدّم موقع Plainly أدوات مجانية وسريعة للمهام اليومية. كل شيء يعمل داخل متصفحك، لذا تبقى ملفاتك ونصوصك على جهازك.',
 contactP:'لديك سؤال أو اقتراح أو أداة تود رؤيتها؟ راسلنا.',
 priv1:'نحن لا نرفع ولا نخزّن الملفات أو النصوص التي تعالجها. جميع الأدوات تعمل محليًا في متصفحك.',
 priv2:'قد يستخدم هذا الموقع ملفات تعريف الارتباط وإعلانات من أطراف ثالثة (مثل Google AdSense). يمكنك إدارة تخصيص الإعلانات من إعدادات حسابك في Google.',
 terms1:'هذه الأدوات مقدّمة مجانًا "كما هي" دون أي ضمانات. أنت المسؤول عن استخدام النتائج.',
 terms2:'باستخدامك الموقع فإنك توافق على عدم إساءة استخدامه. قد نحدّث هذه الشروط في أي وقت.'}
};
let lang = 'en';
const t = k => I18N[lang][k] || k;
const $ = id => document.getElementById(id);

/* ================= Language + navigation ================= */
function setLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';   // CSS uses logical properties, so layout flips automatically
  document.querySelectorAll('[data-i18n]').forEach(e => e.textContent = t(e.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(e => e.placeholder = t(e.dataset.i18nPh));
  $('lang').value = l;
  renderPdfList();
  try { localStorage.setItem('lang', l); } catch(e){}
}
function showPage(id){
  if(!$(id)||!$(id).classList.contains('view')) id='home';
  document.querySelectorAll('.view').forEach(v => v.hidden = v.id !== id);
  window.scrollTo({top:0});
}

/* ================= Helpers ================= */
function saveBlob(blob, name){
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}
const kb = n => (n/1024).toFixed(1) + ' KB';

/* ================= 1. Image compressor ================= */
let imgEl = null, imgName = '', imgBlob = null;
function compressImage(){
  if(!imgEl) return;
  const c = document.createElement('canvas');
  c.width = imgEl.naturalWidth; c.height = imgEl.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0,0,c.width,c.height);   // avoids black background for transparent PNGs
  ctx.drawImage(imgEl,0,0);
  c.toBlob(b => {
    imgBlob = b; $('imgDl').disabled = !b;
    if(b) $('imgInfo').textContent = `${kb(imgOrig)} → ${kb(b.size)} (${Math.round((1 - b.size/imgOrig)*100)}%)`;
  }, 'image/jpeg', $('imgQ').value/100);
}
let imgOrig = 0;
$('imgFile').addEventListener('change', e => {
  const f = e.target.files[0];
  if(!f || !f.type.startsWith('image/')){ if(f) alert(t('errImg')); return; }
  imgName = f.name.replace(/\.[^.]+$/,''); imgOrig = f.size;
  const im = new Image();
  im.onload = () => { imgEl = im; compressImage(); };
  im.onerror = () => alert(t('errImg'));
  im.src = URL.createObjectURL(f);
});
$('imgQ').addEventListener('input', e => { $('imgQv').textContent = e.target.value + '%'; compressImage(); });
$('imgDl').addEventListener('click', () => imgBlob && saveBlob(imgBlob, imgName + '-compressed.jpg'));

/* ================= 2. PDF merger ================= */
let pdfs = [];
function renderPdfList(){
  $('pdfList').innerHTML = '';
  pdfs.forEach((f,i) => {
    const li = document.createElement('li');
    const s = document.createElement('span'); s.textContent = f.name;
    const b = document.createElement('button'); b.textContent = t('remove');
    b.onclick = () => { pdfs.splice(i,1); renderPdfList(); };
    li.append(s,b); $('pdfList').append(li);
  });
}
$('pdfFiles').addEventListener('change', e => {
  pdfs = pdfs.concat([...e.target.files].filter(f => f.type === 'application/pdf'));
  e.target.value = ''; renderPdfList();
});
$('pdfBtn').addEventListener('click', async () => {
  if(pdfs.length < 2) return alert(t('errPdf'));
  try{
    const out = await PDFLib.PDFDocument.create();
    for(const f of pdfs){
      const src = await PDFLib.PDFDocument.load(await f.arrayBuffer());
      (await out.copyPages(src, src.getPageIndices())).forEach(p => out.addPage(p));
    }
    saveBlob(new Blob([await out.save()], {type:'application/pdf'}), 'merged.pdf');
  }catch(err){ alert(t('errGen')); }
});

/* ================= 3. QR generator ================= */
$('qrBtn').addEventListener('click', () => {
  const v = $('qrText').value.trim();
  if(!v) return alert(t('errQr'));
  $('qrOut').innerHTML = '';
  new QRCode($('qrOut'), {text:v, width:220, height:220, correctLevel:QRCode.CorrectLevel.M});
  $('qrDl').hidden = false;
});
$('qrDl').addEventListener('click', () => {
  const c = $('qrOut').querySelector('canvas');
  if(c) c.toBlob(b => saveBlob(b, 'qrcode.png'));
});

/* ================= 4. Word counter ================= */
$('cText').addEventListener('input', e => {
  const s = e.target.value, tr = s.trim();
  $('cW').textContent = tr ? tr.split(/\s+/).length : 0;
  $('cC').textContent = s.length;
  $('cS').textContent = s.split(/[.!?؟…]+/).filter(x => x.trim()).length;
});

/* ================= 5. Unit converter ================= */
const UNITS = {
  len:{m:1,km:1000,cm:.01,mm:.001,mi:1609.344,ft:.3048,in:.0254},
  wt:{kg:1,g:.001,mg:1e-6,lb:.45359237,oz:.028349523125},
  tmp:{'°C':0,'°F':0,K:0}
};
const toC = (v,u) => u==='°F' ? (v-32)*5/9 : u==='K' ? v-273.15 : v;
const fromC = (v,u) => u==='°F' ? v*9/5+32 : u==='K' ? v+273.15 : v;
function fillUnits(){
  const keys = Object.keys(UNITS[$('cvType').value]);
  [$('cvFrom'),$('cvTo')].forEach((s,i) => { s.innerHTML = keys.map(k => `<option>${k}</option>`).join(''); s.selectedIndex = Math.min(i,keys.length-1); });
  convert();
}
function convert(){
  const type = $('cvType').value, v = parseFloat($('cvVal').value), a = $('cvFrom').value, b = $('cvTo').value;
  if(isNaN(v)) return $('cvRes').textContent = '';
  const r = type === 'tmp' ? fromC(toC(v,a),b) : v * UNITS[type][a] / UNITS[type][b];
  $('cvRes').textContent = `${+r.toFixed(6)} ${b}`;
}
$('cvType').addEventListener('change', fillUnits);
['cvVal','cvFrom','cvTo'].forEach(id => $(id).addEventListener('input', convert));

/* ================= 6. Password generator ================= */
function rnd(n){  // unbiased secure random integer in [0,n)
  const max = Math.floor(2**32/n)*n, a = new Uint32Array(1);
  do crypto.getRandomValues(a); while(a[0] >= max);
  return a[0] % n;
}
function genPassword(){
  const sets = ['abcdefghijklmnopqrstuvwxyz'];
  if($('pwUp').checked) sets.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  if($('pwNum').checked) sets.push('0123456789');
  if($('pwSym').checked) sets.push('!@#$%^&*()-_=+[]{};:,.<>?');
  const len = +$('pwLen').value, pool = sets.join('');
  const pw = sets.map(s => s[rnd(s.length)]);                       // guarantee one of each chosen type
  while(pw.length < len) pw.push(pool[rnd(pool.length)]);
  for(let i = pw.length-1; i > 0; i--){ const j = rnd(i+1); [pw[i],pw[j]] = [pw[j],pw[i]]; }  // shuffle
  $('pwOut').textContent = pw.join('');
}
$('pwLen').addEventListener('input', e => { $('pwLenV').textContent = e.target.value; genPassword(); });
['pwUp','pwNum','pwSym'].forEach(id => $(id).addEventListener('change', genPassword));
$('pwGen').addEventListener('click', genPassword);
$('pwCopy').addEventListener('click', async () => {
  const v = $('pwOut').textContent; if(!v) return;
  try{ await navigator.clipboard.writeText(v); }catch(e){}
  const b = $('pwCopy'); b.textContent = t('copied'); setTimeout(() => b.textContent = t('copy'), 1200);
});

/* ================= Contact form (real delivery via FormSubmit -> gabaimaru07@gmail.com) ================= */
$('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const f = e.target, b = f.querySelector('button.btn'), m = $('formMsg');
  b.disabled = true; m.textContent = t('sending');
  try{
    const r = await fetch('https://formsubmit.co/ajax/gabaimaru07@gmail.com', {
      method:'POST', headers:{'Content-Type':'application/json', Accept:'application/json'},
      body: JSON.stringify(Object.fromEntries(new FormData(f)))
    });
    const j = await r.json();
    if(!r.ok || String(j.success) !== 'true') throw new Error('send failed');
    m.textContent = t('sent'); f.reset();
  }catch(err){ m.textContent = t('errSend'); }
  b.disabled = false;
});

/* ================= Init ================= */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-page]'); if(b) location.hash = b.dataset.page;
});
$('lang').addEventListener('change', e => setLang(e.target.value));
fillUnits();
genPassword();
let saved = 'en'; try{ saved = localStorage.getItem('lang') || 'en'; }catch(e){}
setLang(I18N[saved] ? saved : 'en');

/* ================= Routing (hash) + 3D tilt ================= */
window.addEventListener('hashchange', () => showPage(location.hash.slice(1)));
showPage(location.hash.slice(1));
if(matchMedia('(hover:hover)').matches) document.querySelectorAll('.card').forEach(c => {
  c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect(), x = (e.clientX-r.left)/r.width-.5, y = (e.clientY-r.top)/r.height-.5;
    c.style.transform = `perspective(800px) rotateY(${x*14}deg) rotateX(${-y*14}deg) translateZ(10px)`;
    c.style.setProperty('--mx',(x+.5)*100+'%'); c.style.setProperty('--my',(y+.5)*100+'%');
  });
  c.addEventListener('pointerleave', () => c.style.transform = '');
});
