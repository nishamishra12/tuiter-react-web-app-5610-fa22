import { createSlice } from "@reduxjs/toolkit";

const initialProfile =
{
  firstName: 'Nisha',
  lastName: 'Mishra',
  handle: '@mishra_ni',
  profilePicture: '/images/belle.jpg',
  bannerPicture: '/images/mumbai.jpg',
  bio: `Belle is a fictional character in Disney's animated film Beauty and the Beast. Voiced by actress and singer Paige O'Hara.`,
  website: 'youtube.com/webdevtv',
  location: 'Boston, MA', dateOfBirth: '11/12/1996', dateJoined: '3/2009',
  followingCount: 340, followersCount: 223,
  tuits: "6,114"
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialProfile,
  reducers: {
    saveProfile(state, action) {
      return action.payload
    }
  }
});

export const { saveProfile } = profileSlice.actions
export default profileSlice.reducer;