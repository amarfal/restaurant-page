export default function loadContact() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('pane');

  const title = document.createElement('h2');
  title.textContent = 'Visit Habibi Shawarma';

  const p1 = document.createElement('p');
  p1.textContent = '123 Fake Street, Flavor Town, Earth';

  const p2 = document.createElement('p');
  p2.textContent = 'Open daily: 9:00 AM - 10:00 PM';

  const p3 = document.createElement('p');
  p3.textContent = 'Our Number: (123)-456-7890';

  section.append(title, p1, p2, p3);
  content.appendChild(section);
}