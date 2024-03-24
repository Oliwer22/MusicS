const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const keys = {
  A: { element: document.querySelector('[data-note="C"]'), note: "C" },
  W: { element: document.querySelector('[data-note="C#"]'), note: "C#" },
  S: { element: document.querySelector('[data-note="D"]'), note: "D" },
  E: { element: document.querySelector('[data-note="D#"]'), note: "D#" },
  D: { element: document.querySelector('[data-note="E"]'), note: "E" },
  F: { element: document.querySelector('[data-note="F"]'), note: "F" },
  T: { element: document.querySelector('[data-note="F#"]'), note: "F#" },
  G: { element: document.querySelector('[data-note="G"]'), note: "G" },
  Y: { element: document.querySelector('[data-note="G#"]'), note: "G#" },
  H: { element: document.querySelector('[data-note="A"]'), note: "A" },
  U: { element: document.querySelector('[data-note="A#"]'), note: "A#" },
  J: { element: document.querySelector('[data-note="B"]'), note: "B" },
  K: { element: document.querySelector('[data-note="C2"]'), note: "C2" },
  O: { element: document.querySelector('[data-note="C#2"]'), note: "C#2" },
  L: { element: document.querySelector('[data-note="D2"]'), note: "D2" },
  P: { element: document.querySelector('[data-note="D#2"]'), note: "D#2" },
  ";": { element: document.querySelector('[data-note="E2"]'), note: "E2" },
  N: { element: document.querySelector('[data-note="F2"]'), note: "F2" },
  M: { element: document.querySelector('[data-note="F#2"]'), note: "F#2" },
  ",": { element: document.querySelector('[data-note="G2"]'), note: "G2" },
};





function playSound(note) {
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  oscillator.type = "sins";
  oscillator.frequency.value = noteToFrequency(note);
  gainNode.gain.setValueAtTime(1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1);
  oscillator.start();
  oscillator.stop(audioContext.currentTime + 1);
}

function noteToFrequency(note) {
  const notes = {
    C: 261.63,
    "C#": 277.18,
    D: 293.66,
    "D#": 311.13,
    E: 329.63,
    F: 349.23,
    "F#": 369.99,
    G: 392.00,
    "G#": 415.30,
    A: 440.00,
    "A#": 466.16,
    B: 493.88,
    C2: 523.25,
    "C#2": 554.37,
    D2: 587.33,
    "D#2": 622.25,
    E2: 659.25,
    F2: 698.46,
    "F#2": 739.99,
    G2: 783.99,
  };
  return notes[note];
}

Object.values(keys).forEach(key => {
  key.element.addEventListener("mousedown", () => playSound(key.note));
  key.element.addEventListener("touchstart", () => playSound(key.note));
});

window.addEventListener("keydown", event => {
  const key = event.key.toUpperCase();
  if (keys.hasOwnProperty(key)) {
    keys[key].element.classList.add("active");
    playSound(keys[key].note);
  }
});

window.addEventListener("keyup", event => {
  const key = event.key.toUpperCase();
  if (keys.hasOwnProperty(key)) {
    keys[key].element.classList.remove("active");
  }
});
