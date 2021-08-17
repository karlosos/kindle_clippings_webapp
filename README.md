![vscode-portfolio banner](./docs/dashboard_small.png)

<div align="center">

[![Code style: standardjs](https://img.shields.io/badge/code%20style-standardjs-F3DF49.svg)](https://standardjs.com/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![Build and Deploy](https://github.com/karlosos/kindle_clippings_webapp/actions/workflows/main.yml/badge.svg)](https://github.com/karlosos/kindle_clippings_webapp/actions/workflows/main.yml)
![Coverage 66%](https://img.shields.io/badge/coverage-66%25-yellow)
</div>

***

<h4 align="center"><img src="./docs/logo_books.png" width="18px" />Kindle Clippings Manager</h4>


<p align="center">
  <a href="#about">About</a> •
  <a href="#what-i-have-learned">What I Have Learned</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0"><br>
Website: <b><a href="https://karlosos.github.io/kindle_clippings_webapp/#/demo">karlosos.github.io/kindle_clippings_webapp 🌐</a></b><br>
<img width="2000" height="0">
</td>
</tbody>
</table>
</p>

## About

Import Kindle Clippings and show them in accessible way. The app divides clippings into books and gives an option to delete and like highlights.

All functions:
- import clippings
- browse clippings
- create backup and load from backup (saved to json file)
- export all clippings from book to txt file
- save application state in `localStorage` (app state is persistent)

## What I Have Learned

This project was more goal oriented rather than education oriented. I wanted to have a simple desktop (electron) application for managing my kindle clippings.

## Development

1. Install dependencies with `npm install`.
1. Run desktop application with `npm run start` or react app with `npm run react-start`.
1. Access application under `localhost:3000`.

Code coverage can be checked using `npm run test:coverage`. Currently it is about 66%, mostly integration tests.

## Deployment

Application is automatically deployed to GithubPages using `.github/workflows/main.yml` workflow.