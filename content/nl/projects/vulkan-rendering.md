---
title: "Vulkan Render Engine"
tags: ["Graphics Programming", "Real-time Rendering", "C++"]
techs: ["Vulkan", "C++20", "GLSL", "SDL2"]
images:
draft: false
layout: "project"
---

## Korte overzicht

Een persoonlijke render engine die van nul werd opgebouwd met de Vulkan API. Dit project toont low-level graphics programming concepten zoals render passes, bindless rendering, dynamic rendering en deferred rendering.

## Hoogtepunten

- **Physical-Based Rendering (PBR)** - Implementatie van moderne PBR shading model
- **Deferred Rendering Pipeline** - Multi-pass rendering voor scenes met complexe belichting
- **glTF Support** - Importeert glTF scenes, inclusief de belichting en de materials
- **Custom material system** - Maakt automatisch materialen en de juiste textures aan tijdens importatie

## Controls

- `WASD` - Camera verplaatsing
- `RMB (hold)` + `mouse move` - Camera rotatie (pitch & yaw)
- `Scroll wheel` - Controleer de bewegingssnelheid van de camera

## Wat ik geleerd heb

Dit project leerde me de fundamentele concepten van graphics programming aan die, de veel verder gaan dan enkel maar de Vulkan API te gebruiken:
- Memory alignment and padding requirements
- Command buffer recording and submission
- Pipeline state management
- Resource lifetime management

## Mogelijke verbeteringen

- Ray-traced shaduwen en reflecties toevoegen
- Een editor implementeren zodat je met gizmos de transformaties van objecten kan manipuleren
- Een shader editor toevoegen die de GLSL code automatisch compiled & update als je jouw shader opslaat
- Optimalizeren qua memory allocation
- Mogelijkheid toevoegen voor post-processing effects