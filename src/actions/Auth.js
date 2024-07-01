"use server";

import { cookies } from "next/headers"

export async function Login(email, password) {
    console.log("Login function called.");
    console.log("Email:", email);
    console.log("Password:", password);
  
    let tokenCookie = cookies().get("auth");
    if (tokenCookie) {
      tokenCookie = tokenCookie.value;
    }
  
    // Set cookies with an expiration date
    const cookieOptions = { path: '/', httpOnly: true, secure: true, maxAge: 60 * 60 * 24 }; // 1 day expiry
  
    cookies().set("email", email, cookieOptions);
    cookies().set("password", password, cookieOptions);
  
    const emailCookie = cookies().get("email");
    const passwordCookie = cookies().get("password");
  
    console.log("Email Cookie:", emailCookie);
    console.log("Password Cookie:", passwordCookie);
  
    return { username: email, password };
  }

export async function protectedApiCall () {
    let tokenCookie =  cookies().get("auth");

    if(tokenCookie) {
        tokenCookie = tokenCookie.value
    } else {
        tokenCookie = "";
    }

    // make fetch request using the token value in authorization
    return {"ismail" : "joly bacha"};
}