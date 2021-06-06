import React from "react";
import Footer from "./Footer/footer"
function MainPage () {
    return (
        <>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
      integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./../public/css/main.css" />
    <title>Kelsey's Portfolio</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand mb-1 h1">Kelsey Benedict</span>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-right">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="page-header">
            <h1>About Me</h1>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <img
                id="bio"
                src="./../public/images/bio.png"
                alt="Me on a decorative staircase"
                class="img-thumbnail img-fluid"
              />
            </div>
            <div class="col-md-8 col-sm-6">
              <p class="card-text">
                Welcome to my Portfolio! My name is Kelsey Benedict. I am
                originally from Anchorage, AK, but currently residing in Denver,
                CO. I have a passion for software development, but when I'm not
                on my computer, I'm taking my dog for a walk, baking dessert,
                buying new houseplants, or watching true crime shows. Feel free
                to use the 'Contact' page to send me a message!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row" id="bottom-row">
        <div class="col-md-6"></div>
      </div>
    </div>

    <div class="footer">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <a href="https://www.linkedin.com/in/kelsey-benedict-8396581a2/">
            <img
              class="socialmedia"
              src="../../public/images/linkedinlogo.png"
              alt="LinkedIn logo"
            />
          </a>
          <a href="https://github.com/kelseybenedict/kelseybenedict.github.io">
            <img
              class="socialmedia"
              src="../../public/images/GitHub-Mark.png"
              alt="GitHub logo"
            />
          </a>

        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <a id="email" href="mailto:kelseybenedict26@gmail.com"
            >kelseybenedict26@gmail.com</a
          >
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
<Footer />
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
      crossorigin="anonymous"
    ></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
   
  </body>
</html>
        </>
    )
}

export default MainPage;