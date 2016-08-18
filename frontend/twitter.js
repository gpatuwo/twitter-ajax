const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search.js');
$( () => {
  const followToggles = $('.follow-toggle');
  followToggles.each( (index, el) => {
    new FollowToggle($(el));
  });
  const usersSearch = $('.users-search');
  new UsersSearch(usersSearch);
}

);
