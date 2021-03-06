class TweetCompose {
  constructor($el) {
    this.$el = $el;
    this.$content = $el.find('textarea');
    this.$mention = $el.find('option');
    this.submit();
    this.handleContent();
    this.addMentionedUser();
    this.removeMentionedUser();
  }

  submit(){
    this.$el.on("submit", ( event => {
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: "/tweets",
        dataType: "json",
        data: this.$el.serialize(),
        success: (message)=> {
          this.clearForm();
          this.renderTweet(message);
        },
        error() {
          console.error("An error occurred.");
        },
      });
    }));
  }

  renderTweet(message){
    let $feed = $('#feed');
    let $new_tweet = $(`<li>${message.content} -- <a href=http://localhost:3000/users/${message.user_id}>\
    ${message.user.username}</a> -- ${message.created_at}\
    <ul><li><a href=http://localhost:3000/users/${message.mentions[0].user_id}>\
    ${message.mentions[0].user.username}</a></li></ul></li>`);
    $feed.prepend($new_tweet);
  }

  clearForm () {
    this.$content.val("");
    $("option:selected").removeAttr("selected");
    this.$el.find("strong").text("140");
  }

  handleContent(){
    this.$content.on("input", (event => {
      event.preventDefault();
      let currentCount = event.target.value.length;
      this.$el.find("strong").text(`${140 - currentCount}`);
    }));
  }

  addMentionedUser(){
    $("a.add-mentioned-user").on("click", event => {
      let $scriptTag = this.$el.find('script');
      $('.selector').append($(`${$scriptTag.html()}`));
      $("select").on("change", e => {
        let val = $("select option:selected").text();
        let $val = $(`<li>${val}\
          <a href="javascript:void(0)" class="remove-mentioned-user">Remove</a>\
          </li>`);
        $(".mentioned-users").find("ul").append($val);
      });
    });
  }

  removeMentionedUser(){
    $("a.remove-mentioned-user").on("click", event => {
      // if click on remove, nothing happens. doesn't enter this function
      $("select").on("change", e => {
        let val = $("select option:selected").text();
        let $val = $(`<li>${val}\
          <a href="javascript:void(0)" class="remove-mentioned-user">Remove</a>\
          </li>`);
        $(".mentioned-users").find("ul").append($val);
      });
    });
  }
}

module.exports = TweetCompose;
