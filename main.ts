import { PageController } from "./src/Controller/Page.controller";
import { BodyRequestLogin } from "./src/Model/ILogin";

const loginForm = document.getElementById("login-form") as HTMLFormElement;
const emailUser = document.getElementById("email-user") as HTMLInputElement;
const passwordUser = document.getElementById("password-user") as HTMLInputElement;

const url = "https://reqres.in/api";

loginForm.addEventListener("submit", async (event:Event) => {
  event.preventDefault();

  const data: BodyRequestLogin = {
    email: emailUser.value,
    password: passwordUser.value,
  };

  const controller = new PageController(url);
  const response = await controller.login(data, "/login");

  if (response.token) {
    localStorage.setItem("token", response.token);
    // Redirect to dashboard page
  } else {
    // Display error message
  }
});

