const db = require("../util/database");

module.exports = class Leaderboard{
    constructor(user,completePoints ,classAdd, dormChoice, hamVisit, facilVis, faculCheck ) {
        this.user =user;
        this.completePoints =completePoints;
        this.classAdd =classAdd;
        this.dormChoice =dormChoice;
        this.hamVisit =hamVisit;
        this.facilVis =facilVis;
        this.faculCheck =faculCheck;
    }
  
      static fetchAll()
      {
          return db.execute('SELECT * FROM User_Login.leaderboard ')
      }
  
      static save(post){
        //THIS SHOULD BE MODIFIED
          return db.execute(
                'UPDATE User_Login.leaderboard SET comPoint = ? , classAdd = ?, dormChoice = ?, hamVisit = ?, facilVis = ?, faculCheck = ?  WHERE username = test',
              [post.user, post.completePoints, post.classAdd, post.dormChoice, post.hamVisit, post.facilVis, post.faculCheck]
          );
      }
  }