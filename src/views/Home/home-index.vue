<template>
<NavComponent />
<div class="container mx-auto px-4 py-2">
    <div class="w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[75vh] mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg object-contain h-[35vh] md:h-[60vh] lg:h-[55vh] w-full" src="../../../public/komyut-logo.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    K<span class="text-blue-600 dark:text-blue-500">omyut</span>
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                K<span class="text-blue-600 dark:text-blue-500">omyut </span> allows commuters to track bus locations and and estimated arrival times providing a more flexible time management.
            </p>
            <router-link to="/register" v-if="!username" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Register
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </router-link>
            <h1 v-if="username" class="text-3xl font-semibold text-gray-800 mb-6">
        Welcome, {{ username }}
    </h1>
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
    getDoc,
    setDoc
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
        async listenForAuthChanges() {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const db = getFirestore();
                    const userDocRef = doc(db, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    if (userDoc.exists()) {
                        this.username = userDoc.data().username;
                    } else {
                        if (user.providerData[0].providerId === 'google.com') {
                            console.log("Logged in with Google account!");
                            const googleUsername = user.displayName || "Guest";
                            await setDoc(userDocRef, {
                                username: googleUsername,
                                email: user.email,
                            });

                            this.username = googleUsername;
                        } else {
                            console.log("No such user document!");
                            this.username = null;
                        }
                    }
                } else {
                    this.username = null;
                }
            });
        },
    }
};
</script>
