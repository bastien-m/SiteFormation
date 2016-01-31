angular.module('Formation')
  .factory('UserFactory', [function() {

    var user =
      {
        'id':'BTM',
        'firstname': 'bastien',
        'lastname': 'mercier',
        'formations': {
          'in': [1],
          'out': [0]
        }
      };

    return {
      get: function(id) {
        return user;
      }
    }


  }]);
