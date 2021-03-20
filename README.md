# Project Name

> Ingenuity

## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

<span style="color:red"> Images service seed script needs Instructors and OfferedBys data to write the correct data </span>

I made some decisions early on that aren't easily fixed.  The workaround for it is:

>  Generate data for the Instructors service.

> Copy <u>jsmithInstructorsService/db/data/instructors.json</u> and <u>jsmithInstructorsService/db/data/offeredBys.json</u> into the jsmithImages/db/data folder

> Run "npm run generate"

> Run "npm run test"

> Once generate is complete, run "npm run insert"

The only downside that I can see to this method is that if you generate new Instructors data, the OfferedBy images might not match the text (ex: Penn State image for IBM offeredBy).

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

