class FollowToggle {
  constructor($el) {
    this.userId = $el.data('user');
    this.followState = $el.data('followstate');
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
    this.$el.on("click", ( event => {
      event.preventDefault();
      this.$el.prop("disabled", true);
      if (this.followState === 'followed') {
        $.ajax({
          method: "DELETE",
          url: `/users/${this.userId}/follow`,
          dataType: "json",
          success: () => {
            console.log("successfully unfollowed");
            this.followState = 'unfollowed';
            this.render();
            this.$el.prop("disabled", false);
          },
          error() {
            console.error("An error occurred.");
          },
        });
      } else {
        $.ajax({
          method: "POST",
          url: `/users/${this.userId}/follow`,
          dataType: "json",
          success: () => {
            console.log("successfully followed");
            this.followState = 'followed';
            this.render();
            this.$el.prop("disabled", false);
          },
          error() {
            console.error("An error occurred.");
          },
        });
      }

    }));
  }
}

module.exports = FollowToggle;
