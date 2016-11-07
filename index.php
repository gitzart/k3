<!DOCTYPE html>
<html lang="en-US" prefix="og: http://ogp.me/ns#">
  <head>
    <meta charset="utf-8">
    <title>Cat Clicker</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- OGP meta tags -->
    <meta property="og:title" content="Cat Clicker" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://catclickr.herokuapp.com/" />
    <meta property="og:image" content="https://catclickr.herokuapp.com/images/url-preview-img.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="1024" />
    <meta property="og:image:height" content="576" />
    <meta property="og:description" content="Pat these cute purrfect cats.">
    <meta property="og:locale" content="en_US" />
    <meta property="og:locale:alternate" content="fr_FR" />
    <meta property="og:locale:alternate" content="es_ES" />

    <!-- Jquery -->
    <!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script> -->
    <script src="/scripts/jquery-3.1.1.min.js"></script>

    <!-- Reset.css -->
    <link rel="stylesheet" href="/css/reset.css">

    <!-- Material design -->
    <!-- <link rel="stylesheet" href="https://code.getmdl.io/1.2.1/material.blue_grey-amber.min.css" />
    <script defer src="https://code.getmdl.io/1.2.1/material.min.js"></script> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="/css/material.min.css">
    <script src="/scripts/material.min.js"></script>

    <!-- Custom -->
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <!-- Website text logo -->
    <header class="cc-header">
      <h1 class="cc-logo-text mdl-card__title-text">Cat Clicker</h1>
      <span class="mdl-card__subtitle-text">beta</span>
    </header>

    <!-- Container the cards are picked from -->
    <div class="cc-cards">
      <div class="cc-scroller">
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
        <div class="mdl-card mdl-shadow--2dp"></div>
      </div>
    </div>

    <!-- Where the actual Clicking things happen -->
    <div class="cc-body">
      <div class="cc-hint">
        <i class="material-icons">notifications</i>

        <div class="cc-noti-text">
          <strong>What is Cat Clicker?</strong>
          <p>It's a game where you score for cats by clicking them.</p>
        </div>
      </div>
    </div>

    <!-- Footer information -->
    <footer class="cc-footer">
      <div class="cc-footer-text">
        © 2016. Cat Clicker.
        <i class="material-icons">code</i> in YGN.
      </div>
    </footer>

    <script src="/scripts/script.js"></script>
  </body>
</html>