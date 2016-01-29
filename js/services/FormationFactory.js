angular.module('Formation')
  .factory('FormationFactory', ['$q', function($q) {

    var formations = [
      {
        id: 0,
        name : 'Formation Angular',
        leader: 'B.MERCIER',
        level: 3,
        direction: 'DEI',
        participants: ['BBB', 'AAA', 'ABC']
      }
    ]

    return {
      get: function(id) {
        if (id == null) {
          return formations
        }
        else {
          for (var i in formations) {
            if (id == formations[i].id) return formations[i];
          }
          return null;
        }
      }
    }


  }]);
