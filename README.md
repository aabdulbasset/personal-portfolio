</br>
</br>

<h2 align="center">
Dev Portfolio
</h2>
<p align="center">
A responsive code-themed developer portfolio built using Next.js v13, Contentful CMS, Radix-UI
</br>
</br>
<a href="https://aabdulbasset.com">Demo</a>
·
<a href="https://github.com/aabdulbasset/personal-portfolio/issues">Report Bug</a>
·
<a href="https://github.com/aabdulbasset/personal-portfolio/issues">Suggest Feature</a>
</p>

## About the Project

</br>
<img align="center" src="assets/screenshot.png"></img>
</br>
</br>

### Built With

- [![Next][Next.js]][Next-url]
- [![radixui][radixui]][radixui-url]
- [![Contentful][Contentful]][Contentful-url]
- [![TailwindCSS][tailwindcss]][tailwindcss-url]

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- node [From Here][node-url]

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a [Contentful][Contentful-url] Account
2. Get a [Contentful management token][contentful-token]
3. Clone the repo
   ```sh
   git clone https://github.com/aabdulbasset/personal-portfolio.git
   ```
4. Rename .env.local.example to .env.local and fill in the management token from step 2

   ```
   CONTENTFUL_MANAGEMENT_TOKEN = 'TOKEN HERE'
   ```

5. Install NPM packages
   ```sh
   npm install
   ```
6. Run init script
   ```sh
   npm run init
   ```
7. Create an [api key][contentful-api-token] for your newly created Contentful space and [add some content][contentful-add-content].
8. Fill in the spaceID from the script in step 6 and the token from step 7 in .env.local

   ```
   CONTENTFUL_SPACE_ID = 'Space ID'
   CONTENTFUL_ACCESS_TOKEN = 'ACCESS TOKEN'
   ```

9. Run the project
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm run build
   ```

## Todo

- [ ] Easier init script
- [ ] Dynamic better site logo (next.js issues)

See the [open issues](https://github.com/aabdulbasset/personal-portfolio/issues) for a full list of proposed features (and known issues).

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Contentful]: https://img.shields.io/badge/Contentful-000000?style=for-the-badge&logo=contentful&logoColor=white
[Contentful-url]: https://contentful.com
[radixui]: https://img.shields.io/badge/radixui-fff?style=for-the-badge&logo=radixui&logoColor=black
[radixui-url]: https://www.radix-ui.com/
[node-url]: https://nodejs.org/en/download/current
[tailwindcss]: https://img.shields.io/badge/TailwindCSS-0b1120?style=for-the-badge&logo=tailwindcss&logoColor=%2306B6D4
[tailwindcss-url]: https://tailwindcss.com
[contentful-token]: https://app.contentful.com/account/profile/cma_tokens
[contentful-api-token]: https://www.contentful.com/developers/docs/references/authentication/#the-content-delivery-and-preview-api
[contentful-add-content]: https://www.contentful.com/help/contentful-101/#step-5-add-content
