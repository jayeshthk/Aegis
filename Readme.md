## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [How to Use](#how-to-use)
4. [Future Enhancements](#future-enhancements)
5. [Privacy and Security](#privacy-and-security)
6. [Contribution and Feedback](#contribution-and-feedback)
7. [Contact](#contact)
8. [License](#license)

# Aegis Chrome Extension

<p align="center"> <img src="./aegis.png" alt="Aegis Logo" width="200" /> </p>

## Overview

**Aegis** is a Chrome extension designed to help you protect your Personally Identifiable Information (PII) while interacting with web forms and input fields. It provides a simple and effective way to obfuscate sensitive information such as email addresses, phone numbers, credit card numbers, Social Security numbers, IP addresses, and dates. This ensures that your data remains secure and private, even if you need to share or store it temporarily.

## Features

- **Real-Time Obfuscation**: Automatically obfuscates various types of PII in your input fields, including:

  - Email Addresses
  - Phone Numbers
  - Credit Card Numbers
  - Social Security Numbers (SSNs)
  - IP Addresses
  - Names
  - Places
  - Dates

- **User-Friendly Interface**:

  - A sleek and intuitive popup interface that allows you to input text, obfuscate it, and copy the obfuscated text with ease.
  - Provides immediate feedback with a visual confirmation (check icon) when the text is successfully copied.

- **Copy to Clipboard**: Easily copy the obfuscated text to your clipboard with a single click.

## How to Use

1. **Installation**:

   - Download and install the Aegis extension from the Chrome Web Store or load it unpacked in developer mode from your local machine.

2. **Using the Extension**:

   - Click on the Aegis icon in the Chrome toolbar to open the extension popup.
   - Enter the text you want to obfuscate into the provided text area.
   - Click the "Obfuscate" button to replace sensitive information with masked characters.
   - Click the "Copy" button to copy the obfuscated text to your clipboard.
   - A visual check icon will appear to confirm successful copying.

3. **Visual Feedback**:
   - After copying, the status message will show a confirmation check icon, and the "Copy" button will be disabled until the text is obfuscated again.

## In-Action:

- solves a critical privacy problem for language models.
  ![In action](/images/inaction.png "working demo")

## Future Enhancements

- **Extended PII Types**: Incorporate additional types of PII for obfuscation, such as:
  - Addresses
  - Bank account numbers
  - Personal identification numbers (PINs)
- **Customizable Patterns**: Allow users to define and customize regex patterns for more specialized data types.

- **Multi-Language Support**: Expand the extension to support multiple languages and regional formats for better global usability.

- **Integration with Other Apps**: Develop integrations with other popular web applications and platforms for seamless data protection.

## Privacy and Security

**Aegis** is designed with user privacy in mind. The extension processes data locally in your browser and does not store or transmit any personal information to external servers. Your data remains secure and private while using this extension.

## Contribution and Feedback

We welcome contributions and feedback from the community to help improve Aegis. If you have any suggestions, feature requests, or encounter any issues, please reach out to us or submit an issue on our GitHub repository.

## Contact

For more information, support, or inquiries, please contact us at [jayesh.arkvien@gmail.com](mailto:jayesh.arkvien@gmail.com).

## LICENSE

MIT - [LICENSE](LICENSE)
