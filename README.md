## 놀라운 사자처럼

멋쟁이 사자처럼 9기 홍보용 이벤트 웹

#### Development tool

> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/MaterialUI-0081CB?style=flat-square&logo=Material-UI&logoColor=white"/>

#### Result

- Authenticate

![auth](https://user-images.githubusercontent.com/26461307/104828851-db336900-58b0-11eb-803f-1753fd2b7edc.gif)

- Auth to About

![authToAbout](https://user-images.githubusercontent.com/26461307/104828853-de2e5980-58b0-11eb-811e-751c65604262.gif)

- Social Login

![socialLogin](https://user-images.githubusercontent.com/26461307/104828856-e090b380-58b0-11eb-8cfc-3dc7a8acc0f8.gif)

- Quiz

![quizSelectSlide](https://user-images.githubusercontent.com/26461307/104828859-e25a7700-58b0-11eb-8318-e46fc33357d9.gif)

- Grading quiz - wrong

![checkAnsWrong](https://user-images.githubusercontent.com/26461307/104828861-e5556780-58b0-11eb-8a59-76abfe803820.gif)

- Quiz to About

![quizToAbout](https://user-images.githubusercontent.com/26461307/104828862-e7b7c180-58b0-11eb-9e33-24c7799ed463.gif)

- Grading quiz - correct

![checkAnsCor](https://user-images.githubusercontent.com/26461307/104828864-ea1a1b80-58b0-11eb-8226-4720b948fad0.gif)

- When Corrected user logged in

![waiting](https://user-images.githubusercontent.com/26461307/104828865-ec7c7580-58b0-11eb-9ef0-ce79609dac4c.gif)

#### Firebase

-   Facebook social login

![스크린샷 2021-01-06 오전 12 43 06](https://user-images.githubusercontent.com/26461307/103685157-13dd6380-4fd0-11eb-8936-1e4cb75e9683.png)

![스크린샷 2021-01-06 오전 12 45 02](https://user-images.githubusercontent.com/26461307/103685150-1213a000-4fd0-11eb-86f0-9fdd06d08ace.png)

- FirebaseError: Missing or insufficient permissions.
    - Fibase Cloud Firestore 규칙 > allow read, write false to true

#### Material UI

-   Tsconfig.json setting

```json
{
    "compilerOptions": {
        "lib": ["es6", "dom"],
        "noImplicitAny": true,
        "noImplicitThis": true,
        "strictNullChecks": true
    }
}
```

-   Basic Usage

```tsx
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
...

<Input id="standard-basic" type="email" value={state} onChange={onChange}></Input>
<Button onClick={onClickSocial} className="btn">something</Button>
```

```scss
// custom
.btn {
    color: #youwant;
}
```

-   Create Theme

```tsx
import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: "#c0392b",
            main: "#F79E1C",
            dark: "#141310",
            contrastText: "#c0392b",
        },
    },
});
```

-   Using Theme

```tsx
import { ThemeProvider } from "@material-ui/core";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="app">
                <AppRouter />
            </div>
        </ThemeProvider>
    );
}
```

#### FontAwesome Icon

-   Install

```terminal
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

// in my case
npm install --save @fortawesome/free-brands-svg-icons
```

-   Usage

```tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

<FontAwesomeIcon icon={faGoogle} size="4x" className="social__icon" />;
```

#### Using image in React TypeScript

```ts
// new file image.d.ts
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
```

```json
// add in tsconfig.json
{
    "compilerOptions": {
        "typeRoots": ["node_modules/@types", "src/types"],
        ...
    }
}
```

#### Transition group

-   with Hashrouter
    -   Hashrouter는 location key 값이 없어 작동되지 않는 것이였음
    -   `location.pathname`을 key 값으로 사용 시 작동

```tsx
const TransitionRouter = withRouter(({ location }) => (
    <TransitionGroup className="app">
        <CSSTransition
            key={location.pathname}
            classNames="slide"
            timeout={1200}
        >
            <Switch location={location}>
                <Route exact path="/">
                    <Quiz />
                </Route>
                ...
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));
```

-   different animation element in CSSTranstion

    -   JSX, TSX상 추가적인 CSSTransition을 생성하는 것이 아닌 CSS, SCSS상 하드코딩으로 가능하단 것을 알게 됨

```scss
.slide-enter,
.slide-exit {
    transition: all 800ms ease-in-out;

    .background {
        transition: transform 800ms ease-in-out 200ms;
    }
}

.slide-exit-active {
    transform: translateX(100vw);

    .background {
        transform: translateX(-200vw);
    }
}
```
