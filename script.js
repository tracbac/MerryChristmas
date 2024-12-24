function createStars() {
    const starsContainer = document.querySelector('.snow-container');
    const numberOfStars = 100;
  
    for (let i = 0; i < numberOfStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 60 + '%'; 
      
      star.style.animationDelay = Math.random() * 2 + 's';
      starsContainer.appendChild(star);
    }
  }
  

  createStars();
  
  function createSnow() {
    const snowContainer = document.querySelector('.snow-container');
    const snow = document.createElement('div');
    snow.classList.add('snow');

    snow.style.left = Math.random() * 100 + '%';
  
    const duration = Math.random() * 5 + 5;
    const size = Math.random() * 3 + 2;
  
    snow.style.width = size + 'px';
    snow.style.height = size + 'px';
    snow.style.opacity = Math.random() * 0.7 + 0.3;
  

    snow.style.animation = `fall ${duration}s linear`;
  
    snowContainer.appendChild(snow);
  

    setTimeout(() => {
      snow.remove();
    }, duration * 1000);
  }
  

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fall {
      from {
        transform: translateY(-10px);
      }
      to {
        transform: translateY(100vh);
      }
    }
    
    @keyframes sway {
      from {
        transform: translateX(-15px);
      }
      to {
        transform: translateX(15px);
      }
    }
  `;
  document.head.appendChild(style);
  

  setInterval(createSnow, 200);
  

  const musicBtn = document.querySelector('.music-toggle');
  const audio = document.getElementById('bgMusic');
  
  musicBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      musicBtn.textContent = '🔊';
    } else {
      audio.pause();
      musicBtn.textContent = '🔈';
    }
  });
  
 
  function moveSanta() {
    const santaContainer = document.querySelector('.santa-container');
  
  
    setInterval(() => {
      const rect = santaContainer.getBoundingClientRect();
      if (rect.left > window.innerWidth) {
        santaContainer.style.left = '-200px';
      }
    }, 100);
  }
  

  moveSanta();
  

  function createGift() {
    const gift = document.createElement('div');
    gift.classList.add('gift');
  
  
    const randomX = Math.random() * (window.innerWidth - 40); // Trừ đi kích thước gift
    gift.style.left = randomX + 'px';
    gift.style.top = '-50px';
  
    const messages = [
      '🎁 Chúc mừng! Bạn nhận được một điều ước',
      '🎄 Giáng sinh an lành!',
      '🎅 Ho Ho Ho! Quà từ ông già Noel',
      '🎁 Luôn vui vẻ nha!',
      '🎁 Luôn khỏe mạnh nha!',
      '🎁 chúc bạn may nắm lần sau :))',
      '🎁 Sớm sinh QUÝ TỬ',
      '🎁 Không trượt môn',
      '🎁 Sớm có ny',
      '🎁 Hoàn thành được mong ước',
      '🎁 Tán được crush',
      '🎁 Không lẻ loi một mình',
      '🎁 8386',
      '🎁 tài khoản 10 chữ số',
      '🎁 10k chụp màn hình ib ',
    
    ];
  
    gift.addEventListener('click', () => {
      const popup = document.createElement('div');
      popup.classList.add('gift-popup');
      popup.textContent = messages[Math.floor(Math.random() * messages.length)];
      document.body.appendChild(popup);
      popup.style.display = 'block';
  
  
      const unwrapSound = new Audio('unwrap.mp3');
      unwrapSound.play();
  
      setTimeout(() => {
        popup.style.display = 'none';
        popup.remove();
      }, 3000);
  
      gift.remove();
    });
  
    document.body.appendChild(gift);
  
    
    let pos = -50;
    let speed = 1;
    const maxSpeed = 3;
    const acceleration = 0.05;
  
    const fall = setInterval(() => {
      speed = Math.min(speed + acceleration, maxSpeed);
      pos += speed;
      gift.style.top = pos + 'px';
  
      
      if (pos > window.innerHeight) {
        clearInterval(fall);
        gift.remove();
      }
    }, 20);
  }
  
 
  setInterval(createGift, 1000); 
  
  function addTreeLights() {
    const tree = document.querySelector('.tree');
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff0'];
  
    for (let i = 0; i < 20; i++) {
      const light = document.createElement('div');
      light.classList.add('light');
      light.style.background = colors[Math.floor(Math.random() * colors.length)];
      light.style.left = Math.random() * 100 + '%';
      light.style.top = Math.random() * 100 + '%';
      light.style.animationDelay = Math.random() * 2 + 's';
      tree.appendChild(light);
    }
  }
  
  function updateCountdown() {
    const christmas = new Date(new Date().getFullYear(), 11, 25);
    const now = new Date();
    const diff = christmas - now;
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
    document.getElementById('days').textContent = days
      .toString()
      .padStart(2, '0');
    document.getElementById('hours').textContent = hours
      .toString()
      .padStart(2, '0');
    document.getElementById('minutes').textContent = minutes
      .toString()
      .padStart(2, '0');
    document.getElementById('seconds').textContent = seconds
      .toString()
      .padStart(2, '0');
  }
  
  setInterval(updateCountdown, 1000);
  

  function animateClouds() {
    const clouds = document.querySelectorAll('.cloud');
    clouds.forEach((cloud, index) => {
      cloud.style.animation = `float ${15 + index * 2}s linear infinite`;
      cloud.style.top = `${index * 15}%`;
    });
  }
  

  function createFirework(x, y) {
    const colors = ['#ff0', '#ff4', '#4ff', '#f4f', '#4f4'];
    const particles = 30;
    const container = document.querySelector('.fireworks-container');
  
    
    const containerRect = container.getBoundingClientRect();
    y = Math.min(y, containerRect.height);
  
    for (let i = 0; i < particles; i++) {
      const particle = document.createElement('div');
      particle.className = 'firework-particle';
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
  
      const angle = (i * 360) / particles;
      const velocity = 2 + Math.random() * 2;
  
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
  
      container.appendChild(particle);
  
      const rad = (angle * Math.PI) / 180;
      const vx = Math.cos(rad) * velocity;
      const vy = Math.sin(rad) * velocity;
  
      let posX = x;
      let posY = y;
  
      const animate = () => {
        posX += vx;
        posY += vy;
  
     
        if (
          posX < 0 ||
          posX > containerRect.width ||
          posY < 0 ||
          posY > containerRect.height
        ) {
          particle.remove();
          return;
        }
  
        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
  
        requestAnimationFrame(animate);
      };
  
      animate();
    }
  }

  function createParticle(e) {
    const particle = document.createElement('div');
    particle.className = 'mouse-particle';
    particle.style.left = e.pageX + 'px';
    particle.style.top = e.pageY + 'px';
    document.body.appendChild(particle);
  
    setTimeout(() => particle.remove(), 1000);
  }
  

  function addTreeInteraction() {
    const tree = document.querySelector('.tree');
    const bells = document.querySelectorAll('.bell');
  
    tree.addEventListener('click', () => {
      tree.classList.add('shake');
  
     
      bells.forEach((bell) => {
        bell.style.animation = 'none';
        bell.offsetHeight; 
        bell.style.animation = 'bellRing 0.5s';
      });
  
      setTimeout(() => {
        tree.classList.remove('shake');
        bells.forEach((bell) => {
          bell.style.animation = 'bellRing 2s infinite';
        });
      }, 500);
    });
  }
  
  
  function decorateTree() {
    const tree = document.querySelector('.tree');
    const layers = document.querySelectorAll('.tree-layer');
  

    const bellPositions = [
      { left: '40%', top: '20%' },
      { right: '20%', top: '40%' },
      { left: '30%', top: '60%' },
      { right: '25%', top: '70%' },
    ];
  
    bellPositions.forEach((pos) => {
      const bell = document.createElement('div');
      bell.className = 'bell';
      Object.assign(bell.style, pos);
      tree.appendChild(bell);
    });
  
 
    const colors = ['red', 'gold', 'silver'];
    layers.forEach((layer) => {
      const layerRect = layer.getBoundingClientRect();
      const numOrnaments = 8;
  
      for (let i = 0; i < numOrnaments; i++) {
        const ornament = document.createElement('div');
        ornament.className = `ornament ${
          colors[Math.floor(Math.random() * colors.length)]
        }`;
  
      
        const left = 20 + Math.random() * 60; 
        const top = 20 + Math.random() * 60; 
  
        ornament.style.left = `${left}%`;
        ornament.style.top = `${top}%`;
  
        layer.appendChild(ornament);
      }
    });
  
   
    const lights = 30;
    for (let i = 0; i < lights; i++) {
      const light = document.createElement('div');
      light.className = 'light';
      light.style.left = `${Math.random() * 100}%`;
      light.style.top = `${Math.random() * 100}%`;
      light.style.animationDelay = `${Math.random() * 2}s`;
      light.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
      tree.appendChild(light);
    }
  }
  

  document.addEventListener('DOMContentLoaded', () => {
    const treeImage = document.querySelector('.tree img'); 
  
 
    if (treeImage.complete) {
      decorateTree();
      addTreeLights();
    } else {
   
      treeImage.addEventListener('load', () => {
        decorateTree();
        addTreeLights();
      });
    }
  

    animateClouds();
    addTreeInteraction();
  
    document.addEventListener('click', (e) => {
      createFirework(e.pageX, e.pageY);
      createParticle(e);
    });
  
    document.addEventListener('mousemove', (e) => {
      if (Math.random() < 0.1) {
        createParticle(e);
      }
    });
  });
  
