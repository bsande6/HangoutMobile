# HangoutApp


<div id="top"></div>

<br />
<div align="center">
  <a href="https://github.com/kenleyshaw/HangoutApp">
    <img src="HangoutAppLogo.png" alt="Logo" width="100" height="140">
  </a>

<h3 align="center">Hangout App</h3>

  <p align="center">
    Determine which friends are available to do something. Users are able to input their schedule and report their current status (busy, willing to do something, wanting to travel, etc).
    <br />
    <a href="https://github.com/kenleyshaw/repo_name">View Demo</a>
    ·
    <a href="https://github.com/kenleyshaw/HangoutApp/issues">Report Bug</a>
    ·
    <a href="https://github.com/kenleyshaw/HangoutApp/issues">Request Feature</a>
  </p>
</div>



<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



## About The Project

<img src="D93D3B63-D8C9-4BAE-9D23-BDC51E92C83C.jpeg" alt="Logo" width="300" height="100">

Determine which friends are available to do something. Users are able to input their schedule and report their current status (busy, willing to do something, wanting to travel, etc). 

Why not text your friends instead? Or check Facebook status? 
Hangout App makes it much easier to get an organized view of who is available without the hassle of keeping up with messages.

In this app, users can set their status depending on their availability in addition to viewing the status of their friends list. Add friends directly from your contacts

This project is an extension of a course project.

<p align="right">(<a href="#top">back to top</a>)</p>



## Wireframing

<img src="HangoutApp Wireframe/Login.png" alt="login">
<img src="HangoutApp Wireframe/Register.png" alt="register">
<img src="HangoutApp Wireframe/Hobbies.png" alt="hobbies">
<img src="HangoutApp Wireframe/Location Set.png" alt="location">
<img src="HangoutApp Wireframe/Dashboard.png" alt="dashboard">
<img src="HangoutApp Wireframe/Friends List.png" alt="friendslist">
<img src="HangoutApp Wireframe/Profile.png" alt="profile">
<img src="HangoutApp Wireframe / Friend Groups (dashboard page 3?).png" alt="groups">


### Built With

* React-native
* expo Go

<p align="right">(<a href="#top">back to top</a>)</p>



## Getting Started
Navigate to the HangoutMobile repository

To set up the environment run
pip install -r requirements.txt

To install node 16 run 
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt install -y nodejs

You can check the installation with 
node -v
  8.15.0

npm -v
  v16.17.0

To start the frontend

cd frontend

npm install expo-cli
npm start

From here you can press 'w' to open the app in the browser or download the expo app to view it on mobile.

To start the backend in a new terminal navigate to the backend folder and run

python manage.py runserver 0.0.0.0:8000

Run the command ifconfig to determine your ip

In frontend/components/globalContext.js adjust the domain to your ip address
In backend/hangout_app/settings.py add the ip to the allowed hosts


### Prerequisites

to list things you need to use the software

### Installation

Install instructions here

<p align="right">(<a href="#top">back to top</a>)</p>



## Usage

to add screenshots, code examples and demos

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



## Roadmap

to add later:
- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

<p align="right">(<a href="#top">back to top</a>)</p>



## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



## Contact

Project Link: [https://github.com/kenleyshaw/HangoutApp](https://github.com/kenleyshaw/HangoutApp)

Email: hangoutappcpsc@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>

## Acknowledgments

* []()Kenley Shaw
* []()Brad Sanders
* []()Noah Cooley-Cannon - Scrum Master
* []()Samuel Hagan

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
