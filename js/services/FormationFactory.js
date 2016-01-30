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
      },
      findBySearchAll: function(searchExpression) {
        var searchExpression = searchExpression.trim().toLowerCase();
        var match = [];
        angular.forEach(formations, function(formation) {
          if (S(formation.name.trim().toLowerCase()).contains(searchExpression)
          || S(formation.leader.trim().toLowerCase()).contains(searchExpression)
          || S(formation.summary.trim().toLowerCase()).contains(searchExpression)) {
            match.push(formation);
          }
          else {
            angular.forEach(formation.keywords, function(keyword) {
              if (S(keyword.trim().toLowerCase()).contains(searchExpression)) {
                match.push(formation);
                return;
              }
            })
          }
        });

        return match;
      },
      findByCriteria: function(firstCriteria, secondCriteria) {
        var match = [];
        angular.forEach(formations, function(formation) {
          console.log(formation[firstCriteria.id]);
          console.log(secondCriteria.value);
          if(formation[firstCriteria.id] === secondCriteria.value) match.push(formation);
        });
        return match;
      }
    }


  }]);
