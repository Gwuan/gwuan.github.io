---
title: "Software Raytracer"
date: 2024-11-15
tags: ["Graphics Programming", "Real-time Rendering", "C++"]
repo: "https://github.com/Gwuan/Software-Raytracer"
techs: ["SDL", "C++20", "CMake"]
images:
  - "/images/projects/software-raytracer/RayTracing_Buffer_Reference_Combined.png"
  - "/images/projects/software-raytracer/balls.png"
draft: false
layout: "project"
---

![My GIF description](/images/projects/software-raytracer/softRay.gif)

## Overzicht

Een kleine software raytracer als opdracht voor het vak `Graphics Porgramming 1`. Dit project is vooral bedoeld als een educatief project om de kern principes van raytracing en BRTF's te ontdekken.

## Hoogtepunten

- **Physical-Based Rendering (PBR)** - PBR gebaseerd op BRDF's (core PBR, zonder omgevings verlichting zoals IBF en textures)
- **MSAA** - Controlleerbare MSAA, de samples worden genomen volgens de [Grid uniform distribution pattern](https://en.wikipedia.org/wiki/Supersampling#Supersampling_patterns)
- **Runtime render settings** - Sneltoetsen voor shaduwen, verschillende shading modes en sample count voor de MSAA
- **Multithreaded rendering** - De raytracer gebruikt momenteel alle beschikbare threads van de processor (CPU)
- **Interactive camera** - Besuurbare camera met beweging & rotatie (de sneltoetsen kan je [hier](#controls) terugvinden) 
- **Culling modes** - Forward, backward of geen culling

## Sneltoetsen

- `F2` - Toggle Shadows
- `F3` - Toggle shading visualization
- `Up Arrow`/`Down Arrow` - Increase/decrease MSAA sample count [1, 4, 16]
- `Left Arrow`/`Right Arrow` - Laad vorige/volgende scene
- `WASD` - Verplaats camera
- `RMB (hold)` + `mouse move` - Roteer camera (pitch & yaw)

## Disclaimers

- Dit was mijn eerste kennismaking met graphics programming.
- De codebase is gestructureerd op basis van de lessen. De scenes bevatten de progressie per week, waardoor je een visueel beeld hebt hoe mijn progressie eruit ziet op weekbasis.
- Ik had 5 weken de tijd voor dit project (incl. andere lessen), dus er is nog veel ruimte om te optimalizeren en om te herstructureren.
- MSAAA is geimplementeerd als per pixel supersampling die gebruikt maakt van een grid uniform distribution layout. Een simpele manier van MSAA die visueel goede prestaties heeft.