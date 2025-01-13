import { useForm } from "react-hook-form";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
              {errors.email && <span className="text-red-600">Email required</span>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 10,
                pattern: /(?=.*[A-Z]])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
              })} placeholder="password" className="input input-bordered" />
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 charecters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be less than 10 charecters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">Password must have one uppercase, one lowercase, one number, one special charecters</p>
              )}
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;