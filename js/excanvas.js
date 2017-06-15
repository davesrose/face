





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-49f1e970452082ece91a8cb77754f31a769167f4f9cd527a501b1cafa52bb1b6.css" integrity="sha256-SfHpcEUgguzpGoy3d1TzGnaRZ/T5zVJ6UBscr6UrsbY=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-dc6bedc272ce99e6266b0bb35c3b9a610565a74149dac599f9ae2870e572d47a.css" integrity="sha256-3GvtwnLOmeYmawuzXDuaYQVlp0FJ2sWZ+a4ocOVy1Ho=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>getUserMedia.js/excanvas.js at gh-pages · addyosmani/getUserMedia.js</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars2.githubusercontent.com/u/110953?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="addyosmani/getUserMedia.js" property="og:title" /><meta content="https://github.com/addyosmani/getUserMedia.js" property="og:url" /><meta content="getUserMedia.js - Shim for getUserMedia(). Uses native implementation for modern browsers and a Flash fallback for everyone else." property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTc4NTQzNzY0OjcxM2IzOTcxMGIwYzk3ZWEzYjAwNjcyYTc0ODBlYmQxNjgzZmMxYmZkZTZlMzdlNzJlMjA2NTk1NmM5NmI2NGQ=--215be808937e031efb31ece079b6d75eff541044">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="C2D5:1D60:43558A:6045CF:5941FF10" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="C2D5:1D60:43558A:6045CF:5941FF10" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="25915633" name="octolytics-actor-id" /><meta content="davesrose" name="octolytics-actor-login" /><meta content="c65cb82cf739920900e2f4dc7280ef10ba0af6d8fc5e747f97ea6681854b5954" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="davesrose">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="M2ViOTQ3YzkwODA1ODU3MTliODJjOGM1MjdhOTNkZTFiZTk0NzU0ZmMzYTE1YzM3MjU2YWNhYWMzNzMzMGYyZnx7InJlbW90ZV9hZGRyZXNzIjoiNzYuMTExLjYwLjEyNiIsInJlcXVlc3RfaWQiOiJDMkQ1OjFENjA6NDM1NThBOjYwNDVDRjo1OTQxRkYxMCIsInRpbWVzdGFtcCI6MTQ5NzQ5NzM2MCwiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="d7fdbd3b61e83d5265f67cf33d960ec217a9ce33">

  <meta http-equiv="x-pjax-version" content="e68ac3fdc33f8d482b79762ed9f91d63">
  

      <link href="https://github.com/addyosmani/getUserMedia.js/commits/gh-pages.atom" rel="alternate" title="Recent Commits to getUserMedia.js:gh-pages" type="application/atom+xml">

  <meta name="description" content="getUserMedia.js - Shim for getUserMedia(). Uses native implementation for modern browsers and a Flash fallback for everyone else.">
  <meta name="go-import" content="github.com/addyosmani/getUserMedia.js git https://github.com/addyosmani/getUserMedia.js.git">

  <meta content="110953" name="octolytics-dimension-user_id" /><meta content="addyosmani" name="octolytics-dimension-user_login" /><meta content="2963398" name="octolytics-dimension-repository_id" /><meta content="addyosmani/getUserMedia.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="2963398" name="octolytics-dimension-repository_network_root_id" /><meta content="addyosmani/getUserMedia.js" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/addyosmani/getUserMedia.js/blob/gh-pages/face-detection-demo/js/excanvas.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<div class="header" role="banner">
  <div class="container clearfix">
    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/search" class="js-site-search-form" data-scoped-search-url="/addyosmani/getUserMedia.js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/addyosmani/getUserMedia.js/blob/gh-pages/face-detection-demo/js/excanvas.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
            <li class="header-nav-item">
              <a href="/marketplace" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                Marketplace
</a>            </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       aria-expanded="false"
       aria-haspopup="true"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="addyosmani/getUserMedia.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/addyosmani/getUserMedia.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/davesrose"
       aria-label="View profile and more"
       aria-expanded="false"
       aria-haspopup="true"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@davesrose" class="avatar" src="https://avatars3.githubusercontent.com/u/25915633?v=3&amp;s=40" height="20" width="20">
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">davesrose</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/davesrose" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/davesrose?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="vY79iGlCN29bqT7Fohy2r3v0RdX25qNc/qZLAMWljROaip0VI9NJcmHOYbAYRtJdsCYbErTofpKjQ62d9CT7ww==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="s0Yo53KU+dMSvUDvJgc+I6CiHl0E5MkOcq0RdIGXL22UQkh6OAWHzijaH5qcXVrRa3BAmkbqFMAvSPfpsBZZvQ==" /></div>
      <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
        Sign out
      </button>
</form>  </div>
</div>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      


  


    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="c//LItOZiUzBqGbqds9UyfGXWl1XEMVdf6aO2EeA1aVtmBKe/H6eZbiaG7vFcSZV56EgUfhMl7qzzx/7BsTXtQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="2963398" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/addyosmani/getUserMedia.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/addyosmani/getUserMedia.js/watchers"
              aria-label="53 users are watching this repository">
              53
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
      <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="sET8sNz37n4ZfaRn+ohLSq+cebBos5vGzMr2ynToNYpQVB7pqzst6JZbLmwFF98Zd3G0S7CaCGFl1XPMR+Jw2g==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar addyosmani/getUserMedia.js"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/addyosmani/getUserMedia.js/stargazers"
           aria-label="778 users starred this repository">
          778
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="nafBLBfWcNUslcJh33DsFM/OqPFEu6HSFSUm/SvTNzPBOBU8jkJ+sN2w5M0nrX+liCTq/4IKIVmV1kHBWtLqqQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star addyosmani/getUserMedia.js"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/addyosmani/getUserMedia.js/stargazers"
           aria-label="778 users starred this repository">
          778
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="8ceJtKXjF9b4TJr7LM5Tfx2+dPO4IJTRU4ZObaC7FN1mTXHZdy+jS77qOwq8GCSute36y9DYIkBtCnR/jkSGLg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of addyosmani/getUserMedia.js to your account"
                aria-label="Fork your own copy of addyosmani/getUserMedia.js to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/addyosmani/getUserMedia.js/network" class="social-count"
       aria-label="135 users forked this repository">
      135
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/addyosmani" class="url fn" rel="author">addyosmani</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/addyosmani/getUserMedia.js" data-pjax="#js-repo-pjax-container">getUserMedia.js</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/addyosmani/getUserMedia.js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /addyosmani/getUserMedia.js" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/addyosmani/getUserMedia.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /addyosmani/getUserMedia.js/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">35</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/addyosmani/getUserMedia.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /addyosmani/getUserMedia.js/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">3</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/addyosmani/getUserMedia.js/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /addyosmani/getUserMedia.js/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/addyosmani/getUserMedia.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /addyosmani/getUserMedia.js/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/addyosmani/getUserMedia.js/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/addyosmani/getUserMedia.js/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
    
  <a href="/addyosmani/getUserMedia.js/blob/a0f839a214f1143a66b44410804fbb1c1e712158/face-detection-demo/js/excanvas.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:1f55fdbd369c89173f5d2a47949c6b8e -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">gh-pages</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/addyosmani/getUserMedia.js/blob/gh-pages/face-detection-demo/js/excanvas.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/addyosmani/getUserMedia.js/tree/v1.0.0/face-detection-demo/js/excanvas.js"
              data-name="v1.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0.0">
                v1.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/addyosmani/getUserMedia.js/tree/v1.0rc2/face-detection-demo/js/excanvas.js"
              data-name="v1.0rc2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0rc2">
                v1.0rc2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/addyosmani/getUserMedia.js/tree/v1.0rc/face-detection-demo/js/excanvas.js"
              data-name="v1.0rc"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.0rc">
                v1.0rc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/addyosmani/getUserMedia.js/tree/v0.3.0/face-detection-demo/js/excanvas.js"
              data-name="v0.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.3.0">
                v0.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/addyosmani/getUserMedia.js/tree/v0.2.0/face-detection-demo/js/excanvas.js"
              data-name="v0.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.2.0">
                v0.2.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/addyosmani/getUserMedia.js/find/gh-pages"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/addyosmani/getUserMedia.js"><span>getUserMedia.js</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/addyosmani/getUserMedia.js/tree/gh-pages/face-detection-demo"><span>face-detection-demo</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/addyosmani/getUserMedia.js/tree/gh-pages/face-detection-demo/js"><span>js</span></a></span><span class="separator">/</span><strong class="final-path">excanvas.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/addyosmani/getUserMedia.js/contributors/gh-pages/face-detection-demo/js/excanvas.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>
  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/addyosmani/getUserMedia.js/raw/gh-pages/face-detection-demo/js/excanvas.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/addyosmani/getUserMedia.js/blame/gh-pages/face-detection-demo/js/excanvas.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/addyosmani/getUserMedia.js/commits/gh-pages/face-detection-demo/js/excanvas.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/edit/gh-pages/face-detection-demo/js/excanvas.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0Fm9DFLZZEBmGHqmfP/KmPW+pr9G47WA4nEiIjGYU5UKdYsBbAiojcv+0nq8pjuwX021Ac6ZheluUVjYffKAcA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/addyosmani/getUserMedia.js/delete/gh-pages/face-detection-demo/js/excanvas.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Uc4piV+ZOHmNIi0e3LnCO4hH7nkgVf+j6fd0NlkQvWGCubTrPcLvMVWnO/RMRurLOVExDbVT15H9wLXVBKFr1A==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    10.2 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">document.createElement(&quot;canvas&quot;).getContext||function(){function i(){return this.context_||(this.context_=new w(this))}function k(a,b,c){var d=j.call(arguments,2);return function(){return a.apply(b,d.concat(j.call(arguments)))}}function m(a){var b=a.srcElement;switch(a.propertyName){case&quot;width&quot;:b.style.width=b.attributes.width.nodeValue+&quot;px&quot;,b.getContext().clearRect();break;case&quot;height&quot;:b.style.height=b.attributes.height.nodeValue+&quot;px&quot;,b.getContext().clearRect()}}function n(a){var b=a.srcElement;b.firstChild&amp;&amp;(b.firstChild.style.width=b.clientWidth+&quot;px&quot;,b.firstChild.style.height=b.clientHeight+&quot;px&quot;)}function r(){return[[1,0,0],[0,1,0],[0,0,1]]}function s(a,b){var c=r();for(var d=0;d&lt;3;d++)for(var e=0;e&lt;3;e++){var f=0;for(var g=0;g&lt;3;g++)f+=a[d][g]*b[g][e];c[d][e]=f}return c}function t(a,b){b.fillStyle=a.fillStyle,b.lineCap=a.lineCap,b.lineJoin=a.lineJoin,b.lineWidth=a.lineWidth,b.miterLimit=a.miterLimit,b.shadowBlur=a.shadowBlur,b.shadowColor=a.shadowColor,b.shadowOffsetX=a.shadowOffsetX,b.shadowOffsetY=a.shadowOffsetY,b.strokeStyle=a.strokeStyle,b.globalAlpha=a.globalAlpha,b.arcScaleX_=a.arcScaleX_,b.arcScaleY_=a.arcScaleY_,b.lineScale_=a.lineScale_}function u(a){var b,c=1;a=String(a);if(a.substring(0,3)==&quot;rgb&quot;){var d=a.indexOf(&quot;(&quot;,3),e=a.indexOf(&quot;)&quot;,d+1),f=a.substring(d+1,e).split(&quot;,&quot;);b=&quot;#&quot;;for(var g=0;g&lt;3;g++)b+=o[Number(f[g])];f.length==4&amp;&amp;a.substr(3,1)==&quot;a&quot;&amp;&amp;(c=f[3])}else b=a;return{color:b,alpha:c}}function v(a){switch(a){case&quot;butt&quot;:return&quot;flat&quot;;case&quot;round&quot;:return&quot;round&quot;;case&quot;square&quot;:default:return&quot;square&quot;}}function w(a){this.m_=r(),this.mStack_=[],this.aStack_=[],this.currentPath_=[],this.strokeStyle=&quot;#000&quot;,this.fillStyle=&quot;#000&quot;,this.lineWidth=1,this.lineJoin=&quot;miter&quot;,this.lineCap=&quot;butt&quot;,this.miterLimit=g*1,this.globalAlpha=1,this.canvas=a;var b=a.ownerDocument.createElement(&quot;div&quot;);b.style.width=a.clientWidth+&quot;px&quot;,b.style.height=a.clientHeight+&quot;px&quot;,b.style.overflow=&quot;hidden&quot;,b.style.position=&quot;absolute&quot;,a.appendChild(b),this.element_=b,this.arcScaleX_=1,this.arcScaleY_=1,this.lineScale_=1}function y(a,b,c,d){a.currentPath_.push({type:&quot;bezierCurveTo&quot;,cp1x:b.x,cp1y:b.y,cp2x:c.x,cp2y:c.y,x:d.x,y:d.y}),a.currentX_=d.x,a.currentY_=d.y}function z(a){this.type_=a,this.x0_=0,this.y0_=0,this.r0_=0,this.x1_=0,this.y1_=0,this.r1_=0,this.colors_=[]}function A(){}var a=Math,b=a.round,c=a.sin,d=a.cos,e=a.abs,f=a.sqrt,g=10,h=g/2,j=Array.prototype.slice,l={init:function(a){if(/MSIE/.test(navigator.userAgent)&amp;&amp;!window.opera){var b=a||document;b.createElement(&quot;canvas&quot;),b.attachEvent(&quot;onreadystatechange&quot;,k(this.init_,this,b))}},init_:function(a){a.namespaces.g_vml_||a.namespaces.add(&quot;g_vml_&quot;,&quot;urn:schemas-microsoft-com:vml&quot;,&quot;#default#VML&quot;),a.namespaces.g_o_||a.namespaces.add(&quot;g_o_&quot;,&quot;urn:schemas-microsoft-com:office:office&quot;,&quot;#default#VML&quot;);if(!a.styleSheets.ex_canvas_){var b=a.createStyleSheet();b.owningElement.id=&quot;ex_canvas_&quot;,b.cssText=&quot;canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}g_vml_\\:*{behavior:url(#default#VML)}g_o_\\:*{behavior:url(#default#VML)}&quot;}var c=a.getElementsByTagName(&quot;canvas&quot;);for(var d=0;d&lt;c.length;d++)this.initElement(c[d])},initElement:function(a){if(!a.getContext){a.getContext=i,a.innerHTML=&quot;&quot;,a.attachEvent(&quot;onpropertychange&quot;,m),a.attachEvent(&quot;onresize&quot;,n);var b=a.attributes;b.width&amp;&amp;b.width.specified?a.style.width=b.width.nodeValue+&quot;px&quot;:a.width=a.clientWidth,b.height&amp;&amp;b.height.specified?a.style.height=b.height.nodeValue+&quot;px&quot;:a.height=a.clientHeight}return a}};l.init();var o=[];for(var p=0;p&lt;16;p++)for(var q=0;q&lt;16;q++)o[p*16+q]=p.toString(16)+q.toString(16);var x=w.prototype;x.clearRect=function(){this.element_.innerHTML=&quot;&quot;},x.beginPath=function(){this.currentPath_=[]},x.moveTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:&quot;moveTo&quot;,x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},x.lineTo=function(a,b){var c=this.getCoords_(a,b);this.currentPath_.push({type:&quot;lineTo&quot;,x:c.x,y:c.y}),this.currentX_=c.x,this.currentY_=c.y},x.bezierCurveTo=function(a,b,c,d,e,f){var g=this.getCoords_(e,f),h=this.getCoords_(a,b),i=this.getCoords_(c,d);y(this,h,i,g)},x.quadraticCurveTo=function(a,b,c,d){var e=this.getCoords_(a,b),f=this.getCoords_(c,d),g={x:this.currentX_+2/3*(e.x-this.currentX_),y:this.currentY_+2/3*(e.y-this.currentY_)},h={x:g.x+(f.x-this.currentX_)/3,y:g.y+(f.y-this.currentY_)/3};y(this,g,h,f)},x.arc=function(a,b,e,f,i,j){e*=g;var k=j?&quot;at&quot;:&quot;wa&quot;,l=a+d(f)*e-h,m=b+c(f)*e-h,n=a+d(i)*e-h,o=b+c(i)*e-h;l==n&amp;&amp;!j&amp;&amp;(l+=.125);var p=this.getCoords_(a,b),q=this.getCoords_(l,m),r=this.getCoords_(n,o);this.currentPath_.push({type:k,x:p.x,y:p.y,radius:e,xStart:q.x,yStart:q.y,xEnd:r.x,yEnd:r.y})},x.rect=function(a,b,c,d){this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath()},x.strokeRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.stroke(),this.currentPath_=e},x.fillRect=function(a,b,c,d){var e=this.currentPath_;this.beginPath(),this.moveTo(a,b),this.lineTo(a+c,b),this.lineTo(a+c,b+d),this.lineTo(a,b+d),this.closePath(),this.fill(),this.currentPath_=e},x.createLinearGradient=function(a,b,c,d){var e=new z(&quot;gradient&quot;);return e.x0_=a,e.y0_=b,e.x1_=c,e.y1_=d,e},x.createRadialGradient=function(a,b,c,d,e,f){var g=new z(&quot;gradientradial&quot;);return g.x0_=a,g.y0_=b,g.r0_=c,g.x1_=d,g.y1_=e,g.r1_=f,g},x.drawImage=function(c,d){var e,f,h,i,j,k,l,m,n=c.runtimeStyle.width,o=c.runtimeStyle.height;c.runtimeStyle.width=&quot;auto&quot;,c.runtimeStyle.height=&quot;auto&quot;;var p=c.width,q=c.height;c.runtimeStyle.width=n,c.runtimeStyle.height=o;if(arguments.length==3)e=arguments[1],f=arguments[2],j=k=0,l=h=p,m=i=q;else if(arguments.length==5)e=arguments[1],f=arguments[2],h=arguments[3],i=arguments[4],j=k=0,l=p,m=q;else if(arguments.length==9)j=arguments[1],k=arguments[2],l=arguments[3],m=arguments[4],e=arguments[5],f=arguments[6],h=arguments[7],i=arguments[8];else throw Error(&quot;Invalid number of arguments&quot;);var r=this.getCoords_(e,f),s=l/2,t=m/2,u=[],v=10,w=10;u.push(&quot; &lt;g_vml_:group&quot;,&#39; coordsize=&quot;&#39;,g*v,&quot;,&quot;,g*w,&#39;&quot;&#39;,&#39; coordorigin=&quot;0,0&quot;&#39;,&#39; style=&quot;width:&#39;,v,&quot;px;height:&quot;,w,&quot;px;position:absolute;&quot;);if(this.m_[0][0]!=1||this.m_[0][1]){var x=[];x.push(&quot;M11=&quot;,this.m_[0][0],&quot;,&quot;,&quot;M12=&quot;,this.m_[1][0],&quot;,&quot;,&quot;M21=&quot;,this.m_[0][1],&quot;,&quot;,&quot;M22=&quot;,this.m_[1][1],&quot;,&quot;,&quot;Dx=&quot;,b(r.x/g),&quot;,&quot;,&quot;Dy=&quot;,b(r.y/g),&quot;&quot;);var y=r,z=this.getCoords_(e+h,f),A=this.getCoords_(e,f+i),B=this.getCoords_(e+h,f+i);y.x=a.max(y.x,z.x,A.x,B.x),y.y=a.max(y.y,z.y,A.y,B.y),u.push(&quot;padding:0 &quot;,b(y.x/g),&quot;px &quot;,b(y.y/g),&quot;px 0;filter:progid:DXImageTransform.Microsoft.Matrix(&quot;,x.join(&quot;&quot;),&quot;, sizingmethod=&#39;clip&#39;);&quot;)}else u.push(&quot;top:&quot;,b(r.y/g),&quot;px;left:&quot;,b(r.x/g),&quot;px;&quot;);u.push(&#39; &quot;&gt;&#39;,&#39;&lt;g_vml_:image src=&quot;&#39;,c.src,&#39;&quot;&#39;,&#39; style=&quot;width:&#39;,g*h,&quot;px;&quot;,&quot; height:&quot;,g*i,&#39;px;&quot;&#39;,&#39; cropleft=&quot;&#39;,j/p,&#39;&quot;&#39;,&#39; croptop=&quot;&#39;,k/q,&#39;&quot;&#39;,&#39; cropright=&quot;&#39;,(p-j-l)/p,&#39;&quot;&#39;,&#39; cropbottom=&quot;&#39;,(q-k-m)/q,&#39;&quot;&#39;,&quot; /&gt;&quot;,&quot;&lt;/g_vml_:group&gt;&quot;),this.element_.insertAdjacentHTML(&quot;BeforeEnd&quot;,u.join(&quot;&quot;))},x.stroke=function(c){var d=[],e=!1,f=u(c?this.fillStyle:this.strokeStyle),h=f.color,i=f.alpha*this.globalAlpha,j=10,k=10;d.push(&quot;&lt;g_vml_:shape&quot;,&#39; filled=&quot;&#39;,!!c,&#39;&quot;&#39;,&#39; style=&quot;position:absolute;width:&#39;,j,&quot;px;height:&quot;,k,&#39;px;&quot;&#39;,&#39; coordorigin=&quot;0 0&quot; coordsize=&quot;&#39;,g*j,&quot; &quot;,g*k,&#39;&quot;&#39;,&#39; stroked=&quot;&#39;,!c,&#39;&quot;&#39;,&#39; path=&quot;&#39;);var l=!1,m={x:null,y:null},n={x:null,y:null};for(var o=0;o&lt;this.currentPath_.length;o++){var p=this.currentPath_[o],q;switch(p.type){case&quot;moveTo&quot;:q=p,d.push(&quot; m &quot;,b(p.x),&quot;,&quot;,b(p.y));break;case&quot;lineTo&quot;:d.push(&quot; l &quot;,b(p.x),&quot;,&quot;,b(p.y));break;case&quot;close&quot;:d.push(&quot; x &quot;),p=null;break;case&quot;bezierCurveTo&quot;:d.push(&quot; c &quot;,b(p.cp1x),&quot;,&quot;,b(p.cp1y),&quot;,&quot;,b(p.cp2x),&quot;,&quot;,b(p.cp2y),&quot;,&quot;,b(p.x),&quot;,&quot;,b(p.y));break;case&quot;at&quot;:case&quot;wa&quot;:d.push(&quot; &quot;,p.type,&quot; &quot;,b(p.x-this.arcScaleX_*p.radius),&quot;,&quot;,b(p.y-this.arcScaleY_*p.radius),&quot; &quot;,b(p.x+this.arcScaleX_*p.radius),&quot;,&quot;,b(p.y+this.arcScaleY_*p.radius),&quot; &quot;,b(p.xStart),&quot;,&quot;,b(p.yStart),&quot; &quot;,b(p.xEnd),&quot;,&quot;,b(p.yEnd))}if(p){if(m.x==null||p.x&lt;m.x)m.x=p.x;if(n.x==null||p.x&gt;n.x)n.x=p.x;if(m.y==null||p.y&lt;m.y)m.y=p.y;if(n.y==null||p.y&gt;n.y)n.y=p.y}}d.push(&#39; &quot;&gt;&#39;);if(!c){var r=this.lineScale_*this.lineWidth;r&lt;1&amp;&amp;(i*=r),d.push(&quot;&lt;g_vml_:stroke&quot;,&#39; opacity=&quot;&#39;,i,&#39;&quot;&#39;,&#39; joinstyle=&quot;&#39;,this.lineJoin,&#39;&quot;&#39;,&#39; miterlimit=&quot;&#39;,this.miterLimit,&#39;&quot;&#39;,&#39; endcap=&quot;&#39;,v(this.lineCap),&#39;&quot;&#39;,&#39; weight=&quot;&#39;,r,&#39;px&quot;&#39;,&#39; color=&quot;&#39;,h,&#39;&quot; /&gt;&#39;)}else if(typeof this.fillStyle==&quot;object&quot;){var s=this.fillStyle,t=0,w={x:0,y:0},x=0,y=1;if(s.type_==&quot;gradient&quot;){var z=s.x0_/this.arcScaleX_,A=s.y0_/this.arcScaleY_,B=s.x1_/this.arcScaleX_,C=s.y1_/this.arcScaleY_,D=this.getCoords_(z,A),E=this.getCoords_(B,C),F=E.x-D.x,G=E.y-D.y;t=Math.atan2(F,G)*180/Math.PI,t&lt;0&amp;&amp;(t+=360),t&lt;1e-6&amp;&amp;(t=0)}else{var D=this.getCoords_(s.x0_,s.y0_),H=n.x-m.x,I=n.y-m.y;w={x:(D.x-m.x)/H,y:(D.y-m.y)/I},H/=this.arcScaleX_*g,I/=this.arcScaleY_*g;var J=a.max(H,I);x=2*s.r0_/J,y=2*s.r1_/J-x}var K=s.colors_;K.sort(function(a,b){return a.offset-b.offset});var L=K.length,M=K[0].color,N=K[L-1].color,O=K[0].alpha*this.globalAlpha,P=K[L-1].alpha*this.globalAlpha,Q=[];for(var o=0;o&lt;L;o++){var R=K[o];Q.push(R.offset*y+x+&quot; &quot;+R.color)}d.push(&#39;&lt;g_vml_:fill type=&quot;&#39;,s.type_,&#39;&quot;&#39;,&#39; method=&quot;none&quot; focus=&quot;100%&quot;&#39;,&#39; color=&quot;&#39;,M,&#39;&quot;&#39;,&#39; color2=&quot;&#39;,N,&#39;&quot;&#39;,&#39; colors=&quot;&#39;,Q.join(&quot;,&quot;),&#39;&quot;&#39;,&#39; opacity=&quot;&#39;,P,&#39;&quot;&#39;,&#39; g_o_:opacity2=&quot;&#39;,O,&#39;&quot;&#39;,&#39; angle=&quot;&#39;,t,&#39;&quot;&#39;,&#39; focusposition=&quot;&#39;,w.x,&quot;,&quot;,w.y,&#39;&quot; /&gt;&#39;)}else d.push(&#39;&lt;g_vml_:fill color=&quot;&#39;,h,&#39;&quot; opacity=&quot;&#39;,i,&#39;&quot; /&gt;&#39;);d.push(&quot;&lt;/g_vml_:shape&gt;&quot;),this.element_.insertAdjacentHTML(&quot;beforeEnd&quot;,d.join(&quot;&quot;))},x.fill=function(){this.stroke(!0)},x.closePath=function(){this.currentPath_.push({type:&quot;close&quot;})},x.getCoords_=function(a,b){var c=this.m_;return{x:g*(a*c[0][0]+b*c[1][0]+c[2][0])-h,y:g*(a*c[0][1]+b*c[1][1]+c[2][1])-h}},x.save=function(){var a={};t(this,a),this.aStack_.push(a),this.mStack_.push(this.m_),this.m_=s(r(),this.m_)},x.restore=function(){t(this.aStack_.pop(),this),this.m_=this.mStack_.pop()},x.translate=function(a,b){var c=[[1,0,0],[0,1,0],[a,b,1]];this.m_=s(c,this.m_)},x.rotate=function(a){var b=d(a),e=c(a),f=[[b,e,0],[-e,b,0],[0,0,1]];this.m_=s(f,this.m_)},x.scale=function(a,b){this.arcScaleX_*=a,this.arcScaleY_*=b;var c=[[a,0,0],[0,b,0],[0,0,1]],d=this.m_=s(c,this.m_),g=d[0][0]*d[1][1]-d[0][1]*d[1][0];this.lineScale_=f(e(g))},x.clip=function(){},x.arcTo=function(){},x.createPattern=function(){return new A},z.prototype.addColorStop=function(a,b){b=u(b),this.colors_.push({offset:a,color:b.color,alpha:b.alpha})},G_vmlCanvasManager=l,CanvasRenderingContext2D=w,CanvasGradient=z,CanvasPattern=A}()</td>
      </tr>
</table>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.19824s from unicorn-1499384875-jnhzs">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-LrSYtiwhxV2CDBCoGCWM3TgeD7m7q+jVyaUSyFcyHmM=" src="https://assets-cdn.github.com/assets/frameworks-2eb498b62c21c55d820c10a818258cdd381e0fb9bbabe8d5c9a512c857321e63.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-izZfOaLQPIQxpL2hdd65JHjwSBofQ8MTkmBUby7/50Q=" src="https://assets-cdn.github.com/assets/github-8b365f39a2d03c8431a4bda175deb92478f0481a1f43c3139260546f2effe744.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

