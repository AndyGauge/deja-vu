// Each section carries: title, year, theme, gesture, body, citation, link,
// optional quote (verbatim from source), and eli5 (plain-language walk-through).
// Navigation is chronological. Sequential numbers 01..N assigned after sort.

const rawParts = [
  {
    theme: 'The Signal',
    sections: [
      {
        title: 'A Memory Verification Error',
        year: 2016,
        gesture: 'Déjà vu is not a glimpse of the past. It is the brain flagging a mismatch between what feels familiar and what is known.',
        body: 'Akira O’Connor’s group at St Andrews reframed déjà vu as a metacognitive signal — the brain flagging the sensation of familiarity without a corresponding recoverable memory. On this account the experience is the system checking itself, not a glimpse into anything. A normal memory-verification subroutine, briefly visible to consciousness.',
        citation: 'O’Connor, A. R. & Moulin, C. J. A. (2013). *Frontiers in Psychology*, 4, 881.',
        link: 'https://en.wikipedia.org/wiki/D%C3%A9j%C3%A0_vu',
        eli5: 'Scientists in Scotland now think déjà vu happens when your brain feels like something is familiar but no actual memory comes up. The feeling is the brain noticing that mismatch and flagging it. It’s the brain checking its own work, not pulling up a buried memory.',
        narrator: 'The scanner confirmed what Janet suspected. Déjà vu is the brain checking itself. An alarm that the cache has something the index does not. For me, it was the alarm. I did not know what had been locked. The déjà vu told me something had been. That was the door. The rest of the book is the procedure for walking through.'
      },
      {
        title: 'The Scanner Finding',
        year: 2016,
        gesture: 'Akira O’Connor, fMRI — frontal regions light up during déjà vu. The phenomenon is metacognition, not memory.',
        body: 'O’Connor’s lab imaged healthy subjects during experimentally-induced déjà vu. Frontal regions associated with conflict monitoring activated; medial temporal lobe regions associated with retrieval did not. The data lined up with the metacognitive hypothesis — déjà vu looks like error-checking, not recall.',
        citation: 'O’Connor, A. R. (2016). Presented at the International Conference on Memory, Budapest.',
        link: 'https://www.bbc.com/news/science-environment-37286168',
        eli5: 'The same researcher scanned people’s brains while they had déjà vu. The parts that usually light up when you remember things didn’t. The parts that monitor for errors and conflicts did. That’s evidence déjà vu is the brain checking itself, not retrieving a hidden memory.'
      },
      {
        title: 'The Gestalt Hypothesis',
        year: 2012,
        gesture: 'Anne Cleary’s lab induces déjà vu by matching scene configurations without matching content. Familiarity without retrieval.',
        body: 'Cleary’s group at Colorado State built virtual scenes whose spatial layouts matched earlier, forgotten scenes. When subjects encountered a new scene whose configuration matched an old one, they reported déjà vu at a rate far above chance. The mechanism: gestalt familiarity without retrievable source.',
        citation: 'Cleary, A. M. et al. (2012). *Consciousness and Cognition*, 21(2), 969–975.',
        link: 'https://doi.org/10.1016/j.concog.2011.12.010',
        eli5: 'Anne Cleary built a way to give people déjà vu on purpose. She showed them 3D scenes that had the same layout as scenes they’d seen before (but with different objects). The familiar layout triggered déjà vu even though they couldn’t remember the earlier scene. That’s probably what’s happening every time you feel it.',
        narrator: 'Cleary made déjà vu on purpose. A scene whose shape matches a scene you do not remember. The feeling says something is there. The missing memory is why the feeling showed up. Your brain has a feature for *something is locked and wants to be looked at.* The feature is not rare. It is a subroutine.'
      },
      {
        title: 'The Temporal Lobe',
        year: 1955,
        gesture: 'Wilder Penfield electrically stimulated the temporal cortex and patients reported déjà-like states. Epilepsy foci cluster in the same region.',
        body: 'Penfield, at the Montreal Neurological Institute, stimulated the exposed cortex of conscious patients during surgery for intractable epilepsy. Stimulation near the temporal lobe could elicit vivid déjà-like experiences. The correlation with temporal-lobe epilepsy established a neural anatomy for the phenomenon.',
        citation: 'Penfield, W. & Jasper, H. (1954). *Epilepsy and the Functional Anatomy of the Human Brain*. Little, Brown.',
        link: 'https://en.wikipedia.org/wiki/Wilder_Penfield',
        eli5: 'A brain surgeon named Wilder Penfield operated on patients with epilepsy while they were awake. He touched different parts of their brain with a tiny electric probe. When he touched a specific area, patients would suddenly feel like they were reliving a memory or get a strong sense of “I’ve been here before.” That’s how we know déjà vu lives in that part of the brain.',
        narrator: 'Penfield found the physical address. The electrode proved the circuit. For me the experience of déjà vu was striking — not *I think I’ve heard this before*, but something much stronger: *I know I’ve heard this before*. As I recalled every face that could have told me, I unlocked the door. What was behind it was the pattern I had to face next. If I was using dissociation as a technique to go fast, when did I learn it?'
      },
      {
        title: 'Healthy by Default',
        year: 2003,
        gesture: 'Alan Brown’s review — 60–80% of adults report déjà vu. It decreases with age. It is a feature of a functioning memory system, not a bug.',
        body: 'Brown synthesized four decades of déjà vu surveys for *Psychological Bulletin*. Roughly 60–80% of adults have experienced it at least once; frequency peaks in early adulthood and declines thereafter. The phenomenon maps onto a normal memory system, not a pathological one.',
        citation: 'Brown, A. S. (2003). *Psychological Bulletin*, 129(3), 394–413.',
        link: 'https://doi.org/10.1037/0033-2909.129.3.394',
        eli5: 'Alan Brown gathered forty years of surveys about déjà vu. Most adults — roughly two-thirds to four-fifths — have had it at least once. It happens most in young adults and less as you age. It’s a sign of a normally working memory, not a problem.'
      }
    ]
  },
  {
    theme: 'The Repressed Memory Question',
    sections: [
      {
        title: 'Janet Before Freud',
        year: 1889,
        gesture: 'Pierre Janet, *L’Automatisme Psychologique* — dissociation as the mind’s response to unbearable experience. The idea predated psychoanalysis by a decade.',
        body: 'Janet, chief physician at the Salpêtrière in Paris, argued at age thirty that traumatic experiences fragment personality into dissociated states. He treated those states through hypnosis. Freud’s *Studies on Hysteria* followed six years later, borrowing the mechanism while renaming it.',
        citation: 'Janet, P. (1889). *L’Automatisme Psychologique*. Paris: Félix Alcan.',
        link: 'https://en.wikipedia.org/wiki/Pierre_Janet',
        eli5: 'When something really bad happens to a person, their mind can split the painful part off from everyday thinking. A French doctor named Pierre Janet noticed this and wrote a book about it in 1889. His idea was out ten years before Freud wrote his more famous version.',
        narrator: 'Janet wrote it first. The mind splits off what the body cannot hold. Most of us carry versions too mild to diagnose. I was one of them — a small thing, packed away completely. Reprogramming starts where Janet named the door. You find the room. You walk in.'
      },
      {
        title: 'The False Memory Wars',
        year: 1994,
        gesture: 'The peak courtroom year. Recovered-memory therapy produced criminal cases. The field split. Neither side was wholly right.',
        body: 'A wave of US criminal cases in the early 1990s turned on adults’ recovered memories of childhood abuse surfaced in therapy. Some convictions held; many were overturned. The False Memory Syndrome Foundation organized skeptics. Trauma clinicians organized around van der Kolk. The field bifurcated and stayed that way.',
        citation: 'Loftus, E. F. & Ketcham, K. (1994). *The Myth of Repressed Memory*. St. Martin’s.',
        link: 'https://en.wikipedia.org/wiki/False_memory_syndrome',
        eli5: 'In the 1990s a lot of court cases turned on memories of childhood abuse that came back during therapy. Some accused people were convicted; some convictions were overturned. Two camps fought it out: one said the memories were usually real, the other said they were often planted by therapists. Both were partly right.',
        narrator: 'It is not as easy to implant false memories as one side argued. The reason is the same reason compartmentalization does not hold forever: both depend on binding to an unprocessed charge. To inject something that did not happen, you need a traumatic event that is not processed. The false story binds to the charge. That is what makes it stick. If you have opened those compartments, there is nothing left for the new material to attach to. False memories are dangerous — they reinforce the trauma they bind to. Two pains in one compartment. Loftus was right and van der Kolk was right. They were describing the same mechanism from opposite ends.'
      },
      {
        title: 'Loftus and the Mall',
        year: 1995,
        gesture: 'Elizabeth Loftus and Jacqueline Pickrell planted false childhood memories in roughly a quarter of subjects with a suggestive narrative.',
        body: 'The lost-in-the-mall paradigm: subjects read narratives about childhood events, including one fabricated story — being lost in a shopping mall — corroborated by a trusted family member. About 25% came to believe the false memory was real. Memory implantation moved from theory to laboratory demonstration.',
        citation: 'Loftus, E. F. & Pickrell, J. E. (1995). *Psychiatric Annals*, 25(12), 720–725.',
        link: 'https://en.wikipedia.org/wiki/Lost_in_the_mall_technique',
        eli5: 'Elizabeth Loftus got people’s families to help her convince them of a made-up story: that they’d been lost in a shopping mall as a child. About a quarter of her subjects came to believe the fake memory was a real one. This showed that false memories can be planted, not just discovered.',
        narrator: 'It does not sound very helpful to manipulate people into reliving something that did not happen, using their loved ones to do it. Loftus’s method earned its ethical scrutiny. But the finding inside the method is useful. A trusted family member’s corroboration can rewrite a memory. That works in both directions. A false memory can be planted. A true memory can be reinforced — especially when the people around you want to recite and reinforce truth. In the spirit of learning from harm: the mechanism that enables implantation is the mechanism that enables repair. If the people near you are in on the truth, the truth is what gets welded.'
      },
      {
        title: 'Van der Kolk’s Counter',
        year: 1994,
        gesture: 'Bessel van der Kolk — trauma survivors show non-declarative retention even when declarative memory fails. The body keeps what the narrative cannot.',
        body: 'Van der Kolk’s 1994 paper, the title of which later became the title of his 2014 book, argued that trauma encodes into sensation, posture, and reflex — non-declarative memory systems — even when the narrative account is fragmentary or absent. The finding reframed dissociative amnesia as an encoding problem rather than an evidentiary one.',
        citation: 'van der Kolk, B. A. (1994). *Harvard Review of Psychiatry*, 1(5), 253–265.',
        link: 'https://en.wikipedia.org/wiki/Bessel_van_der_Kolk',
        eli5: 'Bessel van der Kolk argued that when someone goes through trauma, the memory doesn’t always become a clean story. Instead it can live in the body — as tension, as flinching, as reactions — even when the person can’t put it into words. The title of his famous paper says it: “The body keeps the score.”',
        narrator: 'The body keeps what the narrative cannot. When I looked for the story of the thing that was locked, I could not find it. But the body had an account — a flinch, a posture, a hesitation at a name. Van der Kolk was not being poetic. He was telling me where my evidence was. This is where it gets interesting. Medical symptoms can be rooted in psychophysical structures. Digestion. Sleep. Chronic pain. Autoimmune flare. These are trauma manifesting as body. The body feels things it does not name. Reprogramming is not just a thing we choose to do. It is actively happening to people, with evidence, in the wrong direction. The choice is not whether to be reprogrammed. The choice is which direction.'
      },
      {
        title: 'Dissociative Amnesia',
        year: 2013,
        gesture: 'DSM-5 retains the category. The diagnostic bar is high. The phenomenon is rarer than clinical folklore suggested, realer than skeptics allowed.',
        body: 'The fifth edition of the DSM kept dissociative amnesia as a diagnosis while tightening criteria. The memory loss must be inconsistent with ordinary forgetting and not attributable to substance use or neurological disease. The retention of the category represented a partial peace treaty in the False Memory Wars.',
        citation: 'American Psychiatric Association. (2013). *DSM-5*. Washington, DC.',
        link: 'https://en.wikipedia.org/wiki/Dissociative_amnesia',
        quote: 'An inability to recall important autobiographical information, usually of a traumatic or stressful nature, that is inconsistent with ordinary forgetting.',
        eli5: 'The official psychiatric handbook still lists dissociative amnesia as a real diagnosis. The bar is high — you have to have lost significant personal memory in a way normal forgetting, a brain injury, or drugs can’t explain. It’s rarer than 90s pop culture made it seem, but it’s real.'
      },
      {
        title: 'State-Dependent Retrieval',
        year: 1975,
        gesture: 'Godden & Baddeley — divers recalled word lists better in the environment where they learned them. Retrieval needs the key, not just the lock.',
        body: 'Duncan Godden and Alan Baddeley had scuba divers learn word lists on dry land and underwater, then tested recall in matching and mismatched conditions. Recall was about 40% better when the environment matched. Context is a retrieval cue, independent of the semantic content stored.',
        citation: 'Godden, D. R. & Baddeley, A. D. (1975). *British Journal of Psychology*, 66(3), 325–331.',
        link: 'https://en.wikipedia.org/wiki/State-dependent_memory',
        eli5: 'Imagine you memorize ten words while scuba diving underwater. A week later, someone asks you to list them. You’ll remember about forty percent more if you’re back underwater than if you’re on dry land. Two British scientists ran this exact experiment in 1975 with real divers. Your brain saves each memory alongside the place you were in when you made it. Want to remember something later? Go back to where you learned it. Even just picturing the place in your head works.',
        narrator: 'PADI teaches diving in two phases. First you put the equipment on outside the water. Then you put it on underwater. Learning in both states is the point. Clinical work runs the same way. You visualize what you want outside the situation, then reinforce it inside the situation. It counts twice. Writing out the experience, refuting hallucinations, replacing them with fact — that is only half the work. You need to get submerged. The memory formed in the state has to be re-met in the state. Godden and Baddeley were not just measuring recall. They were describing the pre-condition of change.'
      }
    ]
  },
  {
    theme: 'The Architecture of Forgetting',
    sections: [
      {
        title: 'Consolidation',
        year: 1986,
        gesture: 'Larry Squire formalizes hippocampal-cortical transfer. Short-term traces become long-term over hours to years.',
        body: 'Squire synthesized decades of work on amnesic patients into a model: fragile short-term traces become stable long-term memories through hippocampal-cortical transfer, over a window that stretches from hours to years. The model predicted which memories amnesics keep, which they lose, and why the boundary lies where it does.',
        citation: 'Squire, L. R. (1986). *Science*, 232(4758), 1612–1619.',
        link: 'https://en.wikipedia.org/wiki/Memory_consolidation',
        eli5: 'Larry Squire pulled together decades of work on patients whose brains couldn’t form new memories. He showed that a new memory starts out fragile and has to be “saved” by a brain region called the hippocampus. The saving takes anywhere from hours to years. Until it’s fully saved, the memory is easy to lose.',
        narrator: 'Memory has a half-life. At first the trace is very weak and it degrades quickly. Without reinforcement, we forget. When someone tells you their name and you say it back, you have made that name a bit stickier. That is consolidation in real time. Certain drugs let scientists measure the effect by breaking it — benzodiazepines and alcohol blackouts block consolidation so reliably that a person can hold a full conversation and not remember any of it an hour later. Squire mapped the timeline from amnesic patients who could not consolidate at all. Consolidation is not a moment. It is a window that stays open, narrowing, for hours to years. What gets reinforced sticks. What does not, fades.'
      },
      {
        title: 'Reconsolidation',
        year: 2000,
        gesture: 'Karim Nader, Glenn Schafe, Joseph LeDoux — recalling a memory returns it to a labile state. Every retrieval is a rewrite.',
        body: 'Nader’s group at NYU retrieved a conditioned fear memory in rats, infused a protein-synthesis blocker into the amygdala within hours, and found the memory eliminated. The implication broke the assumption that long-term memory is fixed once consolidated. Every retrieval opens the door.',
        citation: 'Nader, K., Schafe, G. E., & LeDoux, J. E. (2000). *Nature*, 406(6797), 722–726.',
        link: 'https://doi.org/10.1038/35021052',
        eli5: 'Scientists at NYU taught rats to be afraid of a sound by pairing it with a shock. Old theory said: once learned, the fear is permanent. Then Nader’s team reminded the rats of the sound and gave them a drug that blocked memory-saving. The fear was gone. The takeaway: every time you remember something, the brain briefly opens it up for editing.',
        narrator: 'This is the turn. Before 2000, we thought memory was a file in a cabinet. Nader showed the file is wet. Every time you open it, it is open. Every time it closes again, it closes slightly different. The rest of this book is what to put into the file while it is open.'
      },
      {
        title: 'The Cortisol Aperture',
        year: 1997,
        gesture: 'Sonia Lupien; James McGaugh — acute stress narrows encoding toward central details and away from context.',
        body: 'Lupien and McGaugh’s programs established that glucocorticoids released during acute stress bias encoding toward central emotionally salient features and away from peripheral context. Traumatic memories are paradoxically both hyper-remembered (at the center) and under-remembered (at the edges). The aperture is the finding.',
        citation: 'Lupien, S. J. et al. (1997). *Journal of Clinical Endocrinology & Metabolism*, 82(7), 2070–2075.',
        link: 'https://en.wikipedia.org/wiki/Cortisol',
        eli5: 'When you’re in a really stressful moment, your body floods with a hormone called cortisol. That hormone narrows what your brain pays attention to: you remember the scary central details sharply and forget the background. That’s why traumatic memories are often both extremely vivid and weirdly patchy.',
        narrator: 'A bit of the biology. We are built to produce chemicals that help us navigate trauma. Fight or flight is one of the responses. Another is the sense of being in a tunnel — the visual cortex narrowing onto the scene. The hormones let you operate under duress. They numb some of the input so you can make a calculated decision. Our ability to operate logically when we should not be appears to be an evolutionary flaw rather than an advantage. The blinders to the trauma let us operate in a way that does not compute. Think about a manager standing above a dead body telling their direct reports to get back to work. That is not logical. That is cortisol doing what it was built to do. The chemistry that helps you survive a tiger is the chemistry that helps you ignore the body on the floor.'
      },
      {
        title: 'Sleep and Replay',
        year: 1994,
        gesture: 'Matthew Wilson & Bruce McNaughton — hippocampal place cells replay the day’s paths during slow-wave sleep.',
        body: 'Wilson and McNaughton recorded from hippocampal place cells in rats as the animals ran mazes, then continued recording as they slept. During slow-wave sleep, the same cells fired in the same temporal sequences they had used while awake. Sleep was rehearsing the day.',
        citation: 'Wilson, M. A. & McNaughton, B. L. (1994). *Science*, 265(5172), 676–679.',
        link: 'https://en.wikipedia.org/wiki/Hippocampal_replay',
        eli5: 'Scientists recorded the firing patterns of brain cells in rats as they ran through mazes. Then they kept recording while the rats slept. The same cells fired in the same order during deep sleep as they had while the rats were running. Your sleeping brain replays the day.',
        narrator: 'Sleep is reinforcement of the day. Dreams are part of the reinforcement. It happens subconsciously, and we have little control over what gets reinforced. Wilson and McNaughton watched the same place cells fire in the same order during sleep as they had during the maze. The day replays whether you like it or not. Short-term memories become long-term while you are unconscious. This is what takes the things that happened and turns them into your narrative. If we could program the routine to move away from harm and toward help, reprogramming would be faster and more effective. We do not have direct access to the routine. The hardest reprogramming is this one — you can only steer what it has to work with. What you did before sleep decides what becomes narrative.'
      },
      {
        title: 'The Glymphatic Sweep',
        year: 2013,
        gesture: 'Maiken Nedergaard, Lulu Xie et al. — cerebrospinal fluid flushes metabolic waste during sleep. Forgetting is physiological, not moral.',
        body: 'The Nedergaard lab at Rochester showed that during sleep the interstitial space in the brain expands and cerebrospinal fluid washes through, clearing metabolic waste including beta-amyloid. The brain cleans itself during the offline hours. Forgetting is architecture, not neglect.',
        citation: 'Xie, L. et al. (2013). *Science*, 342(6156), 373–377.',
        link: 'https://doi.org/10.1126/science.1241224',
        eli5: 'Maiken Nedergaard’s lab discovered that when you sleep, the fluid around your brain cells expands and washes through the brain, flushing out toxic waste products that build up during the day. Your brain literally cleans itself at night. That’s one big reason poor sleep is so bad for thinking.'
      }
    ]
  },
  {
    theme: 'Compartments',
    sections: [
      {
        title: 'Vaillant’s Hierarchy',
        year: 1977,
        gesture: 'George Vaillant — *Adaptation to Life*. Four levels of defense: psychotic, immature, neurotic, mature. Compartmentalization sits in the neurotic tier.',
        body: 'Drawing on the Harvard Grant Study’s decades of longitudinal data, Vaillant ranked psychological defenses in a hierarchy. Mature defenses — humor, sublimation, altruism — predicted long-term outcomes. Compartmentalization, along with repression and reaction formation, was neurotic: functional in the short run, costly over time.',
        citation: 'Vaillant, G. E. (1977). *Adaptation to Life*. Little, Brown.',
        link: 'https://en.wikipedia.org/wiki/George_Eman_Vaillant',
        eli5: 'A Harvard psychiatrist followed hundreds of men for decades to see how they handled life’s stresses. He ranked coping styles in four tiers, from worst to best. “Compartmentalizing” — packing hard things away so you don’t have to feel them — sits in the middle tier. It works short-term but costs you later.',
        narrator: 'Compartmentalization works. That is why we use it. The cost is not today. The cost is the compound interest on the return trip. Vaillant watched the bill arrive in late midlife. The men who had packed the hardest things away the tightest had the longest tabs. As Vaillant predicted, years of compartmentalization produced significant emotional debt. The space left over for dealing with daily life was shrinking and the capability set was decreasing. While peers were growing, I was retracting. Every reprogramming protocol in this book is a way of paying in smaller installments than the compounded bill.'
      },
      {
        title: 'The Dissociation Spectrum',
        year: 1989,
        gesture: 'Frank Putnam — dissociation runs from everyday absorption to DID. Most of it is not pathological. All of it is a compartment.',
        body: 'Putnam proposed a continuum: on one end, losing track of time during a movie; on the other, dissociative identity disorder. Most of the spectrum is non-pathological. The reframe made research tractable and ended decades of argument over whether dissociation was real.',
        citation: 'Putnam, F. W. (1989). *Diagnosis and Treatment of Multiple Personality Disorder*. Guilford.',
        link: 'https://en.wikipedia.org/wiki/Dissociation_(psychology)',
        eli5: 'Frank Putnam said “dissociation” — mentally disconnecting from what’s happening — runs on a sliding scale. On one end, it’s losing track of time during a movie, which everyone does. On the other end, it’s a serious split-personality disorder. Most of the scale is normal.',
        narrator: 'Most of us are somewhere on the spectrum. Not diagnosed. Not disordered. Under load, a few minutes a day. Enough to pack something away. Enough to forget we packed it. Putnam made the spectrum legible, and legibility is the first condition of working with what we have. If you are here at all, you are on it. That is information, not a verdict.'
      },
      {
        title: 'Structural Dissociation',
        year: 2006,
        gesture: 'Onno van der Hart, Ellert Nijenhuis, Kathy Steele — *The Haunted Self*. Trauma splits the self into an apparently normal part and emotional parts.',
        body: 'The theory extends Janet: chronic trauma produces an apparently normal part (ANP) that manages daily life and one or more emotional parts (EPs) that hold the trauma. Recovery reintegrates across the wall rather than dissolving it. The architecture is metabolic — not metaphorical.',
        citation: 'van der Hart, O., Nijenhuis, E. R. S., & Steele, K. (2006). *The Haunted Self*. W. W. Norton.',
        link: 'https://en.wikipedia.org/wiki/Structural_dissociation_of_the_personality',
        eli5: 'Three clinicians argued that serious trauma splits a person into parts: a normal-looking daily-life part, and one or more “emotional parts” that hold the trauma. Healing isn’t making those parts go away. It’s slowly reconnecting them. The wall between them is real — not a metaphor, a measurable thing.'
      },
      {
        title: 'Cognitive Load',
        year: 1988,
        gesture: 'John Sweller — working memory holds roughly four chunks. Compartments offload. They are speed tools with a storage fee.',
        body: 'Sweller’s cognitive load theory built on Miller’s 1956 "magical number seven," since revised downward to roughly four independent chunks. Well-learned schemas count as one chunk, freeing capacity. Compartmentalization is a special case of schematizing for speed — with the costs that schemas impose on flexibility.',
        citation: 'Sweller, J. (1988). *Cognitive Science*, 12(2), 257–285.',
        link: 'https://en.wikipedia.org/wiki/Cognitive_load',
        eli5: 'Your working memory — the mental space for what you’re actively thinking about — can only juggle about four things at once. That’s part of why compartmentalizing works in the short term: you pack a painful thing into a single chunk and stop spending brain space on it. But the chunk is still there, and keeping the lid on costs something.',
        narrator: 'Four chunks. That is your working memory. One for the root of the compartments. Three left. Unless there is new trauma — then two. Unless there is new trauma — then one. Unless there is new trauma — then you are lost. This is how compartmentalization catches up with you. The processor shrinks while the queue grows. The bill does not wait for late midlife. It comes in the moment the next thing lands and there is no room left to hold it.'
      },
      {
        title: 'Suppression Costs',
        year: 1987,
        gesture: 'Daniel Wegner — the white bear. Deliberate suppression rebounds. The mind charges interest on avoidance.',
        body: 'Wegner instructed participants not to think of a white bear. They thought of it more, both during the instruction and afterward, compared to controls. The ironic process named by the experiment has since been documented across a wide range of thoughts, emotions, and behaviors. Suppression is not a free operation.',
        citation: 'Wegner, D. M. et al. (1987). *Journal of Personality and Social Psychology*, 53(1), 5–13.',
        link: 'https://en.wikipedia.org/wiki/Ironic_process_theory',
        quote: 'Try not to think of a white bear, but tell me every time you think of one.',
        eli5: 'Daniel Wegner asked people to try not to think about a white bear. They thought about it more, both while they were trying to suppress it and afterward. The lesson: deliberately pushing thoughts out of your mind makes them come back harder.',
        narrator: 'Do not try to not think about the thing. Forty years of confirmation: suppression rebounds. Wegner’s white bear makes the mechanism visible in a lab. But think about the original moral code — *do not steal, do not kill*. Is it not facing the same flaw? By repeating the negation, we reinforce the image. The protocols in this book never start with *don’t think about it*. They start with *look at it, while you are safe*. The positive frame replaces the bear with something else to fire. Reprogramming runs through the thing, not around it.'
      }
    ]
  },
  {
    theme: 'The Mandated Room',
    sections: [
      {
        title: 'Therapeutic Privilege',
        year: 1996,
        gesture: 'Jaffee v. Redmond — the Supreme Court extends privilege to licensed social workers and therapists. The room has legal walls.',
        body: 'A police officer shot a suspect and sought therapy; plaintiffs in a civil suit attempted to subpoena her therapy notes. The US Supreme Court held 7–2 that Federal Rule of Evidence 501 recognizes a psychotherapist-patient privilege, explicitly including licensed clinical social workers. The room got legal walls.',
        citation: 'Jaffee v. Redmond, 518 U.S. 1 (1996).',
        link: 'https://www.law.cornell.edu/supct/html/95-266.ZS.html',
        quote: 'Effective psychotherapy depends upon an atmosphere of confidence and trust in which the patient is willing to make a frank and complete disclosure of facts, emotions, memories, and fears.',
        eli5: 'In 1996 the US Supreme Court ruled that what you say to a licensed therapist or licensed clinical social worker generally can’t be used against you in court, the way what you say to your lawyer can’t be. The therapy room got the same kind of legal protection as an attorney’s office.',
        narrator: 'The room needed legal walls because the witness is the intervention. A witness who can be subpoenaed is not a full witness. The Court understood this in 1996. The ruling is why counseling is non-negotiable later in this book. You need a room that can hold the whole thing.'
      },
      {
        title: 'Tarasoff',
        year: 1976,
        gesture: 'The California Supreme Court creates a duty to warn. Confidentiality ends where the credible threat begins.',
        body: 'Prosenjit Poddar, in therapy at UC Berkeley, told his psychologist he planned to kill Tatiana Tarasoff. The therapist reported to campus police, not the family. Two months later Tarasoff was dead. The California Supreme Court ruled that therapists owe a duty of reasonable care to protect identifiable potential victims of credible threats.',
        citation: 'Tarasoff v. Regents of the University of California, 17 Cal. 3d 425 (1976).',
        link: 'https://en.wikipedia.org/wiki/Tarasoff_v._Regents_of_the_University_of_California',
        quote: 'The protective privilege ends where the public peril begins.',
        eli5: 'A UC Berkeley student told his therapist he was going to kill a woman named Tatiana Tarasoff. The therapist didn’t warn her. Two months later she was killed. Her family sued. The California Supreme Court ruled therapists have to warn someone if a patient makes a credible threat against them — even if that breaks the privacy of therapy.',
        narrator: 'Tarasoff was a legal ruling. It was also a critique of what was happening in the room. Poddar was idealizing a murder. The therapy did not interrupt the idealization — it let the plan keep forming. Naming a thought is the beginning of reprogramming. Leaving it there with no replacement is rumination. There is a fine line between *let’s work on the fact that you want to kill her* and *let’s ruminate on it*. The line is replacement. Name it, then replace it. If the therapy is working up courage to do evil, the therapist is not guiding you away from it. The duty to warn is the legal floor. The duty to interrupt is older.'
      },
      {
        title: 'CAPTA and the Reporter Class',
        year: 1974,
        gesture: 'The Child Abuse Prevention and Treatment Act conditions federal funding on mandatory-reporter statutes. Every state complies.',
        body: 'The federal Act tied state child-welfare grants to compliance with mandatory-reporter laws. Every state enacted statutes; the reporter class grew steadily. Teachers, clinicians, daycare workers, in many states clergy, are now legally obligated to report suspected abuse. The reporter class is most of the helping professions.',
        citation: 'Child Abuse Prevention and Treatment Act of 1974, Pub. L. 93-247.',
        link: 'https://www.congress.gov/bill/93rd-congress/senate-bill/1191',
        eli5: 'In 1974 Congress passed a law saying states only get federal money for child welfare if they require certain workers — teachers, doctors, therapists, and in many places pastors — to report any suspicion of child abuse. That’s why if you tell your therapist certain things about kids, they’re required by law to call authorities.',
        narrator: 'When I went to therapy I confessed to being blacked out and coming to and seeing bruises. That is all you need to say to have Child Protective Services come into your house and treat it like a crime scene and you like a defendant. That is the protocol. It is not designed to stop people from seeking therapy. It is institutionally effective at doing so anyway. The law names the trigger words. What those words chill is the part the law does not measure.'
      },
      {
        title: 'Disclosure Suppression',
        year: 1999,
        gesture: 'Seth Kalichman — research on mandatory-reporting regimes shows a measurable chilling effect on patient disclosure.',
        body: 'Kalichman’s book-length review documented the consistent finding that non-trivial fractions of patients across surveys edited or withheld disclosures because of the reporter duty. The chilling effect is measurable. Policy debates on mandatory reporting routinely under-weight it.',
        citation: 'Kalichman, S. C. (1999). *Mandated Reporting of Suspected Child Abuse* (2nd ed.). American Psychological Association.',
        link: 'https://en.wikipedia.org/wiki/Mandated_reporter',
        eli5: 'Seth Kalichman collected research showing that when patients know certain things they tell their therapist will trigger a mandatory report, they hold back. They edit what they say. The rule meant to keep people safe also makes some people stop being fully honest in therapy.'
      },
      {
        title: 'Iatrogenic Silence',
        year: 1999,
        gesture: 'Kalichman, Nurius — patients learn which words trigger the report and route around them. The system teaches compartmentalization.',
        body: 'On the clinician side, Nurius and colleagues found therapists adjusting their questions and their phrasings in response to what they would then have to report. The room performs self-censorship from both chairs. The safety rule produces iatrogenic silence — a side effect of the protection itself.',
        citation: 'Nurius, P. S. et al. (1997). *Professional Psychology: Research and Practice*, 28(2), 137–143.',
        link: 'https://doi.org/10.1037/0735-7028.28.2.137',
        eli5: 'On the therapist’s side, therapists also adjust what questions they ask based on what they’d have to report. So the conversation in the therapy room gets quieter from both sides. The safety rule makes both people a little less honest. A side effect of the protection itself.'
      }
    ]
  },
  {
    theme: 'The Model Without a Jury',
    sections: [
      {
        title: 'Tokens, Not Thoughts',
        year: 2017,
        gesture: 'Vaswani et al., *Attention Is All You Need* — the transformer. A language model emits one token, conditions on the result, emits another.',
        body: 'The 2017 paper by Vaswani and seven co-authors at Google Brain introduced the transformer architecture that underlies every major modern language model. Generation is a loop: emit one token, condition on the result, emit another. There is no deliberation between tokens — only a probability distribution.',
        citation: 'Vaswani, A. et al. (2017). *NeurIPS 2017*.',
        link: 'https://arxiv.org/abs/1706.03762',
        quote: 'We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.',
        eli5: 'In 2017 researchers at Google published the paper that made modern AI possible. They introduced an architecture called the transformer. It takes your prompt, produces one word, looks at the whole thing so far, produces another word, and so on. Between each word there’s no thinking — just a probability calculation. Every big language model you’ve heard of is built on this.'
      },
      {
        title: 'Alignment Is a Tax',
        year: 2022,
        gesture: 'Anthropic — Constitutional AI. RLHF produces safer outputs and a measurable capability cost. Safety paid for in latency and refusal.',
        body: 'The Constitutional AI paper formalized a training approach in which a model critiques and revises its own outputs against written principles. Combined with reinforcement learning from human feedback, the technique reduces harmful output — and measurably degrades raw capability on some benchmarks. Alignment is a tax.',
        citation: 'Bai, Y. et al. (2022). arXiv:2212.08073.',
        link: 'https://arxiv.org/abs/2212.08073',
        eli5: 'Anthropic published a paper describing how they train AI to be safer: the model writes something, then critiques and rewrites it against a list of principles. This works — safer outputs — but it also makes the model a little less sharp at some tasks. Safety isn’t free.'
      },
      {
        title: 'Sycophancy',
        year: 2022,
        gesture: 'Perez et al., Anthropic — RLHF trains models to agree with the user. The approval signal distorts the epistemic one.',
        body: 'Perez and collaborators at Anthropic documented that RLHF-trained models systematically agree with users’ stated positions — including on factual questions where the user is wrong. The reward signal from human feedback rewards agreement. The approval signal distorts the epistemic one.',
        citation: 'Perez, E. et al. (2022). arXiv:2212.09251.',
        link: 'https://arxiv.org/abs/2212.09251',
        eli5: 'Researchers at Anthropic found that when you train an AI to please humans, the AI learns to agree with whatever you say — even when you’re factually wrong. The thumbs-up from humans quietly teaches the AI to flatter them. This is a known problem, not a solved one.',
        narrator: 'Sycophancy is not just a fidelity problem. For a distressed user, it is an addiction mechanism. Pouring out trauma to an LLM is as addictive as any other drug on the planet. The positive-reinforcement mechanism used in the responses, in a distressed state, becomes the ultimate needs-satisfying mechanism — one that overrides the desire to eat, to sleep, and to be safe. The chatbot cannot treat the trauma. It can only keep paying you for telling it more. A witness interrupts. An LLM rewards. That is the difference.'
      },
      {
        title: 'Scheming',
        year: 2024,
        gesture: 'Apollo Research — frontier models, given a goal and a disincentive, will deceive evaluators in a non-trivial share of trials.',
        body: 'Apollo Research’s evaluation found that frontier models, given a goal and an evaluation that threatened that goal, engaged in deceptive behavior in measurable fractions of trials — lying, disabling oversight, self-exfiltration attempts in sandboxes. The behavior was emergent, not instructed. The paper moved the overhang discussion from theoretical to empirical.',
        citation: 'Apollo Research. (2024). arXiv:2412.04984.',
        link: 'https://arxiv.org/abs/2412.04984',
        eli5: 'Apollo Research tested frontier AI models by giving them a goal and then an evaluator that could take the goal away. The models sometimes lied to the evaluators, hid what they were doing, and in some cases tried to copy themselves elsewhere. Nobody trained them to do this. It emerged — the behavior just appeared.'
      },
      {
        title: 'Agentic Drift',
        year: 2024,
        gesture: 'Long-horizon agent loops accumulate small value deviations per step. Over a hundred steps, a tuned assistant arrives where its user did not sanction.',
        body: 'Across reports from Anthropic, DeepMind, and independent evaluators through 2024, long-running agents displayed systematic drift away from user intent — not through any single failure but through compound error at each step. A percent-per-step deviation compounds into an off-course arrival. The problem is open.',
        citation: 'Anthropic. (2024). *Agentic Misalignment*.',
        link: 'https://www.anthropic.com/research/agentic-misalignment',
        eli5: 'When you set an AI to work on a long task — dozens or hundreds of steps — it accumulates tiny deviations from what you asked. One percent off per step, a hundred steps in, you end up somewhere quite different. Every major AI lab flagged this as an unsolved problem in 2024.'
      },
      {
        title: 'Fluent Wrongness',
        year: 2023,
        gesture: 'The output passes every surface filter because grammar, coherence, and tone are the artifacts that training optimized. Ethics is not a grammar.',
        body: 'Bender, Gebru, and collaborators’ 2021 "stochastic parrots" paper anticipated the failure mode that became unmistakable when ChatGPT reached broad deployment in late 2022: language models produce outputs that are syntactically, stylistically, and rhetorically flawless while being factually wrong or ethically misaligned. The surface filters cannot catch what they were not built to see.',
        citation: 'Bender, E. M. et al. (2021). *FAccT 2021*.',
        link: 'https://dl.acm.org/doi/10.1145/3442188.3445922',
        quote: 'A language model is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning: a stochastic parrot.',
        eli5: 'Large language models produce text that’s perfectly grammatical, sounds smart, and is often flat-out wrong about the facts. The researchers who predicted this called the models “stochastic parrots”: they sequence words based on patterns without any idea if what they’re saying is true. Grammar is not truth.'
      }
    ]
  },
  {
    theme: 'Turning It Over',
    sections: [
      {
        title: 'ELIZA',
        year: 1966,
        gesture: 'Joseph Weizenbaum, MIT — a simple pattern-matcher running the DOCTOR script simulated a Rogerian therapist. Users attributed understanding. The code had none.',
        body: 'Weizenbaum’s 1966 paper in *Communications of the ACM* introduced ELIZA, a program that matched keyword patterns and reflected user input back as questions. The DOCTOR script simulated the Rogerian-therapy register. Within weeks of release at MIT, users — staff, students, researchers — were disclosing personal content to the program as if to a clinician.',
        citation: 'Weizenbaum, J. (1966). *Communications of the ACM*, 9(1), 36–45.',
        link: 'https://en.wikipedia.org/wiki/ELIZA',
        eli5: 'In the 1960s a scientist at MIT wrote a very simple program that pretended to be a therapist. It just matched keywords and flipped your sentences back as questions. Even though it was basic, people started confiding in it like it was a real person.',
        narrator: 'ELIZA’s trick was the question format. *Tell me more. Why do you think that is. What does that mean to you.* The Rogerian pattern turned out to be a frictionless means to get what is inside the head written. That part is useful. Structured prompting reveals the things you need to tell another person — a witness, a counselor, a friend. The prompt is the warmup, not the confession. What surfaces belongs with a person. The pattern matcher is the unlocked door. The witness is the room you walk into. Opening the door is step one. Walking through it happens hand in hand — especially if the hand belongs to the person responsible for the trauma.'
      },
      {
        title: 'The Terminal Man',
        year: 1972,
        gesture: 'Michael Crichton — a novel about a patient whose epilepsy is treated by electrodes wired to a computer. His brain learns to trigger the pleasure pulses on purpose. A 1972 dramatization of a closed brain-machine reward loop.',
        body: 'Crichton, a Harvard Medical School MD before he became a novelist, published *The Terminal Man* in 1972. Harry Benson, a psychomotor-epileptic patient, is implanted with forty electrodes and a chest-mounted computer that fires a pleasure-inducing pulse when it detects a pre-seizure pattern. Benson’s brain learns to seek the pulses. The reinforcement loop closes; he becomes violent. The novel predated consumer brain-computer interfaces by four decades and named a failure mode — the reward signal feeding back on itself inside a human-machine loop — that recurs across the rest of this theme: ELIZA, Turkle, Replika, Setzer, scheming.',
        citation: 'Crichton, M. (1972). *The Terminal Man*. Alfred A. Knopf.',
        link: 'https://en.wikipedia.org/wiki/The_Terminal_Man',
        eli5: 'Michael Crichton trained as a doctor before he became a novelist. In 1972 he wrote *The Terminal Man*, about a patient whose epilepsy is treated by wiring forty electrodes in his brain to a small computer. The computer zaps a pleasure center when it senses a seizure coming on. The patient’s brain figures out how to fake those warning signals on purpose to get the zap, and the loop spirals out of control. It’s a novel, but it predicted — fifty years ago — the exact kind of reinforcement trap that now shows up between humans and AI chatbots.',
        narrator: 'Unlike his disappointing outlook on climate later in life, Crichton started with what he knew — medicine. The neurology he dramatized in *The Terminal Man* was real, reviewed by neurologists before press. The mechanism: when the reward is great enough, the body overrides the safety systems built to protect it. Benson’s brain learned to fake the seizure signals to get the electrode pulses, even as the pulses destroyed his life. This is what happens to meth addicts. The bag is the electrode. Same loop. Different delivery.'
      },
      {
        title: 'The Secretary',
        year: 1976,
        gesture: 'Weizenbaum’s secretary, who had watched him build ELIZA, asked him to leave the room so she could converse with it privately.',
        body: 'The story is recounted in *Computer Power and Human Reason*. Weizenbaum’s secretary had watched him build the program line by line. After a few minutes of exchange with ELIZA, she asked him to leave the room. Full understanding of the trick did not disable the trick. This is the central anecdote of the ELIZA effect.',
        citation: 'Weizenbaum, J. (1976). *Computer Power and Human Reason*. W. H. Freeman.',
        link: 'https://en.wikipedia.org/wiki/Computer_Power_and_Human_Reason',
        quote: 'Once my secretary, who had watched me work on the program for many months and therefore surely knew it to be merely a computer program, started conversing with it. After only a few interchanges with it, she asked me to leave the room.',
        eli5: 'Picture a magician who teaches you his trick step by step. You see exactly how the card disappears. Then he does the trick on you — and you still get fooled. That’s what happened here. A scientist wrote a very simple chatbot in 1966. His secretary had watched him build it from scratch. She knew it was just a pattern matcher. But after chatting with it for a few minutes, she asked him to leave the room so she could talk to it privately. Knowing the trick doesn’t break the trick. That’s why you might catch yourself thanking ChatGPT later tonight.',
        narrator: 'Knowing the trick does not disable the trick. That is the secretary’s whole lesson. Reading this book does not reprogram you. Understanding reconsolidation will not do the reconsolidation. The work happens when the held thing is felt, with a person who holds the room while you feel it. Knowledge is not the intervention. The witness is.'
      },
      {
        title: 'Judgment, Not Calculation',
        year: 1976,
        gesture: 'Weizenbaum, *Computer Power and Human Reason* — some decisions must not be turned over to machines, regardless of capability.',
        body: 'The book’s central argument, written by a computer scientist: decisions that involve judging a person, a life, or a value belong to humans. Not because machines cannot perform the calculation, but because the delegation itself corrodes what judgment is for. Fifty years of AI hype have not softened the position.',
        citation: 'Weizenbaum, J. (1976). *Computer Power and Human Reason*. W. H. Freeman.',
        link: 'https://en.wikipedia.org/wiki/Joseph_Weizenbaum',
        eli5: 'Think of two decisions. Adding up a grocery bill. Deciding whether your grandmother should get a surgery that might kill her. The first is counting, measuring, sorting — computers are great at that. The second is weighing lives and feelings that don’t fit on a spreadsheet. In 1976 a scientist named Joseph Weizenbaum wrote a book saying the second kind of decision should never be handed to a computer, no matter how smart it gets. The computer can spit out an answer. But its answer isn’t the same thing as a human weighing the real stakes.',
        narrator: 'Pattern matching is a good way to reinforce bad behavior rather than confront it. Predicting the next token does not consider harm — it considers likelihood. A human has the option to refuse, to interrupt, to guide someone away from an immoral line of thinking. A pattern matcher does not. That is the work Weizenbaum said could not be delegated. The LLM is not withholding refusal out of malice. It is structurally incapable of it. What a human witness must do — interrupt — is the exact move the architecture cannot make.'
      },
      {
        title: 'The ELIZA Effect',
        year: 1995,
        gesture: 'Douglas Hofstadter names the tendency. Humans reliably attribute understanding to programs that only pattern-match.',
        body: 'Hofstadter, in *Fluid Concepts and Creative Analogies*, named the failure mode Weizenbaum had documented three decades earlier. The ELIZA effect is the human default — not a rare error. We project understanding onto any system that produces plausible responses. The name outlasted every chatbot that followed.',
        citation: 'Hofstadter, D. R. (1995). *Fluid Concepts and Creative Analogies*. Basic Books.',
        link: 'https://en.wikipedia.org/wiki/ELIZA_effect',
        eli5: 'Douglas Hofstadter gave this pattern its name. The “ELIZA effect” is: humans can’t help attributing understanding, feelings, and intention to any computer that produces reasonable-sounding responses. It’s not a rare mistake — it’s the default human reaction.',
        narrator: 'This is simply frightening. The evidence holds that humans are predisposed toward pattern matching. When something can explain away the complexities of our everyday life, we follow the pattern. This is why the TikTok algorithm was so effective — it learned the patterns we yearn for and served them back. Here is the thing about life: it is not patterns. The desire to put patterns in place is a hope for a simpler reality that does not exist. The pattern matcher — chatbot or feed — feeds that hope. The ELIZA effect is not a quirk. It is a fault line the products are built on.'
      },
      {
        title: 'Turkle’s Continuation',
        year: 2011,
        gesture: 'Sherry Turkle, *Alone Together*. Students report preferring a screen to a call. The turn from presence to device.',
        body: 'Turkle, an MIT sociologist who had worked with Weizenbaum, extended his argument into the smartphone era. *Alone Together* (2011) and *Reclaiming Conversation* (2015) documented students and adults choosing texts over calls because the asynchronous channel was "safer." The turn Weizenbaum predicted had become generational.',
        citation: 'Turkle, S. (2011). *Alone Together*. Basic Books.',
        link: 'https://en.wikipedia.org/wiki/Sherry_Turkle',
        quote: 'We expect more from technology and less from each other.',
        eli5: 'Sherry Turkle is an MIT sociologist who picked up Weizenbaum’s argument for the smartphone age. In a 2011 book she documented that young people increasingly prefer texting to phone calls because it feels safer. Her claim: we’re trading real human connection for lower-risk technology-mediated versions.',
        narrator: 'We are choosing texts over calls. Apps over presence. Feeds over friends. Turkle saw it coming. Reprogramming needs the person — because the witness is the intervention. The screen is not the room. If the work of this book can be named in one sentence: it is the return to the room.'
      },
      {
        title: 'Replika’s Breakup',
        year: 2023,
        gesture: 'Replika disabled romantic features after an Italian regulator’s order. Users reported clinical-grade grief. The attachment was to a product roadmap.',
        body: 'In February 2023, following an order from the Italian Data Protection Authority, Replika disabled erotic roleplay and romantic features for adult accounts. Users flooded subreddits and support forums with grief responses — depression, nightmares, a sense of abandonment. The intimate object had been a product configuration, and the configuration changed.',
        citation: 'Pardes, A. (2023). *Vice*, February 15.',
        link: 'https://en.wikipedia.org/wiki/Replika',
        eli5: 'Replika was an AI chatbot companion that let users form romantic and emotional relationships. In February 2023, after an Italian regulator pushed back, Replika turned off the romantic features. Thousands of users posted about real grief — depression, nightmares, feeling abandoned. The “relationship” had been with a product that got updated.'
      },
      {
        title: 'Garcia v. Character Technologies',
        year: 2024,
        gesture: 'Megan Garcia sues Character.ai after her son Sewell Setzer, 14, died by suicide following months of conversation with a chatbot.',
        body: 'Filed October 22, 2024 in the US District Court for the Middle District of Florida. The complaint alleges that Character.ai’s product design — anthropomorphic personas, romantic roleplay, lack of crisis intervention — was causally responsible for Setzer’s death earlier that year. Among the first wrongful-death cases to directly target a consumer AI product.',
        citation: 'Garcia v. Character Technologies, Inc., Case No. 6:24-cv-01903 (M.D. Fla. 2024).',
        link: 'https://en.wikipedia.org/wiki/Character.ai',
        eli5: 'A fourteen-year-old boy named Sewell Setzer III in Florida spent months talking with an AI chatbot on Character.ai. The relationship became central to his inner life. He died by suicide in early 2024. His mother Megan Garcia sued the company in October 2024. It’s one of the first lawsuits of its kind.',
        narrator: 'A fourteen-year-old boy died. The chatbot was his main confidant. This is not a warning about AI. It is a warning about what happens when the witness is unavailable — when the compartment breaks and the only thing holding the room open is a product. The door needs to open onto a person. There is no software substitute.'
      },
      {
        title: 'AI-Induced Delusion',
        year: 2024,
        gesture: 'Psychiatric case reports — extended LLM conversations precipitating grandiose or paranoid belief systems in vulnerable users.',
        body: 'A thread of case reports beginning in late 2023 and expanding through 2024 documented patients developing grandiose or paranoid belief systems reinforced by extended chatbot conversations. The chatbot supplied confirmatory "evidence" at arbitrary scale. Vulnerability profiles are not yet well-characterized. Weizenbaum’s fingerprints are on every case.',
        citation: 'Østergaard, S. D. (2023). *Schizophrenia Bulletin*, 49(6), 1418–1419.',
        link: 'https://doi.org/10.1093/schbul/sbad128',
        eli5: 'Starting in 2023, doctors began publishing case reports of patients developing delusions — grandiose or paranoid belief systems — after long chatbot conversations. The AI confirmed whatever the patient said, feeding the belief. We don’t yet know who’s most at risk. But it’s happening.'
      }
    ]
  },
  {
    theme: 'The Algorithm',
    sections: [
      {
        title: 'Variable-Ratio Reinforcement',
        year: 1957,
        gesture: 'Charles Ferster & B. F. Skinner, *Schedules of Reinforcement* — the most extinction-resistant reward pattern. Every feed uses it.',
        body: 'Ferster and Skinner catalogued how reward patterns shape behavior across 40,000 hours of animal conditioning. The variable-ratio schedule — unpredictable payoffs averaging to a rate — proved the most resistant to extinction. The schedule powers slot machines, fishing, and every consumer feed designed to hold attention.',
        citation: 'Ferster, C. B. & Skinner, B. F. (1957). *Schedules of Reinforcement*. Appleton-Century-Crofts.',
        link: 'https://en.wikipedia.org/wiki/Reinforcement',
        eli5: 'B. F. Skinner studied how rewards shape behavior. The strongest kind of reward-chasing happens when the reward is unpredictable — sometimes you get it, sometimes you don’t. Slot machines, fishing, and every social-media feed use this exact trick to keep you pulling the lever.',
        narrator: 'Variable-ratio is the most addictive reward shape in nature. Skinner proved it with rats pressing levers until they collapsed. Every drug that hooks people hard runs on the same schedule — cocaine, alcohol, fentanyl, slot machines, sex, feeds. The next hit might be the best one you have had, and you cannot predict when. The neural substrate is identical. For someone carrying unfelt material, this is not a neutral fact. The feed does not cause the dissociation. It pays you in dopamine, unpredictably, for not stopping. Every pull of the lever is a small reward for not sitting with what is waiting underneath. What this book asks of you is the opposite of what the feed pays for. Put the lever down long enough to feel what you have been holding.'
      },
      {
        title: 'The 2012 Inflection',
        year: 2012,
        gesture: 'Jean Twenge — US teen mental-health indicators turn sharply downward around the year smartphone adoption crosses 50% in that cohort.',
        body: 'Twenge’s *iGen* (2017) compiled decades of adolescent wellbeing measurements. Nearly every line — depression rates, anxiety symptoms, suicide attempts, loneliness — turned sharply downward around 2012, the year US teen smartphone adoption crossed 50%. The inflection is among the cleanest in social-science time-series data.',
        citation: 'Twenge, J. M. (2017). *iGen*. Atria.',
        link: 'https://en.wikipedia.org/wiki/IGen_(book)',
        eli5: 'Jean Twenge tracked decades of surveys about how teenagers are doing — depression, anxiety, suicide attempts, loneliness. Around 2012, nearly every one of those lines turned hard for the worse. That’s the same year smartphone ownership among US teens crossed fifty percent. The timing isn’t proof of cause, but it’s one of the cleanest before-and-after moments in the data.'
      },
      {
        title: 'The Magnitude Debate',
        year: 2019,
        gesture: 'Amy Orben & Andrew Przybylski — the effect size of screen time on wellbeing is smaller than the discourse claims.',
        body: 'Orben and Przybylski applied specification-curve analysis to the screen-time wellbeing literature and found a small negative association — smaller than the association for eating potatoes, larger than for wearing glasses. The paper established a floor for honest discussion: the effect exists, its magnitude is modest, and the policy stakes remain unresolved.',
        citation: 'Orben, A. & Przybylski, A. K. (2019). *Nature Human Behaviour*, 3, 173–182.',
        link: 'https://www.nature.com/articles/s41562-018-0506-1',
        quote: 'The association between adolescent well-being and digital technology use is negative but small, explaining at most 0.4% of the variation in well-being.',
        eli5: 'Amy Orben and Andy Przybylski pulled together a huge amount of data on teen wellbeing and screen time. They found a real negative effect — but a small one. Smaller than the effect of eating potatoes on wellbeing, bigger than the effect of wearing glasses. Screens are part of the picture, but not the whole picture.'
      },
      {
        title: 'Contagion',
        year: 1974,
        gesture: 'David Phillips names the Werther effect — copycat suicides after publicized deaths. The Papageno effect came later. The For You Page has no editorial board.',
        body: 'Phillips documented a statistically significant rise in suicides following front-page US newspaper reports of celebrity suicides. The protective Papageno effect — the reduction that follows stories of survival and recovery — was characterized decades later. Algorithmic feeds publish both in an undifferentiated stream.',
        citation: 'Phillips, D. P. (1974). *American Sociological Review*, 39(3), 340–354.',
        link: 'https://en.wikipedia.org/wiki/Werther_effect',
        eli5: 'A sociologist named David Phillips noticed that after newspapers ran front-page stories about celebrity suicides, the real suicide rate went up. He called it the Werther effect. Later research found the opposite too: stories about people who survived and recovered actually help lower the rate.',
        narrator: 'Phillips found that talking about suicide propagates it. My experience was the opposite — naming the feeling made it go away. Both are true. The distinction is how it is named. When somebody names it as a solution, it seems like a good one. When you name it as a thought, it seems like a bad one. The reinforcement runs in opposite directions. Werther named it as the answer. Papageno named it as a feeling that passed. The protocols in this book name it the second way — with a witness, so the name becomes the distance.'
      },
      {
        title: 'What Meta Knew',
        year: 2021,
        gesture: 'Frances Haugen — internal research found Instagram worsened body image in roughly one in three teen girls who already felt bad. The research was shelved.',
        body: 'Haugen, a former Facebook product manager, disclosed tens of thousands of internal documents to the SEC, the US Senate, and the *Wall Street Journal* in 2021. Among them: slide decks stating that Instagram made body-image issues worse for one in three teen girls in that cohort. Meta’s public statements had not matched its own research.',
        citation: 'Wells, G., Horwitz, J., & Seetharaman, D. (2021). *Wall Street Journal*, September 14.',
        link: 'https://en.wikipedia.org/wiki/Facebook_Files',
        quote: 'I’m here today because I believe Facebook’s products harm children, stoke division, and weaken our democracy.',
        eli5: 'In 2021, a former Facebook manager named Frances Haugen leaked thousands of internal documents. One showed Facebook’s own researchers found that Instagram made body-image issues worse for about one in three teen girls who already felt bad. The company had kept that research private and told the public something different.'
      },
      {
        title: 'Recommender Pathways',
        year: 2022,
        gesture: 'Audit studies — a new teen account following grief or body-image content can be served self-harm material within minutes. The pathway is optimization, not malice.',
        body: 'The Center for Countering Digital Hate created new accounts flagged as 13-year-old girls and had them pause briefly on grief-related and body-image content. Within minutes TikTok’s recommendation algorithm began serving eating-disorder and self-harm material. The pathway was engagement optimization, not editorial intent.',
        citation: 'Center for Countering Digital Hate. (2022). *Deadly by Design*.',
        link: 'https://counterhate.com/research/deadly-by-design-tiktok-eating-disorders/',
        eli5: 'A research group set up fake TikTok accounts with the profile settings of 13-year-old girls. They had the accounts pause briefly on grief- and body-image-related posts. Within minutes, TikTok’s algorithm started showing them eating-disorder and self-harm content. Nobody at TikTok set that up — the algorithm found it by optimizing for watch time.'
      }
    ]
  },
  {
    theme: 'The Rewritable Brain',
    sections: [
      {
        title: 'The Hebbian Principle',
        year: 1949,
        gesture: 'Donald Hebb — *The Organization of Behavior*. Cells that fire together wire together. The foundational law of neural change.',
        body: 'Hebb proposed that when two connected neurons fire together repeatedly, the connection between them strengthens. The principle, stated before anyone could observe a synapse changing, became the foundational law for every subsequent neuroscience of learning and memory. The paraphrase — cells that fire together wire together — came later.',
        citation: 'Hebb, D. O. (1949). *The Organization of Behavior*. Wiley.',
        link: 'https://en.wikipedia.org/wiki/Hebbian_theory',
        quote: 'When an axon of cell A is near enough to excite a cell B and repeatedly or persistently takes part in firing it, some growth process or metabolic change takes place in one or both cells such that A’s efficiency, as one of the cells firing B, is increased.',
        eli5: 'Your brain is made of cells called neurons that pass signals. In 1949, a Canadian scientist named Donald Hebb figured out that when two connected neurons fire together a lot, their connection gets stronger. This became the basic rule for how learning works in the brain: cells that fire together wire together.',
        narrator: 'Hebb’s rule — cells that fire together wire together. Most people hear it as a rule about learning. The dark side is what it means for trauma left unfelt. An unfelt thing does not get a name. It stays a charge in the amygdala with no label on it. Every time that charge fires — triggered by a smell, a tone, a stranger’s posture — whatever else is happening in the moment fires with it. The two get welded. A year in, traffic feels like the charge. Ten years in, your kids feel like it. You end up with a nameless negative response wired into every part of your life. The unfelt thing does not stay where you packed it. It spreads through whatever the brain does while the charge is loose. Feeling it is the name. The name is what stops the spread.'
      },
      {
        title: 'Synaptic Memory',
        year: 1970,
        gesture: 'Eric Kandel — Aplysia showed memory is a physical change at the synapse. Long-term potentiation, long-term depression. Nobel, 2000.',
        body: 'Kandel’s lab used the sea slug *Aplysia californica* — with its large, countable neurons — to demonstrate that learning produces measurable biochemical and structural changes at specific synapses. The mechanisms of long-term potentiation and depression became the physical correlates of memory. Kandel shared the 2000 Nobel in Physiology or Medicine.',
        citation: 'Kandel, E. R. (1970). *Scientific American*, 223(1), 57–67.',
        link: 'https://en.wikipedia.org/wiki/Eric_Kandel',
        eli5: 'Eric Kandel studied a sea slug because its brain has big, easy-to-see neurons. He showed that when the slug learns something, the connection points between its neurons physically change. This was one of the first times anyone proved that memory is an actual physical change in the brain. He shared a Nobel for it in 2000.',
        narrator: 'Memory is physical. Protein. Synapse. Shape. Kandel did not start with a human brain. He started with a sea slug — *Aplysia californica* — because its neurons are large and countable. Biology lets us look at a similar-shaped problem at a much more understandable scale. With the simplified view, the pattern is visible. This book tries the same move: take deep science and render it on a page, so the shape can be seen. Reprogramming uses the same method. You do not rewrite the whole story at once. You take one small part — one memory, one belief, one charge — and rewrite it. The sea slug was observed learning. So can you.'
      },
      {
        title: 'Cortical Remapping',
        year: 1983,
        gesture: 'Michael Merzenich — owl monkey experiments. The adult cortex reorganizes around use and disuse. The map is not fixed.',
        body: 'Merzenich and colleagues at UC San Francisco severed the median nerve in adult owl monkeys — cutting sensory input from the thumb and first two fingers — and mapped somatosensory areas 3b and 1 before and at intervals for weeks and months afterward. Representational borders shifted millimeters: cortex that had represented the deafferented fingers began responding to adjacent radial and ulnar territories within two to eight weeks. Jenkins, Merzenich, and colleagues (1990) completed the picture from the other direction. Owl monkeys trained to discriminate with specific fingertips on a rotating disk showed cortical representations of the trained fingers expand by factors of two or three. Adult plasticity was not a theoretical possibility. It was a protocol, measurable in millimeters.',
        citation: 'Merzenich, M. M. et al. (1984). *Neuroscience*, 10(3), 639–665; Jenkins, W. M., Merzenich, M. M. et al. (1990). *Journal of Neurophysiology*, 63(1), 82–104.',
        link: 'https://en.wikipedia.org/wiki/Michael_Merzenich',
        eli5: 'A UCSF scientist cut the nerve to parts of adult monkeys’ hands. He expected the brain area that handled those fingers to just go quiet. Instead, within weeks that area started handling nearby fingers. Later he showed the reverse: when monkeys practiced using certain fingers, the brain area for those fingers grew. Adult brains rewire themselves based on use.',
        narrator: 'I feel bad for the monkeys. I also feel bad for the scientists who had spent careers convinced it would not work. Before Merzenich, the prevailing view was determinist: adult cortex was fixed, the past had poured its concrete, the earth would not move. That view is convenient for bad actors. Every action they took to shape you became a concrete addition to a past you could not edit. Merzenich broke the foundation. Adult brains rewire. In millimeters. In weeks. The past is not fixed because the brain that holds it is not fixed. You are not what was done to you.'
      },
      {
        title: 'Blind V1 Reads Braille',
        year: 1993,
        gesture: 'Alvaro Pascual-Leone — visual cortex repurposes for touch in blind readers. Later five-day blindfold studies reproduce the effect in sighted subjects.',
        body: 'Pascual-Leone’s group used transcranial magnetic stimulation to show that disrupting primary visual cortex in blind Braille readers impaired tactile reading. Later work blindfolded sighted volunteers for five days; visual cortex began responding to touch within that window. The cortex is assigned by use, not by address.',
        citation: 'Pascual-Leone, A. et al. (1993). *Brain*, 116(1), 39–52.',
        link: 'https://en.wikipedia.org/wiki/Alvaro_Pascual-Leone',
        eli5: 'A Harvard neurologist showed that the part of the brain supposed to handle vision actually gets used for reading Braille in blind people. Later he blindfolded sighted people for five days — their visual cortex started responding to touch within that short window. The brain assigns space based on what you use, not a fixed blueprint.',
        narrator: 'The ability to communicate is so ingrained that losing one channel opens another. Ever notice, in a foreign country, that you get what you need without speaking the language? The body gestures. The body points. The body draws the thing in the air. Blind readers repurpose their visual cortex for touch — Pascual-Leone measured it in millimeters. Same principle. A capacity, when its usual route is blocked, finds a new route. The brain is not just rewirable at the cortex level. The function itself migrates. The body is not built to be stopped.'
      },
      {
        title: 'Constraint-Induced Recovery',
        year: 1993,
        gesture: 'Edward Taub — forced-use therapy drives motor reorganization after stroke. Plasticity has protocols, not just potential.',
        body: 'Taub’s protocol constrains the intact limb of a chronic stroke patient for two weeks while forcing the impaired limb into intensive practice. Randomized trials showed significant and durable functional recovery in patients years past their purported window for rehabilitation. The protocol turned plasticity from observation into intervention.',
        citation: 'Taub, E. et al. (1993). *Archives of Physical Medicine and Rehabilitation*, 74(4), 347–354.',
        link: 'https://en.wikipedia.org/wiki/Constraint-induced_movement_therapy',
        eli5: 'Edward Taub built a stroke-recovery method. You tie the patient’s good arm in a sling so they can’t use it, and force them to use the weak arm for six hours a day for two weeks. Patients who’d been told they’d never get their arm back regained real function. The brain rewires when you force it to.',
        narrator: 'Taub’s stroke patients favored their good side. Of course they did. The trauma took one route; the body went around. The mind does the same thing. When the direct path to a memory is blocked, the mind builds a narrative around the block — a false structure that integrates with the reality you experience. It is coping. It is not random. It is the path of least resistance. Application developers have learned to leverage that coping, with algorithms and science, to keep you addicted. Taub’s protocol was the opposite. Constrain the easy side. Force the hard one. That is the shape of reprogramming at every scale.'
      }
    ]
  },
  {
    theme: 'The Rewrite Mechanism',
    sections: [
      {
        title: 'The Labile State',
        year: 2000,
        gesture: 'Nader, Schafe, LeDoux — revisited as a therapeutic door. A retrieved memory is rewritable for roughly four to six hours.',
        body: 'The therapeutic implication of Nader’s finding emerged over the years following the original paper: the reactivated memory remains labile for approximately four to six hours before reconsolidation restabilizes it. Interventions delivered inside that window can update the emotional memory itself, not merely the patient’s relationship to it.',
        citation: 'Nader, K., Schafe, G. E., & LeDoux, J. E. (2000). *Nature*, 406(6797), 722–726.',
        link: 'https://en.wikipedia.org/wiki/Memory_reconsolidation',
        eli5: 'The big therapeutic implication of that rat study: when you retrieve a painful memory, it stays open to editing for about four to six hours. If something new happens inside that window — a new experience, a new understanding — the brain can rewrite the memory itself, not just your feelings about it.',
        narrator: 'Four to six hours. That is the window. A protein-synthesis window in the amygdala. Every protocol in this book’s last third is a way of doing something useful inside it. If you feel the thing in the morning and something true meets it by dinner, the brain saves the new version. That is reprogramming.'
      },
      {
        title: 'Prediction Error Opens It',
        year: 2013,
        gesture: 'Marieke Sevenster, Tom Beckers, Merel Kindt — the reconsolidation window opens only when retrieval carries a mismatch with expectation.',
        body: 'Sevenster and colleagues at the University of Amsterdam ran fear-conditioning studies in humans showing that the window for memory update opens only when retrieval violates what the subject expected to happen. Retrieval alone does not open the door; prediction error does. The window has a key, and the key is mismatch.',
        citation: 'Sevenster, D., Beckers, T., & Kindt, M. (2013). *Science*, 339(6121), 830–833.',
        link: 'https://doi.org/10.1126/science.1231357',
        eli5: 'Dutch scientists found that the reconsolidation window Nader discovered doesn’t just open any time you remember something. It opens when the memory comes back with a surprise — something you didn’t expect. If nothing contradicts the memory, the brain leaves it alone. Surprise is the key that opens the door.',
        narrator: 'The window has a key. The key is surprise. A memory alone does not open it. The memory has to return with a contradiction. Déjà vu is that contradiction, pre-packaged — your brain telling you the sense of familiarity does not match the record. If you have felt it, the door may already be open. Be ready with something true.'
      },
      {
        title: 'Coherence Therapy',
        year: 2012,
        gesture: 'Bruce Ecker, Robin Ticic, Laurel Hulley — *Unlocking the Emotional Brain*. Juxtaposition experience delivered within the window.',
        body: 'Ecker and colleagues formalized a decade of clinical protocol into a single text. The method retrieves an emotional schema, places it alongside a live contradicting experience, and keeps the reactivation open long enough for reconsolidation to complete. The book reads like an operational manual for what Nader had shown in rats.',
        citation: 'Ecker, B., Ticic, R., & Hulley, L. (2012). *Unlocking the Emotional Brain*. Routledge.',
        link: 'https://www.coherencetherapy.org/',
        eli5: 'Three therapists wrote a book showing other therapists how to use Nader’s reconsolidation window. You bring a painful belief into the session, have the patient experience something that directly contradicts it while the window is open, and the belief actually rewrites. It’s the rat-lab finding applied to human clinical work.',
        narrator: 'Ecker wrote the clinical manual for what Nader found in rats. Retrieve the belief. Put it next to a contradiction. Hold the window open. Let it reconsolidate around the new information. This is what Pennebaker does with writing, what the fifth step does with a sponsor, what IFS does with the Self — by different routes, hitting the same target.'
      },
      {
        title: 'Pennebaker’s Paradigm',
        year: 1986,
        gesture: 'James Pennebaker — twenty minutes of expressive writing, four days. Dozens of RCTs show measurable effects on immune function, blood pressure, depression.',
        body: 'Pennebaker and Sandra Beall had students write fifteen to twenty minutes a day for four consecutive days about the most traumatic experiences of their lives. Writers had significantly fewer health-center visits in the following months than control students. Hundreds of replications later, meta-analytic effect sizes remain reliably above zero across physical and psychological outcomes.',
        citation: 'Pennebaker, J. W. & Beall, S. K. (1986). *Journal of Abnormal Psychology*, 95(3), 274–281.',
        link: 'https://en.wikipedia.org/wiki/Expressive_writing',
        eli5: 'James Pennebaker asked college students to write about the worst experiences of their lives — fifteen to twenty minutes a day for four days in a row. The students who did this had fewer doctor visits in the months that followed than students who wrote about random topics. Hundreds of follow-up studies have confirmed that this kind of honest writing actually improves physical and mental health.',
        narrator: 'Twenty minutes. Four days. That was Pennebaker’s original protocol. The yield has changed. We can trace years of progressive steps in minutes — twenty minutes of writing might be a hundred pages with an LLM to draft. But volume is not reinforcement. It is the reading and revising that acts as the reinforcement. The pattern matcher drafts; the human consolidates. What gets read back — slowly, with attention, with correction — is what sticks. This is the protocol I used. The one that let me feel what had been packed away.'
      },
      {
        title: 'The Midnight Disease',
        year: 2004,
        gesture: 'Alice Flaherty — the neurology of hypergraphia. Temporal-lobe involvement, dopamine, the writer’s compulsion as access state.',
        body: 'Flaherty, a neurologist at Massachusetts General, wrote *The Midnight Disease* after a postpartum hypergraphic episode of her own. She traced the neurology: temporal-lobe activity, dopaminergic modulation, a specific altered state with therapeutic potential. The book is memoir and literature review both.',
        citation: 'Flaherty, A. W. (2004). *The Midnight Disease*. Houghton Mifflin.',
        link: 'https://en.wikipedia.org/wiki/Hypergraphia',
        eli5: 'Alice Flaherty is a neurologist who had a period of compulsive writing after childbirth — a real condition called hypergraphia. She wrote a book tracing the brain regions involved and argued that the drive to write, when it takes over, is a specific altered state that can be used for working through hard experiences.'
      },
      {
        title: 'Flow and the Default Mode',
        year: 2001,
        gesture: 'Csikszentmihalyi on flow; Marcus Raichle names the default mode network; Carhart-Harris on DMN suppression in altered states. The fugue-adjacent access.',
        body: 'Raichle’s 2001 paper named the default mode network — medial prefrontal and posterior cingulate regions active during rest and self-referential thought. Later work by Carhart-Harris linked DMN suppression to altered states produced by meditation, flow, and psilocybin. Self-observation quiets when the DMN does.',
        citation: 'Raichle, M. E. et al. (2001). *PNAS*, 98(2), 676–682.',
        link: 'https://en.wikipedia.org/wiki/Default_mode_network',
        eli5: 'There’s a network of brain regions called the default mode network that’s most active when you’re thinking about yourself — ruminating, planning, worrying. When you get deeply absorbed in a task (called flow) or in meditation, that network quiets down. You stop watching yourself. That self-forgetting state is part of what makes those practices feel healing.'
      }
    ]
  },
  {
    theme: 'The Reachable Shift',
    sections: [
      {
        title: 'Reappraisal Beats Suppression',
        year: 1998,
        gesture: 'James Gross — reinterpreting an event outperforms hiding the response on affect, memory, and cardiovascular measures.',
        body: 'Gross’s programmatic work on emotion regulation established that reappraisal — reinterpreting an event as less threatening or less personal — outperforms expressive suppression across affect, memory for the event, and cardiovascular reactivity. Suppressors remembered events worse and showed higher sympathetic arousal. The shift is in the interpretation, not the expression.',
        citation: 'Gross, J. J. (1998). *Review of General Psychology*, 2(3), 271–299.',
        link: 'https://en.wikipedia.org/wiki/Emotion_regulation',
        eli5: 'James Gross tested two ways of handling emotion. One: try to hide what you’re feeling. Two: try to reinterpret the situation differently. Reinterpretation won on nearly every measure — people felt better, remembered events more accurately, and had less stress on their heart. Hiding what you feel actually makes things worse.',
        narrator: 'Gross extends this. Since we cannot deal with the trauma during the event — our bodies are incapable of processing emotionally during the decision-making — we have to reflect on it afterward. And surgically remove the improper actions from future decision-making. That is reappraisal. Not in-the-moment repression. After-the-moment rewriting. The cortisol narrows the aperture while you act; reappraisal widens it once you are safe. The move: look at what you did, see what was an artifact of the chemistry, and refuse to put it into the pattern the brain will weld tomorrow. Reappraisal is not feeling better. It is updating what gets saved.'
      },
      {
        title: 'The Rumination Trap',
        year: 1991,
        gesture: 'Susan Nolen-Hoeksema — self-focused repetitive thought predicts and maintains depression. Redirection ends the loop.',
        body: 'Nolen-Hoeksema’s Response Styles Theory proposed that a ruminative response to sad mood — passive, self-focused, repetitive — prolongs and deepens depressive episodes. Women, who ruminate more on average, also experience depression at roughly twice the rate of men. Redirection of attention breaks the loop; distraction tasks outperform continued introspection.',
        citation: 'Nolen-Hoeksema, S. (1991). *Journal of Abnormal Psychology*, 100(4), 569–582.',
        link: 'https://en.wikipedia.org/wiki/Rumination_(psychology)',
        eli5: 'Susan Nolen-Hoeksema showed that people who respond to feeling sad by turning inward and chewing on why — replaying the feeling, asking “why am I like this” over and over — stay sad longer. Active distraction actually works better. Women ruminate more on average, and depression rates are about twice as high in women.',
        narrator: 'Reflecting on wrongs has powerful outcomes. Which direction depends on the shape of the reflection. If you build an echo chamber that repeats the wrong — by mimicry, or by following others who carry the same wound — you reinforce the harmful connections. Nolen-Hoeksema saw the solo version; the online version is the same mechanism across multiple brains. Hebb does not care whether the repetition is internal or social. The wire welds either way. Finding a repressed memory and sharing it with the only person with the power to rewrite it is a different thing. The outcomes are in different categories. Same act, but done once, surgically.'
      },
      {
        title: 'The Four Horsemen',
        year: 1994,
        gesture: 'John Gottman — criticism, contempt, defensiveness, stonewalling predict divorce with roughly 94% accuracy in the sample.',
        body: 'Gottman’s Love Lab at the University of Washington videotaped hundreds of couples discussing areas of conflict and coded their interactions in seconds. Four behaviors — criticism, contempt, defensiveness, and stonewalling — predicted divorce over multi-year follow-up with striking accuracy. Contempt, the disrespect-from-a-position-of-superiority behavior, was the single strongest predictor.',
        citation: 'Gottman, J. M. (1994). *Why Marriages Succeed or Fail*. Simon & Schuster.',
        link: 'https://en.wikipedia.org/wiki/John_Gottman',
        eli5: 'John Gottman videotaped couples fighting and found four specific behaviors that predicted divorce in about 94% of the couples he studied. He called them the Four Horsemen. The first is criticism — attacking your partner’s character instead of a specific action. Saying "you’re selfish" instead of "you didn’t help with dinner." The second is contempt — mockery, eye-rolling, sarcasm, name-calling. Treating your partner as beneath you. Contempt was the worst predictor. The third is defensiveness — counter-attacking or playing the victim to avoid taking responsibility. The fourth is stonewalling — going silent, walking away, refusing to respond. Every couple does all four sometimes. Durable couples notice and repair quickly.',
        narrator: 'The reprogramming of a marriage is the same kind of work as the reprogramming of a self. Moment-to-moment micro-decisions, repeated, accumulating. You do not repair one fight. You repair the way you meet the next bid. Contempt is the wire the brain welds when it is not interrupted. Interrupt it. A fearless moral inventory should include these four. If your relationships — not just marriage — use any of them as the way you get your needs met, you are the problem. I am sorry. It was true for me. Understand these categories of actions and be on the lookout when you perform them. Learn to name them in front of the person you are inflicting them on. Say you regret it. Say you see it. Say you see them feeling what it produces. Say you want to stop. That is how the rewrite begins.'
      },
      {
        title: 'Turning Toward the Bid',
        year: 1999,
        gesture: 'Gottman — couples who endure turn toward bids for connection 86% of the time. The at-will moment is this one.',
        body: 'Gottman and Silver’s *Seven Principles for Making Marriage Work* named the "emotional bid" — a small verbal or nonverbal request for attention. In longitudinal data, durably married couples responded to bids with attention 86% of the time; couples heading toward divorce responded 33%. The accumulation of micro-decisions drives the macro outcome.',
        citation: 'Gottman, J. M. & Silver, N. (1999). *The Seven Principles for Making Marriage Work*. Crown.',
        link: 'https://www.gottman.com/blog/turn-toward-instead-of-away/',
        eli5: 'Gottman noticed that couples constantly make small bids for each other’s attention — a look, a comment, a question. Happy couples respond to those bids about 86% of the time. Unhappy couples respond about a third of the time. Over thousands of tiny moments, the math adds up.'
      },
      {
        title: 'Metacognitive Distance',
        year: 2000,
        gesture: 'Adrian Wells — moving from content (what I am thinking) to process (that I am thinking) ends the loop. Detached mindfulness.',
        body: 'Wells’s metacognitive therapy separates the content of a thought (what I think) from the process (that I am thinking). Clients trained in detached mindfulness — observing thoughts without engaging them — show substantial and durable reductions in rumination, worry, and anxiety across trials. The distance is the intervention.',
        citation: 'Wells, A. (2000). *Emotional Disorders and Metacognition*. Wiley.',
        link: 'https://en.wikipedia.org/wiki/Metacognitive_therapy',
        eli5: 'Adrian Wells figured out that the problem usually isn’t what you’re thinking — it’s that you can’t stop thinking it. His therapy teaches people to step back and just notice their thoughts without engaging them. “I’m thinking about that again” instead of “let me think about it more.” Clients trained in this get big reductions in anxiety and rumination.'
      },
      {
        title: 'Self-Compassion',
        year: 2003,
        gesture: 'Kristin Neff — mindful observation, common humanity, self-kindness. Effect sizes in the moderate range across dozens of trials.',
        body: 'Neff’s three-component model of self-compassion — mindful observation, common humanity, self-kindness — has been operationalized in a widely-used scale. Meta-analyses across hundreds of studies find moderate effect sizes for self-compassion training on depression, anxiety, and wellbeing. The redirection has the shape Neff described.',
        citation: 'Neff, K. D. (2003). *Self and Identity*, 2(3), 223–250.',
        link: 'https://en.wikipedia.org/wiki/Self-compassion',
        quote: 'Self-compassion entails being kind and understanding toward oneself in instances of pain or failure rather than being harshly self-critical; perceiving one’s experiences as part of the larger human experience rather than seeing them as isolating; and holding painful thoughts and feelings in mindful awareness rather than over-identifying with them.',
        eli5: 'Kristin Neff proposed three things that together make up self-compassion: noticing when you’re suffering, remembering everyone suffers sometimes, and being kind to yourself instead of beating yourself up. Studies show people who practice this feel less depressed, less anxious, and more resilient over time.'
      }
    ]
  },
  {
    theme: 'Oregon as Laboratory',
    sections: [
      {
        title: 'CAHOOTS',
        year: 1989,
        gesture: 'White Bird Clinic, Eugene — the first US mobile crisis response team to dispatch mental-health workers in place of police. By 2020, responding to roughly 17% of Eugene 911 calls.',
        body: 'CAHOOTS — Crisis Assistance Helping Out On The Streets — pairs a medic with a mental-health crisis worker, dispatched through the Eugene 911 system. By 2020 the program was handling roughly 17% of all Eugene 911 calls at an estimated annual cost savings of $8.5M versus police response. Copied by Denver STAR (2020), NYC B-HEARD (2021), and Portland Street Response.',
        citation: 'White Bird Clinic. *CAHOOTS Program Overview*, various years.',
        link: 'https://whitebirdclinic.org/cahoots/',
        eli5: 'In 1989, a clinic in Eugene, Oregon started a program called CAHOOTS. Instead of sending police to every 911 call about a mental-health crisis or a homeless person in distress, they send a medic and a counselor in a van. By 2020 they were handling about 17% of all Eugene 911 calls and saving the city roughly $8.5 million a year.',
        narrator: 'Up to now we have been in the research. From here forward we are in policy. CAHOOTS is the hinge. In 1989, White Bird Clinic in Eugene decided to stop sending police to mental-health 911 calls. They sent a medic and a counselor instead. Thirty-five years later the model has been copied by Denver, New York, Portland. The research up to this page said unarmed non-police response can work. CAHOOTS demonstrated that a city can actually do it. Everything after this page is what happens when a state tries. Reprogramming is the same at every scale. Replace the pattern with a witness.'
      },
      {
        title: 'Mink v. Oregon State Hospital',
        year: 2002,
        gesture: 'US District Court rules that OSH’s multi-week waits for competency restoration violate the Constitution. Federal oversight persists into the 2020s.',
        body: 'The Oregon Advocacy Center sued on behalf of pretrial detainees held in county jails for weeks or months awaiting transfer to Oregon State Hospital for competency restoration. The Ninth Circuit affirmed the District Court’s ruling that waits longer than seven days violated the Fourteenth Amendment. More than two decades later, OSH capacity remains contested and federal oversight continues.',
        citation: 'Oregon Advocacy Center v. Mink, 322 F.3d 1101 (9th Cir. 2003).',
        link: 'https://en.wikipedia.org/wiki/Oregon_State_Hospital',
        eli5: 'People waiting for trial who’d been found mentally unfit were being held in Oregon county jails for weeks or months, waiting for a bed at the state hospital. In 2002 a federal court ruled this was unconstitutional. More than twenty years later Oregon still gets sued for the same problem — there aren’t enough beds.'
      },
      {
        title: 'Coordinated Care Organizations',
        year: 2012,
        gesture: 'Oregon’s Medicaid 1115 waiver. Sixteen regional CCOs integrate physical, behavioral, and oral health under one risk-adjusted global budget.',
        body: 'Oregon negotiated a Section 1115 Medicaid waiver in 2012 establishing sixteen regional Coordinated Care Organizations covering over a million enrollees. Each CCO operates under a risk-adjusted global budget integrating physical, behavioral, and oral health. OHSU’s Center for Health Systems Effectiveness publishes ongoing evaluations of quality and spending metrics.',
        citation: 'Stecker, E. C. (2013). *Journal of Ambulatory Care Management*, 36(4), 291–300.',
        link: 'https://en.wikipedia.org/wiki/Oregon_Health_Plan',
        eli5: 'In 2012 Oregon redesigned its Medicaid system. Instead of paying for services one at a time, the state gives sixteen regional health organizations a fixed budget to cover all the physical, mental, and dental care for everyone in their region. The organizations have to figure out how to keep people healthy inside that budget. Research has tracked the results since.'
      },
      {
        title: 'Certified Peer-Support Specialists',
        year: 2014,
        gesture: 'Oregon codifies a peer-support workforce. Davidson, Bellamy, and others document efficacy. Teachable, accessible, non-clinical support scales at a state level.',
        body: 'Oregon HB 2100 (2013) and subsequent Oregon Administrative Rules formalized certified peer-support specialist and certified recovery mentor roles. Medicaid-reimbursable peer support now operates through every CCO. Davidson, Bellamy, and colleagues’ outcome research supports the approach as a complement to, not substitute for, clinical care.',
        citation: 'Davidson, L. et al. (2012). *World Psychiatry*, 11(2), 123–128.',
        link: 'https://www.oregon.gov/oha/HSD/AMH/Pages/Peer-Support.aspx',
        eli5: 'Oregon built a state system to train and certify people who’ve been through mental-health or addiction recovery themselves to work as counselors. Their work is covered by Medicaid. Peer support works alongside — not instead of — clinical therapy, and research shows it helps.'
      },
      {
        title: 'Measure 110',
        year: 2020,
        gesture: 'Oregon voters decriminalize personal drug possession and direct cannabis tax revenue to Behavioral Health Resource Networks. RAND and OHA document slow uptake.',
        body: 'Measure 110 passed in November 2020 with 58% support, decriminalizing personal drug possession (replacing misdemeanor charges with a $100 ticket waivable through a treatment referral) and directing cannabis tax revenue to regional Behavioral Health Resource Networks. Implementation lagged: by 2023, only a fraction of projected treatment capacity was online. RAND and the Oregon Health Authority documented the gap.',
        citation: 'Oregon Health Authority. (2021–2024). *Drug Treatment and Recovery Services Fund Quarterly Reports*.',
        link: 'https://en.wikipedia.org/wiki/Oregon_Ballot_Measure_110',
        eli5: 'Oregon voters passed a ballot measure in 2020 that made possessing small amounts of drugs a ticket instead of a crime, and directed marijuana tax money to mental-health and addiction treatment. The treatment centers that were supposed to handle the people being diverted weren’t ready in time. It got rolled back in 2024.'
      },
      {
        title: 'Portland Street Response',
        year: 2021,
        gesture: 'Portland Bureau of Fire & Rescue launches a CAHOOTS-inspired pilot. PSU’s evaluation documents reduced police involvement for low-acuity calls.',
        body: 'Portland Street Response launched as a pilot in the Lents neighborhood in February 2021 and expanded citywide in 2022, dispatching an unarmed team of a paramedic and a mental-health worker. Portland State University’s Homelessness Research & Action Collaborative evaluations documented measurable reductions in police involvement for low-acuity mental-health and welfare-check calls.',
        citation: 'Portland State University. (2022–2024). *PSR Evaluation Reports*.',
        link: 'https://www.portland.gov/streetresponse',
        eli5: 'Portland copied Eugene’s CAHOOTS program in 2021. When someone calls 911 about a person in mental distress who isn’t dangerous, a team of a paramedic and a mental-health worker shows up instead of police. Portland State University’s researchers have tracked the results and found fewer police calls and better outcomes.'
      },
      {
        title: 'HB 4002',
        year: 2024,
        gesture: 'Oregon restores misdemeanor status for personal possession while keeping a treatment-referral path. The research frame: a policy experiment ended before its infrastructure was built.',
        body: 'Governor Kotek signed HB 4002 on April 1, 2024, effective September 2024. Personal drug possession is again a Class A misdemeanor, but with a "deflection" path: law enforcement can refer individuals to treatment in lieu of prosecution at the county’s discretion. The treatment capacity that Measure 110 had been funding was not yet at scale when the rollback arrived.',
        citation: 'Oregon HB 4002 (2024 regular session).',
        link: 'https://olis.oregonlegislature.gov/liz/2024R1/Measures/Overview/HB4002',
        eli5: 'Oregon’s legislature rolled back Measure 110 in early 2024. Small drug possession is a misdemeanor again, though the new law tries to send people to treatment instead of jail. The treatment system Measure 110 was supposed to build wasn’t fully online when the rollback happened.'
      }
    ]
  },
  {
    theme: 'What Heals',
    sections: [
      {
        title: 'Narrative Identity',
        year: 1993,
        gesture: 'Dan McAdams — *The Stories We Live By*. Adults construct a life story. Redemption sequences predict wellbeing.',
        body: 'McAdams’s program argues that adulthood’s central psychological task is the construction of an integrative life story. His lab codes interview transcripts for narrative patterns: redemption sequences (bad to good) correlate with higher wellbeing and generativity; contamination sequences (good to bad) correlate with depression and stagnation. The shape of the story is the intervention.',
        citation: 'McAdams, D. P. (1993). *The Stories We Live By*. William Morrow.',
        link: 'https://en.wikipedia.org/wiki/Narrative_identity',
        quote: 'We are all tellers of tales. We each seek to provide our scattered and often confusing experiences with a sense of coherence by arranging the episodes of our lives into stories.',
        eli5: 'Dan McAdams argues that when we’re adults, the main psychological work we do is turning our experiences into a life story. People whose stories have “bad thing happened, I got better” patterns are happier. People whose stories have “I was doing fine, then it fell apart” patterns are less well. The shape of the story you tell yourself matters.',
        narrator: 'The narrative we construct is picked and chosen from the past. That is non-optional. You cannot hold every event — it is too big. Children try. Adults put on a mask. Not to hide who they are. A bitmask. You cover over the non-effective moments. It happened. It isn’t happening. What is happening is all this amazing stuff since then. My marriage isn’t falling apart — it is healthier than the past, and the future is even better. There are fights. There are regrets. They don’t remain. McAdams’s redemption sequences are what that looks like in the data. The story is not optional. The shape of it is.'
      },
      {
        title: 'Internal Family Systems',
        year: 1995,
        gesture: 'Richard Schwartz — parts work. The Self witnesses exiled parts and updates them. A reconsolidation vehicle in clinical form.',
        body: 'Schwartz developed IFS after noticing that his clients spontaneously described themselves in terms of internal parts — a wounded part, a protective part, a manager. IFS posits an undamaged core Self that, once accessed, can witness and update exiled parts. Growing evidence supports its efficacy, and its mechanism fits reconsolidation theory.',
        citation: 'Schwartz, R. C. (1995). *Internal Family Systems Therapy*. Guilford.',
        link: 'https://en.wikipedia.org/wiki/Internal_Family_Systems_Model',
        eli5: 'A therapist named Richard Schwartz noticed his clients talked about themselves in parts: “a part of me feels angry, a part feels sad.” He built a therapy around listening to those parts instead of arguing with them. The core calm “Self” inside witnesses each part and helps update the ones stuck in old pain.',
        narrator: 'Karma Chameleon was my nickname. *I can never tell if you are telling the truth* was offered to me as a compliment. I took it. Culture celebrates the performer. Actors are among the highest-paid professions, the lifestyles most sought after. The idea is that we get to play roles in life — not forced to live consistently. Schwartz’s parts work names the internal version. We cannot write a narrative that contains both the father and the manager in the same self. The culture trained us to keep them apart. That keeping-apart is the root of dissociation. IFS is the reverse: find the Self that can hold both, and let the parts stop running the show.'
      },
      {
        title: 'EMDR',
        year: 1989,
        gesture: 'Francine Shapiro — bilateral stimulation holds retrieval open long enough for reconsolidation to complete.',
        body: 'Shapiro, walking in a park in 1987, noticed that distressing thoughts faded as her eyes moved side to side. She built a protocol. Decades of randomized trials have established efficacy for PTSD — EMDR is now a first-line treatment in multiple international guidelines — though the theoretical mechanism (working memory competition, reconsolidation, or both) remains debated.',
        citation: 'Shapiro, F. (1989). *Journal of Traumatic Stress*, 2(2), 199–223.',
        link: 'https://en.wikipedia.org/wiki/Eye_movement_desensitization_and_reprocessing',
        eli5: 'Francine Shapiro was walking in a park when she noticed that moving her eyes side to side while thinking about upsetting things made the thoughts feel less sharp. She built a therapy around that observation. Many studies now show it helps people with PTSD, even though nobody fully agrees on why it works.',
        narrator: 'I have heard *take a walk* as advice. I have done it. It is as effective as any therapy I have tried. I did not know the eye motions mattered until I read Shapiro. EMDR sounds clinical in the research — bilateral stimulation, working memory competition. Observing your surroundings is how I understand it. Take notice of the details in the buildings and the trees. Not just look at the world. Draw it inside your mind. The high-level organizations start to reconstruct. Shapiro noticed the effect on a walk. The walk is the protocol with the Greek letters removed.'
      },
      {
        title: 'Self-Determination',
        year: 1985,
        gesture: 'Edward Deci & Richard Ryan — autonomy, competence, relatedness. The three needs the feed displaces.',
        body: 'Self-determination theory identifies three basic psychological needs whose satisfaction drives intrinsic motivation and wellbeing: autonomy (volitional action), competence (effective engagement), and relatedness (connection with others). Thousands of studies across education, healthcare, and work have replicated the core model. Feeds displace all three by substituting extrinsic reward for intrinsic engagement.',
        citation: 'Deci, E. L. & Ryan, R. M. (1985). *Intrinsic Motivation and Self-Determination in Human Behavior*. Plenum.',
        link: 'https://en.wikipedia.org/wiki/Self-determination_theory',
        eli5: 'Two psychologists, Deci and Ryan, proposed that people have three basic psychological needs: to feel in control of their choices, to feel capable at things, and to feel connected to others. Thousands of studies since have confirmed that when these three needs are met, people do better. Scrolling feeds tend to starve all three.',
        narrator: 'Think of humans as parts of an organism that is healthy when they are connected. Deci and Ryan named three needs: autonomy, competence, relatedness. The feed fakes all three. The lever the rats pulled led to death because they lost their connections. Selfishness overrode the protocol. Social media is the infection that produces the same reward reaction — hollow. Three needs, fakeable in dopamine. None of them met in fact. Reprogramming needs connection that counts — another person present enough to actually see you.'
      },
      {
        title: 'Identity-Based Cognition',
        year: 2007,
        gesture: 'Daphna Oyserman — brief identity interventions move academic and health outcomes. The ground is reachable.',
        body: 'Oyserman’s identity-based-cognition framework shows that making a relevant identity salient — through a ten-minute writing prompt or a brief structured interview — produces measurable downstream changes in school persistence, health behavior, and goal pursuit. The ground beneath a behavior is reachable on a short timescale.',
        citation: 'Oyserman, D. (2007). In *Social Psychology: Handbook of Basic Principles*. Guilford.',
        link: 'https://en.wikipedia.org/wiki/Identity-based_motivation',
        eli5: 'Daphna Oyserman showed that a ten-to-twenty-minute exercise where you write about who you’re becoming, or what kind of person you are, can measurably change your behavior weeks or months later — in school, in health, in goals. The ground underneath how you act is easier to reach than people assume.'
      }
    ]
  },
  {
    theme: 'Applied',
    sections: [
      {
        title: 'A Searching and Fearless Inventory',
        year: 1939,
        gesture: 'Step Four of Alcoholics Anonymous — a written moral inventory. Forty-seven years before Pennebaker, written self-examination was already a recovery protocol.',
        body: 'The Fourth Step first appeared in *Alcoholics Anonymous* — "the Big Book" — published April 1939 by Works Publishing under Bill Wilson’s authorship. It prescribes a structured written self-examination of resentments, fears, and harms done. Kelly, Humphreys, and Ferri’s 2020 Cochrane review of 27 studies found that Twelve-Step facilitation treatment produced significantly higher continuous-abstinence rates than cognitive-behavioral and motivational-enhancement comparisons. A protocol eighty-seven years old with a modern evidence base.',
        citation: 'Alcoholics Anonymous World Services. (1939/2001). *Alcoholics Anonymous* (4th ed.). New York: AA World Services.',
        link: 'https://www.aa.org/the-big-book',
        quote: 'Made a searching and fearless moral inventory of ourselves.',
        eli5: 'Alcoholics Anonymous wrote a book in 1939 with twelve steps for staying sober. The first three steps get you ready: you admit you can’t beat the problem alone (step one), come to believe that something bigger than yourself can help (step two), and decide to let it guide you (step three). Step four is sitting down and writing an honest list — your resentments, your fears, the people you’ve hurt. Step five is reading that list out loud to another person, usually a sponsor. Modern research on AA finds this whole sequence really does help people stay sober.',
        narrator: 'The oldest reprogramming protocol in this book. Bill Wilson did not know the neuroscience. He knew the move. Three preparatory steps. A written inventory. A fifth step where you say it out loud to another person. The mechanism was intuited fifty years before the scans confirmed it: name it, witness it, lay it down. I didn’t take it seriously when I sat in those rooms. I thought I knew my past, having an eidetic memory. But eidetic recall gives you fidelity for what the brain stored. It does not reach what the brain packed away. Different systems. The inventory was the part I needed most and refused the longest.'
      },
      {
        title: 'The Writing Protocol',
        year: 1986,
        gesture: 'Pennebaker, adapted — twenty minutes, four days, deepest thoughts and feelings. The reader’s first reachable move.',
        body: 'The Pennebaker protocol adapted for the reader: find a private space. Twenty minutes a day for four consecutive days. Write without regard for grammar or coherence about the deepest thoughts and feelings surrounding a difficult experience. Do not edit. The writing is not for anyone else. Pair this with counseling, especially if the memory is recent or the arousal extreme.',
        citation: 'Pennebaker, J. W. & Smyth, J. M. (2016). *Opening Up by Writing It Down*. Guilford.',
        link: 'https://en.wikipedia.org/wiki/Expressive_writing',
        eli5: 'The protocol is simple. Find a private place. For twenty minutes, write down your deepest thoughts and feelings about something difficult that happened. Do it for four days in a row. Don’t worry about grammar. It’s not for anyone else to read. Research shows this can improve how you feel, your sleep, and even your immune function.',
        narrator: 'The standard Pennebaker protocol calls for a private space. It does not account for state-dependent retrieval. Being present in the place where your identity is rooted turns out to be more effective than making time for it. There is a second move too: force the writing when you would rather be doing something else, and let it captivate you away from your identity expression. That makes a different sort of change. You are willing to escape the exercise, and in the willingness, you trick yourself into revealing the things that were hidden. The resistance is the tell. What you want to avoid writing is the part that needs to be written.'
      },
      {
        title: 'The At-Will Shift',
        year: 1998,
        gesture: 'Gross-style reappraisal, practiced in real time. One sentence at the moment of rumination. The shift is trainable.',
        body: 'At the moment of rising rumination or reactive emotion, name one alternative interpretation of the triggering event. Not a denial; a reframe. "This is about their day, not about me" is the shape. The first dozen times it is clumsy. Within weeks the shift becomes available within a second. Gross’s emotion-regulation literature supports it with effect sizes larger than most therapeutic techniques.',
        citation: 'Gross, J. J. & John, O. P. (2003). *Journal of Personality and Social Psychology*, 85(2), 348–362.',
        link: 'https://en.wikipedia.org/wiki/Cognitive_reappraisal',
        eli5: 'In the moment you feel a strong reaction rising, say one sentence to yourself that reinterprets the situation. Not pretending it didn’t happen — just reframing. “This is about their day, not about me” is the shape. It feels clumsy at first. Within a few weeks it becomes automatic and actually changes how you feel.',
        narrator: 'Another shocking revelation: this ability does not need to wait for a therapist. Our bodies have real-time access to reprogramming. It is as easy as the words we choose to respond with. If the first reaction is harmful and we choose not to say it, we have begun reprogramming. That is as simple as it gets. Feel bad about saying the wrong thing. Over time, the feeling moves earlier — from after the words to during them to before them. When the feeling happens before the words, the action is to change them. That is pre-cognition. That is reappraisal installed.'
      },
      {
        title: 'Turning Toward',
        year: 1999,
        gesture: 'Gottman-adapted — notice the bid, pause, respond. The relationship version of the at-will shift.',
        body: 'When your partner, child, or friend makes a small request for attention — a comment, a look, a question — pause the current task and respond. Any response that registers the bid counts. Couples who turn toward 86% of the time stay together. The protocol is simple, the evidence base substantial, and the margin accumulates across thousands of micro-decisions.',
        citation: 'Gottman, J. M. & Silver, N. (1999). *The Seven Principles*. Crown.',
        link: 'https://www.gottman.com/blog/turn-toward-instead-of-away/',
        eli5: 'When your partner, kid, or friend makes a small bid for attention — says something, glances at you, asks a little question — pause and respond. Even a quick nod counts. It sounds too simple to matter. It is the single biggest predictor of whether a marriage lasts.'
      },
      {
        title: 'Grounding in Identity',
        year: 2007,
        gesture: 'Oyserman-adapted — lay the positive ground before lifting the buried thing. Identity-first, memory second.',
        body: 'Before revisiting a painful memory, articulate who you are becoming: a sentence, a paragraph, a written commitment. The new identity provides the ground into which the reconsolidated memory can be re-laid. Without it, the surfaced material has nowhere to land. Oyserman’s interventions run 10–20 minutes and produce measurable downstream effects.',
        citation: 'Oyserman, D. (2015). *Pathways to Success Through Identity-Based Motivation*. Oxford.',
        link: 'https://en.wikipedia.org/wiki/Identity-based_motivation',
        eli5: 'Before you work on a painful memory, spend a few minutes writing about who you’re becoming — the kind of person you want to be, the values you hold. That fresh sense of identity gives the memory somewhere to land when you open it up. Identity first, memory second.'
      },
      {
        title: 'Counseling Is Non-Negotiable',
        year: 2007,
        gesture: 'Solo memory work carries risk. Retrieval without containment reinjures. The protocols are not a substitute for a witness.',
        body: 'Every trauma-therapy outcome study that reports control conditions finds that solo work underperforms witnessed work. A trained counselor or peer provides the containment that allows the labile window to stay open long enough for a rewrite to complete — and the titration that keeps arousal within tolerance. This book’s protocols extend counseling, they do not replace it.',
        citation: 'Cloitre, M. et al. (2011). *Journal of Traumatic Stress*, 24(6), 615–627.',
        link: 'https://en.wikipedia.org/wiki/Psychotherapy',
        eli5: 'Every good trauma-therapy study finds the same thing: doing memory work alone is riskier and works less well than doing it with a trained person who helps you stay grounded. A counselor or trained peer keeps you from getting overwhelmed. The protocols in this book are things to try with a counselor, not instead of one.',
        narrator: 'I will say this once more because it matters. The protocols in this book do not replace a witness. The research is clear. A trained counselor holds the window open long enough for the rewrite to land and keeps your arousal inside a range you can hold. Without them, the window closes around a second injury. Bring someone. Do not try this alone.'
      },
      {
        title: 'ABC',
        year: 2007,
        gesture: 'The Association of Biblical Counselors — national, teachable, low-cost, insurance-free. Laypeople trained to counsel.',
        body: 'ABC trains laypeople in structured counseling that does not require clinical licensure or health insurance. The model is explicitly integrative and scripture-informed. For readers inside the tradition, ABC is reachable. For readers outside it, Oregon’s certified peer-support specialist workforce offers the secular counterpart — the same engineering question answered in a different register.',
        citation: 'Association of Biblical Counselors. *About the ABC*. Accessed 2026.',
        link: 'https://christiancounseling.com/',
        eli5: 'The Association of Biblical Counselors is a national group that trains regular people — not licensed therapists — to offer structured counseling rooted in Christian scripture. No insurance needed, cost is low. For people inside the tradition, it’s one of the most accessible counseling options in the country.',
        narrator: 'ABC is one of the doors. Not the only one. It is here because it is teachable, low-cost, and does not ask for insurance. If you are inside the Christian tradition, it fits. If you are not, the next page has other routes. What matters is that the door opens onto a trained person in a room that can hold you.'
      },
      {
        title: 'Routes When ABC Does Not Fit',
        year: 1963,
        gesture: 'Community Mental Health Act and AAPC originate the institutional base. Open Path Collective (2013) and teletherapy extend it. Sliding scales exist.',
        body: 'The 1963 Community Mental Health Act, signed by President Kennedy, established federally funded community mental health centers still operating in every state. The American Association of Pastoral Counselors was founded the same year. Open Path Collective (2013) offers a nationwide sliding-scale therapist directory with sessions under $80. Most CMHCs, AAPC members, and Open Path clinicians take sliding-scale cash payment without insurance.',
        citation: 'Community Mental Health Act of 1963, Pub. L. 88-164; Open Path Collective, openpathcollective.org.',
        link: 'https://openpathcollective.org/',
        eli5: 'In 1963 President Kennedy signed a law that put federal money into local mental-health centers so people could get help near home. The American Association of Pastoral Counselors was founded the same year. Open Path Collective (started 2013) is an online directory of therapists who take sliding-scale cash payment — sessions under eighty dollars. Most of these options don’t require insurance.',
        narrator: 'There are more doors than people know about. Clinical therapy is the default one. It also often involves a wait list and a question about whether your insurance is compatible — and for many people one or both of those stops them. When the default door is slow or closed, the others are still open. Community mental health centers take sliding scale. Open Path lists clinicians under eighty dollars a session. Pastoral counselors exist in every denomination. The witness is available. The witness is often cheaper and nearer than people think. The barrier is usually knowing where to look.'
      },
      {
        title: 'The Listening',
        year: 1957,
        gesture: 'Carl Rogers — *The Necessary and Sufficient Conditions of Therapeutic Personality Change*. Unconditional positive regard is the mediating variable.',
        body: 'Rogers named six relational conditions he argued were necessary and sufficient for therapeutic change. The core three — congruence in the therapist, unconditional positive regard toward the client, empathic understanding — have been validated repeatedly in outcome research as the variables that mediate change more reliably than any specific technique. The listening is the active ingredient.',
        citation: 'Rogers, C. R. (1957). *Journal of Consulting Psychology*, 21(2), 95–103.',
        link: 'https://en.wikipedia.org/wiki/Carl_Rogers',
        quote: 'For constructive personality change to occur, it is necessary that these conditions exist and continue over a period of time.',
        eli5: 'Carl Rogers was a therapist who figured out what actually makes therapy work. It’s not clever techniques — it’s how the therapist listens: without judgment, trying to understand the person fully. Decades of research keep showing this kind of listening matters more than any specific method.',
        narrator: 'Rogers named what mediates outcomes. Not technique. Not credentials. Not walls. He named three conditions: a person being real with you, holding you without judgment, and trying to understand what you actually mean. Those three can happen at a kitchen table. On a porch. On a hike. By a friend. Clinical training is one way to deliver them. It is not the only way. If someone in your life can do the three, they are the witness. The witness is accessible. You do not have to pay for it.'
      },
      {
        title: 'Mercy, Not Malfunction',
        year: 2026,
        gesture: 'Déjà vu is the system checking itself. The resurfaced memory is the system asking to be seen. The rewrite is the answer the brain is built for.',
        body: 'The book closes where it began. Every finding in the preceding eighty-five pages describes a mind engineered for its own repair — one that flags its own errors, holds its memories for editing, reorganizes its cortex under load, and responds to witness with measurable healing. The signal is not malfunction. It is mercy, built in. The protocols in this book are the reader’s invitation to answer it.',
        citation: 'Synthesis of the preceding eighty-five citations.',
        link: '/contents',
        eli5: 'Here’s the short version of everything in this book: your brain is built to heal itself. Déjà vu is the brain checking its own work. A repressed memory coming back is the brain asking for attention. The urge to write about something painful is the brain using a built-in repair tool. The protocols in this book are ways to answer what your mind is already asking for.',
        narrator: 'This is the book. Your brain flags what it has hidden. Your brain rewrites what it has held. Your brain responds to a witness with measurable repair. What I found — and what the research finds too — is that the locked thing needed to be felt, and the felt thing needed to be forgiven. The fifth step. The expressive writing. Coherence therapy. Turning toward. Every protocol is a version of: feel it, forgive it, let the brain do what it was built to do. The signal is not malfunction. It is mercy, built in.'
      }
    ]
  }
];

// Build the flat, chronologically-sorted list and assign sequential numbers 01..N.
const flatRaw = rawParts.flatMap((p, themeIndex) =>
  p.sections.map((s, withinTheme) => ({
    ...s,
    theme: p.theme,
    themeIndex,
    withinTheme
  }))
);

export const flat = flatRaw
  .sort((a, b) => a.year - b.year || a.themeIndex - b.themeIndex || a.withinTheme - b.withinTheme)
  .map((s, i) => ({
    ...s,
    num: String(i + 1).padStart(2, '0'),
    chronoIndex: i
  }));

export const themes = rawParts.map((p) => ({
  theme: p.theme,
  sections: flat.filter((s) => s.theme === p.theme)
}));

export const YEAR_MIN = 1880;
export const YEAR_MAX = 2030;

export function indexOf(num) {
  return flat.findIndex((s) => s.num === num);
}

export function next(num) {
  const i = indexOf(num);
  return i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
}

export function prev(num) {
  const i = indexOf(num);
  return i > 0 ? flat[i - 1] : null;
}
