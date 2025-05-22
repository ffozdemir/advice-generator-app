const USER_URL = "6824967d0f0188d7e729ebee.mockapi.io";
const BASE_URL = "https://api.adviceslip.com/advice";

//! tavsiyeleri listeleme
const buttonEl = document.getElementById("dice-button");
const adviceIdEl = document.getElementById("advice-id");
const adviceTextEl = document.getElementById("advice-text");

const getAdvice = async () => {
  try {
    const res = await fetch(`${BASE_URL}`);
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

//! tavsiyeleri oluşturma icin öncelikle kayıt olmalı 
const userNAme = document.getElementById("username");
const firstName = document.getElementById("fullname");
const avatar = document.getElementById("avatar");
const btnGet = document.getElementById("btnGet");
const btnPost = document.getElementById("btnPost");
const btnDelete = document.getElementById("btnDelete");
const btnUpdate = document.getElementById("btnUpdate");


//! POTST ile veri gönderme
btnPost.addEventListener("click", () => {
  const user = userNAme.value;
  const name = firstName.value;
  const avatarUrl = avatar.value;

  if (!user.trim() || !name.trim() || !avatarUrl.trim()) {
    return alert("Lütfen tüm alanları doldurun.");
  }
  const userData = {
    user: user,
    name: name,
    avatar: avatarUrl
  };

  localStorage.setItem("user", JSON.stringify(userData));
  alert("Kayıt başarılı.");
});

//? cekilen  datayı UI da göstermek icin 
const renderUser = (userListEl, users) => {
  userListEl.innerHTML = "";

  if (!Array.isArray(users) || users.length === 0) {
    userListEl.innerText = "Kayıtlı kullanıcı bulunamadı.";
    return;
  }

  users.forEach((user) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>Kullanıcı Adı: ${user.user}</p>
      <p>Ad Soyad: ${user.name}</p>
      <img src="${user.avatar}" alt="Avatar" width="50" />
    `;
    userListEl.appendChild(div);
  });
};

//! tavsiye oluşturma
const inputSoz = document.getElementById("soz");
const btnGonder = document.getElementById("btnGonder");
const inputSozEl = document.querySelector(".sozler");
const yazarEl = document.querySelector(".yazar");




