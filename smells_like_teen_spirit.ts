setcps(0.230)

let lead = note("e3 _ _ e3 _ _ _ _ a#4 _ a#4 _ _ g#3 _ _ g#3 _ _ _ c#4 _ c#4 _").s("gm_electric_guitar_jazz")
let kick = note("c3 _ _ c3 _ _ _ _ c3 _ c3 c3 _ _ c3 _ c3 _ _ c3 _ _ _ _ c3 _ c3 c3 _ _ c3 _").s("bd")
let crash = sound("cr cr")
let snare = note("c3 _ _ _ c3  _ _ c3 _ c3 _ _ c3 _ _ _ _ _ _ _ c3 _ _ c3 _ c3 _ _ c3 _ _ _").s("bossdr110_sd")

let bass2 = note("f3 f3 f3 f3 a#3 a#3 a#3 a#3 g#3 g#3 g#3 g#3 c#4 c#4 c#4 c#4").s("gm_acoustic_bass")
let kick2 = note("c3 c3 _ _ c3 c3 _ _ c3 c3 _ _ c3 c3 _ _").s("bd")
let snare2 = note("c8 _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _").s("bossdr110_sd")

arrange(
	[2, lead],
	[2, stack(lead, kick, crash, snare)],
	[2, stack(bass2, kick2, snare2)]
)
