<?php include 'header.php' ?>

<!-- Main page -->

<div id="page-1" class="page-1">

    <header>
        <div class="container top-row" id="top-row">

            <div class='top-row-wrapper'>

                <div class='top-left-wrapper'>
                    <div>
                        <a href="netatmo_html.php">
                            <h1><i class="large material-icons">beach_access</i>G climate</h1>
                        </a>
                        <h3 class="orange-text">Perfect climate no matter the weather</h3>
                        <h4><?php echo date('l, F jS, Y'); ?></h4>
                    </div>
                </div>

                <div class="user-settings">
                    <div>
                        <div class="user-picture">
                            <img src="https://picsum.photos/80" alt="">
                        </div>
                        <ul class="collection">
                            <li><a href="#">Hello Gediminas!</a></li>
                            <li><a href="#">User settings</a></li>
                            <li><a href="#">Meniu item 2</a></li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>

        <nav id="navbar">

            <div class="nav-wrapper orange darken-4">
                <div class="container">
                    <a id="navbar-logo" href="#" class="brand-logo left"><i class="material-icons">beach_access</i>G climate</a>
                    <div class="meniu collection right">
                        <ul>
                            <li id="page-1-nav"><a href="#page-1">Home</a></li>
                            <li id="page-2-nav"><a href="#page-2">Settings</a></li>
                            <li id="page-3-nav"><a href="#page-3">Graph</a></li>
                            <li id="page-4-nav"><a href="#page-4">About us</a></li>
                            <li id="page-5-nav"><a href="#page-5">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>



        <div class="container">

            <nav class="transparent search-wrapper">
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" required>
                            <label for="search" class="label-icon"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>

            <div class="login">

                <form method="post" action="">
                    <h5>Sensibo Login</h5>
                    <div class="row">
                        <div class="input-field col s12">
                            <input id="sensibo-key" type="text" name="sensibo-key" class="validate">
                            <label for="sensibo-key" class="orange-text text-darken-4">Sensibo API key</label>
                        </div>
                    </div>
                    <button id="sensibo-login" class="btn waves-effect orange darken-4">Sensibo login
                        <i class="material-icons right">lock_open</i>
                    </button>
                </form>

                <form method="post" action="">
                    <h5>Netatmo Login</h5>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="email" name="email" type="email" class="validate">
                            <label for="email" class="orange-text text-darken-4">Email</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="password" name="password" type="password" class="validate">
                            <label for="password" class="orange-text text-darken-4">Password</label>
                        </div>
                    </div>
                    <button class="btn waves-effect orange darken-4">netatmo login
                        <i class="material-icons right">lock_open</i>
                    </button>
                </form>

            </div>

        </div>

    </header>


</div>

<!-- Settings page -->

<div id="page-2" class="page-2">

    <div class="container settings-grid">

        <div class="settings-wrapper">

            <form action="">

                <H5>Select climate settings</H5>

                <div class="input-field col s12">
                    <select id="select-control-mode">
                        <option value="manual">Manual</option>
                        <option value="auto">Automatic</option>
                    </select>
                    <label>Select control mode</label>
                </div>

                <div class="input-field col s12">
                    <select id="select-climate-mode">
                        <option value="heat">Heating</option>
                        <option value="cool">Cooling</option>
                        <option value="auto">Auto</option>
                    </select>
                    <label>Climate mode</label>
                </div>

                <div class="input-field col s12">
                    <select id="select-heating-devices">
                        <option value="netatmo+sensibo">Netamo + Sensibo</option>
                        <option value="netatmo">Netatmo</option>
                    </select>
                    <label>Heating devices</label>
                </div>

                <div class="input-field col s12">
                    <select id="select-fan-speed">
                        <option value="auto">auto</option>
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                    <label>Fan speed</label>
                </div>

                <label class="temperature-label">Select comfortable temperature</label>
                <div class="temp-select">
                    <div class="temp-row">
                        <a id="btn-temp-down" class="btn-floating btn-large waves-effect waves-light orange darken-4"><i class="material-icons">keyboard_arrow_down</i></a>
                        <div class="input-field col s2 offset-s1">
                            <input value="21" id="temp-select" type="text" class="validate">
                        </div>
                        <a id="btn-temp-up" class="btn-floating btn-large waves-effect waves-light orange darken-4"><i class="material-icons">keyboard_arrow_up</i></a>
                    </div>
                </div>

                <div>
                    <p class="range-field">
                        <input type="range" id="temp-slider" min="17" max="30" />
                    </p>
                </div>

                <div class="button-confirm">
                    <a id="confirm" class="waves-effect waves-light btn-large button-confirm orange darken-4">Confirm<i class="material-icons right">build</i></a>
                </div>

            </form>

            <div class="answer">
                <p id="answer-netatmo">Netatmo laukia užklausos...</p>
                <p id="answer-sensibo">Sensibo laukia užklausos...</p>
            </div>

            <div class="button-confirm">
                <a id="refresh-data" class="waves-effect waves-light btn-large button-confirm orange darken-4">Refresh data<i class="material-icons right">autorenew</i></a>
            </div>

        </div>

        <div class="sensibo-wrapper">

            <div class="sensibo-logo grid-center">
                <h5>Sensibo LOGO</h5>
            </div>

            <div class="sensibo-indication grid-center">
                <i id="sensibo-status-icon" class="small material-icons red-text">power_settings_new</i>
            </div>

            <div class="sensibo-status grid-vertical-center">
                <p>Device connection status:</p>
            </div>

            <div class="sensibo-status-res  grid-center">
                <p id="sensibo-status"></p>
            </div>

            <div class="sensibo-measured-temp grid-vertical-center">
                <p id="sensibo-measured-temp"></p>
            </div>

            <div class="sensibo-humidity grid-vertical-center">
                <p id="sensibo-humidity"></p>
            </div>

            <div class="sensibo-mode grid-vertical-center">
                <p>Sensibo mode</p>
            </div>

            <div class="sensibo-mode-res  grid-center">
                <p id="sensibo-mode"></p>
            </div>

            <div class="sensibo-set-temp grid-vertical-center">
                <p>Target temperature</p>
            </div>

            <div class="sensibo-set-temp-res  grid-center">
                <p id="sensibo-set-temp"></p>
            </div>

            <div class="sensibo-fan-level grid-vertical-center">
                <p>Sensibo fan level</p>
            </div>

            <div class="sensibo-fan-level-res  grid-center">
                <p id="sensibo-fan-level"></p>
            </div>

            <div class="sensibo-failure-reason grid-vertical-center">
                <p>Device status</p>
            </div>

            <div class="sensibo-failure-reason-res grid-center">
                <p id="sensibo-device-status"></p>
            </div>

        </div>
        <div class="netatmo-wrapper">

            <div class="netatmo-logo grid-center">
                <h5>Netatmo LOGO</h5>
            </div>

            <div class="netatmo-indication grid-center">
                <i id="netatmo-status-icon" class="small material-icons red-text">power_settings_new</i>
            </div>

            <div class="netatmo-status grid-vertical-center">
                <p>Device connection status</p>
            </div>

            <div class="netatmo-status-res grid-center">
                <p id="netatmo-status-res"></p>
            </div>

            <div class="netatmo-measured-temp grid-vertical-center">
                <p id="netatmo-measured-temp"> </p>
            </div>

            <div class="netatmo-humidity grid-vertical-center">
                <p>
                    <!-- Gal dar ką nors sugalvosiu -->
                </p>
            </div>

            <div class="netatmo-mode grid-vertical-center">
                <p>Control mode</p>
            </div>

            <div class="netatmo-mode-res grid-center">
                <p id="netatmo-control-mode"></p>
            </div>

            <div class="netatmo-set-temp grid-vertical-center">
                <p>Target temperature</p>
            </div>

            <div class="netatmo-set-temp-res grid-center">
                <p id="netatmo-set-temp"></p>
            </div>

            <div class="netatmo-battery-level grid-vertical-center">
                <p>Battery level</p>
            </div>

            <div class="netatmo-battery-level-res grid-center">
                <p id="netatmo-battery-level"></p>
            </div>

            <div class="netatmo-failure-reason grid-vertical-center">
                <p>Output status</p>
            </div>

            <div class="netatmo-failure-reason-res grid-center">
                <p id="netatmo-output-status"></p>
            </div>

        </div>

    </div>

</div>

<!-- Graph page -->

<div id="page-3" class="page-3">

    <div class="container">
        <div class="graph-area">
            <h5>Netatmo settings graph</h5>
            <canvas id="myChart" width="400" height="200"></canvas>
        </div>
    </div>
</div>

<!-- Info page -->

<div id="page-4" class="page-4">
    <div class="container">
        <div class="about-us">
            <h5>Data log</h5>
            <div class="logged-data-wrapper">
                <div class="logged-data">
                    <p>[2020-01-22 16:48] Lorem ipsum dolor sit amet consectetur adipisi
                        cing elit. Corporis iste esse ipsam corrupti nec
                        essitatibus veniam, aut veritatis, nobis quaerat
                        ipsum explicabo hic totam soluta molestias? Quae
                        rat voluptatibus ipsam praesentium officia!</p>
                    <p>[2020-01-22 16:55] Lorem ipsum dolor sit amet consectetur adipisi
                        cing elit. Corporis iste esse ipsam corrupti nec
                        essitatibus veniam, aut veritatis, nobis quaerat
                        ipsum explicabo hic totam soluta molestias? Quae
                        rat voluptatibus ipsam praesentium officia!</p>
                    <p>[2020-01-22 18:30] Lorem ipsum dolor sit amet consectetur adipisi
                        cing elit. Corporis iste esse ipsam corrupti nec
                        essitatibus veniam, aut veritatis, nobis quaerat
                        ipsum explicabo hic totam soluta molestias? Quae
                        rat voluptatibus ipsam praesentium officia!</p>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Contact page -->

<div id="page-5" class="page-5">

    <div class="container user-review">

        <form class="col s12">
            <h2>Contact Us</h2>
            <div class="row">
                <div class="input-field col s6">
                    <input id="first_name" type="text" class="validate">
                    <label for="first_name">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="last_name" type="text" class="validate">
                    <label for="last_name">Last Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <input id="email2" type="email" class="validate">
                    <label for="email2">Email</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea"></textarea>
                    <label for="textarea1">Please write me your best wishes</label>
                </div>
            </div>
            <button class="btn waves-effect orange darken-4" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>

        </form>

        <div>
            <a href="#">
                <h1><i class="large material-icons">beach_access</i>G climate</h1>
            </a>
            <h3 class="orange-text">Perfect climate no matter the weather</h3>
        </div>


    </div>


</div>

<!-- Footer info -->

<footer class="free-space">

    <div class="container">
        <h5>No rights reserved. I would be happy if someone took it for free.</h5>
    </div>

    <?php include 'footer.php' ?>