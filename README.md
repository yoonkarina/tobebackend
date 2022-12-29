# Backend Renewal Refactoring

## Folder Structure

```bash
├── src
│   ├── configs   # 설정 폴더
│   │   └── env.config.js
│   ├── controllers   # controller 폴더
│   ├── helpers
│   │   └── error.helpers.js
│   ├── middlewares  # middleware 폴더
│   │   └── errorHandler.middleware.js
│   ├── models
│   ├── routes   # route 폴더
│   │   ├── docs.route.js
│   │   └── index.route.js
│   ├── swagger   # swagger 문서를 위한 폴더
│   │   ├── components
│   │   ├── paths
│   │   └── swagger.yaml
│   └── app.js    # app.js
├── test   # TDD를 위한 테스트 폴더
│   └── dataset.py
├── .babelrc   # bael 설정
├── .eslintrc   # eslint설정
├── .prettierrc   # 프리티어 설정
├── .gitignore
├── .env   # 설정파일
└── package.json
```
test
