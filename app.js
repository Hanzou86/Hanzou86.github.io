const body = document.querySelector('body');

// Functions are triggered by onclick events in html

function displayGallery() {
    let modalHtml = `
        <div class='modal-overlay'>
            <div class='modal-card'>
              <div class='modal-content'>
                <button class='modal-close' onclick='event.target.parentNode.parentNode.parentNode.remove()'>X</button>
                <a href='https://hanzou86.github.io/interactive-photo-gallery'><img class='modal-img' src='img/gallery-img.png'></a>
                <p class='info'>A photo gallery using CSS grid for layout and Javascript for
                searchablility</p>
              </div>
            </div>
        </div>
    `;
    body.insertAdjacentHTML('afterbegin', modalHtml)
}

function displayGame() {
  let modalHtml = `
      <div class='modal-overlay'>
          <div class='modal-card'>
            <div class='modal-content'>
              <button class='modal-close' onclick='event.target.parentNode.parentNode.parentNode.remove()'>X</button>
              <a href='https://hanzou86.github.io/game-show-app'><img class='modal-img' src='img/game-img.png'></a>
              <p class='info'>A word guessing game using Javascript. There are several movie phrases to guess with 5 lives.</p>
            </div>
          </div>
      </div>
  `;
  body.insertAdjacentHTML('afterbegin', modalHtml)
}

function displayDashboard() {
  let modalHtml = `
      <div class='modal-overlay'>
          <div class='modal-card'>
            <div class='modal-content'>
              <button class='modal-close' onclick='event.target.parentNode.parentNode.parentNode.remove()'>X</button>
              <a href='https://hanzou86.github.io/webapp-dashboard'><img class='modal-img' src='img/dashboard-img.png'></a>
              <p class='info'>A dashboard displaying user data, complete with form. Charts are made using chart.js and main traffic chart can toggle
              between traffic times. Layout is made using CSS grid and flexbox.</p>
            </div>
          </div>
      </div>
  `;
  body.insertAdjacentHTML('afterbegin', modalHtml)
}

function displayDirectory() {
  let modalHtml = `
      <div class='modal-overlay'>
          <div class='modal-card'>
            <div class='modal-content'>
              <button class='modal-close' onclick='event.target.parentNode.parentNode.parentNode.remove()'>X</button>
              <a href='https://hanzou86.github.io/employee-directory'><img class='modal-img' src='img/directory-img.png'></a>
              <p class='info'>A directory using fetch API. Javascript is used to display the random data and create
              the modal displays.</p>
            </div>
          </div>
      </div>
  `;
  body.insertAdjacentHTML('afterbegin', modalHtml)
}