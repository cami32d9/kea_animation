//TITLE SCREEN

window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

const Music = {
    enabled: true,
    toggle: function () {
        if (Music.enabled) {
            Music.enabled = false;
            console.log("Music is disabled");
        } else {
            Music.enabled = true;
            console.log("Music is enabled");
        }
    }
};

const Effects = {
    enabled: true,
    toggle: function () {
        if (Effects.enabled) {
            Effects.enabled = false;
            console.log("Effects is disabled");
        } else {
            Effects.enabled = true;
            console.log("Effects is enabled");
        }
    }
};

const MenuBackground = {
    /** @type Element */
    element: document.querySelector('#menu_background'),
    show: function () {
        MenuBackground.element.classList.remove('hidden');
        MenuBackground.element.classList.remove('fade_out');
        MenuBackground.element.classList.add('fade_in');
    },
    hide: function (next) {
        MenuBackground.element.classList.remove('fade_in');
        MenuBackground.element.classList.add('fade_out');
        MenuBackground.element.addEventListener('animationend', function _listener() {
            MenuBackground.element.classList.add('hidden');
            MenuBackground.element.removeEventListener('animationend', _listener);
            next && next();
        });
    }
};

const Start = {
    scene: {
        /** @type Element */
        element: document.querySelector('#start'),
        show: function () {
            Start.scene.element.classList.remove('hidden');
            Start.scene.element.classList.remove('fade_out');
            Start.scene.element.classList.add('fade_in');
        },
        hide: function (next) {
            Start.scene.element.classList.remove('fade_in');
            Start.scene.element.classList.add('fade_out');
            Start.scene.element.addEventListener('animationend', function _listener() {
                Start.scene.element.classList.add('hidden');
                Start.scene.element.removeEventListener('animationend', _listener);
                next();
            });
        }
    },
    playButton: {
        /** @type Element */
        element: document.querySelector('.button_play'),
        onClick: function () {
            console.log('Transition from start to game');
            hideStart(MenuBackground.hide(showGame));
        },
        show: function () {
            Start.playButton.element.classList.add('pulse');
            Start.playButton.element.addEventListener('click', Start.playButton.onClick);
        },
        hide: function () {
            Start.playButton.element.classList.remove('pulse');
            Start.playButton.element.removeEventListener('click', Start.playButton.onClick);
        }
    },
    settingsButton: {
        /** @type Element */
        element: document.querySelector('.button_settings'),
        onClick: function () {
            console.log('Transition from start to Settings');
            hideStart(showSettings);
        },
        show: function () {
            Start.settingsButton.element.classList.add('pulse');
            Start.settingsButton.element.addEventListener('click', Start.settingsButton.onClick);
        },
        hide: function () {
            Start.settingsButton.element.classList.remove('pulse');
            Start.settingsButton.element.removeEventListener('click', Start.settingsButton.onClick);
        }
    },
    quitButton: {
        /** @type Element */
        element: document.querySelector('.button_quit'),
        onClick: function () {
            console.log('Quit the game');
        },
        show: function () {
            Start.quitButton.element.classList.add('pulse');
            Start.quitButton.element.addEventListener('click', Start.quitButton.onClick);
        },
        hide: function () {
            Start.quitButton.element.classList.remove('pulse');
            Start.quitButton.element.removeEventListener('click', Start.quitButton.onClick);
        }
    }
};

const Settings = {
    scene: {
        /** @type Element */
        element: document.querySelector('#settings'),
        show: function () {
            Settings.scene.element.classList.remove('hidden');
            Settings.scene.element.classList.remove('fade_out');
            Settings.scene.element.classList.add('fade_in');
        },
        hide: function (next) {
            Settings.scene.element.classList.remove('fade_in');
            Settings.scene.element.classList.add('fade_out');
            Settings.scene.element.addEventListener('animationend', function _listener() {
                Settings.scene.element.classList.add('hidden');
                Settings.scene.element.removeEventListener('animationend', _listener);
                next && next();
            });
        }
    },
    musicButton: {
        /** @type Element */
        element: document.querySelector('.button_music'),
        onClick: function () {
            console.log('Toggle musicButton');
            Music.toggle();
            Settings.musicButton.update();
        },
        update: function () {
            if (Music.enabled) {
                Settings.musicButton.element.classList.add("unmuted");
                Settings.musicButton.element.classList.remove("muted");
            } else {
                Settings.musicButton.element.classList.remove("unmuted");
                Settings.musicButton.element.classList.add("muted");
            }
        },
        show: function () {
            Settings.musicButton.update();
            Settings.musicButton.element.classList.add('pulse');
            Settings.musicButton.element.addEventListener('click', Settings.musicButton.onClick);
        },
        hide: function () {
            Settings.musicButton.element.classList.remove('pulse');
            Settings.musicButton.element.removeEventListener('click', Settings.musicButton.onClick);
        }
    },
    effectsButton: {
        /** @type Element */
        element: document.querySelector('.button_effects'),
        onClick: function () {
            console.log('Toggle effectsButton');
            Effects.toggle();
            Settings.effectsButton.update();
        },
        update: function () {
            if (Effects.enabled) {
                Settings.effectsButton.element.classList.add("unmuted");
                Settings.effectsButton.element.classList.remove("muted");
            } else {
                Settings.effectsButton.element.classList.remove("unmuted");
                Settings.effectsButton.element.classList.add("muted");
            }
        },
        show: function () {
            Settings.effectsButton.update();
            Settings.effectsButton.element.classList.add('pulse');
            Settings.effectsButton.element.addEventListener('click', Settings.effectsButton.onClick);
        },
        hide: function () {
            Settings.effectsButton.element.classList.remove('pulse');
            Settings.effectsButton.element.removeEventListener('click', Settings.effectsButton.onClick);
        }
    },
    backButton: {
        /** @type Element */
        element: document.querySelector('.button_back'),
        onClick: function () {
            console.log('Transition from settingsButton to start');
            hideSettings(showStart);
        },
        show: function () {
            Settings.backButton.element.classList.add('pulse');
            Settings.backButton.element.addEventListener('click', Settings.backButton.onClick);
        },
        hide: function () {
            Settings.backButton.element.classList.remove('pulse');
            Settings.backButton.element.removeEventListener('click', Settings.backButton.onClick);
        }
    }
};

const Game = {
    scene: {
        /** @type Element */
        element: document.querySelector('#game'),
        show: function () {
            Game.scene.element.classList.remove('hidden');
            Game.scene.element.classList.remove('fade_out');
            Game.scene.element.classList.add('fade_in');
        },
        hide: function (next) {
            Game.scene.element.classList.remove('fade_in');
            Game.scene.element.classList.add('fade_out');
            Game.scene.element.addEventListener('animationend', function _listener() {
                Game.scene.element.classList.add('hidden');
                Game.scene.element.removeEventListener('animationend', _listener);
                next && next();
            });
        }
    }
};

//////////////////////////////////
// Start scene

function showStart() {
    console.log('showStart');
    Start.scene.show();
    Start.playButton.show();
    Start.settingsButton.show();
    Start.quitButton.show();
}

function hideStart(next) {
    console.log('hideStart');
    Start.playButton.hide();
    Start.settingsButton.hide();
    Start.quitButton.hide();
    Start.scene.hide(next);
}

//////////////////////////////////
// Settings scene

function showSettings() {
    console.log('showSettings');
    Settings.scene.show();
    Settings.musicButton.show();
    Settings.effectsButton.show();
    Settings.backButton.show();
}

function hideSettings(next) {
    console.log('hideSettings');
    Settings.musicButton.hide();
    Settings.effectsButton.hide();
    Settings.backButton.hide();
    Settings.scene.hide(next);
}

//////////////////////////////////
// Game scene

function showGame() {
    console.log('showGame');
    Game.scene.show();
    document.querySelector(".mouse").addEventListener("click", clickMouse);
    document.querySelector(".carrot").addEventListener("click", clickPositive);
    document.querySelector(".lollipop").addEventListener("click", clickPositive);
}


/////////////////////////////////
// RANDOM STUFF AND ALL


let lives = 3;

function clickMouse() {
    lives--;
    console.log("Lives:" + lives);
    let currentEnergy = "#energy_" + lives;
    document.querySelector(currentEnergy).classList.add("fade_out");
    gameStatus();
}

let points = 0;

function clickPositive() {
    console.log("clickPositive");
    points++;
    console.log("Points:" + points);
    document.querySelector("#points").innerHTML = points;
    gameStatus();
}




function gameStatus() {
    console.log("gameStatus");
    if (lives == 0) {
        document.querySelector("#gameover").classList.remove("hidden");
        document.querySelector("#gameover").classList.add("fade_in");
    } else if (points == 10) {
        document.querySelector("#levelcomplete").classList.remove("hidden");
        document.querySelector("#levelcomplete").classList.add("fade_in");
    }


}
