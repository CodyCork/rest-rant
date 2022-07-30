const React = require("react");
const Def = require("./default");

function error404() {
  return (
    <Def>
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p id="errorText">Oops, sorry, we can't find this page!</p>
        <div id="lizard">
          <img
            id="lizardImg"
            src="/css/images/notFoodMyFriend.jpg"
            alt="funnyLizard"
          />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/photos/qOt9-QPYmSA?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
              Philip Veater
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
