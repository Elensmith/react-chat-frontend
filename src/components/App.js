import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { api } from "../utils/api";
import UserCard from "./UserCard";
import NewPost from "./forms/NewPost";
import Signup from "./forms/Signup";
import Signin from "./forms/Signin";
import Post from "./Post";
import Welcome from "./Welcome";
import { Button, Grid } from "semantic-ui-react";
// import FormValidator from "../utils/FormValidator";

function App() {
  // const { InputValidation } = FormValidator();
  const [isAddNewPostPopupOpen, setIsAddNewPostPopupOpen] = React.useState(false);
  const [isSignUpPopupOpen, setIsSignUpPopupOpen] = React.useState(false);
  const [isSignInPopupOpen, setIsSignInPopupOpen] = React.useState(false);
  const [isAuth, setIsAuth] = React.useState(true);
  const [cards, setCards] = React.useState([]);
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    submittedName: "",
    submittedEmail: "",
    avatar: ""
  });
  // const [isDisabled, setIsDisabled] = React.useState(false);
  const [errors, setErrors] = React.useState({
    nameError: null,
    emailError: null,
    avatarError: null,
    passwordError: null
  });
  const nameRegex = RegExp(/[A-Za-z]{2,20}/);
  const emailRegex = RegExp(/^([a-zA-Z0-9]+[-_.]*[a-zA-Z0-9]+|[a-zA-Z0-9]+)@[-a-zA-Z0-9]+[.][a-zA-Z.]{2,}$/);
  const passwordRegex = RegExp(/(\w){8,30}/);
  const avatarRegex = RegExp(/^(?:https?:\/\/)(?:www\.)?((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|[^._www-][a-zA-Z0-9.-]+[.][a-zA-Z]{2,}|[^._www-][a-zA-Z0-9.-]*[.][a-zA-Z]{2,})(:[1-9][0-9]{1,4})?(?:\/(?!\/)[\w\d?~-]*)*#?/);

  React.useEffect(() => {
    api.getCards()
      .then((cardsArr) => {
        setCards(cardsArr);
      })
      .catch((err) => {
        console.log("Ошибка. Запрос не выполнен: ", err);
      });
  }, []);


  function handleSubmit() {
    // InputValidation(values);
    // e.preventDefault();
    if (errors.nameError && errors.emailError && errors.passwordError & errors.avatarError === null){
      console.log("submitted");
    }
    // console.log("submitted");
  }

  function handleInputChange(e, { name, value }) {
    
    setValues({
      ...values,
      [name]: value
    });

    switch (name) {
      case "name":
        nameRegex.test(value) && value.length > 0 
        ?  setErrors({nameError:null})
        :  setErrors({nameError:"Please enter your name, min 2, max 20 characters"});
        break;
      case "email":
        emailRegex.test(value) && value.length > 0 
        ?  setErrors({emailError:null})
        :  setErrors({emailError:"Please enter valid email"});
        break;
      case "password":
        passwordRegex.test(value) && value.length > 0 
      ?  setErrors({passwordError:null})
      :  setErrors({passwordError:"Please enter min 8, max 30 characters"});
        break;
      case "avatar":
        avatarRegex.test(value) && value.length > 0 
      ?  setErrors({avatarError:null})
      :  setErrors({avatarError:"Please enter valid url"});
        break;

      default:
        break;
    }
  }

  function handleAddNewPostPopupClick() {
    setIsAddNewPostPopupOpen(true);
  }

  function handleSignUpPopupClick() {
    setIsSignUpPopupOpen(true);
  }

  function handleLogOutClick() {
    localStorage.removeItem("token");
    setIsAuth(false);
  }

  // console.log(values);
  console.log(errors);
  function handleSignInPopupClick() {
    setIsSignInPopupOpen(true);
  }

  function handleClosePopups() {
    setIsAddNewPostPopupOpen(false);
    setIsSignUpPopupOpen(false);
    setIsSignInPopupOpen(false);
  }

  return (
    <div className="App" >
      <Grid padded textAlign='left' relaxed='very' reversed>

        <Grid.Row  >
          <Grid.Column width={10}>
            {isAuth ? <UserCard /> : <Welcome />}
          </Grid.Column>
          <Route path="/">
            <Grid.Column textAlign='right' width={6} >
              {!isAuth ?
                <>
                  <Button
                    color='olive'
                    onClick={handleSignUpPopupClick}
                  >Sign up</Button>
                  <Button
                    color='olive'
                    onClick={handleSignInPopupClick}
                  >Sign in</Button>
                </>
                :
                <Button
                  color='olive'
                  onClick={handleLogOutClick}
                >Log out</Button>
              }
            </Grid.Column>
          </Route>
        </Grid.Row>
        <NewPost
          open={isAddNewPostPopupOpen}
          onClose={handleClosePopups} />
        <Signup
          onClick={handleSubmit()}
          // onSubmit={handleSubmit}
          open={isSignUpPopupOpen}
          onClose={handleClosePopups}
          onChange={handleInputChange}
          value={values}
          isError={errors}
          // isDisabled={isDisabled}
        />
        <Signin
          open={isSignInPopupOpen}
          onClose={handleClosePopups} />
        <Grid.Row >
          <Grid.Column >
            <>
              {isAuth ? <Button
                color='grey'
                onClick={handleAddNewPostPopupClick}
              >Add new post</Button> : ""}
              {cards.map((item) =>
                <Post
                  key={item.id}
                  post={item}
                />)

              }
            </>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;
