(function () {
    const tagBody = document.querySelector('body');
    const startScript = document.querySelector('script[id="idward-plugin"][isRunning]');
    const render = (container, template, place = 'beforeend') => {
        container.insertAdjacentHTML(place, template);
      };
// Create triangle button in the corner
    const createButton = () => {
        return (
            `<button class="w3-animate-bottom w3-hover-sepia activate__button" style="position: fixed; bottom: 0; left: 0; z-index: 5; padding: 0; width: 100px; height: 100px; background: transparent; border-style: solid; border-width: 100px 0 0 100px; border-color: transparent transparent transparent #6980fe;"></button>`
        );
    };

// Create the modal window
    const createModal = () => {
        return (
            `  <div id="id01" class="w3-modal modal__window" style="z-index: 10">
            <div class="w3-modal-content w3-animate-top w3-card-4" style="display: flex; justify-content: space-between; align-items: center; height: 300px; max-width: 500px"; padding: 0;>
            <div class="w3-container" style="width: 100%; height: 100%; padding: 0; display: flex; flex-direction: column; justify-content: space-between;">
                <header class="w3-container w3-teal"> 
                    <h2>Make your choice and be wise</h2>
                </header>
                <div class="w3-bar" style="display: flex; justify-content: space-between; width: 100%;">
                    <button class="w3-button w3-round w3-teal accept-button">Accept</button>
                    <button class="w3-button w3-round w3-red reject-button">Reject</button>
                </div>
            </div>
            </div>
        </div>
        </div>`
        );
    };

// Add dinamically script collect.js
    const addScript = () => {
        const collect = document.createElement( 'script' );
        collect.type = 'text/javascript';
        collect.async = true;
        document.body.appendChild( collect );
        collect.src = 'collect.js';
    };

// Remove madal window and unfixed screen callback function
    const removeModal = (container, scrollYPos) => {
        container.style.display='none';
        tagBody.style.position = '';
        tagBody.style.top = '';
        tagBody.style.left = '';
        window.scrollTo(0, scrollYPos);
    }

    if(startScript.getAttribute('isRunning') === 'true') {
        render(tagBody, createButton());
        render(tagBody, createModal());

        const activateModalButton = document.querySelector('.activate__button');
        const modaleWindow = document.querySelector('.modal__window');

// Add modal window
        activateModalButton.addEventListener('click', () => {
            modaleWindow.style.display='block';
            let screnScroll = window.pageYOffset;
            tagBody.style.position = 'fixed';
            tagBody.style.top = `-${screnScroll}px`;
            if (window.innerWidth > 1200) {
                let screenWidth = ((window.innerWidth - 1200) / 2) - 8;
                tagBody.style.left = `${screenWidth}px`;
            }

            const rejectModal = document.querySelector('.reject-button');
            const acceptModal = document.querySelector('.accept-button');

// Remove modal window by clicking on Reject Button
            rejectModal.addEventListener('click', () => {
                removeModal(modaleWindow, screnScroll);
            });
// Remove modal window by clicking on Accept Button
            acceptModal.addEventListener('click', () => {
                removeModal(modaleWindow, screnScroll);                
                addScript();
            });
        });
    }
 })()



