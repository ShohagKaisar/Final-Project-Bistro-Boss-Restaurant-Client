/* eslint-disable react/prop-types */


const MenuItem = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="flex space-x-2">
      <img className="w-[100px]" style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" />
      <div>
        <p className="uppercase">{name}---------</p>
        <p>{recipe}</p>
      </div>
        <p className="text-yellow-500">{price}$</p>
    </div>
  );
};

export default MenuItem;