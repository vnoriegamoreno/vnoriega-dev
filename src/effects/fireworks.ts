export function useFireworksEffect() {
  let fireworkInterval: number | null = null;
  let activeParticles = 0;
  const MAX_PARTICLES = 200;

  const colors = ['#ff0844', '#ffb199', '#ffd23f', '#00d4ff', '#ff6ec7', '#7bff00'];

  function createFirework() {
    if (activeParticles >= MAX_PARTICLES) return;

    const startX = Math.random() * window.innerWidth;
    const startY = window.innerHeight;
    const targetY = Math.random() * (window.innerHeight * 0.3) + window.innerHeight * 0.2;
    
    const rocket = document.createElement('div');
    rocket.className = 'effect-firework-rocket';
    rocket.style.left = startX + 'px';
    rocket.style.top = startY + 'px';
    rocket.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(rocket);
    
    activeParticles++;
    let currentY = startY;
    const rocketSpeed = 5;

    function launch() {
      currentY -= rocketSpeed;
      rocket.style.top = currentY + 'px';

      if (currentY > targetY) {
        requestAnimationFrame(launch);
      } else {
        rocket.remove();
        explode(startX, targetY);
        activeParticles--;
      }
    }

    launch();
  }

  function explode(x: number, y: number) {
    const particleCount = 30;
    const color = colors[Math.floor(Math.random() * colors.length)];

    for (let i = 0; i < particleCount; i++) {
      if (activeParticles >= MAX_PARTICLES) break;
      
      const particle = document.createElement('div');
      particle.className = 'effect-firework-particle';
      particle.style.left = x + 'px';
      particle.style.top = y + 'px';
      particle.style.backgroundColor = color;
      document.body.appendChild(particle);
      
      activeParticles++;

      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = Math.random() * 3 + 2;
      let vx = Math.cos(angle) * velocity;
      let vy = Math.sin(angle) * velocity;
      let posX = x;
      let posY = y;
      let opacity = 1;
      let life = 0;

      function animate() {
        life++;
        vy += 0.1; // gravity
        posX += vx;
        posY += vy;
        opacity -= 0.015;

        particle.style.left = posX + 'px';
        particle.style.top = posY + 'px';
        particle.style.opacity = opacity.toString();

        if (opacity > 0 && life < 100) {
          requestAnimationFrame(animate);
        } else {
          particle.remove();
          activeParticles--;
        }
      }

      animate();
    }
  }

  function start() {
    fireworkInterval = window.setInterval(createFirework, 800);
  }

  function stop() {
    if (fireworkInterval) {
      clearInterval(fireworkInterval);
      fireworkInterval = null;
    }
    document.querySelectorAll('.effect-firework-rocket, .effect-firework-particle').forEach(el => el.remove());
    activeParticles = 0;
  }

  return { start, stop };
}

export const fireworksStyles = `
  .effect-firework-rocket {
    position: fixed;
    width: 3px;
    height: 12px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    box-shadow: 0 0 10px currentColor;
  }

  .effect-firework-particle {
    position: fixed;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    box-shadow: 0 0 6px currentColor;
  }
`;
