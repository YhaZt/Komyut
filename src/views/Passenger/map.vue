<template>
<NavComponent />
<div class="container mx-auto px-4 py-8">
    <h1 v-if="username" class="text-3xl font-semibold text-gray-800 mb-6">
        Welcome, {{ username }}
    </h1>
    <div class="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div id="map" style="height: 500px;"></div>
    </div>
</div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
    },
    mounted() {
        const map = L.map("map").setView([13.2081, 121.1682], 10); 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);
        L.marker([13.2081, 121.1682]).addTo(map)
            .bindPopup("Welcome to Komyut!")
            .openPopup();
    },
};
</script>
