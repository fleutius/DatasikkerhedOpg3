// Generer en tilfældig nøgle af specificeret længde
function generateKey(length) {
    let k = '';
    for (let i = 0; i < length; i++) {
      // Generer tilfældig ASCII-tegn
      k += String.fromCharCode(Math.floor(Math.random() * 95) + 32);
    }
    return k;
  }
  
  // Krypter en besked ved hjælp af den genererede nøgle
  function encrypt(pText, k) {
    let cText = '';
    for (let i = 0; i < pText.length; i++) {
      let charCode = pText.charCodeAt(i) ^ k.charCodeAt(i);
      cText += String.fromCharCode(charCode);
    }
    return cText;
  }
  
  // Dekrypter den krypterede besked ved hjælp af samme nøgle
  function decrypt(cText, k) {
    let pText = '';
    for (let i = 0; i < cText.length; i++) {
      let charCode = cText.charCodeAt(i) ^ k.charCodeAt(i);
      pText += String.fromCharCode(charCode);
    }
    return pText;
  }
  
  // Plaintext besked
  let pText = "Jeg vil have kage";
  
  // Generer nøgle af samme længde som beskeden
  let k = generateKey(pText.length);
  
  // Krypter beskeden
  let cText = encrypt(pText, k);
  

  console.log("Opgave 3.1")
  console.log("Plaintext: ", pText);
  console.log("Key: ", k);
  console.log("Ciphertext: ", cText);
  console.log("Decrypted Message: ", decrypt(cText, k));