window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    showStart();
}

let lives = 3;
let points = 0;


//////////////////////////////////
// CONSTANTS

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
                next && next();
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
            console.log("Show Play Button");
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
            quitGame();
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
    },
    mouse: {
        /** @type Element */
        element: document.querySelector('.mouse'),
        onClick: function () {
            clickMouse();
        },
        show: function () {
            document.querySelector(".dreams").addEventListener('animationend', function _listener() {
                Game.mouse.element.addEventListener("click", Game.mouse.onClick);
                Game.mouse.element.classList.add("pointer");
                document.querySelector(".dreams").removeEventListener('animationend', _listener);
            });
        },
        hide: function () {
            console.log("hideMouse");
            Game.mouse.element.removeEventListener("click", Game.mouse.onClick);
            Game.mouse.element.classList.remove("pointer");
        }
    },
    carrot: {
        /** @type Element */
        element: document.querySelector('.carrot'),
        onClick: function () {
            clickPositive();
        },
        show: function () {
            document.querySelector(".dreams").addEventListener('animationend', function _listener() {
                Game.carrot.element.addEventListener("click", Game.carrot.onClick);
                Game.carrot.element.classList.add("pointer");
                document.querySelector(".dreams").removeEventListener('animationend', _listener);
            });
        },
        hide: function () {
            console.log("hideCarrot");
            Game.carrot.element.removeEventListener("click", Game.carrot.onClick);
            Game.carrot.element.classList.remove("pointer");
        }
    },
    lollipop: {
        /** @type Element */
        element: document.querySelector('.lollipop'),
        onClick: function () {
            clickPositive();
        },
        show: function () {
            document.querySelector(".dreams").addEventListener('animationend', function _listener() {
                Game.lollipop.element.addEventListener("click", Game.lollipop.onClick);
                Game.lollipop.element.classList.add("pointer");
                document.querySelector(".dreams").removeEventListener('animationend', _listener);
            });
        },
        hide: function () {
            console.log("hideCarrot");
            Game.lollipop.element.removeEventListener("click", Game.lollipop.onClick);
            Game.lollipop.element.classList.remove("pointer");
        }
    }
};

const LevelComplete = {
    scene: {
        /** @type Element */
        element: document.querySelector('#levelcomplete'),
        show: function () {
            LevelComplete.scene.element.classList.remove('hidden');
            LevelComplete.scene.element.classList.remove('fade_out');
            LevelComplete.scene.element.classList.add('fade_in');
        },
        hide: function (next) {
            LevelComplete.scene.element.classList.remove('fade_in');
            LevelComplete.scene.element.classList.add('fade_out');
            LevelComplete.scene.element.addEventListener('animationend', function _listener() {
                Start.scene.element.classList.add('hidden');
                Start.scene.element.removeEventListener('animationend', _listener);
                next && next();
            });
        }
    },
    quitButton: {
        /** @type Element */
        element: document.querySelector('.levelcomplete_button_quit'),
        onClick: function () {
            console.log('Quit the game');
            quitGame();
        },
        show: function () {
            LevelComplete.quitButton.element.classList.add('pulse');
            LevelComplete.quitButton.element.addEventListener('click', LevelComplete.quitButton.onClick);
        },
        hide: function () {
            LevelComplete.quitButton.element.classList.remove('pulse');
            LevelComplete.quitButton.element.removeEventListener('click', LevelComplete.quitButton.onClick);
        }
    }
};

const GameOver = {
    scene: {
        /** @type Element */
        element: document.querySelector('#gameover'),
        show: function () {
            GameOver.scene.element.classList.remove('hidden');
            GameOver.scene.element.classList.remove('fade_out');
            GameOver.scene.element.classList.add('fade_in');
        },
        hide: function (next) {
            GameOver.scene.element.classList.remove('fade_in');
            GameOver.scene.element.classList.add('fade_out');
            GameOver.scene.element.addEventListener('animationend', function _listener() {
                Start.scene.element.classList.add('hidden');
                Start.scene.element.removeEventListener('animationend', _listener);
                next && next();
            });
        }
    },
    quitButton: {
        /** @type Element */
        element: document.querySelector('.gameover_button_quit'),
        onClick: function () {
            console.log('Quit the game');
            quitGame();
        },
        show: function () {
            GameOver.quitButton.element.classList.add('pulse');
            GameOver.quitButton.element.addEventListener('click', GameOver.quitButton.onClick);
        },
        hide: function () {
            GameOver.quitButton.element.classList.remove('pulse');
            GameOver.quitButton.element.removeEventListener('click', GameOver.quitButton.onClick);
        }
    },
    playAgainButton: {
        /** @type Element */
        element: document.querySelector('.gameover_button_play_again'),
        onClick: function () {
            console.log('Quit the game');
            hideGameOver(showStart);
        },
        show: function () {
            GameOver.playAgainButton.element.classList.add('pulse');
            GameOver.playAgainButton.element.addEventListener('click', GameOver.playAgainButton.onClick);
        },
        hide: function () {
            GameOver.playAgainButton.element.classList.remove('pulse');
            GameOver.playAgainButton.element.removeEventListener('click', GameOver.playAgainButton.onClick);
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
    Game.mouse.show();
    Game.carrot.show();
    Game.lollipop.show();
}

//////////////////////////////////
// End screens

function gameOver() {
    console.log("gameOver");
    GameOver.scene.show();
    GameOver.quitButton.show();
    GameOver.playAgainButton.show();
}

function hideGameOver(next) {
    console.log("hideGameOver");
    GameOver.playAgainButton.hide();
    GameOver.quitButton.hide();
    GameOver.scene.hide(next);
}

function levelComplete() {
    console.log("levelComplete");
    LevelComplete.scene.show();
    LevelComplete.quitButton.show();
}

//////////////////////////////////
// Quit game

function quitGame() {
    document.querySelector("#screen").classList.add("fade_out");
    document.querySelector("#screen").addEventListener("animationend", function _listener() {
        document.querySelector("#screen").classList.add("hidden");
        document.querySelector("#screen").removeEventListener("animationend", _listener);
    });

}


//////////////////////////////////
// Click functions

function clickMouse() {
    lives--;
    console.log("Lives:" + lives);
    let currentEnergy = "#energy_" + lives;
    document.querySelector(currentEnergy).classList.add("fade_out");
    gameStatus();
}


function clickPositive() {
    points++;
    document.querySelector("#points").innerHTML = points;
    gameStatus();
}


function gameStatus() {
    if (lives == 0) {
        gameOver();
    } else if (points == 10) {
        levelComplete();
    }
}
