
        $(document).ready(function () {

            var wins = 0;
            var lost = 0;
            var score = 0;

            // Create a computer generator number for match
            var computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
            $("#comp_guess").html(computerGuess);

            //converting the string in integer
            var stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
            var stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
            var stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
            var stone4 = parseInt(Math.floor(Math.random() * 12) + 1);

            //creating reset function the game

            function reset() {

                score = 0;
                $("#comp_guess").html(score);
                computerGuess = parseInt(Math.floor(Math.random() * 120) + 19);
                $("#comp_guess").html(computerGuess);


                stone1 = parseInt(Math.floor(Math.random() * 12) + 1);
                stone2 = parseInt(Math.floor(Math.random() * 12) + 1);
                stone3 = parseInt(Math.floor(Math.random() * 12) + 1);
                stone4 = parseInt(Math.floor(Math.random() * 12) + 1);


            }

            //create a click function for images generate number


            $("#type1").on("click", function () {

                score = score + stone1;
                $("#type1").html(score);
                $("#your_guess").html(score);
                if (score == computerGuess) {
                    checkifwon();
                } else if (score > computerGuess) {
                    checkifwon();
                }
            });


            $("#type2").on("click", function () {

                score = score + stone2;
                $("#type2").html(score);
                $("#your_guess").html(score);
                if (score == computerGuess) {
                    checkifwon();
                } else if (score > computerGuess) {
                    checkifwon();
                }
            });

            $("#type3").on("click", function () {

                score = score + stone3;
                $("#type3").html(score);
                $("#your_guess").html(score);
                if (score == computerGuess) {
                    checkifwon();
                } else if (score > computerGuess) {
                    checkifwon();
                }
            });

            $("#type4").on("click", function () {

                score = score + stone4;
                $("#type4").html(score);
                $("#your_guess").html(score);
                if (score == computerGuess) {
                    checkifwon();
                } else if (score > computerGuess) {
                    checkifwon();
                }
            });

            // create win and lost
            function checkifwon() {

                if (score === computerGuess) {

                    wins++;
                    console.log(wins);
                    $("#new_wins").html("You Win");
                    $("#new_wins").html(wins);
                    reset();
                } else if (score > computerGuess) {

                    lost++;
                    console.log(lost);
                    $("#new_losses").html("You Lost");
                    $("#new_losses").html(lost);
                    reset();
                }

            }

        });
