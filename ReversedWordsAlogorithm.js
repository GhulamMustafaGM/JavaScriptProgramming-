// ReversedWords Algorithm

function ReverseWords(string) {
    var WordsArray = string.split(' ');
    var RevWordsArray = [];
    
    WordsArray.forEach(word => {
      var RevWord = '';
      for (var a = word.length - 1; a >= 0; a--) {
        RevWord += word[a];
      };
      RevWordsArray.push(RevWord);
    });
    
    return RevWordsArray.join(' ');
  }
  ReverseWords('ReversedWords Javascript Algorithm ');
  