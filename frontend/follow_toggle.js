class FollowToggle {
  constructor($el) {
    this.userId = $el.data('user');
    this.followState = $el.data('followState');
    this.$el = $el;

    this.render();
    this.handleClick();
  }

  render(){
    if (this.followState === 'followed') {
      this.$el.text('Unfollow!');
    } else {
      this.$el.text('Follow!');
    }
  }

  handleClick(){

  }
}

module.exports = FollowToggle;
