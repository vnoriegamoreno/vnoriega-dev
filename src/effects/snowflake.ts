export function useSnowflakeEffect() {
  let snowInterval: number | null = null;
  let activeSnowflakes = 0;
  const MAX_SNOWFLAKES = 50;

  function createSnowflake() {
    if (activeSnowflakes >= MAX_SNOWFLAKES) return;
    
    activeSnowflakes++;
    const snowflake = Object.assign(
      document.createElement('div'),
      {
        className: 'effect-snowflake',
        style: `
        left: ${Math.random() * window.innerWidth}px;
        top: -5px;
        opacity: ${Math.random() * 0.8 + 0.2};
        transform: scale(${Math.random() * 1.5 + 0.5});`
      }
    )

    document.body.appendChild(snowflake);

    let posY = -5;
    let speed = Math.random() * 2 + 1;
    let wobble = 0;

    function fall() {
      posY += speed;
      wobble += 0.02;
      snowflake.style.top = posY + 'px';
      snowflake.style.left =
        parseFloat(snowflake.style.left) +
        Math.sin(wobble) * 2 + 'px';

      if (posY < window.innerHeight) {
        requestAnimationFrame(fall);
      } else {
        snowflake.remove();
        activeSnowflakes--;
      }
    }

    fall();
  }

  function start() {
    snowInterval = window.setInterval(createSnowflake, 200);
  }

  function stop() {
    if (snowInterval) {
      clearInterval(snowInterval);
      snowInterval = null;
    }
    document.querySelectorAll('.effect-snowflake').forEach(flake => flake.remove());
    activeSnowflakes = 0;
  }

  return { start, stop };
}

export const snowflakeStyles = `
  .effect-snowflake {
    position: fixed;
    width: 4px;
    height: 4px;
    background-color: white;
    pointer-events: none;
    z-index: 9999;
  }
`;
