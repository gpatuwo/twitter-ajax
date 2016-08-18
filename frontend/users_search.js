class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $el.find("input");
    this.$users = $el.find("ul");
    this.handleInput();
  }

  handleInput(){
    this.$input.on("input", (event => {
      event.preventDefault();
      $.ajax({
        method: "GET",
        url: '/users/search',
        dataType: "json",
        data: this.$input.serialize(),
        success: (message) => {
          this.$users.children().remove();
          this.renderResults(message);
        },
        error() {
          console.error("An error occurred.");
        },
      });
    }));
  }

  renderResults(message){
    message.forEach( (el) => {
      let $user = $(`<li> <a href=http://localhost:3000/users/${el.id}>${el.username}</a></li>`);
      this.$users.append($user);
    });
  }

}

module.exports = UsersSearch;
