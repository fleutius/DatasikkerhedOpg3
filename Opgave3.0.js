function textToBinary(text) {
    let binaryString = '';
  
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      let binaryRepresentation = charCode.toString(2).padStart(8, '0');
      binaryString += binaryRepresentation;
    }
  
    return binaryString;
  }
  
  function generateKey(textLength) {
    let key = '';
    for (let i = 0; i < textLength; i++) {
      key += String.fromCharCode(Math.floor(Math.random() * 256));
    }
    return textToBinary(key);
  }
  
  function xorEncrypt(text, key) {
    let ciphertext = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      ciphertext += String.fromCharCode(charCode);
    }
    return ciphertext;
  }
  
  // Plaintext
  let plaintext = "Hvad så der";
  let binaryText = textToBinary(plaintext);
  
  // Generer nøgle
  let key = generateKey(plaintext.length);
  
  // Lav chiffertekst ved hjælp af XOR
  let ciphertext = xorEncrypt(plaintext, key);
  
  // Udskriv resultaterne
  console.log("Opgave 3.0")
  console.log("Plaintext: ", plaintext);
  console.log("Binary Text: ", binaryText);
  console.log("Key: ", key);
  console.log("Ciphertext: ", ciphertext);