---
title: "Souper Bloody"
date: 2026-03-27
tags: ["Unity", "C#", "Steam"]
techs: ["Unity", "C#", "Steam"]
draft: false
layout: "project"
---

{{<youtube 1jC-2FVFGDI>}}
\
{{<steam-store-widget appID="4368980" utm="jelle-portfolio">}}

## Overview
Souper Bloody was built by a team of six students, including myself, as a third-year group project in the Digital Arts & Entertainment (DAE) bachelor at Howest (Hogeschool West-Vlaanderen) in Belgium. The project was selected for a cross-institution collaboration with [RITCS](https://www.ritcs.be) and the [Royal Conservatoire of Ghent](https://schoolofartsgent.be/): the music was composed by Joshua Mas (Royal Conservatoire of Ghent) and the narrative was written by Elise Himbaza Iradukunda (RITCS). Development ran from mid September to the end of November, 4 days a week.

## My Role
I served as lead programmer. Three of us wrote code in total: two teammates specialised in game programming and focused on the gameplay mechanics, their area of expertise, while I built the underlying systems those mechanics relied on, along with the overall technical architecture and integrations. The upgrade system, for example, is what actually applied changes to player jump force, damage, and other stats that the mechanics programmers tuned.

I wrote the dialogue system, the world/map system, the upgrade system, the Steam integration, and the localisation pipeline largely from design through to shipping. The project leaned on only two external packages: Steamworks.NET and DOTween.

My main approach throughout was keeping things editable in the Unity inspector wherever possible. The more behaviour designers could change without touching code, the faster we could iterate on playtest feedback.

## Dialogue system with localisation
The most interesting problem on the project came from the collaboration itself. Our writer worked remotely and didn't have access to our Unity project, so I had to find a way to let her work outside Unity while keeping the workflow clean.

For this problem I used the [Google Sheet integration of the Unity locales](https://docs.unity3d.com/Packages/com.unity.localization@1.5/manual/Google-Sheets.html). In the sheet, the writer selected the name of a character and wrote the English version of each line. The sheet then auto-translated it into Dutch and Spanish via Google Translate. Because the team was fluent in all three languages, we could hand-correct any translation that needed it. Inside the game, the dialogue system read the full table, served the correct line per character and language, and resolved the character portrait from a small database keyed by character name.

The result was a relatively clean workflow. The writer could just work without interference. Before creating a build, the only step on our side was a single button press to pull the latest version of the dialogues and add the keys for new lines on the dialogue component.

It had honest downsides. Character names weren't translatable under this setup, and the pipeline was fragile to simple mistakes. We'd agreed on one sheet per pool of random lines or per dialogue sequence, but that convention occasionally slipped (for example, two different dialogues ending up in a single sheet).

## Steam integration behind a service locator
The Steam integration covers achievements, some of them backed by Steam stats, and additionally basic Steam Cloud support. Which was configured to sync the JSON save file.

The whole integration sits behind a service allocator abstraction. That let me toggle Steam on or off with a single preprocessor define, which also cleanly unhooks the achievement implementation. Which also means that a different backend, for example: a custom achievement system or a port to another platform such as Epic Games, could be swapped in without touching gameplay code.

## Other systems
### Procedural world layout
Each world draws from multiple handcrafted maps:
- 9 world themed maps
    - 3 small
    - 3 medium
    - 3 large
- 1 minigame map
- 1 bonus map (bonus health or in-game currency)
- 1 boss map (always the last map)

Arranged into a randomised diamond shape, letting the player choose their route while guaranteeing a different layout every run. Connectivity and progression is handled through a central node manager.
 
### Upgrades and perks 
Permanent progression upgrades, **Dishes**, are authored as ScriptableObjects, so designers tune stats like jump force and damage entirely in the inspector. 

Run only perks, **Spices**, are a separate items that hooks into C# Actions and UnityEvents. I'd planned to create them with visual scripting so it was easier to adjust the behavior for the designers, but I got some issues along the way that I couldn't resolve in the 8 hour window they had to ship in. So in the end I hand coded all 12 spices instead, including the desired player feedback for each.
 
### Designer tooling
Components like the cauldron teleporter expose their behaviour through inspector dropdowns, and a custom property drawer on the upgrade system prevents selecting two conflicting upgrade paths, catching configuration bugs at authoring time rather than runtime. Also the dialogue components had a custom drawer where you could select multiple dialogue lines for a non linear sequence, such as the *random dialogue line* component.

## Shipping & Post-Launch
Souper Bloody was the first project of mine to be selected for a Steam release. We didn't build it expecting to ship on steam. After submission, a jury selected the top entries for a Steam release, and ours was among them.

Post-launch fixes were small. For example, a jump/ground-state bug where the states could stack if the player clipped their head on a ceiling or dropped a short distance. The root cause was a dependency on Unity events, so I rewrote the state handling to no longer rely on them.

## Reflection
This was my first large project to reach an actual release, and it taught me a lot about how a shipped codebase should be structured.

Some of my early choices cost time: I built a few things more elaborately than the game ended up needing, which compressed the schedule later and forced parts of the code to be rushed. In those rushed areas I skipped the upfront architecture work and ended up with tightly coupled code that didn't use the patterns I'd have wanted. The save system is the clearest case, it shipped functional, but I'd design it differently today. The implementation was near the end of the production phase, I underestimated how tricky a save system could be, that late in development.

With hindsight, I'd invest more in architecture and pattern planning up front, and give the save system the time it deserved. These introduced no new bugs, just maintainability cost in the long run. Having made those mistakes once, I now design with them in mind.