const buttonEl = document.getElementById("dice-button");
const adviceIdEl = document.getElementById("advice-id");
const adviceTextEl = document.getElementById("advice-text");

const getAdvice = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data.slip;
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
