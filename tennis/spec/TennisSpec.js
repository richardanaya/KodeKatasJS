describe("Tennis", function() {
    var tennisGame = null;

    describe("when the game is played", function() {
        beforeEach(function() {
            tennisGame = new TennisGame();
        });

        it("should be able to detect love - love", function() {
            var score = tennisGame.getScore([]);
            expect(score).toEqual('love - love');
        });

        it("should be able to detect 15 - love", function() {
            var score = tennisGame.getScore([1]);
            expect(score).toEqual('15 - love');
        });

        it("should be able to detect love - 15", function() {
            var score = tennisGame.getScore([2]);
            expect(score).toEqual('love - 15');
        });

        it("should be able to detect 15 - 15", function() {
            var score = tennisGame.getScore([2,1]);
            expect(score).toEqual('15 - 15');
        });

        it("should be able to detect 30 - love", function() {
            var score = tennisGame.getScore([1,1]);
            expect(score).toEqual('30 - love');
        });

        it("should be able to detect love - 40", function() {
            var score = tennisGame.getScore([2,2,2]);
            expect(score).toEqual('love - 40');
        });

        it("should be able to detect deuce", function() {
            var score = tennisGame.getScore([2,2,2,1,1,1]);
            expect(score).toEqual('deuce');
        });

        it("should be able to detect player 1 advantage", function() {
            var score = tennisGame.getScore([2,2,2,1,1,1,1]);
            expect(score).toEqual('player 1 advantage');
        });

        it("should be able to detect player 2 advantage", function() {
           var score = tennisGame.getScore([2,2,2,2,1,1,1]);
            expect(score).toEqual('player 2 advantage');
        });

        it("should be able to detect dueces after 40", function() {
           var score = tennisGame.getScore([2,2,2,2,1,1,1,1]);
            expect(score).toEqual('deuce');
        });

        it("should be able to detect 40 - love", function() {
           var score = tennisGame.getScore([1,1,1]);
            expect(score).toEqual('40 - love');
        });

        it("should be able to detect player 1 win", function() {
           var score = tennisGame.getScore([1,1,1,1]);
            expect(score).toEqual('player 1 win');
        });

        it("should be able to detect player 2 win", function() {
            var score = tennisGame.getScore([2,2,2,2]);
            expect(score).toEqual('player 2 win');
        })

        it("should be able to detect post-deuce player 1 win", function() {
           var score = tennisGame.getScore([1,1,1,2,2,2,1,1]);
            expect(score).toEqual('player 1 win');
        });

        it("should be able to detect double-deuce", function() {
           var score = tennisGame.getScore([1,1,1,2,2,2,2,1]);
            expect(score).toEqual('deuce');
        });

        it("should be able to detect post-deuce player 2 win", function() {
           var score = tennisGame.getScore([1,1,1,2,2,2,2,2]);
            expect(score).toEqual('player 2 win');
        });

        it("should be able to detect post-double-deuce player 1 win", function() {
           var score = tennisGame.getScore([1,1,1,2,2,2,1,2,1,1]);
            expect(score).toEqual('player 1 win');
        });

        it("should be able to detect post-double-deuce player 2 win", function() {
           var score = tennisGame.getScore([1,1,1,2,2,2,1,2,2,2]);
            expect(score).toEqual('player 2 win');
        });
    });
});