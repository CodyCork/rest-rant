const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img id="burritos" src="css/images/burritos.jpg" alt="burritos" />
          <div>
            Photo by{" "}
            <a href="https://unsplash.com/photos/50KffXbjIOg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">
              Ryan Concepcion
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
