// Quick metldown lol
setcpm(112 / 16)
let strings = note("d5 a#6 d5@0.5 a5@1.5 d5@0.75 a#6 d5@0.5 g5@0.25 a5@1.5").s("gm_tremolo_strings").gain(0.4)._pianoroll()

// open hat on the first beat


// voc sample eh on teh second beat
// $: s("~@3 sd!4")._punchcard()

let hi_hat = s("hh!32").gain(0.2)
let open_hat = s("oh").struct("[1 0 0 0 1 0]!2")
let kick = s("bd ~ ~ ~ ~ ~ ~ ~ bd ~ bd bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ bd bd ~ ~ ~ ~ ~")._punchcard()
let counter_bass = note("~ ~ d3 ~ d3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ d3 ~ ~ ~ d3 ~ d3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").s("808s").gain(0.5)._punchcard()
let triangle = s("cr")
let snare = s("[~ ~ sd ~ ~]!4")
let bass = note("g2 ~ ~ ~ ~ ~ ~ ~ g2 ~ g2 g2 ~ ~ ~ ~ ~ g2 ~ ~ ~ ~ ~ ~ g2 ~ g2 g2 ~ ~ ~ d3 ~").s("808s").gain(0.5)._punchcard()
// $: note("~@0.25 g3@0.25 g3@0.375 ~0.75 g3@0.125 ~0.5 g3@0.25 g@0.375 ~0.75 g3@0.125 ~0.25 ").gain(0.2).s("808s")._punchcard()


// $: note("[g4, a#4, d5]@0.25 ~@0.25 [d#5, g5]@0.0625 ~@0.0625 [d#5, g5]@0.0625 ~@0.0625 [d5, f5]@0.1875 ~@0.0625 [g4, a#4, d5]@0.25 ~@0.25 [g#4, c5, d#5]@0.0625 ~@0.0625 [g#4, c5, d#5]@0.0625 ~@0.0625 [a#4, d5, f5]@0.1875 ~@0.0625")._pianoroll().cpm(116/8).s("gm_brass_section")
// $: note("[g4, a#4, d5]@0.25 ~@0.25 [d#5, g5]@0.0625 ~@0.0625 [d#5, g5]@0.0625 ~@0.0625 [d5, f5]@0.1875 ~@0.0625 [g4, a#4, d5]@0.25 ~@0.25 [g#4, c5, d#5]@0.0625 ~@0.0625 [g#4, c5, d#5]@0.0625 ~@0.0625 [a#4, d5, f5]@0.1875 ~@0.0625")._pianoroll().cpm(116/8).s("gm_pad_choir")
arrange(
  [2, stack(kick, bass, counter_bass, hi_hat, open_hat, snare)],
  // [4, stack(strings, kick, bass, hi_hat, triangle, snare, counter_bass)],
  // [4, stack(strings, bass, counter_bass)],
)