function generate(){
let quotes = {
  "― Mahatma Gandhi": '"“Live as if you were to die tomorrow. Learn as if you were to live forever.”"',
  "― Albert Einstein": '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”',
  "― C.S. Lewis": '“You can never get a cup of tea large enough or a book long enough to suit me.”'
}
  let authors = Object.keys(quotes);

  let author =authors[Math.floor(Math.random() * authors.length)]

  let quote = quotes[author]

  document.getElementById("quote").innerHTML = quote

  document.getElementById("author").innerHTML = author

}