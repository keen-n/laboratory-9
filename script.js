const cards = [
      { name: "6", value: 6, image: "images/6.png" },
      { name: "7", value: 7, image: "images/7.png" },
      { name: "8", value: 8, image: "images/8.png" },
      { name: "9", value: 9, image: "images/9.png" },
      { name: "10", value: 10, image: "images/10.png" },
      { name: "Валет", value: 2, image: "images/jack.png" },
      { name: "Дама", value: 3, image: "images/queen.png" },
      { name: "Король", value: 4, image: "images/king.png" },
      { name: "Туз", value: 11, image: "images/ace.png" },
    ];

    let userName = prompt("Введіть своє ім'я:");
    while (!userName || userName.trim() === "") {
      userName = prompt("Ім'я не може бути порожнім. Введіть своє ім'я:");
    }
    document.getElementById("userName").innerText = userName;

    let userScore = 0;
    let computerScore = 0;
    let rounds = 0;

    const userCard = document.getElementById("userCard");
    const computerCard = document.getElementById("computerCard");
    const userPoints = document.getElementById("userPoints");
    const computerPoints = document.getElementById("computerPoints");
    const message = document.getElementById("message");
    const generateBtn = document.getElementById("generateBtn");
    const resetBtn = document.getElementById("resetBtn");

    function getRandomCard() {
      return cards[Math.floor(Math.random() * cards.length)];
    }

    generateBtn.addEventListener("click", () => {
      if (rounds < 3) {
        const userRandomCard = getRandomCard();
        const computerRandomCard = getRandomCard();

        userCard.src = userRandomCard.image;
        computerCard.src = computerRandomCard.image;

        userScore += userRandomCard.value;
        computerScore += computerRandomCard.value;

        userPoints.innerText = userScore;
        computerPoints.innerText = computerScore;

        rounds++;
        message.innerText = `Спроба ${rounds} з 3`;

        if (rounds === 3) {
          if (userScore > computerScore) {
            message.innerText = `Переможець: ${userName}!`;
          } else if (computerScore > userScore) {
            message.innerText = "Переможець: Комп'ютер!";
          } else {
            message.innerText = "Нічия!";
          }
          generateBtn.disabled = true;
        }
      }
    });

    resetBtn.addEventListener("click", () => {
      userScore = 0;
      computerScore = 0;
      rounds = 0;

      userPoints.innerText = userScore;
      computerPoints.innerText = computerScore;
      message.innerText = "";
      userCard.src = "";
      computerCard.src = "";
      generateBtn.disabled = false;
    });