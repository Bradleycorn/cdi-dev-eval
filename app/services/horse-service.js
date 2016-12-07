angular.module('myApp.services', [])


.service('myApp.horseService', [
  function() {

    /**
     * maintain a reference to this that
     * can used in async callbacks, etc.
     */
    var self = this;

    /**
     * Store the current horse being edited in the editor
     * or null if no horse is being edited.
     * @object horse
     */
    var _editHorse = null;

    var _horseList = [
      {
        number: 1,
        name: 'Jack Straw',
        odds: '2/1',
        isBet: false
      },
      {
        number: 2,
        name: 'Feel Like a Stranger',
        odds: '5/1',
        isBet: false
      },
      {
        number: 3,
        name: 'Estimated Prophet',
        odds: '5/2',
        isBet: false
      },
      {
        number: 4,
        name: 'The Other One',
        odds: '6/1',
        isBet: false
      },
      {
        number: 5,
        name: 'Ramble On Rose',
        odds: '12/1',
        isBet: false
      }
    ];


    this.getHorses = function() {
      return _horseList;
    };


    this.addHorse = function(name, odds, number) {
      if (number > 0) {
        var horse = this.findHorse(number);

        if (horse !== null) {
          horse.name = name;
          horse.odds = odds;
        }
        _editHorse = null;
      } else {
        var horseObj = {
          number: (_horseList.length + 1),
          name: name,
          odds: odds,
          isBet: false
        };

        _horseList.push(horseObj);
      }
    };

    this.editHorse = function(horse) {
      if (typeof horse === "object") {
        _editHorse = horse;
      } else {
        _editHorse = null;
      }
    };

    this.findHorse = function(number) {

      for (var i = 0; i < _horseList.length; i++) {
        if (_horseList[i].number == number) {
          return _horseList[i];
        }
      }
      return null;
    };

    this.getEditHorse = function() {
      return _editHorse;
    };

    this.getWager = function() {
      for (var i=0; i<_horseList.length; i++) {
        if (_horseList[i].isBet) {
          return _horseList[i];
        }
      }

      return null;
    };

    this.setWager = function(betHorse) {
      angular.forEach(_horseList, function(horse, index) {
        if (horse.number == betHorse.number) {
          horse.isBet = true;
        } else {
          horse.isBet = false;
        }
      });
    }
  }
]);