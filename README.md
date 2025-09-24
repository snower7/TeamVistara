# Team Vistara Website

This page is for hosting project information such as project members, roles, documentation, and metrics. 
Metrics and documentation will be updated on a weekly basis.

## Website Link

The website can be accessed at https://snower7.github.io/TeamVistara/

## How to add metrics

* Go to `github-pages-demo/public`
* Make a folder for the week if needed `Week#`
* Insert `png` photos with the names:
    * Cumulative Flow
    * Test Coverage
    * Velocity
    * Lead Time

> [!NOTE]
> Not all images must be present

## How to add documentation

### 4-ups

* Go to `public/documents/4-ups`
* Add the `pdf` to the folder

### Other documentation

* Go to `public/documents` 
* Add the file to the folder
* Go to `src/documents.jsx`
* Add to the return statement the following:

```
<h3><a target="_blank" href={'/TeamVistara/documents/{filename}'}>{Name of file}</a></h3>
```