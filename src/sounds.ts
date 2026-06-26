let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

export function playShutter(): void {
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Sharp mechanical click — burst of high-passed noise
  const bufSize = Math.floor(ctx.sampleRate * 0.055);
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.007));
  }

  const src = ctx.createBufferSource();
  src.buffer = buf;

  const hpf = ctx.createBiquadFilter();
  hpf.type = 'highpass';
  hpf.frequency.value = 1800;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(1.4, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

  src.connect(hpf);
  hpf.connect(gain);
  gain.connect(ctx.destination);
  src.start(now);

  // Secondary softer thump
  const bufSize2 = Math.floor(ctx.sampleRate * 0.08);
  const buf2 = ctx.createBuffer(1, bufSize2, ctx.sampleRate);
  const data2 = buf2.getChannelData(0);
  for (let i = 0; i < bufSize2; i++) {
    data2[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.02));
  }
  const src2 = ctx.createBufferSource();
  src2.buffer = buf2;
  const lpf = ctx.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = 400;
  const gain2 = ctx.createGain();
  gain2.gain.setValueAtTime(0.5, now + 0.01);
  src2.connect(lpf);
  lpf.connect(gain2);
  gain2.connect(ctx.destination);
  src2.start(now + 0.01);
}

export function playEject(): void {
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Mechanical motor whirr
  const osc = ctx.createOscillator();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(130, now);
  osc.frequency.exponentialRampToValueAtTime(75, now + 0.45);

  const oscGain = ctx.createGain();
  oscGain.gain.setValueAtTime(0.07, now);
  oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.48);

  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + 0.5);

  // Paper-feed noise texture
  const bufSize = Math.floor(ctx.sampleRate * 0.42);
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.28));
  }
  const nSrc = ctx.createBufferSource();
  nSrc.buffer = buf;

  const bpf = ctx.createBiquadFilter();
  bpf.type = 'bandpass';
  bpf.frequency.value = 900;
  bpf.Q.value = 1.5;

  const nGain = ctx.createGain();
  nGain.gain.setValueAtTime(0.22, now + 0.08);
  nGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

  nSrc.connect(bpf);
  bpf.connect(nGain);
  nGain.connect(ctx.destination);
  nSrc.start(now + 0.08);
}

export function playLand(): void {
  const ctx = getCtx();
  const now = ctx.currentTime;

  // Soft thud when polaroid lands on pile
  const bufSize = Math.floor(ctx.sampleRate * 0.12);
  const buf = ctx.createBuffer(1, bufSize, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < bufSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.03));
  }
  const src = ctx.createBufferSource();
  src.buffer = buf;

  const lpf = ctx.createBiquadFilter();
  lpf.type = 'lowpass';
  lpf.frequency.value = 300;

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.35, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

  src.connect(lpf);
  lpf.connect(gain);
  gain.connect(ctx.destination);
  src.start(now);
}
