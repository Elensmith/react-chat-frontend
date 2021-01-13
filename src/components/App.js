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

function App() {
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
    password: "",
    avatar: ""
  });


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
    console.log("submitted");
  }

  function handleInputChange(e, { name, value }) {
    setValues({
      ...values,
      [name]: value
    });
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

  console.log(values);
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
          onClick={handleSubmit}
          open={isSignUpPopupOpen}
          onClose={handleClosePopups}
          onChange={handleInputChange}
          value={values}
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
