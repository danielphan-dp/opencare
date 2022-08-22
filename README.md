### OpenCare (Front-end)

Production Web App - [OpenCare - 147.182.185.143](http://147.182.185.143/)

**Source**

Front-end (this repo) - [https://github.com/danielphan-dp/opencare](`https://github.com/danielphan-dp/opencare`)

Back-end - [https://github.com/danielphan-dp/opencare-be](`https://github.com/danielphan-dp/opencare-be`)

**Instructions**

1. Clone the repo (or download source code): `git clone <repo-url>`.
2. Change directory to repo's root directory: `cd <path-to-root-of-repo>`.
3. Create `.env.local` file in root directory and add the following content:
    ````
    # The three lines below are the content of the file '.env.local'.
    NEXT_PUBLIC_API=/api
    API=http://localhost:8000/api
    SKIP_PREFLIGHT_CHECK=true
    ````
4. Run the command `npm install` in your terminal from the root.

5. View the web app in dev mode: `npm run dev`.

6. (Optional) Suggested Installation Commands.
    ````
    mkdir opencare
    cd opencare
    git clone https://github.com/danielphan-dp/opencare
    git clone https://github.com/danielphan-dp/opencare-be
    ````

**Usage**

Documentation in progress...
