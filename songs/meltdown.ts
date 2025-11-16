// Quick metldown lol
setcpm(112 / 16)

let strings = note("d5 a#5 d5@0.5 a5@1.5 d5@0.75 a#5 d5@0.5 g5@0.25 a5@1.5").s("gm_tremolo_strings")

let hi_hat = s("hh!32").gain(0.5)
let bass = note("g2 ~ ~ ~ ~ ~ ~ ~ g2 ~ g2 g2 ~ ~ ~ ~ ~ g2 ~ ~ ~ ~ ~ ~ g2 ~ g2 g2 ~ ~ ~ d3 ~").s("808s").gain(0.5)
let kick = s("bd ~ ~ ~ ~ ~ ~ ~ bd ~ bd bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ ~ ~ bd ~ bd bd ~ ~ ~ ~ ~")
let snare = s("[~ ~ sd ~ ]!4")
let voc = s("[~ rim ~ ~]!4")
let open_hat = s("oh!2")
let counter_bass = note("~ ~ g3 ~ g3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ g3 ~ ~ ~ g3 ~ g3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").sound("808s").gain(0.5).transpose(-8)

let strings2 = note("[g4, a#4, d5]@0.25 ~@0.25 [d#5, g5]@0.0625 ~@0.0625 [d#5, g5]@0.0625 ~@0.0625 [d5, f5]@0.1875 ~@0.0625 [g4, a#4, d5]@0.25 ~@0.25 [g#4, c5, d#5]@0.0625 ~@0.0625 [g#4, c5, d#5]@0.0625 ~@0.0625 [a#4, d5, f5]@0.1875 ~@0.0625").cpm(112/8).s("gm_brass_section")

let choir = note("d#5@0.25 a4@0.25 c5@0.5 a#4@0.25 d4@0.25 g4@0.5").s("gm_choir_aahs").cpm(112/8)

arrange(
  [2, strings],
  [2, stack(strings, bass, kick, hi_hat, open_hat, snare, voc)],
  [2, stack(strings, bass, kick, hi_hat, open_hat, snare, voc, counter_bass)],
  [0.5, stack(choir)],
  [2, stack(strings2)]
 )