// 页面加载动画
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => document.getElementById('navbar').classList.add('show'), 100);
    setTimeout(() => document.getElementById('main-title').classList.add('show'), 300);
    setTimeout(() => document.getElementById('main-desc').classList.add('show'), 500);
    setTimeout(() => document.getElementById('main-btns').classList.add('show'), 700);
    setTimeout(() => document.getElementById('footer-line').classList.add('show'), 900);
  });
  // 简单的中英文切换
  const langSwitch = document.getElementById('lang-switch');
  let isCN = false;
  langSwitch.onclick = function() {
    isCN = !isCN;
    if (isCN) {
      document.getElementById('main-title').innerHTML = '东南亚的<br>科技力量';
      document.getElementById('main-desc').innerText = 'AMW CYBERTECH是一家专注于人工智能、大数据和网络安全开发的创新科技公司，推动东南亚的数字化转型。';
      document.getElementById('btn-services').innerText = '我们的服务';
      document.getElementById('btn-learn').innerText = '了解更多';
      document.getElementById('nav-about').innerText = '关于我们';
      document.getElementById('nav-services').innerText = '服务';
      document.getElementById('nav-technology').innerText = '技术';
      document.getElementById('nav-contact').innerText = '联系';
      langSwitch.innerText = 'en/cn';
    } else {
      document.getElementById('main-title').innerHTML = 'Technology for<br>Southeast Asia';
      document.getElementById('main-desc').innerText = 'AMW CYBERTECH is an innovative technology company focusing on artificial intelligence, big data, and cybersecurity development, driving digital transformation across Southeast Asia.';
      document.getElementById('btn-services').innerText = 'Our Services';
      document.getElementById('btn-learn').innerText = 'Learn More';
      document.getElementById('nav-about').innerText = 'About';
      document.getElementById('nav-services').innerText = 'Services';
      document.getElementById('nav-technology').innerText = 'Technology';
      document.getElementById('nav-contact').innerText = 'Contact';
      langSwitch.innerText = 'cn/en';
    }
  };
  
// logo切换功能
const logoSegBtns = document.querySelectorAll('.logo-seg-btn');
const logoArea = document.querySelector('.logo');
function getLogoHTML(style) {
  if (style === 'style1') {
    return `<span class=\"logo-icon\" style=\"display:inline-block;\"><img src=\"1png.png\" alt=\"logo1\" class=\"logo-img\" /></span>`;
  } else if (style === 'style2') {
    return `<span class=\"logo-icon\" style=\"display:inline-block;\"><img src=\"2png.png\" alt=\"logo2\" class=\"logo-img\" /></span>`;
  } else if (style === 'style3') {
    return `<span class=\"logo-icon\" style=\"display:inline-block;\"><img src=\"3png.png\" alt=\"logo3\" class=\"logo-img\" /></span>`;
  } else if (style === 'style4') {
    return `<span class=\"logo-icon\" style=\"display:inline-block;\"><img src=\"4png.png\" alt=\"logo4\" class=\"logo-img\" /></span>`;
  } else if (style === 'style5') {
    return `<span class=\"logo-icon\" style=\"display:inline-block;\"><img src=\"5png.png\" alt=\"logo5\" class=\"logo-img\" /></span>`;
  }
  return '';
}
logoSegBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    logoSegBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const style = this.getAttribute('data-style');
    logoArea.innerHTML = getLogoHTML(style);
  });
});
  