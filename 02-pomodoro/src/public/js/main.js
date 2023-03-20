
      let timeLeft = 25 * 60; // 25 minutos en segundos
      let timerId;

      function startTimer() {
        timerId = setInterval(countdown, 1000);
      }

      function stopTimer() {
        clearInterval(timerId);
        timeLeft = 25 * 60; // reiniciar el temporizador a 25 minutos
        updateTimer();
      }

      function countdown() {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
          clearInterval(timerId);
          alert("¡Tiempo acabado!");
        }
      }

      function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        document.getElementById("timer").textContent = formattedTime;
      }
