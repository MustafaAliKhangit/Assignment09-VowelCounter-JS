function countVowels()
 {
    let sentence = prompt("Enter a sentence:");
    
    sentence = sentence.toLowerCase();
    
    let vowelCount = 0; 

    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowelCount++;  
        }
    }
    
    alert("The total number of vowels is: " + vowelCount);
}

countVowels();
