---
title: "Vulkan Rendering Engine"
date: 2024-10-19
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

## Overview

A small software ray tracer created for a Graphic Programming course.
This project is a CPU based raytracer intended as an educational project to explore PBR, BTRF's and core graphics programming principles.

## Highlights

- **Physical-Based Rendering (PBR)** - PBR based on BRDF's (core PBR, without environment lighting or textures)
- **MSAA** - Controllable MSAA, samples are taken in [Grid uniform distribution pattern](https://en.wikipedia.org/wiki/Supersampling#Supersampling_patterns)
- **Runtime render settings** - Keyboard shortcuts for shadows, lighting modes and sample count
- **Multithreaded rendering** - Parallelizes rendering across all the CPU cores
- **Interactive camera** - Controllable camera with movement & rotation (you can find the control over [here](#controls))
- **Culling modes** - Forward, backward & neither culling

## Controls

- `F2` - Toggle Shadows
- `F3` - Toggle shading visualization
- `Up Arrow`/`Down Arrow` - Increase/decrease MSAA sample count [1, 4, 16]
- `Left Arrow`/`Right Arrow` - Load previous/next scene
- `WASD` - Move camera
- `RMB (hold)` + `mouse move` - Rotate camera (pitch & yaw)

## Disclaimers

- This was my first interaction with Graphics Programming in general.
- The codebase is organized for week-by-week course progression. Scenes are ordered based on the weeks of class, which makes it easy to see incremental improvements. 
- This was a 4.5 week course assignment. There is significant room for optimization and refactoring, but the project was completed within the given time frame (including the   optional extra rendering feature, MSAA).
- MSAA si implemented as per-pixel supersampling using a grid uniform distribution of sample positions (samples per pixel are averaged to produce final pixel). This is a simple but effective anti-aliasing approach for a CPU render.