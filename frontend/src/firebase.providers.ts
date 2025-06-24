// firebase.providers.ts
import { importProvidersFrom } from "@angular/core";
import { provideFirebaseApp, initializeApp, getApp } from "@angular/fire/app";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import {
  provideAnalytics,
  getAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from "@angular/fire/analytics";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { environment } from "./environments/environment";

export const firebaseProviders = [
  provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
  provideAuth(() => getAuth(getApp())),
  provideFirestore(() => getFirestore()),
  provideAnalytics(() => getAnalytics()),
  provideStorage(() => getStorage()),
  ScreenTrackingService,
  UserTrackingService,
];
