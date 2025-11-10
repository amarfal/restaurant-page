export default function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('pane');

  const title = document.createElement('h2');
  title.textContent = 'Visit Habibi Shawarma';

  const p1 = document.createElement('p');
  p1.textContent = '123 Spice Street, Flavor Town, Earth';

  const p2 = document.createElement('p');
  p2.textContent = 'Open daily: 11:00 – 23:00';

  const p3 = document.createElement('p');
  p3.textContent = 'Call / WhatsApp: (555) 123-4567';

  section.append(title, p1, p2, p3);
  content.appendChild(section);
}