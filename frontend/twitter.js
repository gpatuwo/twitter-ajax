const FollowToggle = require('./follow_toggle');

$( () => {
  const followToggles = $('.follow-toggle');
  followToggles.each( (index, el) => {
    new FollowToggle($(el));
  });
}

);
