// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters

function randomPassword(passLength) {
  const upperCase = "AVSBDHFUROFGLVJKIO";
  const lowerCase = "asdfghjklzxcvbnmqw";
  const number = "1234567890";
  const specialChars = "!@#$%^&*+-*/";

  const allChars = upperCase + lowerCase + number + specialChars;
  let password = "";

  for (let i = 0; i < passLength; i++) {
    const ramdomlyPass = Math.floor(Math.random() * allChars.length);
    password += allChars.substring(ramdomlyPass, ramdomlyPass + 1);
  }
  return password;
}

console.log(randomPassword(12));
