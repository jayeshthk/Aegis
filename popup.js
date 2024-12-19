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
  const obfuscatedText = obfuscateTextX(obfuscateText(inputText));
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

const obfuscateTextX = (text) => {
  // Obfuscate email addresses
  const obfuscateEmail = (email) => {
    const [localPart, domain] = email.split("@");
    const obfuscatedLocalPart =
      localPart.slice(0, 2) + "*".repeat(localPart.length - 2);
    return `${obfuscatedLocalPart}@${domain}`;
  };

  // Obfuscate phone numbers
  const obfuscatePhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/\d(?=\d{4})/g, "*");
  };

  // Obfuscate names (assuming names are capitalized words)
  const obfuscateName = (name) => {
    return name.charAt(0) + "*".repeat(name.length - 1);
  };

  // Obfuscate place names (assuming place names are capitalized words)
  const obfuscatePlaceName = (placeName) => {
    return placeName.charAt(0) + "*".repeat(placeName.length - 1);
  };

  // Replace email addresses, phone numbers, names, and place names in the text
  return text
    .replace(
      /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g,
      obfuscateEmail
    )
    .replace(/\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g, obfuscatePhoneNumber)
    .replace(/\b[A-Z][a-z]*\b/g, obfuscateName)
    .replace(/\b[A-Z][a-z]*\b/g, obfuscatePlaceName);
};
