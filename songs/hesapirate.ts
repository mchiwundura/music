setcpm(180 / 4)

// Helper to shorten repetitive note creation
const n = (pattern) => note(pattern)

// Define piano patterns (compact but readable)
const piano = {
  1: n("d5@0.25 d5@0.125 d5@0.25 d5@0.125 d5@0.25 d5@0.125 d5@0.125 d5@0.125 d5@0.125"),
  2: n("a4@0.125 c5@0.125 [f4, a4, d5]@0.25 [f4, a4, d5]@0.25 [f4, a4, d5]@0.125 [a4, c5, e5]@0.125"),
  3: n("[a#4, d5, f5]@0.25 [a#4, d5, f5]@0.25 [a#4, d5, f5]@0.125 [d5, g5]@0.125 [a4, c5, e5]@0.25"),
  4: n("[a4, c5, e5]@0.25 [a4, d5]@0.125 [g4, c5]@0.125 [a4, c5]@0.125 [a4, d5]@0.25 ~@0.125"),
  5: n("[a4, c5, e5]@0.25 [a4, d5]@0.125 [g4, c5]@0.125 [f4, a4, d5]@0.25 ~@0.25"),
  6: n("[a#4, d5, g5]@0.25 [a#4, d5, g5]@0.25 [d5, g5]@0.125 [d5, a5]@0.125 [d5, g5, a#5]@0.25"),
  7: n("[d5, g5, a#5]@0.25 [f5, a5]@0.125 [e5, g5]@0.125 [f5, a5]@0.125 d5@0.25 ~@0.125"),
  8: n("d5@0.125 e5@0.125 [a#4, d5, f5]@0.25 [a#4, d5, f5]@0.25 [a#4, d5, g5]@0.25"),
  9: n("[f5, a5]@0.125 d5@0.25 ~@0.125 d5@0.125 f5@0.125 [a4, c#5, e5]@0.25"),
  x: n("[a4, c#5, e5]@0.25 [d5, f5]@0.125 [d5, b4]@0.125 [a4, c#5, e5]@0.375 ~@0.125"),
  11: n("[a5, d6]@0.25 [a5, d6]@0.25 [a5, c6, E6]@0.25 [c6, d6, f6]@0.25"),
  12: n("f6@0.125 f6@0.125 [a#5, d6, g6]@0.25 [d6, a6]@0.125 f6@0.125 ~@0.25"),
  13: n("[f6, a5]@0.125 [a5, d6]@0.125 a5@0.125 @~0.875"),
  14: n("[d6, g6, a#6]@0.25 ~0.125 [a#5, g6]@0.125 [a#5, d6]@0.125 a#5@0.125 ~@0.125")
}

// Define progressions in arrays (much easier to adjust)
const baseProg = [
  [2.5, piano[1]], [1, piano[2]], [1, piano[3]], [1, piano[4]],
  [1, piano[2]], [1, piano[3]], [1, piano[5]], [1, piano[2]],
  [1, piano[6]], [1, piano[7]], [1, piano[8]], [1, piano[9]], 
  [1, piano.x], [1, piano[11]], [1, piano[12]], [1, piano[13]],
  [1, piano[14]], 
]

// Reuse the same structure for progression2, just skip the intro measure
const progression = arrange(...baseProg)
const progressionx = arrange(...baseProg.slice(1))
const progressiony = arrange(...baseProg.slice(13))


// Define instruments in a DRY, easy-to-loop way
const instruments = [
  ["gm_string_ensemble_1", 0],
  ["gm_violin_section, gm_cello_section", 12],
  ["gm_brass_section_full, gm_low_brass", 0],
  ["gm_synth_bass_2, gm_sub_bass", -24],
  ["gm_timpani, gm_tactical_toms", 0]
]

// Create stacked progression dynamically
const progression1 = stack(
  ...instruments.map(([name, shift]) => progression.s(name).transpose(shift))
)

const progression2 = stack(
  ...instruments.map(([name, shift]) => progressionx.s(name).transpose(shift))
)

const progression3 = stack(
  ...instruments.map(([name, shift]) => progressiony.s(name).transpose(shift))
)

// Final arrangement
arrange(
  [14.5, progression1],
  [13, progression2.transpose(12)],
  [4, progression3]
)