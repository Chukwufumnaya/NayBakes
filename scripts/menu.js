import { menuItems } from "./data.js";

document.addEventListener('DOMContentLoaded', () => {
  const main = document.querySelector('main');

  const cookieSection = document.createElement('section');
  cookieSection.classList.add('box');
  cookieSection.innerHTML = `
  <h1>Cookies</h1>
  `
  const pieSection = document.createElement('section');
  pieSection.classList.add('box');
  pieSection.innerHTML = `
  <h1>Pies</h1>
  `
  const breadSection = document.createElement('section');
  breadSection.classList.add('box');
  breadSection.innerHTML = `
  <h1>Breads</h1>
  `
  const macaronSection = document.createElement('section');
  macaronSection.classList.add('box');
  macaronSection.innerHTML = `
  <h1>Macarons</h1>
  `

  const cakeSection = document.createElement('section');
  cakeSection.classList.add('box');
  cakeSection.innerHTML = `
  <h1>Cakes</h1>
  `

  const muffinSection = document.createElement('section');
  muffinSection.classList.add('box');
  muffinSection.innerHTML = `
  <h1>Muffins</h1>
  `

  const drinksSection = document.createElement('section');
  drinksSection.classList.add('box');
  drinksSection.innerHTML = `
  <h1>Drinks</h1>
  `

  main.appendChild(cookieSection);
  main.appendChild(pieSection);
  main.appendChild(breadSection);
  main.appendChild(macaronSection);
  main.appendChild(cakeSection);
  main.appendChild(muffinSection);
  main.appendChild(drinksSection);

  menuItems.forEach((item) => {
    if (item.name.includes('Cookie')) {
      cookieSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.name.includes('Pie')) {
      pieSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.name.includes('Bread')) {
      breadSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.name.includes('Macaron')) {
      macaronSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.name.includes('Cake') || item.name.includes('Cupcake')) {
      cakeSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.name.includes('Muffin')) {
      muffinSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
    else if (item.keyword === 'drink') {
      drinksSection.innerHTML += `
      <figure>
      <img src=${item.img} alt=${item.name} class="menu-image">
      <figcaption>
      <p>${item.name}</p>
      <p>${item.price}</p>
      <div class="divider"></div>
      </figcaption>
      </figure>
    `
    }
  })

  const footer = document.querySelector('footer');

  footer.innerHTML += `
      <div class="footer-divider"></div>
      <div class="footer-item">
        <div>
          <ul>
            <li>
              <h2>Products</h2>
            </li>
            <li>Menu</li>
            <li>New In</li>
            <li>Weekly Picks</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Info</h2>
            </li>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h2>Socials</h2>
            </li>
            <li>
              <a href="#">
                <img src="./src/download (1).png" alt="instagram" width="30">
              </a>
            </li>
            <li>
              <a href="#">
                <img src="./src/free-facebook-icon-90-thumb.png" alt="facebook" width="30">
              </a>
            </li>
          </ul>
        </div>
      </div>
  `
});
