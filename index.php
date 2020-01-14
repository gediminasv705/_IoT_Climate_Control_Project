<!DOCTYPE html>
<html lang="lt">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>IoT climate control</title>

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="styles/style.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

</head>

<body>

<?php
    include ('scripts/netatmo.php');
    include ('scripts/sensibo_info.php');
?>


    <div id="page-1" class="page-1">

        <header>



            <div class="container top-row" id="top-row">

                <div>
                    <a href="netatmo_html.php">
                        <h1><i class="large material-icons">beach_access</i>G climate</h1>
                    </a>
                    <h3 class="orange-text">Perfect climate no matter the weather</h3>
                    <h4><?php echo date('l, F jS, Y'); ?></h4>
                </div>

                <div class="user-settings">

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



            <!-- <div class="navbar-fixed"> -->
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
            <!-- </div> -->


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
                            <input id="sensibo" type="text" name="sensibo" class="validate">
                            <label for="sensibo" class="orange-text text-darken-4">Sensibo API key</label>
                        </div>

                    </div>
                    <button class="btn waves-effect orange darken-4" type="submit" name="action">Sensibo login
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
                    <button class="btn waves-effect orange darken-4" type="submit" name="action">netatmo login
                        <i class="material-icons right">lock_open</i>
                    </button>
                </form>

                </div>
            </div>

        </header>


    </div>


    </div>

    <div id="page-2" class="page-2">

        <div class="container settings-grid">

            <div class="settings-wrapper">

            Temp. set to: <input type="button" method="post" name="temp_20" value="20"></br></br>
            Temp. set to: <input type="button" value="30"></br></br>
            Temp. set to: <input type="button" value="22">

            </div>

            <div class="sensibo-wrapper">

                <div class="sensibo-logo">
                    <h5>Sensibo LOGO</h5>
                </div>
                <div class="sensibo-indication">
                    <i class="small material-icons green-text">power_settings_new</i>
                </div>
                <div class="sensibo-status">
                    <p>Device connection status</p>
                </div>
                <div class="sensibo-status-res">

                    <p>
                        <?php
                        echo $sensibo_status;
                        ?>
                    </p>

                </div>
                <div class="sensibo-measured-temp">
                    <p> <?php

                        echo ($sensibo_measured_temp . "°" . $sensibo_target_temp_unit);

                        ?></p>
                </div>
                <div class="sensibo-humidity">
                    <p>
                        <?php

                        echo ($sensibo_measured_humidity . "%");

                        ?>
                    </p>
                </div>
                <div class="sensibo-mode">
                    <p>Sensibo mode</p>
                </div>
                <div class="sensibo-mode-res">
                    <p>
                        <?php

                        echo ($sensibo_mode);

                        ?>
                    </p>
                </div>
                <div class="sensibo-set-temp">
                    <p>Target temperature</p>
                </div>
                <div class="sensibo-set-temp-res">
                    <p>
                        <?php

                        echo ($sensibo_target_temp . " " . $sensibo_target_temp_unit);

                        ?>
                    </p>
                </div>
                <div class="sensibo-fan-level">
                    <p>Sensibo fan level</p>
                </div>
                <div class="sensibo-fan-level-res">
                    <p>
                        <?php

                        echo ($sensibo_fan_level);

                        ?>
                    </p>
                </div>
                <div class="sensibo-failure-reason">
                    <p>Failure reason</p>
                </div>
                <div class="sensibo-failure-reason-res">
                    <p>

                        <?php

                        sensibo_failure_reason();

                        ?>
                    </p>
                </div>

            </div>
            <div class="netatmo-wrapper">

                <div class="netatmo-logo">
                    <h5>Netatmo LOGO</h5>
                </div>
                <div class="netatmo-indication">
                    <i class="small material-icons green-text">power_settings_new</i>
                </div>
                <div class="netatmo-status">
                    <p>Device connection status</p>
                </div>
                <div class="netatmo-status-res">

                    <p>
                        <?php
                        echo $status;
                        ?>
                    </p>

                </div>

                <div class="netatmo-measured-temp">
                    <p> <?php
                        echo $received_measured_temp . "°C";
                        ?></p>
                </div>
                <div class="netatmo-humidity">
                    <p>

                    </p>
                </div>
                <div class="netatmo-mode">
                    <p>Control mode</p>
                </div>
                <div class="netatmo-mode-res">
                    <p>
                        <?php
                        echo $received_mode;
                        ?>
                    </p>
                </div>
                <div class="netatmo-set-temp">
                    <p>Target temperature</p>
                </div>
                <div class="netatmo-set-temp-res">
                    <p>
                        <?php

                        echo ($received_set_temp . " C");

                        ?>
                    </p>
                </div>
                <div class="netatmo-battery-level">
                    <p>Battery level</p>
                </div>
                <div class="netatmo-battery-level-res">
                    <p>
                        <?php

                        echo $received_battery_level;

                        ?>
                    </p>
                </div>
                <div class="netatmo-failure-reason">
                    <p>Failure reason</p>
                </div>
                <div class="netatmo-failure-reason-res">
                    <p>

                        <?php

                        sensibo_failure_reason();

                        ?>
                    </p>
                </div>

            </div>

        </div>

    </div>

    <div id="page-3" class="page-3">

        <div class="container">
            <div class="graph-area">
                <h3>This is graph area</h3>
            </div>
        </div>


    </div>

    <div id="page-4" class="page-4">

        <div class="container">
            <div class="about-us">
                <h3>Information about us</h3>
            </div>
        </div>


    </div>

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

    <footer class="free-space">

        <div class="container">
            <h5>No rights reserved. I would be happy if someone took it for free.</h5>
        </div>

    </footer>




    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
        M.AutoInit()
    </script>
    <script src="scripts/script.js"></script>
</body>

</html>