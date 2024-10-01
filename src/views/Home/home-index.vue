<template>
<NavComponent />
<div class="container mx-auto px-4 py-8">
    <h1 v-if="username" class="text-3xl font-semibold text-gray-800 mb-6">
        Welcome, {{ username }}
    </h1>
    <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg object-cover h-48 w-full" src="https://api.placid.app/u/qsraj?title[text]=I%20am%20a%20dynamic%20Image%21" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Komyut
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Oriental Mindoro System use for Vodactco routes tracking.
            </p>
            <router-link to="/register" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Register
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </router-link>
        </div>
    </div>
</div>
</template>

  
<script>
import NavComponent from '../Include/nav.vue';
import {
    auth,
    signOut,
    onAuthStateChanged
} from "@/firebaseConfig";
import {
    getFirestore,
    doc,
    getDoc
} from "firebase/firestore";

export default {
    components: {
        NavComponent,
    },
    data() {
        return {
            username: null,
        };
    },
    created() {
        this.listenForAuthChanges();
    },
    methods: {
        listenForAuthChanges() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const db = getFirestore();
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        this.username = userDoc.data().username;
                    } else {
                        console.log("No such user document!");
                        this.username = null;
                    }
                } else {
                    this.username = null;
                }
            });
        },
    }
};
</script>

