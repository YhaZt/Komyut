<template>
<NavComponent />
<div class="container mx-auto px-4 py-2">
    <div class=" bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div id="map" class="w-full h-[70vh] sm:h-[60vh] md:h-[80vh] lg:h-[90vh] xl:h-[75vh]"></div>
    </div>
</div>
<div class="mt-4 flex space-x-4 ml-10">
    <button @click="viewVehicle = true" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Vehicle
    </button>
    <button @click="setLocation = true" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Set Location
    </button>
</div>
<div v-if="viewVehicle" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white dark:bg-gray-800 border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4">Vehicle</h2>
        <p class="mb-4">Number of Bus.</p>
        <p class="mb-4">En route.</p>
        <p class="mb-4">Calapan Terminal.</p>
        <p class="mb-4">Victoria Terminal.</p>
        <button @click="viewVehicle = false" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Close
        </button>
    </div>
</div>
<div v-if="setLocation" class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white dark:bg-gray-800 border border-gray-300 rounded-lg shadow-lg p-6">
        <h2 class="text-xl font-bold mb-4">Location</h2>
        <p class="mb-4">Your Position.</p>
        <p class="mb-4">Destination.</p>
        <p class="mb-4">Estimated Distance.</p>
        <p class="mb-4">Estimated Time.</p>
        <button @click="setLocation = false" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Close
        </button>
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
            viewVehicle: false,
            setLocation: false
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
<style>
#map {
    z-index: 1;
}
</style>