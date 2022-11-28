class User {
  constructor(tweets) {
    this.username = document.querySelector("#username");
    this.picture = document.querySelector("#picture");
    const btnSend = document.querySelector(".btn-enviar");
    btnSend.addEventListener("click", () => this.signUp());
    this._username = this.username.value;
    this._picture = this.picture.value;
    this.tweets = tweets;
  }

  signUp() {
    if (!this.picture.value || !this.username.value) {
      alert("Digite username de usuário e insira uma foto");
      return;
    }
    this._username = this.username.value;
    this._picture = this.picture.value;
    const tweets = new Tweets(this._username);
    axios
      .post("http://localhost:5001/sign-up", {
        username: this._username,
        avatar: this._picture,
      })
      .then(() => {
        tweets.loadTweets(this._username);
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao fazer cadastro! Consulte os logs.");
      });
  }
}

class Tweets {
  constructor(_username) {
    this.tweets = [];
    this.tweetsHtml = "";
    const btnSendTweet = document.querySelector(".btn-enviar-tweet");
    btnSendTweet.addEventListener("click", () => this.postTweet());
    this.tweetInput = document.querySelector("#tweet");
    this._username = _username;
  }

  loadTweets() {
    axios
      .get("http://localhost:5001/tweets")
      .then((res) => {
        this.tweets = res.data;
        this.renderTweet();
      })
      .catch((err) => {
        console.log("nao deu pra pegar os tweets");
      });
  }

  renderTweet() {
    this.tweetsHtml = "";
    for (const tweet of this.tweets) {
      this.tweetsHtml += `
        <div class="tweet">
          <div class="avatar">
            <img src="${tweet.avatar}" />
          </div>
          <div class="content">
            <div class="user">
              @${this.escapeHtml(tweet.username)}
            </div>
            <div class="body">
              ${tweet.tweet}
            </div>
          </div>
        </div>
      `;
    }
    document.querySelector(".tweets").innerHTML = this.tweetsHtml;
    document.querySelector(".pagina-inicial").classList.add("hidden");
    document.querySelector(".tweets-page").classList.remove("hidden");
  }

  postTweet() {
    if (!this.tweetInput.value) {
      alert("Campo de tweet não pode ser nulo");
      return;
    }
    axios
      .post("http://localhost:5001/tweets", {
        username: this._username,
        tweet: this.tweetInput.value,
      })
      .then(() => {
        document.querySelector("#tweet").value = "";
        document.querySelector(".tweets").innerHTML = "";
        this.loadTweets();
      })
      .catch((err) => {
        console.error(err);
        alert("Erro ao fazer tweet! Consulte os logs.");
      });
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

const user = new User();
