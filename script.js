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
    // zimu+line（不旋转）
    return `<span class=\"logo-icon\" style=\"display:inline-block;position:relative;height:100px;width:auto;\">
      <span style=\"position:absolute;left:0;top:0;height:100px;width:auto;display:block;z-index:2;\">
        <svg height=\"100\" width=\"auto\" viewBox=\"0 0 268 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M93.4307 159.676H82.0957L79.2188 150.514H64.1494L61.2783 159.676H49.9434L64.666 116.039H78.708L93.4307 159.676ZM66.6592 142.503H76.7041L71.8467 127.034H71.5059L66.6592 142.503Z\" fill=\"black\"/>
          <path d=\"M122.27 143.057H122.78L133.86 116.039H146.921V159.676H136.651V132.872H136.289L125.807 159.398H119.244L108.761 132.723H108.398V159.676H98.1289V116.039H111.189L122.27 143.057Z\" fill=\"black\"/>
          <path d=\"M169.501 144.633H169.863L177.385 116.039H186.888L194.409 144.697H194.771L201.376 116.039H213.01L200.332 159.676H190.169L182.307 133.213H181.966L174.104 159.676H163.962L151.263 116.039H162.918L169.501 144.633Z\" fill=\"black\"/>
        </svg>
      </span>
      <span style=\"position:absolute;left:0;top:0;height:100px;width:auto;display:block;z-index:3;pointer-events:none;\">
        <svg height=\"100\" width=\"auto\" viewBox=\"0 0 268 252\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
          <path d=\"M249.557 126.767L181.551 215.863L35.2092 202.519L22.2094 110.199L150.561 26.4797L249.557 126.767ZM28.6826 113.139L40.4878 196.976L178.793 209.587L241.623 127.271L149.733 34.1823L28.6826 113.139Z\" fill=\"black\"/>
        </svg>
      </span>
    </span>`;
  } else if (style === 'style2') {
    // style2.svg
    return `<span class=\"logo-icon\" style=\"display:inline-block;height:100px;width:auto;\">
      <svg height=\"100\" width=\"auto\" viewBox=\"0 0 157 157\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
        <rect width=\"157\" height=\"157\" fill=\"white\"/>
        <path d=\"M54.8184 92H47.1475L45.6348 86.9883H37.001L35.4883 92H27.8184L36.46 65.8184H46.1758L54.8184 92ZM72.2715 80.6475H72.5781L78.6641 65.8184H87.5107V92H80.5557V76.8633H80.3516L74.5215 91.7959H70.3281L64.499 76.7617H64.2939V92H57.3398V65.8184H66.1865L72.2715 80.6475ZM101.311 81.9258H101.516L105.76 65.8184H111.998L116.242 81.9775H116.447L120.026 65.8184H127.953L120.231 92H113.43L108.981 77.375H108.776L104.328 92H97.5264L89.8047 65.8184H97.7314L101.311 81.9258ZM38.6064 81.6709H44.0293L41.4199 73.0283H41.2158L38.6064 81.6709Z" fill=\"black\"/>
        <path d=\"M131 26H26V131H131V26ZM139 139H18V18H139V139Z\" fill=\"black\"/>
      </svg>
    </span>`;
  } else if (style === 'style3') {
    // style3.svg
    return `<span class=\"logo-icon\" style=\"display:inline-block;height:100px;width:auto;\">
      <svg height=\"100\" width=\"auto\" viewBox=\"0 0 357 200\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
        <path d=\"M196.08 128.174H179.788L176.575 117.534H158.237L155.024 128.174H138.733L157.089 72.5859H177.725L196.08 128.174ZM233.15 104.071H233.802L246.727 72.5859H265.517V128.174H250.745V96.0371H250.311L237.929 127.74H229.022L216.642 95.8203H216.207V128.174H201.436V72.5859H220.226L233.15 104.071ZM294.827 106.786H295.262L304.276 72.5859H317.527L326.542 106.895H326.977L334.579 72.5859H351.414L335.014 128.174H320.568L311.119 97.123H310.685L301.235 128.174H286.79L270.39 72.5859H287.225L294.827 106.786ZM161.647 106.243H173.165L167.624 87.8945H167.189L161.647 106.243Z\" fill=\"black\"/>
        <path d=\"M0.814453 151.005L40.4096 83.0071L47.7971 70.3204L59.6296 50L65.3766 40.1305L71.1706 50L96.3087 92.821L103.726 105.456L130.733 151.46L0.814453 151.005ZM65.4671 65.4528L22.9774 138.422L108.48 138.721L65.4671 65.4528Z\" fill=\"black\"/>
        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M40.4096 83.0071L78.5506 149.045L103.726 105.456L96.3087 92.821L78.5506 123.568L47.7971 70.3204L40.4096 83.0071ZM59.6296 50L71.1706 50L65.3766 40.1305L59.6296 50Z\" fill=\"black\"/>
      </svg>
    </span>`;
  } else if (style === 'style4') {
    // style4.svg
    return `<span class=\"logo-icon\" style=\"display:inline-block;height:100px;width:auto;\">
      <svg height=\"100\" width=\"auto\" viewBox=\"0 0 129 129\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
        <rect width=\"129\" height=\"129\" fill=\"white\"/>
        <path d=\"M31.3203 98.75H98.0039L93.5293 91H105.076L115.324 108.75H14L24.248 91H35.7949L31.3203 98.75ZM44.8896 85H38.0713L36.7266 80.5459H29.0527L27.708 85H20.8896L28.5713 61.7275H37.208L44.8896 85ZM60.4033 74.9092H60.6768L66.085 61.7275H73.9492V85H67.7676V71.5459H67.585L62.4033 84.8184H58.6768L53.4941 71.4541H53.3125V85H47.1309V61.7275H54.9941L60.4033 74.9092ZM86.2158 76.0459H86.3975L90.1709 61.7275H95.7158L99.4893 76.0908H99.6709L102.853 61.7275H109.897L103.034 85H96.9893L93.0342 72H92.8525L88.8975 85H82.8525L75.9893 61.7275H83.0342L86.2158 76.0459ZM30.4795 75.8184H35.2998L32.9805 68.1367H32.7988L30.4795 75.8184ZM84.8691 56H73.3223L64.6621 40.999L56.002 56H44.4551L64.6621 21L84.8691 56Z\" fill=\"black\"/>
      </svg>
    </span>`;
  } else if (style === 'style5') {
    // style5.svg
    return `<span class=\"logo-icon\" style=\"display:inline-block;height:100px;width:auto;\">
      <svg height=\"100\" width=\"auto\" viewBox=\"0 0 125 68\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" style=\"height:100px;width:auto;\">
        <rect width=\"125\" height=\"68\" fill=\"white\"/>
        <path d=\"M91.5728 45.5V23H98.7369L98.0888 35.564H98.3049L102.985 23H108.421V35.564H108.637L112.489 23H119.653L112.345 45.5H103.273V37.22H102.877L99.8889 45.5H91.5728ZM90.4928 24.62L76.3448 23H90.4928V24.62ZM90.4928 28.076L76.3448 26.456H90.4928V28.076ZM90.4928 31.532L76.3448 29.912H90.4928V31.532ZM90.4928 34.988L76.3448 33.368H90.4928V34.988ZM90.4928 38.444L76.3448 36.824H90.4928V38.444ZM90.4928 41.9L76.3448 40.28H90.4928V41.9ZM90.4928 45.392L76.3448 43.772H90.4928V45.392Z\" fill=\"black\"/>
        <path d=\"M52.8931 45.5L58.1491 23H67.0771L67.7251 34.448H67.9771L72.6571 23H81.5851L78.9211 45.5H71.7571L73.2691 34.592H73.0171L68.5171 45.5H63.2971L62.5411 34.592H62.3611L60.0211 45.5H52.8931ZM56.6731 24.62L41.5891 23H57.0331L56.6731 24.62ZM55.8451 28.076L40.7611 26.456H56.2411L55.8451 28.076ZM55.0531 31.532L39.9331 29.912H55.4131L55.0531 31.532ZM54.2251 34.988L39.1051 33.368H54.6211L54.2251 34.988ZM53.4331 38.444L38.2771 36.824H53.7931L53.4331 38.444ZM52.6051 41.9L37.4491 40.28H53.0011L52.6051 41.9ZM51.8131 45.392L36.6211 43.772H52.1731L51.8131 45.392Z\" fill=\"black\"/>
        <path d=\"M21.912 45.5L31.38 23H41.964L43.548 45.5H36.312L36.168 41.936H30.516L29.112 45.5H21.912ZM29.544 24.548L14.856 23H30.192L29.544 24.548ZM28.068 28.004L13.38 26.456H28.716L28.068 28.004ZM26.628 31.496L11.904 29.912H27.276L26.628 31.496ZM32.748 36.212H35.628V29.912H35.268L32.748 36.212ZM25.152 34.952L10.428 33.368H25.836L25.152 34.952ZM23.712 38.408L8.952 36.824H24.36L23.712 38.408ZM22.236 41.864L7.476 40.28H22.92L22.236 41.864ZM20.76 45.356L6 43.772H21.444L20.76 45.356Z\" fill=\"black\"/>
      </svg>
    </span>`;
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
  