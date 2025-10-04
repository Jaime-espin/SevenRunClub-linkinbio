function getNextWednesday20() {
    const now = new Date();
    const result = new Date(now);
    
    // 3 = Miércoles (domingo es 0)
    const dayOfWeek = 3;
    const hour = 20;

    result.setHours(hour, 0, 0, 0); // Set hour to 20:00:00.000

    const daysToAdd = (dayOfWeek - now.getDay() + 7) % 7;
    if (daysToAdd === 0 && now.getHours() >= hour) {
      // Hoy es miércoles pero ya pasaron las 20:00 → ir al próximo
      result.setDate(now.getDate() + 7);
    } else {
      result.setDate(now.getDate() + daysToAdd);
    }

    return result;
  }

  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    const nextWednesday = getNextWednesday20();
    const now = new Date().getTime();
    const distance = nextWednesday - now;

    if (distance <= 0) {
      countdownEl.innerHTML = "¡Es hora de correr!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
    