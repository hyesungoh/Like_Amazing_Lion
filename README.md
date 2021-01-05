## 놀라운 사자처럼

멋쟁이 사자처럼 9기 홍보용 이벤트 웹

#### Development tool

> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=Firebase&logoColor=black"/> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/> <img src="https://img.shields.io/badge/Sass-0081CB?style=flat-square&logo=Material-UI&logoColor=white"/>

#### Firebase

-   Facebook social login

![스크린샷 2021-01-06 오전 12 43 06](https://user-images.githubusercontent.com/26461307/103685157-13dd6380-4fd0-11eb-8936-1e4cb75e9683.png)

![스크린샷 2021-01-06 오전 12 45 02](https://user-images.githubusercontent.com/26461307/103685150-1213a000-4fd0-11eb-86f0-9fdd06d08ace.png)

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
