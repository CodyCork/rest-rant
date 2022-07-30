const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <img src={place.pic} alt={place.name} />
        <div>
          <h1>{data.place.name}</h1>
          <h2>Rating</h2>
          <p>Not Rated</p>
          <h2>Description</h2>
          <p>
            Located in {place.city}, {place.state} and serving {place.cuisine}
          </p>
        </div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
