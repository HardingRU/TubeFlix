// const db = require('../db/config');

module.exports = {

  getHome() {
    return db.any(`SELECT followers.follower_id, followers.following_id, posts.id AS postid, users.id as id, users.pic, posts.type, posts.user_id, users.user_name, posts.notes, posts.content
                  FROM followers
                  INNER JOIN posts ON followers.following_id = posts.user_id
                  INNER JOIN users ON users.id = followers.following_id
                  WHERE followers.follower_id = $1 ORDER BY posts.id DESC`, input);
  }

}
