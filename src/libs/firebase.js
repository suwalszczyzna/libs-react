import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(config);
const db = firebase.firestore();

export const getLinks = async (lastItem) => {
  const ref = lastItem
    ? db
        .collection('links')
        .orderBy('createdAt', 'desc')
        .startAfter(lastItem)
        .limit(15)
    : db.collection('links').orderBy('createdAt', 'desc').limit(15);
  return await ref.get();
};

export const getTags = async () => {
  const ref = db.collection('tags').orderBy('name');
  return await ref.get();
};

export const getTagById = async (tagId) => {
  const ref = db.collection('tags').doc(tagId);
  return await ref.get();
};

export const createTag = async (data) => {
  return await db.collection('tags').add(data);
};
