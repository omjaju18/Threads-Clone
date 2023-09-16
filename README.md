
<div align="center">
  <img src="https://github.com/omjaju18/Threads-Clone/assets/113230517/446d18cd-b76f-472e-89b8-98da445ae93f" width='400' alt="logo" />


  # Threads Clone with NEXT.JS!
  
  <p>
Threads Clone with NEXT.JS! (ReactJS, ReactJS, NextJS, Typescript, Tailwind CSS, MongoDB, Redux,Clerk ,Google Authentication, ShadCN)
  </p>

  <!-- Badges -->

<a href="https://threads-clone-omjaju.vercel.app/" target="_blank">![](https://img.shields.io/website-up-down-green-red/http/monip.org.svg)</a>
![](https://img.shields.io/badge/Maintained-Yes-indigo)
![](https://img.shields.io/github/issues/omjaju18/Threads-Clone)
![](https://img.shields.io/github/last-commit/omjaju18/Threads-Clone)

<h4>
    <a href="https://threads-clone-omjaju.vercel.app/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/SashenJayathilaka/Threads-Clone/blob/master/README.md">Documentation</a>
  </h4>
</div>

<br />


## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div style="display: flex" align="center"><br>

<a href="https://amazon-sclone.vercel.app" target="_blank"> <img width='900rem' src="https://user-images.githubusercontent.com/99184393/209748092-c0a53032-7c7d-4a76-bfc8-26735a204a12.png" alt=""/></a>

</div>

## <a href="https://threads-clone-omjaju.vercel.app/" target="_blank">LIVE DEMO 💥</a>

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
  <li><a href="https://#/">Javascript</a></li>
  <li><a href="https://nextjs.org">Next.js</a></li>
  <li><a href="https://reactjs.org/">React.js</a></li>
  <li><a href="https://react-redux.js.org">Redux</a></li>
  <li><a href="https://#/">Typescript</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
   <li><a href="https://clerk.com/">Clerk</a></li>
  </ul>
</details>

<details>
<br />



## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Firebase account <a href='https://firebase.google.com'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>


<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`

`CLERK_SECRET_KEY`

`NEXT_CLERK_WEBHOOK_SECRET`

`NEXT_PUBLIC_CLERK_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_SIGN_UP_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`

`NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`


`MONGODB_URL`

`UPLOADTHING_SECRET`

`UPLOADTHING_APP_ID`



### :gear: Installation

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

```
npx create-next-app amazon-clone
```

```
cd amazon-clone
```

<a href="https://clerk.com/" target="_blank">Create a Clerk project.</a>

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install dependencies

<a href="https://github.com/SashenJayathilaka/AMAZON-Clone/blob/master/package.json" target="_blank">🔶 Other Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/SashenJayathilaka/AMAZON-Clone.git
```

Install dependencies
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
  npm install
```

## Getting Started

Start the server
First, run the development server:

```bash
  npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :handshake: Contact

Your Name - [@linkedin_handle](https://twitter.com/SashenHasinduJ) - sashenjayathilaka95@gmail.com

Project Link: [https://github.com/omjaju18/Threads-Clone](https://github.com/SashenJayathilaka/AMAZON-Clone.git)

<hr />

<div align="center">
<a href="https://amazon-sclone.vercel.app" target="_blank"><img  src='https://user-images.githubusercontent.com/99184393/209749188-705d7936-5289-4b26-ae22-a5ac418a2d77.png' alt='image' width='900rem' /></a>
  <a href="https://amazon-sclone.vercel.app" target="_blank"><img  src='https://user-images.githubusercontent.com/99184393/209749299-3e1c4ec9-cc67-48b4-8044-775027d3af34.png' alt='image' width='900rem' /></a>
</div>


<br />

<div align="center">Don't forget to leave a star ⭐️</div>
