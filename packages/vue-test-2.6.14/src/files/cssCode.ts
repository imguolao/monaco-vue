export default `/* css code */
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  /* test */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*::-webkit-scrollbar {
  display: none;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
}

[type=button]{
  -webkit-appearance: none;
}

.full-width {
  width: 100%;
}
.full-height {
  height: 100%;
}
.full-size {
  width: 100%;
  height: 100%;
}

.ql-editor a {
  color: rgba(255, 255, 255, 0.20);
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
  text-decoration: none;
}
.ql-editor ul, .ql-editor li, .ql-editor ol {
  margin-left: 16px;
}
.ql-editor object {
  color: #d32f2f;
}
.ql-editor blockquote {
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 16px;
  padding-bottom: 8px;
}
.ql-editor .ql-align-center {
  text-align: center;
}
.ql-editor .ql-align-justify {
  text-align: justify;
}
.ql-editor .ql-align-right {
  text-align: right;
}
.ql-editor a:hover {
  text-decoration: underline;
}
`;
