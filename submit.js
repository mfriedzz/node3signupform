

// <form method="post" action="/formsubmit">
//  <input name="email" type="email">
//  <input type="submit">
// </form>


form (name="input", action="/formsubmit", method="post")
  key email
    input(type="email", name="email")
    input(type="submit", value="Submit")

  // key Password
  // 	input(type="password", name="pswd")

 	// input(type="submit", value="Submit")

