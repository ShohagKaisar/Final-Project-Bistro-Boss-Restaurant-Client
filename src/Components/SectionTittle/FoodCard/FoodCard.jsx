

const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  


  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4 rounded-lg">{price}$</p>
        <div className="card-body flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="border-b-4 border-orange-500 bg-slate-300 rounded-b-lg px-4 py-2 hover:bg-black hover:text-white hover:rounded-t-lg hover:font-bold">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;