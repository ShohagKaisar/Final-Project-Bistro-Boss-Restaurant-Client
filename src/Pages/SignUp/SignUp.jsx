import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Routes/Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hocks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";



const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { creatUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
const axiosPublic = UseAxiosPublic();

  const onSubmit = (data) => {
    creatUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const userInfo ={
              name: data.name,
              email: data.email,
            }
            // creat user entry in the database
            axiosPublic.post('/users', userInfo)
            .then(res =>{
              console.log(res.data.insertedd);
              if(res.data.insertedId){
                console.log('user added to the DB');
              }
            })
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Sign Up Successfull",
              showConfirmButton: false,
              timer: 1500
            });
            navigate('/');
          })
          .catch(error => console.log(error))
      })
  }

  return (
    <>
      <Helmet>
        <title>Bistro Boss-Sign Up</title>
      </Helmet>
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
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" name="name" {...register("photoURL", { required: true })} placeholder="Phto URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
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
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 charecters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">Password must be less than 20 charecters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">Password must have one uppercase, one lowercase, one number, one special charecters</p>
                )}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Sign Up" />
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className="py-2 mx-auto"><small>Already have an account? <Link className="text-blue-700" to={'/login'}>Login Here !</Link></small></p>
          </div>
        </div>
      </div></>
  );
};

export default SignUp;