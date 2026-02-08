# **Automation QA - Demo Purposes**

### Platform used: https://opensource-demo.orangehrmlive.com/

- Automation framework used: Playwright
- Language: TS

## **To run use code below:**

```sh
npm i && npm test
```

Building docker
```sh
docker build -t playwright-tests:latest .
```
Running tests in docker
```sh
docker build -t playwright-tests:latest . && docker run -v $(pwd)/test-results:/app/test-results playwright-tests:latest
```

## E2E Flows

## Things TODO

- [x] add dotenv to remove from main file
- [x] added functionality to run tests on docker
- [ ] update project dependencies with setup files
- [ ] fail currently failing test
- [ ] add more tests
