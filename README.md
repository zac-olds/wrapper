# Project Overview

## Project Name

wrapper

## Project Description

wrapper is an airtable and React base app that will allow users to discuss, learn about, and discover new cigars. Cigar culture is historically a bit snobby, so this app will endeavor to make cigars more accesible to the beginner, while also providing a useful service to the purists. It will allow users to post reviews of cigars, add tasting notes, revisit past reviews (and update them), and search the database for specific reviews based on cigar name or by author.

## Wireframes

View the wireframe [here](https://user-images.githubusercontent.com/74211758/101119369-cde84680-35b0-11eb-968a-daf3d49e3857.jpg).

## Component Hierarchy

View the component hierarchy [here](https://user-images.githubusercontent.com/74211758/101182099-467fef00-3613-11eb-8ec7-b7aaaf9b95d9.jpg).

## API and Data Sample

```javascript
{
    "records": [
        {
            "id": "recwgzXfI0ZhWWOkQ",
            "fields": {
                "rating": "96",
                "filler": "Nicaragua",
                "cigar": "Aging Room Quattro Nicaragua Maestro",
                "wrapper": "Nicaragua",
                "author": "Zac Olds",
                "binder": "Nicaragua",
                "photo": "https://img.mshanken.com/d/cao/ratings_extras/cigars/21073-H.jpg",
                "tastingNotes": "dark chocolate, wood, hints of fine caramel, toasted almonds",
                "review": "The cigar is essentially Nodal’s vision, crafted by Fernandez with his distinct tobacco and signature factory style. Every last leaf in this blend is ..."
            },
            "createdTime": "2020-12-03T22:03:51.000Z"
        },
        {
            "id": "recXahM50tdLu81D8",
            "fields": {},
            "createdTime": "2020-12-03T22:03:51.000Z"
        },
        {
            "id": "recTxWdSoSz9G7S8h",
            "fields": {},
            "createdTime": "2020-12-03T22:03:51.000Z"
        }
    ],
    "offset": "recTxWdSoSz9G7S8h"
}
```

### MVP/PostMVP

#### MVP

- Set up and import airtable database
- Impliment React Router and app structure
- Build out home page with TopRatedCigars
- Build out NavBar and Footer
- Build out CigarList
- Build out CigarReview with ability to post/put new/old reviews
- Build out CigarDetail with capability to delete reviews
- Build out CigarSearch
- Style with CSS

#### PostMVP

- Replace cigar list, new review, and search buttons with drop down hamburger menu
- Add second API
- Add a "buy now" button
- Add CigarList page based on the author who submitted the review

## Project Schedule

| Day         | Deliverable                                        | Status     |
| ----------- | -------------------------------------------------- | ---------- |
| December 4  | Prompt / Wireframes / Priority Matrix / Timeframes | Complete   |
| December 4  | Project Approval                                   | Complete   |
| December 6  | Core Application Structure (HTML, CSS, etc.)       | Complete   |
| December 6  | Pseudocode / actual code                           | Complete   |
| December 8  | Initial Clickable Model                            | Complete   |
| December 10 | MVP                                                | Complete   |
| December 11 | Presentations                                      | Incomplete |

## Timeframes

| Component                          | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Creating airtable DB               |    H     |      3hrs      |    1.5hrs     |   1.5hrs    |
| React Router and app structure     |    H     |      3hrs      |     3hrs      |    3hrs     |
| Build out home page with routing   |    H     |      2hrs      |     2hrs      |    2hrs     |
| Build NavBar                       |    H     |      2hrs      |     2hrs      |    2hrs     |
| Build Footer                       |    H     |      2hrs      |     2hrs      |    2hrs     |
| Build CigarList page               |    H     |      4hrs      |     3hrs      |    3hrs     |
| Build CigarReview page             |    H     |     2.5hrs     |     5hrs      |    5hrs     |
| Set up post review functionality   |    H     |     2.5hrs     |     3hrs      |    3hrs     |
| Build CigarDetail page             |    H     |      3hrs      |     4hrs      |    4hrs     |
| Set up delete review functionality |    H     |      1hrs      |     1hrs      |    1hrs     |
| Research best way to search DB     |    H     |      2hrs      |    1.5hrs     |   1.5hrs    |
| Build CigarSearch, add to Nav      |    H     |      3hrs      |     2hrs      |    2hrs     |
| Build TopRatedCigars, add to Home  |    H     |      4hrs      |     2hrs      |    2hrs     |
| CSS styling                        |    H     |      6hrs      |     6hrs      |    6hrs     |
| Total                              |    H     |     40hrs      |     38hrs     |    38hrs    |

## SWOT Analysis

### Strengths:

I know how to set up and make the majority of the app functional and appealing to users. I have a pretty good idea of what I want it to look like and the logic behind the functionality that I want to impliment for this project. I'm pretty strong on the logic side of React.

### Weaknesses:

I am not 100% clear how I am going to make my search and top cigar (based on rating) functionality work. In addition, class components are still pretty fresh, and it is going to be difficult to impliment them in the project per the requirements. Lastly, I am still not completely confident with CSS, so making the project look how it does in my mind is going to be an adventure to Mt. Doom.

### Opportunities:

This project will allow me to practice all the the React syntax and logic that I have learned in the last two weeks, and give me a concrete example of how far I have come. It will also give me the opportunity to learn some new things that I haven't learned yet.

### Threats:

I get hung up with a lot of the React errors and get frustrated, causing me to lose confidence in myself and what I know is the correct way to impliment something. I know I am going to encounter these errors, so I am going to have to keep this in mind and ask for help if I really fall down into the pit of dispair.
