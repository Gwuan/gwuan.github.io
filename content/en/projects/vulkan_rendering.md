---
title: "Vulkan Rendering Engine"
date: 2024-10-19
tags: ["Graphics Programming", "Real-time Rendering", "C++"]
repo: "https://github.com/Gwuan/VulkanDemo"
youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
techs: ["Vulkan", "C++17", "GLSL", "GLM"]
images:
  - "/images/projects/vulkan-demo-1.png"
  - "/images/projects/vulkan-demo-2.png"
draft: false
layout: "project"
---

## Overview

A custom rendering engine built from scratch using the Vulkan API. This project demonstrates low-level graphics programming concepts including render passes, descriptor sets, and pipeline management.

## Key Features

- **Physical-Based Rendering (PBR)** - Implementation of modern PBR shading model
- **Deferred Rendering Pipeline** - Multi-pass rendering for complex lighting scenarios
- **Custom Memory Management** - Efficient GPU memory allocation system
- **Dynamic Scene Graph** - Hierarchical transform system for complex scenes

## Technical Challenges

### Vulkan Synchronization
One of the biggest challenges was implementing proper synchronization between CPU and GPU operations. I used:
- Semaphores for GPU-to-GPU synchronization
- Fences for CPU-to-GPU synchronization
- Pipeline barriers for image layout transitions

### Shader System
Built a flexible shader loading and compilation system that:
- Compiles GLSL to SPIR-V at runtime
- Caches compiled shaders for faster load times
- Supports hot-reloading for rapid iteration

## What I Learned

This project taught me fundamental graphics programming concepts that go beyond just using an API:
- Memory alignment and padding requirements
- Command buffer recording and submission
- Pipeline state management
- Resource lifetime management

## Future Improvements

- Implement compute shader particles
- Add ray-traced shadows
- Optimize memory allocation strategy
- Add more post-processing effects