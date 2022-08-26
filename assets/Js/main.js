import { subscribeToFilmeClube } from "./firebase/filme-clube.js";

const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");

btnSubscribe.addEventListener("click", async () => {
  const Subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value,
  };

  // Salvar no banco de dados//
  const SubscriptionId = await subscribeToFilmeClube(Subscription);
  console.log("Inscrito com sucesso: ${SubscripitionId}");

  txtName.value = ""
  txtEmail.value = ""
  txtLevel.value = ""
  txtCharacter.value = ""
})
