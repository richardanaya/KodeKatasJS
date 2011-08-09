var TennisGame = function() {

};

TennisGame.prototype.getScore = function(scores) {
    var result = "love - love"
    var player1Scores = 0;
    var player2Scores = 0;

    for (var i = 0; i < scores.length; ++i) {
        if (scores[i] == 1) {
            player1Scores++;
        }
        else if (scores[i] == 2) {
            player2Scores++;
        }
    }

    var result;
    if (player1Scores >= 3 && player2Scores >= 3) {
        var player1Lead = player1Scores - 3;
        var player2Lead = player2Scores - 3;

        if (player1Lead == 1 && player2Lead == 0) {
            result = "player 1 advantage";
        }
        else if (player1Lead == 0 && player2Lead == 1) {
            result = "player 2 advantage";
        }
        else if(player1Lead >= 1 && player1Lead - player2Lead >= 2 )
        {
            result = "player 1 win"
        }
        else if(player2Lead >= 1 && player2Lead - player1Lead >= 2 )
        {
            result = "player 2 win"
        }
        else {
            result = "deuce";
        }
    }
    else if( player1Scores >= 4 )
    {
        result = "player 1 win"
    }
    else if( player2Scores >= 4 )
    {
        result = "player 2 win"
    }
    else {
        result = this.convertScore(player1Scores) + " - " + this.convertScore(player2Scores);
    }

    return result;
};

TennisGame.scoreTable = [ "love", "15", "30", "40" ];

TennisGame.prototype.convertScore = function(s) {
    return TennisGame.scoreTable[ s ];
};