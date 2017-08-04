var container;
var pitch;
var volume;
var dbs;
var pitchDetector;

function updateStats() {
  const f = pitchDetector.freq * 3;
  const v = pitchDetector.volume;
  const dbs = pitchDetector.dbs;
  pitch.innerHTML = f;
  volume.innerHTML = v;
  dbs.innerHTML = dbs;
  requestAnimationFrame(updateStats);
  const hsl = `hsl(${f},100%,${dbs}%)`;
  container.style.backgroundColor = hsl;
  //console.log(hsl);
}


window.addEventListener('load', () => {
  const ctx = new AudioContext();
  pitchDetector = new PitchDetector(ctx);

  pitch = document.querySelector('#pitch');
  volume = document.querySelector('#volume');
  volume = document.querySelector('#dbs');
  container = document.querySelector('#container');

  updateStats();
});
