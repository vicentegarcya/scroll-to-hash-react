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

# License

MIT License

Copyright (c) 2023 Vicente García Ayllón

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
