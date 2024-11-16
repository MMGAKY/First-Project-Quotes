var author = [
  "― Elbert Hubbard",
  "― Mahatma Gandhi",
  "― Mark Twain",
  "― Elbert Hubbard",
  "― Albert Einstein",
  "― Mostafa Gamal",
  "― Pablo Picasso",
  "― George Bernard Shaw",
  "― Theodore Roosevelt",
  "― Roy T. Bennett"
];

var quote = [
  "“A friend is someone who knows all about you and still loves you.”",
  "“Be the change that you wish to see in the world.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“A friend is someone who knows all about you and still loves you.”",
  "“Life is like riding a bicycle. To keep your balance, you must keep moving.”",
  "“Without Quran, life would be a mistake.”",
  "“Everything you can imagine is real.”",
  "“Life isn't about finding yourself. Life is about creating yourself.”",
  "“Do what you can, with what you have, where you are.”",
  "“Do what is right, not what is easy nor what is popular.”"
];
var y = author.length;
function addNewQuotes() {
  var x = Math.floor(Math.random() * author.length);
  if (x == y) {
    addNewQuotes();
  } else {
    document.getElementById("quote").innerHTML = quote[x];
    document.getElementById("author").innerHTML = author[x];
    y = x;
  }
}
