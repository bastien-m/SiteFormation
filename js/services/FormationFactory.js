angular.module('Formation')
  .factory('FormationFactory', ['$q', function($q) {

    var formations = [
      {
        id: 0,
        name : 'Formation Angular',
        leader: 'B.MERCIER',
        level: 3,
        direction: 'DEI',
        summary: 'Une formation d\'introduction à AngularJS nécessitant de connaitre les concepts intermédiaires de Javascript.',
        keywords: ['javascript', 'angular', 'dev'],
        participants: ['BBB', 'AAA', 'ABC','BBB', 'AAA', 'ABC','BBB', 'AAA', 'ABC','BBB', 'AAA', 'ABC','BBB', 'AAA', 'ABC','BBB', 'AAA', 'ABC']
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
      },
      findByKeywords: function(keywords) {
        var match = [];
        angular.forEach(formations, function(formation) {
          match.push(_.difference(keywords, _.intersection(formation.keywords, keywords)).length === 0 ? formation : null);
        });

        return match;
      }
    }


  }]);
