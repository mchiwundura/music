setcpm(113 / 16)

let gonnaz = note("~ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ _ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ c3 _ _ _ c3 _ _ c3 _ _ c3 _ _ _ _ _ c3 _ _ _ c3 _ _ c3 _ _ _ _").s("sd")
let hat = note("~ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _ _ _ c3 _").s("hh")
let synth = note("~ c _ _ c _ c _ c _ _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c _ c c _ c c _ _ c c _ c _ _ c c").s("gm_kalimba")
let hoh = note("~ _ _ _ c#3 _ _ _ f#3 _ _ _ _ ~ f#3 _ _ _ _ _ _ _ _ ~ f#3 _ _ _ ~ ~ c#3 _ ~ ~ ~ c#3 _ _ _ f#3 _ _ _ _ ~ f#3 _ _ _ _ _ _ _ _ ~ f#3 _ _ f#3 _ _ c#3 _").s("808s")

arrange( 
  
	[1, stack(hat, gonnaz)],
	[1, stack(hat, gonnaz, synth)],
	[1, stack(hat, gonnaz, synth, hoh)],
)._pianoroll()