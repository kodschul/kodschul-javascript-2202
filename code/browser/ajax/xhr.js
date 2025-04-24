// XMLHttpRequest (XHR)
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://rickandmortyapi.com/api/character/2", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    document.body.innerHTML = xhr.responseText;
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error("An error occurred");
    }
  }
};
xhr.send();
