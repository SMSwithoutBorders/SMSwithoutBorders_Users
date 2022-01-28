import React, { useEffect } from "react";
import toast from "react-hot-toast";
import logo from "images/logo.png";
import { FiLogIn } from "react-icons/fi";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useLoginMutation, setCache, getCache, clearCache } from "services";
import { useDispatch, useSelector } from "react-redux";
import { saveAuth, authSelector } from "features";
import {
  Loader,
  Button,
  useTitle,
  Label,
  FormGroup,
  ErrorMessage,
  AuthContainer,
  PasswordInput,
  PhoneNumberInput,
  PageAnimationWrapper,
} from "components";

// login schema used by react-hook-form and yup
const schema = yup.object().shape({
  phone_number: yup.string().required("Please Enter your Phone Number"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Please enter your password"),
});

const Login = () => {
  useTitle("login");

  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading, isSuccess }] = useLoginMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  useEffect(() => {
    // if logged in then redirect to dashboard
    if (auth.uid) {
      navigate("/dashboard");
    }
    // get the stored cache to repopulate
    const cache = getCache();
    if (cache && cache.auth_key) {
      dispatch(saveAuth(cache));
      navigate("/dashboard");
    } else if (cache && cache.phone_number) {
      setValue("phone_number", cache.phone_number, {
        shouldValidate: true,
      });
      setValue("password", cache.password, {
        shouldValidate: true,
      });
      clearCache();
    }
  }, [setValue, dispatch, navigate, auth.uid]);

  const handleLogin = async (data) => {
    // cache the data in case we need it later
    setCache(data);
    try {
      const user = await login(data).unwrap();
      // save user credentials to state
      toast.success("Login successful");
      dispatch(saveAuth(user));
      // remove any cached data
      clearCache();
      /*
        redirect users if they initially tried to access a private route
        without permission
      */
      if (location.state && location.state.path) {
        navigate(location.state.path);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      switch (error.status) {
        case 400:
          toast.error(
            "Something went wrong \n We are working to resolve this. Please try again"
          );
          break;
        case 401:
          toast.error(
            "Forbidden, Account is unauthorized. \n check your phonenumber and password"
          );
          break;
        case 409:
          toast.error(
            "There is a possible duplicate of this account please contact support"
          );
          break;
        case 429:
          toast.error(
            "Too many failed attempts please wait a while and try again"
          );
          break;
        case 500:
          toast.error("A critical error occured. Please contact support");
          break;
        // custom error thrown by RTK Query https://redux-toolkit.js.org/rtk-query/usage/error-handling
        case "FETCH_ERROR":
          toast.error("An error occured, please check your network try again");
          break;
        default:
          toast.error("An error occured, please try again");
      }
    }
  };

  /*
    when making requests show loading indicator
    Also maintain after request is successfull to update background state
  */
  if (isLoading || isSuccess) {
    return <Loader />;
  }

  return (
    <PageAnimationWrapper>
      <AuthContainer className="bg-gray-100 md:py-20 2xl:py-0 2xl:h-screen lg:grid lg:place-items-center">
        <div className="container max-w-md p-8 mx-auto bg-white shadow-lg md:rounded-xl lg:my-10">
          <div className="mb-8">
            <img src={logo} alt="logo" className="h-32 mx-auto my-6" />
            <h1 className="text-2xl font-bold text-center">
              SMSWithoutBorders
            </h1>
          </div>
          <form onSubmit={handleSubmit(handleLogin)}>
            <FormGroup>
              <Label>Phone Number</Label>
              <Controller
                control={control}
                name="phone_number"
                render={({ field: { value, onChange } }) => (
                  <PhoneNumberInput
                    international
                    countryCallingCodeEditable={false}
                    placeholder="Enter your phone number"
                    defaultCountry="CM"
                    value={value}
                    type="tel"
                    onChange={onChange}
                    error={errors.phone_number}
                  />
                )}
              />
              {errors.phone_number && (
                <ErrorMessage>{errors.phone_number.message}</ErrorMessage>
              )}
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                name="password"
                {...register("password")}
                error={errors.password}
              />
              {errors.password && (
                <ErrorMessage>{errors.password?.message}</ErrorMessage>
              )}
            </FormGroup>

            <Button className="w-full">
              <FiLogIn /> &nbsp; login
            </Button>
          </form>
          <Link
            to="/password-reset"
            className="block mt-4 text-center appearance-none cursor-pointer text-primary-800"
          >
            Forgot Password
          </Link>
          <p className="mt-4 text-sm text-center text-gray-600">
            Dont have an account? &nbsp;
            <Link to="/sign-up" className="text-blue-800">
              Sign Up
            </Link>
          </p>
        </div>
      </AuthContainer>
    </PageAnimationWrapper>
  );
};

export default Login;
