setcpm(113 / 16)

let gonnaz = note("~ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ _ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ _ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ _ _").s("9000_rim").transpose(-4).gain(slider(0.33, 0, 1, 0.01))
let hat = note("~ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _").s("9000_tb").gain(slider(0.55, 0, 1, 0.01))
let hat2 = note("~ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _").s("9000_hh").gain(slider(0.23, 0, 1, 0.01))
let synth = note("~ c _ _ c _ c _ c _ _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c").s("9000_lt").transpose(-8).distort(3).gain(slider(0.02, 0, 1, 0.01))
let hoh = note("~ _ _ _ f#3 _ f#3 _ c#3 _ _ _ _ ~ c#3 _ _ _ _ _ _ _ _ ~ c#3 _ _ _ ~ ~ f#3 _ ~ ~ ~ f#3 _ f#3 _ c#3 _ _ _ _ ~ c#3 _ _ _ _ _ _ _ _ ~ f#3 _ _ c#3 _ _ f#3 _").s("808s").gain(slider(0.45, 0, 1, 0.01))
let bass = note ("[c]!16").s("bd").gain(slider(0.1, 0, 1, 0.01))
let lead = note("[~ _ _ _ f#5 _ _ _ c#5 _ _ f#5 _ _ _ _]!4").s("gm_acoustic_guitar_nylon").gain(slider(0.7, 0, 1, 0.01))
let bg_strings = note("[c#3, f#3]").s("gm_string_ensemble_1").gain(slider(0.1, 0, 1, 0.01))
arrange(
	[1, stack(hat, hat2, gonnaz, bass)],
	[1, stack(hat, gonnaz, synth, bg_strings)],
	[1, stack(hat, gonnaz, synth, hoh, lead, bg_strings)],
)._pianoroll()