<template>
     <nav class="nav" role="navigation">
        <div class="max-centered">
            <h1 class="nav__logo">Rule of thumb.</h1>
            <button class="nav__hamburger icon-button" alt="Open Menu" aria-label="Open Menu">
                <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fill-rule="nonzero"/></svg>
            </button>
            <ul class="nav__links">
                <li>
                    <a href="#">Past Trials</a>
                </li>
                <li>
                    <a href="#">How It Works</a>
                </li>
                <li>
                    <a href="#">Login / Sign Up</a>
                </li>
                <li>
                    <form action="javascript:void(0)">
                        <input class="nav__search-input" aria-label="search" type="text">
                        <button class="nav__search icon-button" alt="Search" type="submit">
                            <img src="../assets/img/search.svg" alt="search">
                        </button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
    <header class="hero">
        <img class="hero__background"
            srcset="../assets/img/pope-francis.png 750w, ../assets/img/pope-francis.@2x.png 1440w"
            sizes="(min-width: 750px) 1440px, 100vw" src="../assets/img/pope-francis.png" alt="Pope Francis">
        <div class="max-centered">
            <div class="hero__featured-card">
                <div class="featured-card__glass-background"></div>
                <div class="featured-card__content">
                    <p class="featured-card__hairline">What's your opinion on</p>
                    <h2 class="featured-card__title">Pope Francis?</h2>
                    <p class="featured-card__desc">
                        He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs
                        down) or a true pedophile punishing pontiff? (thumbs up)
                    </p>
                    <p class="featured-card__more-info">
                        <a href="http://wikipedia.com" aria-label="More info">
                            <svg class="featured-card__more-info-icon" preserveAspectRatio
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 18">
                                <path
                                    d="M27 .303c0 .1-.032.2-.09.28a.255.255 0 01-.2.125 2.46 2.46 0 00-1.453.602 5.676 5.676 0 00-1.166 1.952l-6.127 14.533c-.04.135-.152.203-.337.203a.374.374 0 01-.337-.203l-3.436-7.564-3.952 7.564a.374.374 0 01-.337.203.34.34 0 01-.349-.203L3.196 3.262a5.052 5.052 0 00-1.19-1.89A3.161 3.161 0 00.267.708.23.23 0 01.086.6.378.378 0 010 .355C0 .118.064 0 .192 0 .73 0 1.29.025 1.876.075c.544.053 1.056.078 1.536.078.49 0 1.067-.026 1.732-.078C5.839.025 6.456 0 6.994 0c.128 0 .192.118.192.355 0 .235-.04.352-.119.352a2.308 2.308 0 00-1.268.43c-.297.22-.47.581-.463.963.015.263.08.521.192.757l4.975 11.826 2.824-5.614-2.631-5.807A7.637 7.637 0 009.53 1.257a2.274 2.274 0 00-1.382-.55A.208.208 0 017.986.6a.4.4 0 01-.078-.245c0-.237.054-.355.168-.355.494-.002.987.023 1.477.075.46.054.92.08 1.382.078.48 0 .988-.026 1.525-.078C13.013.025 13.558 0 14.094 0c.128 0 .192.118.192.355 0 .235-.038.352-.119.352-1.073.078-1.61.399-1.61.963.047.414.174.814.373 1.175l1.74 3.72 1.732-3.403c.209-.37.333-.786.36-1.215 0-.775-.536-1.188-1.61-1.24-.097 0-.144-.117-.144-.352a.44.44 0 01.071-.24c.05-.077.098-.115.145-.115.385 0 .857.025 1.418.075.536.053.978.078 1.322.078a13.6 13.6 0 001.093-.065A16.806 16.806 0 0120.584 0c.095 0 .142.1.142.303 0 .27-.088.405-.263.405-.54.036-1.061.224-1.508.544a6.937 6.937 0 00-1.423 2.01l-2.308 4.492 3.125 6.702 4.614-11.294c.149-.36.23-.745.24-1.137 0-.828-.537-1.267-1.61-1.317-.097 0-.145-.118-.145-.353 0-.237.071-.355.216-.355.392 0 .857.025 1.394.075.496.053.914.078 1.25.078.409-.003.818-.03 1.224-.078.483-.05.915-.075 1.3-.075.111 0 .168.1.168.303z"
                                    fill="#FFF" fill-rule="nonzero" />
                            </svg>More information
                        </a>
                    </p>
                    <p class="featured-card__cta">
                        What’s Your Veredict?
                    </p>
                    <div class="featured-card__buttons">
                        <button class="icon-button" aria-label="thumbs up">
                            <img src="../assets/img/thumbs-up.svg" alt="thumbs up" />
                        </button>
                        <button class="icon-button" aria-label="thumbs down">
                            <img src="../assets/img/thumbs-down.svg" alt="thumbs down" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero__closing-gauge">
            <div class="closing-gauge__left">
                <span class="closing-gauge__title">closing in</span>
            </div>
            <div class="closing-gauge__right">
                <span class="closing-gauge__number">22</span>
                <span class="closing-gauge__desc">days</span>
            </div>
        </div>
    </header>
</template>
<script>

</script>