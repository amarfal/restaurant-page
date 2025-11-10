export default function loadMenu() {
  const content = document.getElementById('content');
  content.textContent = '';

  const section = document.createElement('section');
  section.classList.add('pane');

  const title = document.createElement('h2');
  title.textContent = 'Menu';

  const list = document.createElement('ul');
  list.classList.add('menu-list');

  const items = [
    ['Classic Chicken Shawarma', '$9.99'],
    ['Spicy Beef Shawarma', '$10.99'],
    ['Habibi Special Wrap', '$12.49'],
    ['Falafel Wrap (Vegan)', '$8.99'],
  ];

  items.forEach(([name, price]) => {
    const li = document.createElement('li');
    const n = document.createElement('span');
    n.textContent = name;
    const p = document.createElement('span');
    p.textContent = price;
    li.append(n, p);
    list.appendChild(li);
  });

  section.append(title, list);
  content.appendChild(section);
}