ScrollToHash is a React component that lets you go to another page inside your app and automatically scroll to a given section using a hash in the url. This solves the issue of using the [react-router-hash-link](https://www.npmjs.com/package/react-router-hash-link) with React Router v6+.


# Usage

You just have to place the component inside your application like this:

```
function App() {
  return (
    <div className="App">
      <ScrollToHash />
      <Header></Header>
      <main></main>
      <Footer></Footer>
    </div>
  );
}
```

