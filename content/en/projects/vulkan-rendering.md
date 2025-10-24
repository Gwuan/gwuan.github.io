---
title: "Vulkan Rendering Engine"
tags: ["Graphics Programming", "Real-time Rendering", "C++"]
techs: ["Vulkan", "C++20", "GLSL", "SDL2"]
images:
draft: false
layout: "project"
---


## Overview

A personal rendering engine built from scratch using the Vulkan API. This project demonstrates low-level graphics programming concepts including render passes, bindless rendering, dynamic rendering and deferred rendering.

## Highlights

- **Physical-Based Rendering (PBR)** - Implementation of modern PBR shading model
- **Deferred Rendering Pipeline** - Multi-pass rendering for complex lighting scenarios
- **glTF Support** - Imports glTF scenes with the included lights & materials
- **Custom material system** - Automatically creates materials during import

## Controls

- `WASD` - Move camera
- `RMB (hold)` + `mouse move` - Rotate camera (pitch & yaw)
- `Scroll wheel` - Control camera speed

## What I Learned

This project taught me fundamental graphics programming concepts that go beyond just using an API:
- Memory alignment and padding requirements
- Command buffer recording and submission
- Pipeline state management
- Resource lifetime management

## Future Improvements

- Add ray-traced shadows & reflections
- Implement an editor with gizmos to move objects around
- Add a shader editor that compiles and updates the shader upon saving
- Optimize memory allocation strategy
- Add more post-processing effects