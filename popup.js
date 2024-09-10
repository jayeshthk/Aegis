const obfuscateText = (text) => {
  // Obfuscate email addresses
  let obfuscated = text.replace(
    /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})/g,
    (match) => {
      return match.replace(/./g, "*"); // Simple obfuscation
    }
  );

  // Obfuscate phone numbers (US format, for simplicity)
  obfuscated = obfuscated.replace(
    /\+?\d{1,4}[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}/g,
    (match) => {
      return match.replace(/\d/g, "*"); // Simple obfuscation
    }
  );

  // Obfuscate credit card numbers (simple pattern)
  obfuscated = obfuscated.replace(/\b(?:\d[ -]*?){13,16}\b/g, (match) => {
    return match.replace(/\d/g, "*"); // Simple obfuscation
  });

  // Obfuscate Social Security Numbers (SSN)
  obfuscated = obfuscated.replace(/\b\d{3}-\d{2}-\d{4}\b/g, (match) => {
    return match.replace(/\d/g, "*"); // Simple obfuscation
  });

  // Obfuscate IP addresses
  obfuscated = obfuscated.replace(/\b(?:\d{1,3}\.){3}\d{1,3}\b/g, (match) => {
    return match.replace(/\d/g, "*"); // Simple obfuscation
  });

  // Obfuscate dates (simple format YYYY-MM-DD, MM/DD/YYYY)
  obfuscated = obfuscated.replace(
    /\b(?:\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4})\b/g,
    (match) => {
      return match.replace(/\d/g, "*"); // Simple obfuscation
    }
  );

  return obfuscated;
};

document.getElementById("obfuscateButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const obfuscatedText = obfuscateText(inputText);
  document.getElementById("inputText").value = obfuscatedText;
  document.getElementById("copyButton").disabled = false; // Enable copy button
  document.getElementById("status").classList.remove("show"); // Hide status initially
});

document.getElementById("copyButton").addEventListener("click", () => {
  const inputTextArea = document.getElementById("inputText");
  inputTextArea.select();
  document.execCommand("copy");

  // Show status message
  document.getElementById("status").classList.add("show");

  // Disable copy button
  document.getElementById("copyButton").disabled = true;
});
