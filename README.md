![codealot-logo-with-slogan (1)](https://user-images.githubusercontent.com/49435141/172904362-89918bdc-8873-40ce-afb3-118f45a6721a.svg)

# Takealot E-Commerce Website Clone (Codealot)
> Codealot is a friendly community project. It is a place where you can add features and functionalities from Takealot, and it is designed to help developers with little or no experience to get a taste and feel of what it’s like to work on big production projects.

## Installing / Getting started

Before you can start working with Codealot, you need to:
1. Install git, Node.js (>= 16.0.0).
 
2. Fork the [Codealot](https://github.com/Phakeme/codealot) repositorsy using the Fork button on GitHub.

3. Clone the forked repositories to your computer using the following commands (replace [your account] with the account you forked the repositories to):
git clone https://github.com/[your_account]/codealot.git

To run Codealot locally, you'll first need to install its dependencies and build the app locally.

Do this like so:

```shell
cd codealot
npm install
```

### Initial Configuration

You will need the get the api access token from 
[Commercejs](https://commercejs.com/docs/)

1. Create an count with [Commercejs](https://commercejs.com/docs/)
2. Login to your account and create a new store.
3. Create atleast 6 products for your new store.
4. On your dashboard under developer tap, click API keys & CORS to get your api access token.
5. Back to your local Codealot project, create an .env file on the root folder of your project.
6. Paste your access token from [Commercejs](https://commercejs.com/docs/)

Do this like so:

```.env file >
REACT_APP_CHEC_PUBLIC_KEY='YOUR API ACCESS TOKEN'
```
7. Start your app

```shell
codealot npm start
```

### To build the app for production and deployment

```shell
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
