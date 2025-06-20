// chat.js (client-side)
const API = "https://script.google.com/macros/s/AKfycbzBVZA6wW06TlIUEVrpetwljdEwOuQ1Sn-NB0tyrwcvMntvrte7_tmsKiBmCAAWokGk/exec"; // your Apps Script URL

const bubble = document.getElementById('jxBubble');
const panel  = document.getElementById('jxPanel');

bubble.onclick = () => panel.hidden = !panel.hidden;

// very tiny send-prompt demo
async function send(prompt){
  const r = await fetch(API, {
    method : 'POST',
    headers: {'Content-Type':'application/json'},
    body   : JSON.stringify({prompt})
  });
  const data = await r.json();
  console.log(data.candidates[0].content.parts[0].text); // handle UI update here
}