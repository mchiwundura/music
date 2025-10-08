// MINIMAL AMBIENT → DEEP BASS DROP + LEAD PIANO — NO GAPS (fixed rests)
setcpm(48/4);
swing(0.56);

// ============== ALWAYS-ON BED ==============
const pad = note("b2 ~ f#3 ~  a3 ~ e3 ~")
  .sound("supersaw").gain(0.6).shape(0.1).detune(0.28)
  .lpf(sine.range(160,480).slow(24)).lpq(0.28)
  .room(0.6).size(0.65)
  .legato(3.4);

const pianoCloud = seq(
  note("<b3 d4 f#4>").slow(4),
  note("<g3 b3 d4>").slow(4),
  note("<d3 f#3 a3>").slow(4),
  note("<a2 c#3 e3>").slow(4)
).sound("piano")
 .gain(0.24)
 .lpf(2200).lpq(0.25)
 .room(0.6).size(0.7)
 .legato(3.0);

const subBed = note("b1 ~ f#1 ~  a1 ~ e1 ~")
  .sound("sine").gain(0.3)
  .lpf(140).lpq(0.2)
  .legato(3.2)
  .slow(4);

const bed = stack(
  pad.slow(4).gain(sine.range(0.45,0.8).slow(32)),
  pianoCloud.slow(4).gain(sine.range(0.25,0.5).slow(24)),
  subBed.gain(sine.range(0.35,0.6).slow(28))
);

// ============== DROP CORE ==============
const kick = s("bd*4")
  .gain(0.88).shape(0.12)
  .lpf(140).lpq(0.25)
  .room(0.24).size(0.24);

const bassHeart = note("b1 ~ f#1 ~  a1 ~ e1 ~")
  .sound("supersaw")
  .gain(0.7).shape(0.12).detune(0.3)
  .lpf(sine.range(120,420).slow(12)).lpq(0.25)
  .room(0.45).size(0.5)
  .legato(1.6)
  .gain(sine.range(0.6,0.95).fast(4))
  .color("#38BDF8")
  ._spectrum({ thickness: 3, speed: 1, min: -90, max: 0 });

const subReinforce = note("b0 ~ f#0 ~  a0 ~ e0 ~")
  .sound("sine").gain(0.3).lpf(110).lpq(0.2).legato(1.8);

// ============== LEAD “VOICE” PIANO ==============
const phraseB  = note("b5  d6  f#6  e6  d6");
const phraseFs = note("f#5 a5  c#6 b5  a5");
const phraseA  = note("a5  c#6 e6  d6  c#6");
const phraseE  = note("e5  g5  b5  a5  g5");

const leadPiano = seq(
  phraseB,  note("~"),
  phraseFs, note("~"),
  phraseA,  note("~"),
  phraseE
)
.sound("piano")
.gain(0.28)
.lpf(2500).lpq(0.28)
.delay(0.28).delaytime(0.42).delayfeedback(0.48)
.room(0.6).size(0.75)
.legato(1.2)
.pan(sine.range(0.46,0.54).slow(12))
.slow(2);

// ============== OVERLAY SECTIONS ==============
const fadeIn4 = p => p.gain(sine.range(0.18,0.8).slow(4));
const fadeOut4 = p => p.gain(sine.range(0.8,0.25).slow(4));

const O1 = note("~").slow(4);
const O2 = note("~").slow(4);
const O3 = stack(kick.gain(0.85), bassHeart.slow(2), subReinforce.slow(2)).slow(4);
const O4 = stack(
  kick,
  bassHeart.slow(2).gain(0.75),
  subReinforce.slow(2),
  leadPiano
).slow(4);
const O5 = stack(
  kick.gain(0.9),
  bassHeart.slow(2).gain(0.78),
  subReinforce.slow(2),
  leadPiano.gain(0.26)
).slow(4);
const O6 = fadeOut4(
  stack(
    kick.gain(0.7),
    bassHeart.gain(0.6),
    subReinforce.gain(0.25),
    leadPiano.gain(0.2)
  )
).slow(4);

// ============== FINAL ==============
stack(
  bed,
  seq(O1, O2, O3, O4, O5, O6)
)