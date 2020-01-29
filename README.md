# HTML Report
 A simple PDF generator using html in your body

## Clone and Run

After clone this repository locally you need execute

`yarn` to download all dependecies
`yarn build` to generate the report sample with a "Hello World" in PDF

> **note**: the PDF file has been setup to save in `temp` dir

## Next steps

You can edit the HTML template file located in `public` dir using handlebars

> you can read more about syntax on [handlebars](https://handlebarsjs.com/) site

After this you can change the `data` variable in `src/index.js` to manipulate the template.
