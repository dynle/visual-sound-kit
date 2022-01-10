let sample = [];
let animation = [];
let num;
const maxAnim = 6;
let button_play,
    button_stop,
    music_name,
    source,
    music,
    vol,
    vol_slider,
    img;
let curr_status = { flag: false, message: "" };

async function playBtnHandler() {
    if (!music) {
        curr_status = { flag: false, message: "Loading..." };

        // ----- Play downloaded music -----
        music = createAudio('./sounds/embrace-12278.mp3');
        music.play();
        music.onended(stopBtnHandler);
        curr_status = { flag: true, message: "Playing" };
    }
}

function stopBtnHandler() {
    if (music) {
        music.stop();
        music = null;
        curr_status = { flag: false, message: "" };
    } else {
        window.alert("No music playing now");
    }
}

function preload() {
    sample[0] = loadSound("./sounds/se01.wav");
    sample[1] = loadSound("./sounds/se02.wav");
    sample[2] = loadSound("./sounds/se03.wav");
    sample[3] = loadSound("./sounds/se04.wav");
    sample[4] = loadSound("./sounds/se05.wav");
    sample[5] = loadSound("./sounds/se06.wav");
    sample[6] = loadSound("./sounds/se07.wav");
    sample[7] = loadSound("./sounds/se08.wav");
    sample[8] = loadSound("./sounds/se09.wav");
    sample[9] = loadSound("./sounds/se10.wav");
    sample[10] = loadSound("./sounds/se11.wav");
    sample[11] = loadSound("./sounds/se12.wav");

    img = loadImage("./images/keyboard.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create a play button
    button_play = createButton("Play");
    button_play.size(80, 50);
    button_play.position(0, 0);
    button_play.mousePressed(playBtnHandler);

    // Create a stop button
    button_stop = createButton("Stop");
    button_stop.size(80, button_play.height);
    button_stop.position(button_play.x, button_play.height);
    button_stop.mousePressed(stopBtnHandler);

    // Create a volumn slider
    vol_slider = createSlider(0.0, 1.0, 1.0, 0.01);
    vol_slider.position(button_play.x + 100, 30);
    vol_slider.style("width", "200px");
}

function draw() {
    background(0);

    // Show status on screen
    textSize(30);
    fill(255);
    noStroke();
    text(curr_status.message, 150, 100);

    // Control the volume slider
    text("Volume", button_play.x + 150, 20);
    if (music) {
        vol = vol_slider.value();
        music.volume(vol);
    } else {
        textSize(70);
        textAlign(CENTER);
        text("Play music to start!", windowWidth / 2, windowHeight / 2 - 100);
        imageMode(CENTER);
        image(img, windowWidth / 2, windowHeight / 2 + 40, 500, 200);
        textSize(20);
        text(
            "Use Q-R, A-F, Z-V on Qwerty keyboard",
            windowWidth / 2,
            windowHeight / 2 + 170
        );
    }

    if (animation.length > 0) {
        for (let i = 0; i < animation.length; i++) {
            animation[i].draw();
        }
    }
}

function keyTyped() {
    if (music) {
        if (key == "a") {
            sample[0].play();
            animation.push(new Anim_a());
        } else if (key == "s") {
            sample[1].play();
            animation.push(new Anim_s());
        } else if (key == "d") {
            sample[2].play();
            animation.push(new Anim_d());
        } else if (key == "f") {
            sample[3].play();
            animation.push(new Anim_f());
        } else if (key == "q") {
            sample[4].play();
            animation.push(new Anim_q());
        } else if (key == "w") {
            sample[5].play();
            animation.push(new Anim_w());
        } else if (key == "e") {
            sample[6].play();
            animation.push(new Anim_e());
        } else if (key == "r") {
            sample[7].play();
            animation.push(new Anim_r());
        } else if (key == "z") {
            sample[8].play();
            animation.push(new Anim_z());
        } else if (key == "x") {
            sample[9].play();
            animation.push(new Anim_x());
        } else if (key == "c") {
            sample[10].play();
            animation.push(new Anim_c());
        } else if (key == "v") {
            sample[11].play();
            animation.push(new Anim_v());
        }
        if (animation.length > maxAnim) {
            animation.splice(1, 1);
        }
    }
}
