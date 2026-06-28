---
title: "Stage @ VRT - Virtuele Productie Developer"
date: 2026-06-27
tags: ["Unreal Engine", "C++", "Virtual Production", "AR", "XR"]
techs: ["Unreal Engine 5", "C++", "TouchDesigner", "XR", "AR", "Unreal Plugin"]
draft: true
layout: "project"
---

## Overzicht

Tijdens het tweede semester van mijn laatste jaar in de bacheloropleiding Game Development aan Howest Digital Arts & Entertainment liep ik stage bij VRT, de openbare omroep van België. Gedurende de stage werkte ik aan meerdere projecten: van live uitzendingen en interne tooling tot R&D en een afsluitende stagepresentatie op een grote LED-wall, allemaal rond real-time virtuele productie.

## Mijn rol

Als Virtuele Productie Developer was ik betrokken bij de technnische kant van TV-producties. Afhankelijk van het project werkte ik zelfstandig of in nauwe samenwerking met verschillende afdelingen binnen VRT. Mijn werk varieerde van het ontwikkelen van Unreal Engine tools/plugins voor productie doeleinden en uitvoeren van research- en testprojecten op de productie-infrastructuur, tot het leveren van documentatie voor collega's ongeacht hun technische achtergrond.

## WK voetbal 2026

Voor de uitzendingen rond de FIFA Wereldkampioenschap 2026 op Sporza was ik verantwoordelijk voor de live media-input van de jumbotron in de virtuele set, gebouwd in Unreal Engine 5. Dit omvatte het opzetten en configureren van de live feed zodat deze in real time op de jumbotron kon worden weergegeven in AR tijdens de uitzending. Daarnaast ondersteunt de jumbotron ook meerdere API calls waardoor de regie de volledige controle heeft over de rendering & live feed van de jumbotron.

Op het vlak van rendering implementeerde ik zowel DLSS als ray tracing, voor AR en XR (LED-wall). Ray tracing haalde de live uitzendingen, maar DLSS moest worden geschrapt. De neveneffecten van DLSS kwamen niet overeen met de kwaliteitsstandaarden van een live uitzending.

![Beauty shot van de virtuele WK set tijdens uitzending](/images/projects/internship/wk_screenshot.png)

## Geografische tool voor VRT NWS

Binnen VRT leefde de vraag om storytelling te verrijken met dynamische 3D-content vanuit realistische wereldrendering, op verschillende plekken in de wereld. Maar tegelijk ook toegankelijk genoeg voor grafische designers zonder ervaring in Unreal Engine.

Ik ontwikkelde een op maat gemaakte Unreal Engine plugin die zowel beschikt over een vereenvoudigde interface als de extra gevraagde features. Via de vereenvoudigde interface kunnen de grafische designers alle relevante elementen bedienen zonder al te veel ervaring te hebben met de editor van Unreal Engine. Via deze interface konden ze bijvoorbeeld de locatie van de scène aanpassen op basis van geo-coördinaten of een adres, waarbij ook de mogelijkheid was om de actuele tijd en weeromstandigheden weer te geven of deze aspecten manueel aan te passen.

Dit project was een nauwe samenwerking met de VRT NWS-afdeling, waarbij ik zij aan zij werkte met grafische designers en de creatief directeur van de afdeling. Tijdens de onboarding begeleidde ik de designers hands-on bij het verkennen van de tool en het uitwerken van concrete cases. Daarnaast schreef ik volledige documentatie en handleidingen zodat iedereen, ongeacht hun technische achtergrond, meteen aan de slag kan gaan met een nieuw project.

{{< image-compare before="/images/projects/internship/nws_tool_day.webp" after="/images/projects/internship/nws_tool_night.webp" >}}

## R&D

Naast de grotere projecten werkte ik aan verschillende kleinere research- en testprojecten om nieuwe technologieën te verkennen en zo de limieten op te sporen van de huidige hardware en infrastructuur. Het ging daarbij vooral om het configureren en testen van verschillende nDisplay configuraties in combinatie met de render cluster, op een LED-wall van ±33m bij ±4m. Ik werkte hands-on met SwitchBoard om de betreffende projecten op te zetten en om prestaties en stabiliteit te evalueren over verschillende setups, telkens met behoud van de visuele kwaliteit.

## Technologie & Tools

- Unreal Engine 5
- nDisplay
- SwitchBoard
- Cesium
- TouchDesigner