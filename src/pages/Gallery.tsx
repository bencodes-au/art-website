const Gallery = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Gallery</h2>
      <p className="mb-6">Purchased items will appear here.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Artwork A</h3>
            <p>Owned</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md">
          <div className="card-body">
            <h3 className="card-title">Artwork B</h3>
            <p>Owned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
