const Store = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Store</h2>
      <p className="mb-6">All items available for purchase will appear here.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Artwork 1</h3>
            <p>Price: $100</p>
            <button className="btn btn-primary mt-2">Buy</button>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Artwork 2</h3>
            <p>Price: $150</p>
            <button className="btn btn-primary mt-2">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
