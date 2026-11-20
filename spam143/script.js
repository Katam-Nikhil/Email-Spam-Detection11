const messageBox = document.getElementById("message");
const resultBox = document.getElementById("result");
const spamWords = [
  "free", "winner", "won", "prize", "claim", "cash",
  "urgent", "click here", "lottery", "bonus", "offer",
  "limited time", "congratulations", "earn money"
];

document.getElementById("checkBtn").addEventListener("click", () => {
  const message = messageBox.value.trim().toLowerCase();

  resultBox.className = "result";
  if (!message) {
    resultBox.textContent = "Please enter a message first.";
    resultBox.classList.add("warning");
    return;
  }

  const matchedWords = spamWords.filter(word => message.includes(word));
  if (matchedWords.length > 0) {
    resultBox.textContent = "⚠ This message may be SPAM. Check it carefully.";
    resultBox.classList.add("spam");
  } else {
    resultBox.textContent = "✓ No common spam words found. This message looks genuine.";
    resultBox.classList.add("ham");
  }
  resultBox.classList.remove("hidden");
});
