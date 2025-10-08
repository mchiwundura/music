setcpm(112 / 8)
// I'm an idiot that's why I made this with 8 bars not 4 

let mainriff = "[f3, c4, f4] _ _ [f3, c4, f4] _ _ _ _ [a#3, f4, a#4] _ [a#3, f4, a#4] _ _ [g#3, c#4, g#4] _ _ [g#3, c#4, g#4] _ _ _ [c#4, g#4, c#5] _ [c#4, g#4, c#5] _"
let mainriffbass = "[f2, c3, f3] _ _ [f2, c3, f3] _ _ _ _ [a#2, f3, a#3] _ [a#2, f3, a#3] _ _ [g#2, c#3, g#3] _ _ [g#2, c#3, g#3] _ _ _ [c#3, g#3, c#4] _ [c#3, g#3, c#4] _"
let lead = note(mainriff).s("gm_acoustic_guitar_nylon")
let electric_lead = note(mainriff).s("gm_overdriven_guitar")
let bass = note(mainriffbass).s("gm_electric_bass_pick")

// this drum loop actually came better than i expected
let kick = note("c3 _ _ c3 _ _ _ _ c3 _ c3 c3 _ _ c3 _ c3 _ _ c3 _ _ _ _ c3 _ c3 c3 _ _ c3 _").s("bd")

// again I'm really not too bright I had to make a separate kick with delay because I can't put it on the actual note on top
let kickdelay = note("c3 c3").s("bd").delay(0.5)
let crash = sound("cr cr")
let snare = note("c3 _ _ _ c3  _ _ c3 _ c3 _ _ c3 _ _ _ _ _ _ _ c3 _ _ c3 _ c3 _ _ c3 _ _ _").s("bossdr110_sd")

// This was also good
let bass2 = note("f1 f1 f1 f1 a#1 a#1 a#1 a#1 g#1 g#1 g#1 g#1 c#2 c#2 c#2 c#2").s("gm_electric_bass_pick")
let kick2 = note("c3 c3 _ _ c3 c3 _ _ c3 c3 _ _ c3 c3 _ _").s("bd")
let snare2 = note("c8 _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _").s("bossdr110_sd")

// that drum intro this is where i lied the most
let hi_hat3 = note("c8 _ _ c _ _ _ c _ _ _ c _ _ _ c _").s("hh")
let snare3 = note("c _ _ _ c _ _ _ c _ _ _ c _ _ _").s("bossdr110_sd")
let kick3 = note("c8 c _ c _ c _ c _ c _ c _ c _ c").s("bd")



arrange(
	[2, lead],
	[0.5, stack(kick3, snare3, hi_hat3).cpm(112 / 4)],
	[2, stack(lead, kick, crash, snare, kickdelay, bass, electric_lead)],
	[2, stack(bass2, kick2, snare2)]
)
