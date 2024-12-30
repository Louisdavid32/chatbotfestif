// script.js

// Références aux éléments du DOM
const messagesDiv = document.getElementById("messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Réponses prédéfinies du chatbot
const responses = {
  "bonjour": "🎉 Salut ! Prêt(e) à célébrer 2025 ?",
  "bonne année": "Merci ! Bonne année à toi aussi ! 🥳",
  "résolution": "As-tu pensé à une résolution pour 2025 ? Je peux t'aider si besoin !",
  "tradition": "Savais-tu qu'en Espagne, on mange 12 raisins à minuit pour chaque mois de chance ? 🍇",
  "prévision": "Je prédis que 2025 sera ton année la plus incroyable ! 🚀",
  "merci": "Avec plaisir ! Passons une excellente année ensemble ! 🎆",
  "default": "Je ne suis pas sûr de comprendre. Essaie 'résolution', 'tradition' ou 'bonne année'. 😊"
};

// Fonction pour ajouter un message au chat
function addMessage(content, isUser = false) {
  const message = document.createElement("div");
  message.textContent = content;
  message.style.alignSelf = isUser ? "flex-end" : "flex-start";
  message.style.background = isUser ? "#ff758c" : "#444";
  message.style.color = "#fff";
  message.style.padding = "10px";
  message.style.borderRadius = "10px";
  message.style.margin = "5px 0";
  messagesDiv.appendChild(message);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Gérer l'envoi des messages
sendBtn.addEventListener("click", () => {
  const userMessage = userInput.value.trim().toLowerCase();
  if (!userMessage) return;

  // Ajouter le message utilisateur
  addMessage(userInput.value, true);

  // Répondre avec le chatbot
  const botResponse = responses[userMessage] || responses["default"];
  setTimeout(() => addMessage(botResponse), 500);

  // Réinitialiser l'entrée utilisateur
  userInput.value = "";
});
