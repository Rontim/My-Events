import { createAsyncThunk } from "@reduxjs/toolkit";


interface registerUserProps {
  email: string;
  username: string;
  password: string;
  re_password: string;
  first_name: string;
  last_name: string;
  address: string;
  contacts: string;
}

export const registerUser = createAsyncThunk(
  "user/register",
  async (
    {
      email,
      username,
      password,
      re_password,
      first_name,
      last_name,
      address,
      contacts,
    }: registerUserProps,
    thunkAPI
  ) => {
    try {
      const body = JSON.stringify({
        email,
        username,
        first_name,
        last_name,
        password,
        re_password,
        address,
        contacts,
      });
      console.log(body);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/api/users/`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body,
        }
      );

      if (res.status == 201) {
        return res.status;
      } else {
        return thunkAPI.rejectWithValue(await res.json())
      }
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

// export const loaduser = createAsyncThunk("user/load", async (_, thunkAPI) => {
//   if (typeof window !== "undefined") {
//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/api/users/me/`,
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             Authorization: `JWT ${localStorage.getItem("access")}`,
//           },
//         }
//       );

//       const data = await res.json();

//       if (res.status === 200) {
//         return data;
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (err: any) {
//       return thunkAPI.rejectWithValue(err.response.data);
//     }
//   }
// });

// export const login = createAsyncThunk(
//   "user/login",
//   async ({ email, password }: { email: string, password: string }, thunkAPI) => {
//     const body = JSON.stringify({ email, password });

//     try {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/auth/jwt/create/`,
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body,
//         }
//       );

//       const data = await res.json();

//       if (res.status === 200) {
//         const token = data.access;
//         localStorage.setItem("access", token);

//         console.log(data);

//         const { dispatch } = thunkAPI;

//         dispatch(loaduser());

//         return res.status;
//       } else {
//         console.log(data);
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

// export const checkAuth = createAsyncThunk(
//   "user/verify",
//   async (_, thunkAPI) => {
//     if (typeof window !== "undefined") {
//       if (localStorage.getItem("access")) {
//         const body = JSON.stringify({ token: localStorage.getItem("access") });

//         try {
//           const res = await fetch(
//             `${process.env.NEXT_PUBLIC_DJANGO_BASE_URL}/auth/jwt/verify/`,
//             {
//               method: "POST",
//               body,
//               headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//               },
//             }
//           );

//           if (res.status === 200) {
//             const { dispatch } = thunkAPI;
//             dispatch(loaduser());
//           }
//         } catch (err: any) {
//           console.log(err.response.data);
//           return thunkAPI.rejectWithValue(err.response.data);
//         }
//       } else {
//         return thunkAPI.rejectWithValue("No access token");
//       }
//     }
//   }
// );
