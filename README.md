# Vanzeron

Vanzeron is a worldwide news website created with Angular. It lets users search countries by continent and obtain
both geographical information and news from different sources about them.

## Getting started

Clone the repository using:

```bash
git clone https://github.com/Carlos-Vanzetto/angular-template-curso-2023.git
```

## Development server

Run `yarn start` or `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Development server options

to serve normal use this configuration:

```bash
  yarn start || npm run start
```

to serve and automatically open the browser use this configuration:

```bash
  yarn start:open || npm run start:open
```

to serve and access from a local network use this configuration:

```bash
  yarn start:host || npm run start:host
```

to serve as `production` run use this configuration:

```bash
  yarn start:prod || npm run start:prod
```

## Build

Run `yarn build:option` or `npm run build:option` to build the project. The build artifacts will be stored in the `dist/` directory.

### Build options

to compile for `development` use this configuration:

```
  yarn build:dev || npm run build:dev
```

to compile for `production` use this configuration:

```
  yarn build:prod || npm run build:prod
```

to compile for `webpack-bundle-analyzer` use this configuration:

```
  yarn build:stats || npm run build:stats
```

---

## Check it out

Visit the website [here](https://vanzeron.netlify.app/)

## Credentials

Functionality of the website requires user to be logged in with a valid account. Currently there is no database or backend logic for managing account registration or login. In order to gain acccess to the main features of the website use:
`email: admin@vanzeron.com` and `password:Admin1234$`

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
