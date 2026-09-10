---
layout: page
title: Songwriting
description: Eigene Songs — Gedanken und Gefühle in Melodien
image: assets/images/band.jpg
nav-menu: true
---

## Meine eigene Musik

Neben meinen Auftritten mit Coverliedern schreibe und veröffentliche ich eigene Musik. Songwriting ist für mich eine Möglichkeit, Gedanken und Gefühle in Melodien zu verwandeln und Momente musikalisch zu erzählen.

### Zuhören

<div class="page-video page-video--spotify" id="spotify-player">
  <div class="external-media-consent" data-spotify-consent>
    <p>Der Spotify-Player wird erst nach deiner Einwilligung geladen. Dabei werden deine IP-Adresse, Browser- und Geräteinformationen sowie die aufgerufene Seite an Spotify übermittelt. Spotify kann Cookies oder ähnliche Technologien einsetzen.</p>
    <button type="button" class="button special" data-load-spotify>Spotify-Player laden</button>
    <p class="external-media-consent__privacy">
      <a href="https://www.spotify.com/de/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">Datenschutzhinweise von Spotify</a>
    </p>
  </div>
</div>

<script>
(function () {
  var consent = document.querySelector('[data-spotify-consent]');
  if (!consent) return;

  var button = consent.querySelector('[data-load-spotify]');
  if (!button) return;

  button.addEventListener('click', function () {
    var player = document.getElementById('spotify-player');
    if (!player) return;

    var iframe = document.createElement('iframe');
    iframe.src = 'https://open.spotify.com/embed/track/0XotjQ8PBU4Oa7xT5rBeOL?utm_source=generator';
    iframe.title = 'Lenia — Song auf Spotify';
    iframe.height = '152';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'eager';

    player.classList.add('is-loaded');
    player.replaceChildren(iframe);
  }, { once: true });
})();
</script>
