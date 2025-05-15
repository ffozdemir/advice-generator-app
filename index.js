const buttonEl = document.getElementById("dice-button");
const adviceIdEl = document.getElementById("advice-id");
const adviceTextEl = document.getElementById("advice-text");

const getAdvice = async () => {
  try {
    const res = await fetch(
      "https://6820b87b259dad2655ad6684.mockapi.io/api/v1/slip"
    );
    const data = await res.json();

    let randomNumber = Math.floor(Math.random() * data.length);

    return data[randomNumber];
  } catch (error) {
    return { id: "Error", advice: "Could not fetch advice" };
  }
};

const renderAdvice = (advice) => {
  adviceIdEl.textContent = `${advice.id}`;
  adviceTextEl.textContent = `"${advice.advice}"`;
};

const handleClick = async () => {
  const advice = await getAdvice();
  renderAdvice(advice);
};

buttonEl.addEventListener("click", handleClick);

getAdvice().then(renderAdvice);
