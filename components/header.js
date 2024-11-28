class Header extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', '../styles/header.css');

        const header = document.createElement('header');
        header.innerHTML = `
          <section class="navCont" name="Navigation">
            <!-- logo -->
            <a class="logo" href="home.html">
              <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 16 16" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16L3.54223 12.3383C1.93278 11.0162 1 9.04287 1 6.96005C1 3.11612 4.15607 0 8 0C11.8439 0 15 3.11612 15 6.96005C15 9.04287 14.0672 11.0162 12.4578 12.3383L8 16ZM3 6H5C6.10457 6 7 6.89543 7 8V9L3 7.5V6ZM11 6C9.89543 6 9 6.89543 9 8V9L13 7.5V6H11Z" fill="#3a4852"/>
              </svg>
            </a>

            <!-- navigation section -->
            <nav class="navStyle">
              <a href="employees.html">Үйлчилгээ</a>
              <a href="employees.html">Ажилтан</a>
              <a href="accounts.html">Данс цэнэглэх</a>
            </nav>

            <!-- login/signup section -->
            <div class="loginSign">
              <a class="loginButton" href="login.html">
                Нэвтрэх
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                  <path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke="#3A4852" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
             
              <!-- hamburger button for mobile -->
              <button class="hamburger" aria-label="Toggle navigation" onclick="openNav()">
                &#9776;
              </button>
               <button class="theme-toggle" aria-label="Toggle Theme">
                🌙
              </button>
            </div>
          </section>
      `;
        shadow.appendChild(link);
        shadow.appendChild(header);

        const hamburgerButton = shadow.querySelector('.hamburger');
        hamburgerButton.addEventListener('click', () => {
            const nav = shadow.querySelector('.navStyle');
            nav.classList.toggle('nav-active');
        });

        const themeToggleButton = shadow.querySelector('.theme-toggle');
        themeToggleButton.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            // Save theme preference in localStorage
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });

        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');

        } else {
            document.body.classList.remove('dark-mode');

        }
    }
}
customElements.define("header-component", Header);
