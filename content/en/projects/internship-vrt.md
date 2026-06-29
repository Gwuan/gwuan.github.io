---
title: "Internship @ VRT - Virtual Production Developer"
date: 2026-06-27
tags: ["Unreal Engine", "C++", "Virtual Production", "AR", "XR"]
techs: ["Unreal Engine 5", "C++", "TouchDesigner", "XR", "AR", "Unreal Plugin"]
draft: false
layout: "project"
---

## Overview

During the second semester of my senior year in the Game Development bachelor at Howest Digital Arts & Entertainment, I completed my internship at VRT, the public broadcaster of Belgium. Over the course of the intership I worked on multiple projects spanning live broadcast productions, internal tooling, R&D, and an end-of-intership presentation delivered on a large LED wall, all centered around real-real time virtual production.

## My Role

As a Virtual Production Developer I was involved in the technical side of TV productions. Depending on the project, I worked independently or in close collaboration with different departments within VRT. My work ranged from developing Unreal Engine tools/plugins for production purposes and carrying out research & test projects on the production infrastructure, to delivering documentation for colleagues regardless of their technical background.

## FIFA World Cup 2026

For the broadcasts surrounding the 2026 FIFA World Cup on Sporza, I was responsible for the live media input of the jumbotron in the virtual set, built in Unreal Engine 5. This involved setting up and configuring the live feed so it could be displayed in real time on the jumbotron in AR during the broadcast. Additionally, the jumbotron supports multiple API calls giving the director full control over the rendering and live feed of the jumbotron.

On the rendering side, I implemented both DLSS and ray tracing for both AR & XR (LED-wall). Ray tracing made it into the live broadcasts, but DLSS had to be dropped. The side effects of DLSS did not meet the quality standards of a live broadcast.

![Beauty shot of the world cup virtual set during broadcast](/images/projects/internship/wk_screenshot.png)

## Geographical tool in Unreal Engine

Within VRT there was a need to enrich storytelling with dynamic 3D content through realistic world rendering, across different locations around the world, while remaining accessible enough for graphic designers with no Unreal Engine experience.

I developed a custom Unreal Engine plugin featuring both a simplified interface and the additionally requested features. Through the simplified interface, graphic designers can control all relevant elements without needing extensive experience with the Unreal Engine editor. For example, they could adjust the location of the scene based on geo-coordinates or an address, with the option to display the current time and weather conditions or adjust these aspects manually.

{{<youtube Uk6BClAGeFw>}}

To provide additional support, I wrote full documentation and guides so that anyone, regardless of their technical background, can get started on a new project straight away.

{{<image-compare before="/images/projects/internship/tool_day.webp" after="/images/projects/internship/tool_night.webp">}}

## R&D

Alongside the main projects, I carried out several small research and testing projects to explore new technologies and their limitations on the current hardware & infrastructure. This work centered on the nDisplay setup driven by the render cluster on a ±33m x ±4m LED-wall, working hands-on with SwitchBoard to spin up the projects in question and evaluate performance and stability across setups, all while preserving visual quality.

## Internship presentation

With two weeks left in my internship, I built my end-of-intership presentation entirely in TouchDesigner. Which was delivered live on the LED wall itself. While I had no prior experience with TouchDesigner, I learned it from scratch with guidance from my colleagues.

The result was a fully interactive presenter interface that gave me real-time control over the presentation from the stage: switching slides, triggering animations, rotating 3D objects and so on.

{{<video-pair first="/videos/projects/intership/TD_WK.webm" second="/videos/projects/intership/TD_cesium_weather.webm">}}

## Technologies & Tools

- Unreal Engine 5
- nDisplay
- SwitchBoard
- Cesium
- TouchDesigner