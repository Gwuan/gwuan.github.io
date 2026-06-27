---
title: "Internship @ VRT - Virtual Production Developer"
date: 2026-06-27
tags: ["Unreal Engine", "C++", "Virtual Production", "AR", "XR"]
techs: ["Unreal Engine 5", "C++", "TouchDesigner", "XR", "AR", "Unreal Plugin"]
draft: true
layout: "project"
---

## Overview

During the second semester of my senior year in the Game Development bachelor at Howest Digital Arts & Entertainment, I completed my internship at VRT, the public broadcaster of Belgium. Over the course of the intership I worked on multiple projects spanning live broadcast productions, internal tooling, R&D, and an end-of-intership presentation delivered on a large LED wall, all centered around real-real time virtual production.

## My Role

As a Virtual Production Developer I was involved in the technical side of TV productions. Depending on the project, I worked independently or in close collaboration with different departments within VRT. My work ranged from developing Unreal Engine tools/plugins for production purposes and carrying out research & test projects on the production infrastructure, to delivering documentation for colleagues regardless of their technical background.

## FIFA World Cup 2026

For the broadcasts surrounding the 2026 FIFA World Cup on Sporza, I was responsible for the live media input of the jumbotron in the virtual set, built in Unreal Engine 5. This involved setting up and configuring the live feed so it could be displayed in real time on the jumbotron in AR during the broadcast. Additionally, the jumbotron supports multiple API calls giving the director full control over the rendering and live feed of the jumbotron.

On the rendering side, I implemented both DLSS and ray tracing for both AR & XR (LED-wall). Ray tracing made it into the live broadcasts, but DLSS had to be dropped. The side effects of DLSS did not meet the quality standards of a live broadcast.

![Beauty shot of the world cup virtual set during broadcast](/images/projects/Internship/wk_screenshot.png)

## Geographical tool for VRT NWS

Within VRT there was a need to enrich storytelling with dynamic 3D content through realistic world rendering, across different locations around the world — while remaining accessible enough for graphic designers with no Unreal Engine experience.

I developed a custom Unreal Engine plugin featuring both a simplified interface and the additionally requested features. Through the simplified interface, graphic designers can control all relevant elements without needing extensive experience with the Unreal Engine editor. For example, they could adjust the location of the scene based on geo-coordinates or an address, with the option to display the current time and weather conditions or adjust these aspects manually.

This project was a close collaboration with the VRT NWS department, working alongside graphic designers and the department's creative director. During the onboarding I guided the designers hands-on through exploring the tool and working out concrete use cases. I also wrote full documentation and guides so that anyone, regardless of their technical background, can get started on a new project straight away.

{{< image-compare before="/images/projects/Internship/nws_tool_day.webp" after="/images/projects/Internship/nws_tool_night.webp" >}}

## Technologies & Tools

- Unreal Engine 5
- nDisplay
- SwitchBoard
- Cesium
- TouchDesigner