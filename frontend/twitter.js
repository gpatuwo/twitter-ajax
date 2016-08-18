const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search.js');
const TweetCompose = require('./tweet_compose.js');

$( () => {
  const followToggles = $('.follow-toggle');
  followToggles.each( (index, el) => {
    new FollowToggle($(el));
  });
  const usersSearch = $('.users-search');
  new UsersSearch(usersSearch);

  const tweetCompose = $('.tweet-compose');
  new TweetCompose(tweetCompose);

}

);
